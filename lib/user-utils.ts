import { db } from '@/lib/db'
import { generateAccountNumber } from '@/lib/account-utils'

interface ClerkUser {
  id: string
  emailAddresses: Array<{ emailAddress: string }>
  fullName?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
}

export async function ensureUserExists(clerkUser: ClerkUser) {
  try {
    // Check if user exists
    let dbUser = await db.user.findUnique({
      where: { clerkId: clerkUser.id },
      include: { account: true }
    })

    if (!dbUser) {
      const email = clerkUser.emailAddresses[0]?.emailAddress || ''
      const country = email.includes('.ke') || email.includes('kenya') ? 'KENYA' : 'UK'
      const accountNumber = generateAccountNumber(country)

      // Create user with account
      dbUser = await db.user.create({
        data: {
          clerkId: clerkUser.id,
          email: email,
          name: clerkUser.fullName || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null,
          image: clerkUser.imageUrl,
          account: {
            create: {
              accountNumber,
              balance: 0,
            }
          }
        },
        include: { account: true }
      })

      console.log(`Created user: ${email} with account: ${accountNumber}`)
    }

    return dbUser
  } catch (error) {
    console.error('Error ensuring user exists:', error)
    throw error
  }
}