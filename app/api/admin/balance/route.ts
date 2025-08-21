import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    const dbUser = await db.user.findUnique({
      where: { clerkId: user.id }
    })

    if (dbUser?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { userId, amount, description } = await request.json()

    if (!userId || amount === undefined) {
      return NextResponse.json({ error: 'User ID and amount required' }, { status: 400 })
    }

    // Get user account
    const account = await db.account.findUnique({
      where: { userId },
      include: { user: true }
    })

    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    const numericAmount = parseFloat(amount.toString())
    const newBalance = parseFloat(account.balance.toString()) + numericAmount

    // Update account balance
    const updatedAccount = await db.account.update({
      where: { userId },
      data: { balance: newBalance }
    })

    // Create transaction record
    await db.transaction.create({
      data: {
        amount: Math.abs(numericAmount),
        type: numericAmount > 0 ? 'ADMIN_CREDIT' : 'ADMIN_DEBIT',
        description: description || `Admin ${numericAmount > 0 ? 'credit' : 'debit'}`,
        receiverId: numericAmount > 0 ? account.id : undefined,
        senderId: numericAmount < 0 ? account.id : undefined,
        adminId: user.id,
        adminName: user.firstName + ' ' + user.lastName,
        reference: `ADM-${Date.now()}`
      }
    })

    // Log admin action with error handling
    try {
      await db.$executeRaw`
        INSERT INTO admin_logs (id, "adminId", "adminName", action, "targetUserId", "targetUserEmail", details, "ipAddress", "userAgent", "createdAt")
        VALUES (${crypto.randomUUID()}, ${user.id}, ${user.firstName + ' ' + user.lastName}, 'UPDATE_BALANCE', ${userId}, ${account.user.email}, ${JSON.stringify({
          previousBalance: account.balance.toString(),
          newBalance: newBalance.toString(),
          amount: numericAmount,
          description
        })}, ${request.headers.get('x-forwarded-for') || 'unknown'}, ${request.headers.get('user-agent') || 'unknown'}, ${new Date()})
      `
    } catch (error) {
      console.error('Failed to log admin action:', error)
      // Continue without logging if table doesn't exist
    }

    return NextResponse.json({
      message: 'Balance updated successfully',
      newBalance: updatedAccount.balance
    })
  } catch (error) {
    console.error('Error updating balance:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}