"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatCurrency } from "@/lib/account-utils"
import { IconEdit, IconTrash, IconUsers } from "@tabler/icons-react"
import { toast } from "sonner"

interface User {
  id: string
  name: string | null
  email: string
  role: 'USER' | 'ADMIN'
  createdAt: string
  account: {
    id: string
    balance: string
    accountNumber: string
    currency: string
    country: string
    status: string
  } | null
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [balanceAmount, setBalanceAmount] = useState("")
  const [balanceDescription, setBalanceDescription] = useState("")
  const [isBalanceDialogOpen, setIsBalanceDialogOpen] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else {
        toast.error('Failed to fetch users')
      }
    } catch {
      toast.error('Error fetching users')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/users?userId=${userId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast.success('User deleted successfully')
        fetchUsers()
      } else {
        toast.error('Failed to delete user')
      }
    } catch {
      toast.error('Error deleting user')
    }
  }

  const handleUpdateBalance = async () => {
    if (!selectedUser || !balanceAmount) return

    try {
      const response = await fetch('/api/admin/balance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: selectedUser.id,
          amount: parseFloat(balanceAmount),
          description: balanceDescription
        })
      })

      if (response.ok) {
        toast.success('Balance updated successfully')
        setIsBalanceDialogOpen(false)
        setBalanceAmount("")
        setBalanceDescription("")
        setSelectedUser(null)
        fetchUsers()
      } else {
        toast.error('Failed to update balance')
      }
    } catch {
      toast.error('Error updating balance')
    }
  }

  const openBalanceDialog = (user: User) => {
    setSelectedUser(user)
    setIsBalanceDialogOpen(true)
  }

  if (loading) {
    return (
      <div className="px-4 lg:px-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">Loading users...</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="px-4 lg:px-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <IconUsers className="h-8 w-8" />
          User Management
        </h1>
        <p className="text-muted-foreground">
          Manage user accounts and balances
        </p>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            View and manage all registered users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name || 'No name'}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                      <Badge variant={user.role === 'ADMIN' ? 'default' : 'secondary'} className="mt-1">
                        {user.role}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.account ? (
                      <div>
                        <div className="font-mono text-sm">{user.account.accountNumber}</div>
                        <div className="text-xs text-muted-foreground">
                          {user.account.country} • {user.account.currency}
                        </div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">No account</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.account ? (
                      <div className="font-semibold">
                        {formatCurrency(
                          parseFloat(user.account.balance), 
                          user.account.currency as 'GBP' | 'KES'
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.account ? (
                      <Badge variant={user.account.status === 'ACTIVE' ? 'default' : 'secondary'}>
                        {user.account.status}
                      </Badge>
                    ) : (
                      <Badge variant="secondary">No Account</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.account && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openBalanceDialog(user)}
                        >
                          <IconEdit className="h-4 w-4" />
                        </Button>
                      )}
                      {user.role !== 'ADMIN' && (
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              <IconTrash className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete User</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {user.email}? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteUser(user.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Balance Update Dialog */}
      <Dialog open={isBalanceDialogOpen} onOpenChange={setIsBalanceDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Balance</DialogTitle>
            <DialogDescription>
              Update the balance for {selectedUser?.email}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="Enter amount (positive to add, negative to subtract)"
                value={balanceAmount}
                onChange={(e) => setBalanceAmount(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Current balance: {selectedUser?.account ? 
                  formatCurrency(
                    parseFloat(selectedUser.account.balance), 
                    selectedUser.account.currency as 'GBP' | 'KES'
                  ) : 'N/A'
                }
              </p>
            </div>
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                placeholder="Reason for balance change"
                value={balanceDescription}
                onChange={(e) => setBalanceDescription(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsBalanceDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateBalance} disabled={!balanceAmount}>
              Update Balance
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}