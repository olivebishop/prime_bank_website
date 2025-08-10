import { NextRequest, NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - No user session" },
        { status: 401 }
      )
    }

    // Get user from database to check role
    const adminUser = await db.user.findUnique({
      where: { clerkId: userId }
    })

    if (!adminUser || adminUser.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized - Admin access required" },
        { status: 403 }
      )
    }

    const { targetUserId, amount, type, description } = await request.json()

    if (!targetUserId || !amount || !type) {
      return NextResponse.json(
        { error: "Missing required fields: targetUserId, amount, type" },
        { status: 400 }
      )
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: "Amount must be greater than 0" },
        { status: 400 }
      )
    }

    // Validate transaction type
    if (!["ADMIN_CREDIT", "ADMIN_DEBIT"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid transaction type. Must be ADMIN_CREDIT or ADMIN_DEBIT" },
        { status: 400 }
      )
    }

    // Find target user's account
    const account = await db.account.findUnique({
      where: { userId: targetUserId },
      include: { user: true }
    })

    if (!account) {
      return NextResponse.json(
        { error: "Target user account not found" },
        { status: 404 }
      )
    }

    // Calculate new balance
    const currentBalance = parseFloat(account.balance.toString())
    let newBalance: number

    if (type === "ADMIN_CREDIT") {
      newBalance = currentBalance + amount
    } else if (type === "ADMIN_DEBIT") {
      newBalance = currentBalance - amount
      if (newBalance < 0) {
        return NextResponse.json(
          { error: "Insufficient funds for debit operation" },
          { status: 400 }
        )
      }
    } else {
      return NextResponse.json(
        { error: "Invalid transaction type" },
        { status: 400 }
      )
    }

    // Perform transaction in a database transaction
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await db.$transaction(async (tx: any) => {
      // Update account balance
      const updatedAccount = await tx.account.update({
        where: { id: account.id },
        data: { balance: newBalance }
      })

      // Create transaction record
      const transaction = await tx.transaction.create({
        data: {
          amount: amount,
          type: type,
          description: description || `Admin ${type === "ADMIN_CREDIT" ? "credit" : "debit"} by ${adminUser.name || adminUser.email}`,
          receiverId: type === "ADMIN_CREDIT" ? account.id : undefined,
          senderId: type === "ADMIN_DEBIT" ? account.id : undefined,
          adminId: adminUser.id
        }
      })

      return { account: updatedAccount, transaction }
    })

    return NextResponse.json({
      success: true,
      message: `${type === "ADMIN_CREDIT" ? "Credit" : "Debit"} transaction completed successfully`,
      account: {
        id: result.account.id,
        accountNumber: result.account.accountNumber,
        balance: result.account.balance.toString(),
        userId: result.account.userId
      },
      transaction: {
        id: result.transaction.id,
        amount: result.transaction.amount.toString(),
        type: result.transaction.type,
        description: result.transaction.description,
        createdAt: result.transaction.createdAt
      }
    })

  } catch (error) {
    console.error("Error processing admin transaction:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}