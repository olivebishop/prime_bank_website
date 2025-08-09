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

  // Ensure user exists in database
  const dbUser = await ensureUserExists(user as any)

  // Get recent transactions separately
  const recentTransactions = dbUser?.account ? await db.transaction.findMany({
    where: {
      OR: [
        { senderId: dbUser.account.id },
        { receiverId: dbUser.account.id }
      ]
    },
    orderBy: { createdAt: 'desc' },
    take: 5
  }) : []

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