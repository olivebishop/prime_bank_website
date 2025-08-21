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
import { formatCurrency } from "@/lib/account-utils"
import { IconHistory } from "@tabler/icons-react"

export default async function TransactionsPage() {
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
          currency: true
        }
      }
    }
  })

  if (!dbUser) {
    redirect("/sign-in")
  }

  // Get all transactions for the user
  const transactions = dbUser.account ? await db.transaction.findMany({
    where: {
      OR: [
        { senderId: dbUser.account.id },
        { receiverId: dbUser.account.id }
      ]
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: {
      id: true,
      amount: true,
      type: true,
      description: true,
      createdAt: true,
      adminName: true,
      reference: true,
      status: true
    }
  }) : []

  const currency = dbUser.account?.currency as 'USD' | 'KES' || 'USD'

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
                  <IconHistory className="h-8 w-8" />
                  Transaction History
                </h1>
                <p className="text-muted-foreground">
                  View all your account transactions
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>
                    Complete history of your account activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {transactions.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No transactions found
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {transactions.map((transaction: any) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={
                                transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT' 
                                  ? 'default' 
                                  : 'secondary'
                              }>
                                {transaction.type.replace('_', ' ')}
                              </Badge>
                              <Badge variant="outline">
                                {transaction.status}
                              </Badge>
                              {transaction.adminName && (
                                <span className="text-xs text-muted-foreground">
                                  by {transaction.adminName}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">
                              {transaction.description || 'No description'}
                            </p>
                            {transaction.reference && (
                              <p className="text-xs text-muted-foreground font-mono">
                                Ref: {transaction.reference}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground">
                              {new Date(transaction.createdAt).toLocaleDateString()} at{' '}
                              {new Date(transaction.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold text-lg ${
                              transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT'
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}>
                              {transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT' ? '+' : '-'}
                              {formatCurrency(parseFloat(transaction.amount.toString()), currency)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}