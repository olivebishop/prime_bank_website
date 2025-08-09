"use client"

import * as React from "react"
import { useUser, useClerk } from "@clerk/nextjs"
import {
  IconCreditCard,
  IconDashboard,
  IconHistory,
  IconInnerShadowTop,
  IconLogout,
  IconSettings,
  IconShield,
  IconTransfer,
  IconWallet,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: 'USER' | 'ADMIN'
}

export function AppSidebar({ userRole = 'USER', ...props }: AppSidebarProps) {
  const { user } = useUser()
  const { signOut } = useClerk()

  const userNavItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Account",
      url: "/dashboard/account",
      icon: IconWallet,
    },
    {
      title: "Transactions",
      url: "/dashboard/transactions",
      icon: IconHistory,
    },
    {
      title: "Transfer",
      url: "/dashboard/transfer",
      icon: IconTransfer,
    },
  ]

  const adminNavItems = [
    {
      title: "Admin Dashboard",
      url: "/admin",
      icon: IconShield,
    },
    {
      title: "Manage Users",
      url: "/admin/users",
      icon: IconCreditCard,
    },
    {
      title: "Admin Logs",
      url: "/admin/logs",
      icon: IconHistory,
    },
  ]

  const handleSignOut = () => {
    signOut(() => {
      window.location.href = '/'
    })
  }

  const navSecondary = [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ]

  const navActions = [
    {
      title: "Sign Out",
      action: handleSignOut,
      icon: IconLogout,
    },
  ]

  const userData = {
    name: user?.fullName || user?.firstName || "User",
    email: user?.primaryEmailAddress?.emailAddress || "",
    avatar: user?.imageUrl || "/avatars/default.jpg",
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Prime Bank</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={userRole === 'ADMIN' ? adminNavItems : userNavItems} />
        <div className="mt-auto space-y-2">
          <NavSecondary items={navSecondary} />
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleSignOut}>
                    <IconLogout />
                    <span>Sign Out</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}
