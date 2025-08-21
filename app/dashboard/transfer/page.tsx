import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/account-utils"
import { IconTransfer } from "@tabler/icons-react"

export default async function TransferPage() {
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
          balance: true,
          accountNumber: true,
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

  const account = dbUser.account
  const balance = account ? parseFloat(account.balance.toString()) : 0
  const currency = account?.currency as 'GBP' | 'KES' || 'GBP'

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
                  <IconTransfer className="h-8 w-8" />
                  Transfer Money
                </h1>
                <p className="text-muted-foreground">
                  Send money to other accounts
                </p>
              </div>

              {!account ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Account Setup Required</CardTitle>
                    <CardDescription>
                      Your account is being set up. Please contact support if this persists.
                    </CardDescription>
                  </CardHeader>
                </Card>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Account</CardTitle>
                      <CardDescription>
                        Current account information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                        <p className="text-lg font-mono font-semibold">{account.accountNumber}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Available Balance</label>
                        <p className="text-2xl font-bold text-green-600">
                          {formatCurrency(balance, currency)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Transfer Feature</CardTitle>
                      <CardDescription>
                        Coming Soon
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <IconTransfer className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Transfer Feature Coming Soon</h3>
                        <p className="text-muted-foreground">
                          We are working on implementing secure money transfers. 
                          This feature will be available in a future update.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}