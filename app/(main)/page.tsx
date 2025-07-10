import PrimeBankHero from "@/components/shared/hero"
import ServicesSection from "@/components/shared/service"
import WhyPrimeBank from "@/components/shared/whyChooseUs"
import CTASection from "@/components/shared/cta"


function page() {
  return (
    <main className="min-h-screen bg-slate-900 relative">
      {/* Ensure consistent background coverage */}
      <div className="fixed inset-0 bg-slate-900 -z-10" />
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
