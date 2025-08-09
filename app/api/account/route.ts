// app/api/account/route.ts
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    })

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const account = await prisma.account.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        }
      }
    })

    if (!account) {
      // Create account if it doesn't exist
      const newAccount = await prisma.account.create({
        data: {
          userId: session.user.id,
          balance: 0.00
        }
      })

      return NextResponse.json({
        account: newAccount,
        transactions: []
      })
    }

    // Get recent transactions
    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { senderId: account.id },
          { receiverId: account.id }
        ]
      },
      include: {
        sender: {
          include: {
            user: {
              select: { name: true }
            }
          }
        },
        receiver: {
          include: {
            user: {
              select: { name: true }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    })

    return NextResponse.json({
      account,
      transactions
    })

  } catch (error) {
    console.error("Error fetching account:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}