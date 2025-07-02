"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ArrowRight, Shield, Zap, CreditCard, Smartphone, PiggyBank } from "lucide-react"
import GrainOverlay from "@/components/shared/grainOverlay"

const PrimeBankHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const { scrollY } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  const y1 = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : -50])
  const y2 = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : 100])

  useEffect(() => {
    interface MouseEvent {
      clientX: number
      clientY: number
    }

    const handleMouseMove = (e: MouseEvent): void => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 grain-overlay">
      {/* Grain Overlay */}
      <GrainOverlay />

      {/* Optimized Background System */}
      <div className="absolute inset-0">
        {/* Hero Image with Better Positioning */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/images/hero_one.jpeg')",
            backgroundPosition: "60% center",
            filter: "contrast(1.3) brightness(0.25) saturate(1.2)",
          }}
        />

        {/* Refined Dynamic Gradient with Blue Colors Only */}
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: prefersReducedMotion
              ? "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(0, 0, 0, 0.95) 100%)"
              : `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.05) 30%, rgba(15, 23, 42, 0.85) 65%, rgba(0, 0, 0, 0.95) 100%)`,
          }}
        />

        {/* Blue Banking Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-400/5 to-slate-900/40" />
      </div>

      {/* Floating Elements - Blue Theme */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            style={{ y: y1 }}
            className="absolute top-32 right-1/3 w-1 h-20 bg-gradient-to-b from-blue-500/40 to-transparent rounded-full blur-sm"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-1/4 left-1/5 w-0.5 h-16 bg-gradient-to-t from-blue-400/30 to-transparent rounded-full blur-sm"
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-8 lg:space-y-10">
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  {/* <div className="flex items-center gap-2 bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-700/30">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-100 text-sm font-medium">Trusted by 2M+ UK customers</span>
                  </div> */}
                </motion.div>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
                    <span className="block text-white">Banking</span>
                    <span className="block text-white lg:mt-4">
                      Made
                      <span className="text-blue-400 ml-4">Simple.</span>
                    </span>
                  </h1>

                  <div className="flex items-start gap-6 pt-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 mt-4 rounded-full" />
                    <div className="space-y-4 max-w-xl">
                      <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed">
                        Experience the future of UK banking with Prime Bank. Seamlessly manage your finances, maximise
                        your savings, and access premium investment opportunities—all through our award-winning digital
                        platform.
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-2 text-blue-400 font-semibold"
                      >
                        <Shield className="w-4 h-4" />
                        <span className="text-sm sm:text-base">FSCS Protected • FCA Regulated • 24/7 UK Support</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Section */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start gap-4 pt-2"
                >
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 w-full sm:w-auto"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Open Your Account Today
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group flex items-center justify-center gap-2 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl border border-slate-600 hover:border-blue-400/50 hover:bg-blue-500/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                  >
                    <Smartphone className="w-4 h-4" />
                    Download Mobile App
                  </motion.button>
                </motion.div>

                {/* Banking Services Highlights */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
                >
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <CreditCard className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Current Accounts</p>
                      <p className="text-xs">No monthly fees • Instant notifications</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-blue-400/10 rounded-lg">
                      <PiggyBank className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Savings & ISAs</p>
                      <p className="text-xs">Up to 4.75% AER • Tax-free options</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-blue-600/10 rounded-lg">
                      <Shield className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">FSCS Protected</p>
                      <p className="text-xs">Up to £85,000 • Bank-grade security</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Banking Visual */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end mt-12 lg:mt-0">
                {/* Banking Card Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  {/* Stylized Banking Card */}
                  <div className="relative">
                    <div className="w-80 h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl shadow-2xl shadow-blue-500/20 p-6 relative overflow-hidden border border-blue-500/20">
                      {/* Card Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-blue-400/10"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>

                      {/* Card Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="text-blue-100 font-medium text-sm">Prime Bank UK</div>
                          <div className="w-8 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded flex items-center justify-center">
                            <span className="text-xs font-bold text-white">£</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="text-white font-mono text-lg tracking-wider">•••• •••• •••• 1234</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-slate-400 text-xs uppercase tracking-wide">Valid Thru</div>
                              <div className="text-white font-medium">12/28</div>
                            </div>
                            <div className="text-blue-400 font-bold text-lg">PRIME</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={prefersReducedMotion ? {} : { y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
                    >
                      <Zap className="w-5 h-5 text-blue-400" />
                    </motion.div>

                    <motion.div
                      animate={prefersReducedMotion ? {} : { y: [5, -5, 5] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-300/30 flex items-center justify-center"
                    >
                      <Shield className="w-6 h-6 text-blue-300" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
    </div>
  )
}

export default PrimeBankHero
