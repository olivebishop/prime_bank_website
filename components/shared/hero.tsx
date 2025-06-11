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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          
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
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
                  <span className="block text-white">Fast Loans.</span>
                  <span className="block text-white">Smart 
                    <span className="text-emerald-400 ml-4">Decisions.</span>
                  </span>
                </h1>
                
                <div className="flex items-start gap-6 pt-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-500 mt-4 rounded-full" />
                  <div className="space-y-4 max-w-xl">
                    <p className="text-lg lg:text-xl text-slate-300 font-light leading-relaxed">
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
                      <span>2-minute application • Instant approval • Same-day funding</span>
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

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </div>
  );
};

export default PrimeBankHero;




















































// 'use client'
// import React, 
// { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from "motion/react";
// import { ArrowRight, Clock, Shield, Globe2, Users, CheckCircle2, Star, TrendingUp, Zap } from 'lucide-react';

// const PrimeBankHero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 300], [0, -50]);
//   const y2 = useTransform(scrollY, [0, 300], [0, 100]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">
      
//       {/* Advanced Background System */}
//       <div className="absolute inset-0">
//         {/* Main Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center scale-105"
//           style={{
//             backgroundImage: "url('/images/hero_one.jpeg')",
//             filter: 'contrast(1.1) brightness(0.4) saturate(1.2)',
//           }}
//         />
        
//         {/* Dynamic Gradient Overlay */}
//         <motion.div 
//           className="absolute inset-0"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.08) 25%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)`,
//           }}
//         />
        
//         {/* Geometric Accent */}
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-emerald-500/5 via-transparent to-transparent" />
//       </div>

//       {/* Interactive Floating Elements */}
//       <motion.div style={{ y: y1 }} className="absolute top-20 right-1/4 w-2 h-32 bg-gradient-to-b from-emerald-400 to-transparent rounded-full opacity-30 blur-sm" />
//       <motion.div style={{ y: y2 }} className="absolute bottom-1/3 left-1/4 w-1 h-24 bg-gradient-to-t from-emerald-400 to-transparent rounded-full opacity-40 blur-sm" />
      

//       {/* Main Content Grid */}
//       <div className="relative z-10 min-h-screen flex items-center pt-16 sm:pt-24 lg:pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          
//           <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
//             {/* Left Content - 7 columns */}
//             <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
//               {/* Pre-headline */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="flex items-center gap-3"
//               >
//                 <motion.div
//                   animate={{ rotate: 0 }}
                 
//                 >
//                   <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400" />
//                 </motion.div>
//                 <span className="text-xs sm:text-sm font-medium text-emerald-300 tracking-wider uppercase">Fast & Secure Lending</span>
//               </motion.div>

//               {/* Main Headline */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.3 }}
//                 className="space-y-4"
//               >
//                 <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight">
//                   <span className="block text-white">Fast Loans.</span>
//                   <span className="block text-white">Smart Decisions.</span>
                  
//                 </h1>
                
//                 <div className="flex items-start gap-4 pt-2">
//                   <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-emerald-400 to-green-500 mt-3" />
//                   <div className="space-y-3">
//                     <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
//                       Empowering your financial future—fast, secure, and tailored for you. 
//                       Get the money you need in minutes, not days.
//                     </p>
//                     {/* Enhanced USP */}
//                     <motion.div
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.8, delay: 0.5 }}
//                       className="flex items-center gap-2 text-emerald-400 font-semibold"
//                     >
//                       <Zap className="w-4 h-4" />
//                       <span className="text-sm sm:text-base">Apply in 2 minutes • Get approved instantly</span>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Enhanced Action Section */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="flex flex-col sm:flex-row items-start gap-4 pt-4"
//               >
//                 <motion.button 
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group relative overflow-hidden w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25"
//                 >
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400"
//                     initial={{ x: "-100%" }}
//                     whileHover={{ x: "0%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                   <span className="relative flex items-center justify-center gap-2">
//                     Apply in 2 Minutes
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </motion.button>

//                 <motion.button 
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="group w-full sm:w-auto flex items-center justify-center gap-2 text-slate-300 hover:text-white font-medium px-6 py-3 sm:py-4 rounded-2xl border border-white/20 hover:border-emerald-400 hover:bg-emerald-600/20 backdrop-blur-sm transition-all duration-300"
//                 >
//                   <TrendingUp className="w-4 h-4" />
//                   Check Your Rate
//                 </motion.button>
//               </motion.div>

//               {/* Enhanced Trust Indicators */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-slate-400"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
//                 >
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0 }}
//                   >
//                     <Shield className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
//                   </motion.div>
//                   <span>Secure & Regulated</span>
//                 </motion.div>
//                 <motion.div 
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
//                 >
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                   >
//                     <Users className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
//                   </motion.div>
//                   <span>Trusted by 10,000+</span>
//                 </motion.div>
//                 <motion.div 
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
//                 >
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 1 }}
//                   >
//                     <Globe2 className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-400" />
//                   </motion.div>
//                   <span>UK & Europe</span>
//                 </motion.div>
//               </motion.div>

//             </div>

//             {/* Enhanced Right Content - 5 columns */}
//             <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
              
//               {/* Enhanced Loan Application Preview Card */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9, y: 50 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 1.0 }}
//                 className="relative w-full max-w-sm hidden md:block"
//               >
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-3xl blur-xl scale-110" />
                
//                 {/* Main Card */}
//                 <motion.div 
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative bg-black/60 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
//                 >
                  
//                   {/* Header */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center gap-3">
//                       <motion.div 
//                         animate={{ rotate: [0,0] }}
//                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                         className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg"
//                       >
//                         <CheckCircle2 className="w-5 h-5 text-white" />
//                       </motion.div>
//                       <div>
//                         <p className="text-white font-bold text-base">Loan Application</p>
//                         <p className="text-emerald-400 text-sm font-medium">Quick & Secure</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <motion.p 
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 0.5, delay: 1.2 }}
//                         className="text-emerald-400 font-black text-2xl"
//                       >
//                         £25,000
//                       </motion.p>
//                       <p className="text-slate-400 text-sm">Available</p>
//                     </div>
//                   </div>

//                   {/* Enhanced Application Steps */}
//                   <div className="space-y-5">
//                     <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-xl border border-white/10">
//                       <span className="text-slate-300 text-sm font-medium">Application Time</span>
//                       <div className="flex items-center gap-3">
//                         <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
//                           <motion.div 
//                             className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
//                             initial={{ width: 0 }}
//                             animate={{ width: "100%" }}
//                             transition={{ duration: 2, delay: 1.3 }}
//                           />
//                         </div>
//                         <span className="text-white font-bold text-sm min-w-[3rem]">2 min</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-xl border border-white/10">
//                       <span className="text-slate-300 text-sm font-medium">Approval Speed</span>
//                       <div className="flex items-center gap-3">
//                         <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
//                           <motion.div 
//                             className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
//                             initial={{ width: 0 }}
//                             animate={{ width: "95%" }}
//                             transition={{ duration: 2, delay: 1.5 }}
//                           />
//                         </div>
//                         <span className="text-emerald-400 font-bold text-sm min-w-[3rem]">Instant</span>
//                       </div>
//                     </div>

//                     <div className="flex justify-between items-center py-3 px-4 bg-white/5 rounded-xl border border-white/10">
//                       <span className="text-slate-300 text-sm font-medium">Competitive Rates</span>
//                       <span className="text-emerald-400 font-bold text-base">From 3.9%</span>
//                     </div>
//                   </div>

//                   {/* Enhanced Bottom Section */}
//                   <div className="mt-6 pt-6 border-t border-emerald-500/20">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <Globe2 className="w-4 h-4 text-emerald-400" />
//                         <span className="text-slate-300 text-sm font-medium">Serving UK & Europe</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="flex text-yellow-400 text-lg">
//                           {[...Array(5)].map((_, i) => (
//                             <motion.div
//                               key={i}
//                               initial={{ opacity: 0, scale: 0 }}
//                               animate={{ opacity: 1, scale: 1 }}
//                               transition={{ duration: 0.3, delay: 1.8 + (i * 0.1) }}
//                             >
//                               <Star className="w-4 h-4 fill-current" />
//                             </motion.div>
//                           ))}
//                         </div>
//                         <span className="text-white font-bold text-lg ml-1">4.9</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Quick Apply Button */}
//                   <motion.button
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 2 }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
//                   >
//                     Quick Apply
//                   </motion.button>
//                 </motion.div>

//                 {/* Enhanced Floating accent */}
//                 <motion.div 
//                   animate={{ 
//                     y: [0, -10, 0],
//                     rotate: [0, 5, 0, -5, 0]
//                   }}
//                   transition={{ 
//                     duration: 4, 
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                   className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg"
//                 >
//                   <CheckCircle2 className="w-4 h-4 text-white" />
//                 </motion.div>
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Accent */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
//     </div>
//   );
// };

// export default PrimeBankHero;