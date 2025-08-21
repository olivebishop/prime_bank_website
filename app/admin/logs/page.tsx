import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardLayout } from "@/components/dashboard-layout"
import { AdminLogs } from "@/components/admin-logs"

export default async function AdminLogsPage() {
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

  return (
    <DashboardLayout userRole="ADMIN">
      <AdminLogs />
    </DashboardLayout>
  )
}