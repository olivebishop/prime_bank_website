import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import PrimeBankHero from "@/components/shared/hero"
import ServicesSection from "@/components/shared/service"
import WhyPrimeBank from "@/components/shared/whyChooseUs"
import CTASection from "@/components/shared/cta"

async function page() {
  const user = await currentUser()
  
  // Redirect authenticated users to dashboard
  if (user) {
    redirect("/dashboard")
  }

  return (
    <main className="min-h-screen bg-white relative">
      {/* Ensure consistent background coverage */}
      <div className="fixed inset-0 bg-white -z-10" />
      {/* Hero Section */}
      <PrimeBankHero />
      {/* Services Section */}
      <ServicesSection />
      <WhyPrimeBank/>
      <CTASection/>
    </main>
  )
}

export default page
