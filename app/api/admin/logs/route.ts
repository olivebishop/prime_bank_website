import { NextResponse } from 'next/server'
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

    // Get admin logs with error handling
    let logs: any[] = []
    try {
      // Try to query admin logs directly
      logs = await db.$queryRaw`
        SELECT * FROM admin_logs 
        ORDER BY "createdAt" DESC 
        LIMIT 100
      `
    } catch (error) {
      console.error('Admin logs table not found or accessible:', error)
      // Return empty array if table doesn't exist
      logs = []
    }

    return NextResponse.json(logs)
  } catch (error) {
    console.error('Error fetching admin logs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}