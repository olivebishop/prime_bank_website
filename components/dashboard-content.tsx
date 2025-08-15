"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatCurrency, getSortCode } from "@/lib/account-utils"
import { IconCreditCard, IconEye, IconEyeOff, IconTrendingUp, IconWallet } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Decimal } from "@prisma/client/runtime/library"
import Image from "next/image"

// Local bank data structure
interface Bank {
  id: number
  name: string
  fullName: string
  logo: string
  description: string
  color?: string
}

const banks: Bank[] = [
  { 
    id: 1, 
    name: 'KCB', 
    fullName: 'Kenya Commercial Bank',
    logo: '/images/kcb.jpeg',
    description: 'Kenya\'s largest bank by assets',
    color: 'bg-blue-600'
  },
  { 
    id: 2, 
    name: 'Equity', 
    fullName: 'Equity Bank',
    logo: '/images/equity.png',
    description: 'Leading financial services provider',
    color: 'bg-red-600'
  },
  { 
    id: 3, 
    name: 'Stanbic Bank', 
    fullName: 'Stanbic Bank Kenya',
    logo: '/images/stan.jpeg',
    description: 'Part of Standard Bank Group',
    color: 'bg-blue-800'
  },
  { 
    id: 4, 
    name: 'Cooperative Bank', 
    fullName: 'Co-operative Bank of Kenya',
    logo: '/images/coperative.jpeg',
    description: 'Customer-owned financial institution',
    color: 'bg-green-600'
  },
  { 
    id: 5, 
    name: 'NCBA', 
    fullName: 'NCBA Bank Kenya',
    logo: '/images/ncba.png',
    description: 'Innovative banking solutions',
    color: 'bg-purple-600'
  },
  { 
    id: 6, 
    name: 'I&M Bank', 
    fullName: 'I&M Bank Limited',
    logo: '/images/im.jpeg',
    description: 'Regional banking expertise',
    color: 'bg-orange-600'
  }
]

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
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)

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

      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row gap-6 min-h-[600px]">
        {/* Left Panel - Bank Selection */}
        <div className="w-full lg:w-1/3">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Listed Banking</CardTitle>
              <CardDescription>
                Select your preferred banking partner
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
                {banks.map((bank: Bank) => (
                <div
                  key={bank.id}
                  onClick={() => setSelectedBank(bank)}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedBank?.id === bank.id 
                    ? 'border-primary bg-primary/5 shadow-sm' 
                    : 'border-border hover:bg-accent hover:border-accent-foreground/20'
                  }`}
                >
                  {/* Bank Logo */}
                  <div className="w-12 h-12 relative mr-4 flex-shrink-0">
                  <Image
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-lg object-contain"
                  />
                  </div>
                  
                  {/* Bank Info */}
                  <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {bank.name}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {bank.fullName}
                  </p>
                  </div>

                  {/* Selection Indicator */}
                  {selectedBank?.id === bank.id && (
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                  )}
                </div>
                ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Account Information */}
        <div className="flex-1 space-y-6">
          {/* Selected Bank Display */}
          {selectedBank && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={selectedBank.logo}
                      alt={`${selectedBank.name} logo`}
                      width={64}
                      height={64}
                      className="rounded-xl object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedBank.name}</h3>
                    <p className="text-muted-foreground">{selectedBank.fullName}</p>
                    <p className="text-sm text-muted-foreground mt-1">{selectedBank.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

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
      </div>
    </div>
  )
}