import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AdminDashboardContent } from "@/components/admin-dashboard-content"

export default async function AdminPage() {
  const user = await currentUser()
  
  if (!user) {
    redirect("/sign-in")
  }

  const dbUser = await db.user.findUnique({
    where: { clerkId: user.id }
  })

  if (dbUser?.role !== "ADMIN") {
    redirect("/dashboard")
  }

  // Get admin statistics with error handling
  let totalUsers = 0
  let totalBalance: number = 0
  let recentTransactions: any[] = []
  let recentLogs: any[] = []

  try {
    const results = await Promise.allSettled([
      db.user.count(),
      db.account.aggregate({
        _sum: {
          balance: true
        }
      }),
      db.transaction.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: {
          sender: {
            include: { user: true }
          },
          receiver: {
            include: { user: true }
          }
        }
      }),
      // Try to get admin logs, but handle if the table doesn't exist
      db.$queryRaw`SELECT * FROM admin_logs ORDER BY "createdAt" DESC LIMIT 5`.catch(() => [])
    ])

    if (results[0].status === 'fulfilled') totalUsers = results[0].value
    if (results[1].status === 'fulfilled') totalBalance = Number(results[1].value._sum.balance) || 0
    if (results[2].status === 'fulfilled') recentTransactions = results[2].value
    if (results[3].status === 'fulfilled') recentLogs = (results[3].value as any[]) || []
  } catch (error) {
    console.error('Error fetching admin data:', error)
    // Continue with default values
  }

  return (
    <DashboardLayout userRole="ADMIN">
      <AdminDashboardContent 
        totalUsers={totalUsers}
        totalBalance={totalBalance}
        recentTransactions={recentTransactions}
        recentLogs={recentLogs}
      />
    </DashboardLayout>
  )
}