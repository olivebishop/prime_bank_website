import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardContent } from "@/components/dashboard-content"
import { ensureUserExists } from "@/lib/user-utils"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Ensure user exists in database - removed 'as any' and simplified the type casting
  const dbUser = await ensureUserExists({
    ...user,
    fullName: user.fullName ?? undefined
  } as Parameters<typeof ensureUserExists>[0])

  // Get recent transactions separately
  const rawTransactions = dbUser?.account ? await db.transaction.findMany({
    where: {
      OR: [
        { senderId: dbUser.account.id },
        { receiverId: dbUser.account.id }
      ]
    },
    orderBy: { createdAt: 'desc' },
    take: 5
  }) : []

  // Convert transactions to proper format
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recentTransactions = rawTransactions.map((t: any) => ({
    id: t.id,
    amount: Number(t.amount),
    type: t.type,
    description: t.description,
    createdAt: t.createdAt,
    adminName: t.adminName
  }))

  return (
    <DashboardLayout userRole={dbUser.role}>
      <DashboardContent
        user={dbUser}
        account={dbUser.account}
        recentTransactions={recentTransactions}
      />
    </DashboardLayout>
  )
}