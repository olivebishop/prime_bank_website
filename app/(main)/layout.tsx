import type React from "react"
import  Navbar  from "@/components/shared/navbar"
import PrimeBankFooter from "@/components/shared/footer"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <PrimeBankFooter/>
    </>
  )
}