'use client'
import React, { useState } from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { investmentProducts, investmentBenefits, investmentPhilosophy } from '@/data/investments';
import GrainOverlay from "@/components/shared/grainOverlay"

const InvestmentSolutionsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Investment <span className="text-gray-800">Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re saving for retirement or building wealth, we have the right investment for you
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {investmentProducts.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className={`p-8 rounded-xl border bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 cursor-pointer ${
                      selectedProduct === product.id 
                        ? 'border-gray-600 shadow-lg' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-black" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          {product.id === 'personal-pension' ? 'Tax Relief' : 
                           product.id === 'junior-isa' ? 'Annual Allowance' : 
                           product.id === 'wealth-management' ? 'Advisory' : 'Fee/Rate'}
                        </div>
                        <div className="text-sm font-bold text-white">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          {product.id === 'personal-pension' ? 'Annual Limit' : 
                           product.id === 'wealth-management' ? 'Minimum' : 'Min Investment'}
                        </div>
                        <div className="text-sm font-bold text-white">{product.minBalance}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Access</div>
                        <div className="text-sm font-bold text-white">{product.access}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>
                        {product.id === 'wealth-management' ? 'Book Consultation' : 
                         product.id === 'personal-pension' ? 'Start Pension' : 
                         product.id === 'stocks-shares-isa' ? 'Open ISA' : 
                         product.id === 'junior-isa' ? 'Start Saving' : 
                         product.id === 'cash-isa' ? 'Open Cash ISA' : 'Open Account'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Invest with Primeo Bank */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Why Invest with <span className="text-gray-800">Prime Bank?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {investmentBenefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">{benefit.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Investment Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Our Investment <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Combining African innovation with British prudence for sustainable wealth creation
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {investmentPhilosophy.map((philosophy) => (
                <div key={philosophy.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
                  <h4 className="text-lg font-bold text-white mb-3 leading-tight">{philosophy.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{philosophy.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Ready to Start <span className="text-gray-300">Investing?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 2 million customers who trust us with their investments. Start building your wealth portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Start Investing Today</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Learn More
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