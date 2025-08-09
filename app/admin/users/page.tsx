import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { DashboardLayout } from "@/components/dashboard-layout"
import { UserManagement } from "@/components/user-management"

export default async function AdminUsersPage() {
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
      <UserManagement />
    </DashboardLayout>
  )
}