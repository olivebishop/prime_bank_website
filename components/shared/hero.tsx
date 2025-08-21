"use client"

import { ArrowRight, Shield, Zap, Smartphone } from "lucide-react";

const GrainOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.15] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'multiply'
    }}
  />
);

const PrimeBankHero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111]">
      {/* Grain Overlay */}
      <GrainOverlay />

      {/* Background System */}
      <div className="absolute inset-0">
        {/* Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
          style={{
            backgroundImage: "url('/images/hero_one.jpeg')",
            backgroundPosition: "60% center",
            filter: "contrast(1.4) brightness(0.25) saturate(0.9) grayscale(0.2)",
          }}
        />

        {/* Static Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.65) 30%, rgba(0, 0, 0, 0.75) 65%, rgba(0, 0, 0, 0.85) 100%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-1/3 w-1 h-20 bg-gradient-to-b from-gray-100/30 to-transparent rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-1/4 left-1/5 w-0.5 h-16 bg-gradient-to-t from-gray-200/25 to-transparent rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8 lg:space-y-10">
                {/* Main Headline */}
                <div className="space-y-6 animate-fadeInUp">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1] tracking-tight">
                    <span className="block text-white">Banking</span>
                    <span className="block text-white lg:mt-2">
                      Made
                      <span className="text-gray-100 ml-6">Simple.</span>
                    </span>
                  </h1>

                  <div className="flex items-start gap-8 pt-6">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gray-50 to-gray-200 mt-6 rounded-full animate-slideInLeft" />
                    <div className="space-y-6 max-w-2xl">
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed">
                        Experience seamless UK banking with Prime Bank Connect — secure, smart, and designed to grow your wealth.
                      </p>
                      <div className="flex items-center gap-3 text-gray-50 font-semibold animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                        <Shield className="w-5 h-5" />
                        <span className="text-base sm:text-lg">FSCS Protected • FCA Regulated • 24/7 UK Support</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="flex flex-col sm:flex-row items-start gap-6 pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <button className="group relative overflow-hidden bg-white hover:bg-gray-50 text-blue-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
                    <span className="relative flex items-center justify-center gap-3">
                      Open Your Account Today
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  <button className="group flex items-center justify-center gap-3 text-gray-100 hover:text-white font-medium px-10 py-5 rounded-xl border border-gray-200/20 hover:border-gray-100/40 hover:bg-gray-50/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
                    <Smartphone className="w-5 h-5" />
                    Download Mobile App
                  </button>
                </div>
              </div>

              {/* Right Content - Banking Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-16 lg:mt-0">
                {/* Banking Card Visual */}
                <div className="relative hidden lg:block animate-slideInRight">
                  {/* Stylized Banking Card */}
                  <div className="relative">
                    <div className="w-96 h-56 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl shadow-black/50 p-8 relative overflow-hidden border border-gray-200/20 hover:scale-105 transition-transform duration-300">
                      {/* Card Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-50/8 to-gray-100/12"></div>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gray-50/15 to-transparent rounded-full -mr-20 -mt-20"></div>

                      {/* Card Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="text-white font-medium text-base">Prime Bank Connect UK</div>
                          <div className="w-10 h-7 bg-gradient-to-r from-gray-50 to-gray-100 rounded flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-900">£</span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="text-gray-50 font-mono text-xl tracking-wider">•••• •••• •••• 1234</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-gray-200 text-xs uppercase tracking-wide">Valid Thru</div>
                              <div className="text-gray-50 font-medium text-base">12/28</div>
                            </div>
                            <div className="text-white font-bold text-xl">PRIME </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gray-50/10 rounded-full backdrop-blur-sm border border-gray-200/20 flex items-center justify-center animate-float">
                      <Zap className="w-6 h-6 text-gray-50" />
                    </div>

                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gray-50/10 rounded-full backdrop-blur-sm border border-gray-200/20 flex items-center justify-center animate-float-reverse">
                      <Shield className="w-7 h-7 text-gray-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent" />

    </div>
  );
};

export default PrimeBankHero;
