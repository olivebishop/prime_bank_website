import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { UserProfile } from "@clerk/nextjs"
import { IconSettings } from "@tabler/icons-react"

export default async function SettingsPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  const dbUser = await db.user.findUnique({
    where: { clerkId: user.id },
    include: {
      account: {
        select: {
          id: true,
          currency: true,
          country: true,
          status: true
        }
      }
    }
  })

  if (!dbUser) {
    redirect("/sign-in")
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" userRole={dbUser.role} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                  <IconSettings className="h-8 w-8" />
                  Account Settings
                </h1>
                <p className="text-muted-foreground">
                  Manage your profile, security, and account preferences
                </p>
              </div>

              <div className="flex justify-center">
                <UserProfile
                  appearance={{
                    elements: {
                      rootBox: "w-full max-w-4xl",
                      card: "shadow-none border",
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}