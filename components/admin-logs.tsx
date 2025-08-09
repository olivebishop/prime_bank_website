"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconHistory, IconShield } from "@tabler/icons-react"

interface AdminLog {
  id: string
  adminId: string
  adminName: string
  action: string
  targetUserId: string | null
  targetUserEmail: string | null
  details: string | null
  ipAddress: string | null
  userAgent: string | null
  createdAt: string
}

export function AdminLogs() {
  const [logs, setLogs] = useState<AdminLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLogs()
  }, [])

  const fetchLogs = async () => {
    try {
      const response = await fetch('/api/admin/logs')
      if (response.ok) {
        const data = await response.json()
        setLogs(data)
      }
    } catch (error) {
      console.error('Error fetching logs:', error)
    } finally {
      setLoading(false)
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case 'DELETE_USER':
        return 'destructive'
      case 'UPDATE_BALANCE':
        return 'default'
      case 'CREATE_USER':
        return 'secondary'
      default:
        return 'outline'
    }
  }

  if (loading) {
    return (
      <div className="px-4 lg:px-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">Loading logs...</div>
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
          <IconHistory className="h-8 w-8" />
          Admin Activity Logs
        </h1>
        <p className="text-muted-foreground">
          Monitor all administrative actions and system changes
        </p>
      </div>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconShield className="h-5 w-5" />
            Security Logs
          </CardTitle>
          <CardDescription>
            Complete audit trail of administrative actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Target User</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>IP Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="text-sm">
                      {new Date(log.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(log.createdAt).toLocaleTimeString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{log.adminName}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {log.adminId.slice(0, 8)}...
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getActionColor(log.action) as any}>
                      {log.action.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {log.targetUserEmail ? (
                      <div>
                        <div className="text-sm">{log.targetUserEmail}</div>
                        {log.targetUserId && (
                          <div className="text-xs text-muted-foreground font-mono">
                            {log.targetUserId.slice(0, 8)}...
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {log.details ? (
                      <div className="max-w-xs">
                        <details className="cursor-pointer">
                          <summary className="text-sm text-muted-foreground">
                            View details
                          </summary>
                          <pre className="text-xs mt-2 p-2 bg-muted rounded whitespace-pre-wrap">
                            {JSON.stringify(JSON.parse(log.details), null, 2)}
                          </pre>
                        </details>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-mono">
                      {log.ipAddress || 'Unknown'}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {logs.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No admin logs found
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}