"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ArrowRight, Shield, Zap,  Smartphone } from "lucide-react"

const GrainOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.15] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'multiply'
    }}
  />
)

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
    <div className="relative min-h-screen overflow-hidden bg-[#111111]">
      {/* Grain Overlay */}
      <GrainOverlay />

      {/* Optimized Background System */}
      <div className="absolute inset-0">
        {/* Hero Image with Better Positioning and Visibility */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/images/Hero.png')",
            backgroundPosition: "60% center",
            filter: "contrast(1.4) brightness(0.25) saturate(0.9) grayscale(0.2)",
          }}
        />

        {/* Refined Dynamic Gradient - More transparent to show image */}
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: prefersReducedMotion
              ? "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)"
              : `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.65) 30%, rgba(0, 0, 0, 0.75) 65%, rgba(0, 0, 0, 0.85) 100%)`,
          }}
        />

        {/* Subtle Professional Accent Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/15 to-black/30" /> */}
      </div>

      {/* Floating Elements - Minimal and Professional */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            style={{ y: y1 }}
            className="absolute top-32 right-1/3 w-1 h-20 bg-gradient-to-b from-gray-100/30 to-transparent rounded-full blur-sm"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute bottom-1/4 left-1/5 w-0.5 h-16 bg-gradient-to-t from-gray-200/25 to-transparent rounded-full blur-sm"
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8 lg:space-y-10">
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  {/* Trust indicator can be added here if needed */}
                </motion.div>

                {/* Main Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1] tracking-tight">
                    <span className="block text-white ">Banking</span>
                    <span className="block text-white lg:mt-2">
                      Made
                      <span className="text-gray-100 ml-6 ">Simple.</span>
                    </span>
                  </h1>

                  <div className="flex items-start gap-8 pt-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gray-50 to-gray-200 mt-6 rounded-full" />
                    <div className="space-y-6 max-w-2xl">
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed">
                       Experience seamless UK banking with Prime Bank — secure, smart, and designed to grow your wealth.
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-3 text-gray-50 font-semibold"
                      >
                        <Shield className="w-5 h-5" />
                        <span className="text-base sm:text-lg">FSCS Protected • FCA Regulated • 24/7 UK Support</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Section */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start gap-6 pt-4"
                >
                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group relative overflow-hidden bg-white hover:bg-gray-50 text-black font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-lg"
                  >
                    <span className="relative flex items-center justify-center gap-3">
                      Open Your Account Today
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 text-gray-100 hover:text-white font-medium px-10 py-5 rounded-xl border border-gray-200/20 hover:border-gray-100/40 hover:bg-gray-50/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-lg"
                  >
                    <Smartphone className="w-5 h-5" />
                    Download Mobile App
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Content - Banking Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-16 lg:mt-0">
                {/* Banking Card Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  {/* Stylized Banking Card */}
                  <div className="relative">
                    <div className="w-96 h-56 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl shadow-black/50 p-8 relative overflow-hidden border border-gray-200/20">
                      {/* Card Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-50/8 to-gray-100/12"></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-50/15 to-transparent rounded-full -mr-20 -mt-20"></div>

                      {/* Card Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="text-white font-medium text-base">Prime Bank UK</div>
                          <div className="w-10 h-7 bg-gradient-to-r from-gray-50 to-gray-100 rounded flex items-center justify-center">
                            <span className="text-sm font-bold text-black">£</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="text-gray-50 font-mono text-xl tracking-wider">•••• •••• •••• 1234</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-gray-200 text-xs uppercase tracking-wide">Valid Thru</div>
                              <div className="text-gray-50 font-medium text-base">12/28</div>
                            </div>
                            <div className="text-white font-bold text-xl">PRIME</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={prefersReducedMotion ? {} : { y: [-6, 6, -6] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute -top-6 -right-6 w-16 h-16 bg-gray-50/10 rounded-full backdrop-blur-sm border border-gray-200/20 flex items-center justify-center"
                    >
                      <Zap className="w-6 h-6 text-gray-50" />
                    </motion.div>

                    <motion.div
                      animate={prefersReducedMotion ? {} : { y: [6, -6, 6] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-8 -left-8 w-20 h-20 bg-gray-50/10 rounded-full backdrop-blur-sm border border-gray-200/20 flex items-center justify-center"
                    >
                      <Shield className="w-7 h-7 text-gray-50" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent" />
    </div>
  )
}

export default PrimeBankHero