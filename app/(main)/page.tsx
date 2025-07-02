import PrimeBankHero from "@/components/shared/hero"
import ServicesSection from "@/components/shared/service"


function page() {
  return (
    <main className="min-h-screen bg-slate-900 relative">
      {/* Ensure consistent background coverage */}
      <div className="fixed inset-0 bg-slate-900 -z-10" />
      {/* Hero Section */}
      <PrimeBankHero />
      {/* Services Section */}
      <ServicesSection />
    </main>
  )
}

export default page
