'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Clock, Shield, Globe2, Users, Zap, TrendingUp } from 'lucide-react';

const PrimeBankHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  
  const y1 = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : 100]);

  useEffect(() => {
    interface MouseEvent {
        clientX: number;
        clientY: number;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      
      {/* Optimized Background System */}
      <div className="absolute inset-0">
        {/* Hero Image with Better Positioning */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('images/hero_one.jpeg')",
            backgroundPosition: '60% center',
            filter: 'contrast(1.2) brightness(0.35) saturate(1.1)',
          }}
        />
        
        {/* Refined Dynamic Gradient */}
        <motion.div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: prefersReducedMotion 
              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 0.95) 100%)'
              : `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 30%, rgba(0, 0, 0, 0.85) 65%, rgba(0, 0, 0, 0.95) 100%)`,
          }}
        />
        
        {/* Subtle Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-slate-900/30" />
      </div>

      {/* Floating Elements - More Subtle */}
      {!prefersReducedMotion && (
        <>
          <motion.div style={{ y: y1 }} className="absolute top-32 right-1/3 w-1 h-20 bg-gradient-to-b from-emerald-400/40 to-transparent rounded-full blur-sm" />
          <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-1/5 w-0.5 h-16 bg-gradient-to-t from-emerald-400/30 to-transparent rounded-full blur-sm" />
        </>
      )}

      {/* Main Content - FIXED SPACING */}
      <div className="relative z-10 min-h-screen flex items-center">
        {/* Added proper top padding for different screen sizes to avoid navbar collision */}
        <div className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content - Enhanced Spacing */}
              <div className="lg:col-span-8 space-y-8 lg:space-y-10">
                
                {/* Pre-headline - Refined */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-400/20 rounded-full backdrop-blur-sm">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-300 tracking-wide">Fast & Secure</span>
                  </div>
                </motion.div>

                {/* Main Headline - Better Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-6"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
                    <span className="block text-white">Fast Loans.</span>
                    <span className="block text-white">Smart 
                      <span className="text-emerald-400 ml-4">Decisions.</span>
                    </span>
                  </h1>
                  
                  <div className="flex items-start gap-6 pt-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-500 mt-4 rounded-full" />
                    <div className="space-y-4 max-w-xl">
                      <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed">
                        Empowering your financial future with instant approvals and competitive rates. 
                        Get the funding you need in minutes, not days.
                      </p>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-2 text-emerald-400 font-semibold"
                      >
                        <Zap className="w-4 h-4" />
                        <span className="text-sm sm:text-base">2-minute application • Instant approval • Same-day funding</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Refined Action Section */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start gap-4 pt-2"
                >
                  <motion.button 
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group relative overflow-hidden bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 w-full sm:w-auto"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button 
                    whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    className="group flex items-center justify-center gap-2 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl border border-slate-600 hover:border-emerald-400/50 hover:bg-emerald-500/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Check Your Rate
                  </motion.button>
                </motion.div>

                {/* Refined Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
                >
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Shield className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Secure & Regulated</p>
                      <p className="text-xs">FCA Authorised</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Users className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Trusted by 25,000+</p>
                      <p className="text-xs">Happy customers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <Globe2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">UK Coverage</p>
                      <p className="text-xs">Nationwide service</p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Right Content - Subtle Visual Element */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end mt-12 lg:mt-0">
                
                {/* Subtle Visual Accent - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  {/* Floating geometric elements */}
                
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </div>
  );
};

export default PrimeBankHero;