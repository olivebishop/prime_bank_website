'use client'
import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { investmentProducts, investmentBenefits, investmentPhilosophy } from '@/data/investments';
import GrainOverlay from "@/components/shared/grainOverlay"

const InvestmentSolutionsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden ">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investment <span className="text-blue-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you`&apos;re saving for retirement or building wealth, we have the right investment for you
            </p>
          </div>

          {/* Products Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {investmentProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      selectedProduct === product.id 
                        ? 'border-green-500/50 shadow-lg shadow-green-500/10' 
                        : 'border-gray-800/50 hover:border-gray-700/50'
                    }`}
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          {product.id === 'personal-pension' ? 'Tax Relief' : 
                           product.id === 'junior-isa' ? 'Annual Allowance' : 
                           product.id === 'wealth-management' ? 'Advisory' : 'Fee/Rate'}
                        </div>
                        <div className="text-lg font-bold text-blue-400">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          {product.id === 'personal-pension' ? 'Annual Limit' : 
                           product.id === 'wealth-management' ? 'Minimum' : 'Min Investment'}
                        </div>
                        <div className="text-lg font-bold text-white">{product.minBalance}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Access</div>
                        <div className="text-lg font-bold text-white">{product.access}</div>
                      </div>
                    </div>

                    {/* CTA Button - Grain Blended */}
                    <button className="w-full relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-blue-600/90 transition-all duration-300 group-hover:from-blue-600/90 group-hover:to-blue-700/90"></div>
                      
                      {/* Grain texture overlay */}
                      <div 
                        className="absolute inset-0 opacity-20 mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          backgroundSize: '200px 200px'
                        }}
                      ></div>
                      
                      {/* Content */}
                      <span className="relative text-white z-10">
                        {product.id === 'wealth-management' ? 'Book Consultation' : 
                         product.id === 'personal-pension' ? 'Start Pension' : 
                         product.id === 'stocks-shares-isa' ? 'Open ISA' : 
                         product.id === 'junior-isa' ? 'Start Saving' : 
                         product.id === 'cash-isa' ? 'Open Cash ISA' : 'Open Account'}
                      </span>
                      <ArrowRight className="relative w-4 h-4 text-white z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Why Invest with Primeo Bank */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Invest with <span className="text-blue-400">Prime Bank?</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {investmentBenefits.map((benefit) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={benefit.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investment Philosophy */}
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Our Investment <span className="text-blue-400">Philosophy</span>
              </h3>
              <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                Combining African innovation with British prudence for sustainable wealth creation
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {investmentPhilosophy.map((philosophy) => (
                  <div key={philosophy.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-4">{philosophy.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{philosophy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start <span className="text-blue-400">Investing?</span>
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join over 2 million customers who trust us with their investments. Start building your wealth portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button - Grain Blended */}
                <button className="relative px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700"></div>
                  
                  {/* Grain texture overlay */}
                  <div 
                    className="absolute inset-0 opacity-25 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <TrendingUp className="relative w-6 h-6 text-black z-10" />
                  <span className="relative text-black z-10">Start Investing Today</span>
                </button>

                {/* Secondary CTA Button - Grain Blended */}
                <button className="relative px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-gray-700 group overflow-hidden">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gray-800 transition-all duration-300 group-hover:bg-gray-700"></div>
                  
                  {/* Grain texture overlay */}
                  <div 
                    className="absolute inset-0 opacity-15 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  
                  {/* Content */}
                  <span className="relative text-white z-10">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSolutionsPage;