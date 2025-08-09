import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/lib/db'
import { generateAccountNumber } from '@/lib/account-utils'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.text()

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  const eventType = evt.type

  if (eventType === 'user.created') {
    try {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data

      // Determine country based on email domain or default to UK
      const email = email_addresses[0]?.email_address || ''
      const country = email.includes('.ke') || email.includes('kenya') ? 'KENYA' : 'UK'
      const currency = country === 'UK' ? 'GBP' : 'KES'

      // Create user in database
      const user = await db.user.create({
        data: {
          clerkId: id,
          email: email,
          name: `${first_name || ''} ${last_name || ''}`.trim() || null,
          image: image_url,
        },
      })

      // Create account for the user
      const accountNumber = generateAccountNumber(country)
      
      await db.account.create({
        data: {
          userId: user.id,
          accountNumber,
          balance: 0,
        },
      })

      console.log(`User created: ${email} with account: ${accountNumber}`)
    } catch (error) {
      console.error('Error creating user:', error)
      return new Response('Error creating user', { status: 500 })
    }
  }

  if (eventType === 'user.updated') {
    try {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data

      await db.user.update({
        where: { clerkId: id },
        data: {
          email: email_addresses[0]?.email_address,
          name: `${first_name || ''} ${last_name || ''}`.trim() || null,
          image: image_url,
        },
      })
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  if (eventType === 'user.deleted') {
    try {
      const { id } = evt.data

      await db.user.delete({
        where: { clerkId: id },
      })
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return new Response('', { status: 200 })
}