"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, getSortCode } from "@/lib/account-utils"
import { IconCreditCard, IconEye, IconEyeOff, IconTrendingUp, IconWallet } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Decimal } from "@prisma/client/runtime/library"

interface User {
  id: string
  name: string | null
  email: string
  role: 'USER' | 'ADMIN'
}

interface Account {
  id: string
  balance: number | string | Decimal // Explicitly include Decimal type
  accountNumber: string
  currency?: string
  country?: string
  status?: string
}

interface Transaction {
  id: string
  amount: number | string | Decimal // Include Decimal for transaction amounts too
  type: string
  description: string | null
  createdAt: Date
  adminName?: string | null
}

interface DashboardContentProps {
  user: User
  account: Account | null
  recentTransactions: Transaction[]
}

// Helper function to safely convert various number types to number
function toNumber(value: number | string | Decimal): number {
  if (typeof value === 'number') return value
  if (typeof value === 'string') return parseFloat(value)
  // Handle Prisma Decimal
  return Number(value.toString())
}

// Helper function to determine if transaction is a credit (increases balance)
function isCredit(transactionType: string): boolean {
  return ['ADMIN_CREDIT', 'DEPOSIT', 'TRANSFER'].includes(transactionType)
}

// Helper function to get transaction color
function getTransactionColor(transactionType: string): string {
  return isCredit(transactionType) ? 'text-green-600' : 'text-red-600'
}

export function DashboardContent({ user, account, recentTransactions }: DashboardContentProps) {
  const [showBalance, setShowBalance] = useState(true)

  if (!account) {
    return (
      <div className="px-4 lg:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Setup Required</CardTitle>
            <CardDescription>
              Your account is being set up. Please contact support if this persists.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  const balance = toNumber(account.balance)
  const currency = (account.currency || 'GBP') as 'GBP' | 'KES'
  const sortCode = getSortCode((account.country || 'UK') as 'UK' | 'KENYA')

  return (
    <div className="px-4 lg:px-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user.name || 'User'}
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your account
        </p>
      </div>

      {/* Account Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Balance Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBalance(!showBalance)}
              className="h-8 w-8 p-0"
              aria-label={showBalance ? "Hide balance" : "Show balance"}
            >
              {showBalance ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {showBalance ? formatCurrency(balance, currency) : '••••••'}
            </div>
            <p className="text-xs text-muted-foreground">
              Available balance
            </p>
          </CardContent>
        </Card>

        {/* Account Number Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Number</CardTitle>
            <IconCreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">
              {account.accountNumber}
            </div>
            {sortCode && (
              <p className="text-xs text-muted-foreground">
                Sort Code: {sortCode}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Account Status Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Status</CardTitle>
            <IconWallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Badge variant={(account.status || 'ACTIVE') === 'ACTIVE' ? 'default' : 'secondary'}>
                {account.status || 'ACTIVE'}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {account.country || 'UK'} • {account.currency || 'GBP'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconTrendingUp className="h-5 w-5" />
            Recent Transactions
          </CardTitle>
          <CardDescription>
            Your latest account activity
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentTransactions.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No transactions yet
            </p>
          ) : (
            <div className="space-y-4">
              {recentTransactions.map((transaction) => {
                const transactionAmount = toNumber(transaction.amount)
                const isCreditTransaction = isCredit(transaction.type)
                
                return (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={isCreditTransaction ? 'default' : 'secondary'}>
                          {transaction.type.replace('_', ' ')}
                        </Badge>
                        {transaction.adminName && (
                          <span className="text-xs text-muted-foreground">
                            by {transaction.adminName}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {transaction.description || 'No description'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(transaction.createdAt).toLocaleDateString()} at{' '}
                        {new Date(transaction.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                        {isCreditTransaction ? '+' : '-'}
                        {formatCurrency(transactionAmount, currency)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}