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
import { Badge } from "@/components/ui/badge"
import { formatCurrency, getSortCode } from "@/lib/account-utils"
import { IconCreditCard, IconWallet } from "@tabler/icons-react"

export default async function AccountPage() {
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
          status: true,
          accountType: true,
          createdAt: true
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
  const sortCode = account ? getSortCode(account.country as 'UK' | 'KENYA') : ''

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
                <h1 className="text-3xl font-bold tracking-tight">Account Details</h1>
                <p className="text-muted-foreground">
                  View your account information and settings
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
                      <CardTitle className="flex items-center gap-2">
                        <IconWallet className="h-5 w-5" />
                        Account Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                        <p className="text-lg font-mono font-semibold">{account.accountNumber}</p>
                      </div>

                      {sortCode && (
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Sort Code</label>
                          <p className="text-lg font-mono font-semibold">{sortCode}</p>
                        </div>
                      )}

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Type</label>
                        <p className="text-lg">{account.accountType}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Currency</label>
                        <p className="text-lg">{account.currency}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Country</label>
                        <p className="text-lg">{account.country}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Status</label>
                        <Badge variant={account.status === 'ACTIVE' ? 'default' : 'secondary'}>
                          {account.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconCreditCard className="h-5 w-5" />
                        Balance Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Available Balance</label>
                        <p className="text-3xl font-bold text-green-600">
                          {formatCurrency(balance, currency)}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Opened</label>
                        <p className="text-lg">
                          {new Date(account.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Account Holder</label>
                        <p className="text-lg">{dbUser.name || 'Not provided'}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-lg">{dbUser.email}</p>
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