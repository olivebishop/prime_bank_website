import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    // Replace with your Clerk user ID and email
    const ADMIN_CLERK_ID = 'your-clerk-user-id' // Get this from Clerk dashboard
    const ADMIN_EMAIL = 'admin@primebank.com' // Replace with your admin email
    
    console.log('Creating admin user...')
    
    const admin = await prisma.user.upsert({
      where: { clerkId: ADMIN_CLERK_ID },
      update: { role: 'ADMIN' },
      create: {
        clerkId: ADMIN_CLERK_ID,
        email: ADMIN_EMAIL,
        name: 'Admin User',
        role: 'ADMIN'
      }
    })
    
    console.log('Admin user created/updated:', admin)
    
    // Create admin account if it doesn't exist
    const existingAccount = await prisma.account.findUnique({
      where: { userId: admin.id }
    })
    
    if (!existingAccount) {
      const account = await prisma.account.create({
        data: {
          userId: admin.id,
          accountNumber: 'PBADMIN001',
          currency: 'GBP',
          country: 'UK',
          balance: 0
        }
      })
      console.log('Admin account created:', account)
    }
    
  } catch (error) {
    console.error('Error creating admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()