import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export async function GET() {
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

    // Get all users with their accounts
    const users = await db.user.findMany({
      include: {
        account: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    // Get user details for logging
    const targetUser = await db.user.findUnique({
      where: { id: userId }
    })

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Delete user (cascade will delete account and transactions)
    await db.user.delete({
      where: { id: userId }
    })

    // Log admin action with error handling
    try {
      await db.$executeRaw`
        INSERT INTO admin_logs (id, "adminId", "adminName", action, "targetUserId", "targetUserEmail", details, "ipAddress", "userAgent", "createdAt")
        VALUES (${crypto.randomUUID()}, ${user.id}, ${user.firstName + ' ' + user.lastName}, 'DELETE_USER', ${userId}, ${targetUser.email}, ${JSON.stringify({ deletedUser: targetUser.email })}, ${request.headers.get('x-forwarded-for') || 'unknown'}, ${request.headers.get('user-agent') || 'unknown'}, ${new Date()})
      `
    } catch (error) {
      console.error('Failed to log admin action:', error)
      // Continue without logging if table doesn't exist
    }

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}