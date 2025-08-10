import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user account with recent transactions
    const dbUser = await db.user.findUnique({
      where: { clerkId: user.id },
      include: {
        account: {
          include: {
            sentTransactions: {
              orderBy: { createdAt: 'desc' },
              take: 10
            },
            receivedTransactions: {
              orderBy: { createdAt: 'desc' },
              take: 10
            }
          }
        }
      }
    })

    if (!dbUser || !dbUser.account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    // Combine and sort transactions
    const allTransactions = [
      ...dbUser.account.sentTransactions,
      ...dbUser.account.receivedTransactions
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({
      user: {
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role
      },
      account: {
        id: dbUser.account.id,
        balance: dbUser.account.balance,
        accountNumber: dbUser.account.accountNumber,
        currency: dbUser.account.currency,
        country: dbUser.account.country,
        status: dbUser.account.status
      },
      recentTransactions: allTransactions.slice(0, 10)
    })
  } catch (error) {
    console.error('Error fetching account:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}