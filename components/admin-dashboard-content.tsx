"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/account-utils"
import { IconShield, IconUsers, IconWallet, IconHistory, IconTrendingUp } from "@tabler/icons-react"

interface Transaction {
  id: string
  amount: number | string  // Fixed: replaced 'any' with specific types
  type: string
  description: string | null
  createdAt: Date
  adminName: string | null
  sender?: {
    user: {
      email: string
    }
  } | null
  receiver?: {
    user: {
      email: string
    }
  } | null
}

interface AdminLog {
  id: string
  adminName: string
  action: string
  targetUserEmail: string | null
  createdAt: Date
}

interface AdminDashboardContentProps {
  totalUsers: number
  totalBalance: number | string  // Fixed: replaced 'any' with specific types
  recentTransactions: Transaction[]
  recentLogs: AdminLog[]
}

export function AdminDashboardContent({ 
  totalUsers, 
  totalBalance, 
  recentTransactions, 
  recentLogs 
}: AdminDashboardContentProps) {
  const balance = parseFloat(totalBalance.toString())

  return (
    <div className="px-4 lg:px-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <IconShield className="h-8 w-8" />
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Manage users, monitor transactions, and oversee system operations
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Users */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <IconUsers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Registered accounts
            </p>
          </CardContent>
        </Card>

        {/* Total Balance */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <IconWallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(balance, 'USD')}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all accounts
            </p>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <IconTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentTransactions.length}</div>
            <p className="text-xs text-muted-foreground">
              Recent transactions
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconHistory className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>
              Latest system transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentTransactions.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No recent transactions
              </p>
            ) : (
              <div className="space-y-4">
                {recentTransactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT' 
                            ? 'default' 
                            : 'secondary'
                        }>
                          {transaction.type.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {transaction.sender?.user.email || transaction.receiver?.user.email || 'System'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(transaction.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        {transaction.type === 'ADMIN_CREDIT' || transaction.type === 'DEPOSIT' ? '+' : '-'}
                        {formatCurrency(parseFloat(transaction.amount.toString()), 'USD')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Admin Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconShield className="h-5 w-5" />
              Admin Activity Logs
            </CardTitle>
            <CardDescription>
              Recent administrative actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentLogs.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No recent admin activity
              </p>
            ) : (
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div key={log.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">
                        {log.action.replace('_', ' ')}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(log.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      <span className="font-medium">{log.adminName}</span>
                      {log.targetUserEmail && (
                        <span className="text-muted-foreground"> → {log.targetUserEmail}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}