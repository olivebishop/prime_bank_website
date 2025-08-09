import { NextResponse } from "next/server"
import { currentUser } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const user = await currentUser()

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    // Get user from database
    const dbUser = await db.user.findUnique({
      where: { clerkId: user.id },
      include: {
        account: {
          include: {
            sentTransactions: {
              orderBy: { createdAt: 'desc' },
              take: 20
            },
            receivedTransactions: {
              orderBy: { createdAt: 'desc' },
              take: 20
            }
          }
        }
      }
    })

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Combine and sort transactions
    const allTransactions = dbUser.account ? [
      ...dbUser.account.sentTransactions,
      ...dbUser.account.receivedTransactions
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) : []

    return NextResponse.json({
      user: {
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role
      },
      account: dbUser.account,
      transactions: allTransactions
    })

  } catch (error) {
    console.error("Error fetching account:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}