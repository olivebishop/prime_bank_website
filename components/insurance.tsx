'use client'
import React, { useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { insuranceProducts, insuranceBenefits, insurancePhilosophy } from '@/data/insurance';
import GrainOverlay from "@/components/shared/grainOverlay"

const InsuranceSolutionsPage = () => {
 const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Insurance <span className="text-gray-800">Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Protect what matters most with comprehensive insurance coverage designed for your peace of mind
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {insuranceProducts.map((product) => {
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
                        <IconComponent className="w-7 h-7 text-blue-900" />
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
                        <div className="text-xs text-gray-400 mb-1">Coverage</div>
                        <div className="text-sm font-bold text-white">{product.coverage}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Premium</div>
                        <div className="text-sm font-bold text-white">{product.premium}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Access</div>
                        <div className="text-sm font-bold text-white">{product.access}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>
                        {product.id === 'life-insurance' ? 'Get Life Cover' : 
                         product.id === 'home-insurance' ? 'Protect Home' : 
                         product.id === 'car-insurance' ? 'Get Car Quote' : 
                         product.id === 'travel-insurance' ? 'Cover Travel' : 
                         product.id === 'business-insurance' ? 'Protect Business' : 
                         product.id === 'health-insurance' ? 'Get Health Cover' : 'Get Quote'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Primeo Insurance */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Insurance?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {insuranceBenefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-blue-900" />
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

          {/* Insurance Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              Our Insurance <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Building trust through transparency, innovation, and unwavering commitment to our customers
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {insurancePhilosophy.map((philosophy) => (
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
                Ready to Get <span className="text-gray-300">Protected?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 1.5 million customers who trust us with their protection. Get a quote in under 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Get Protected Now</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Compare Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSolutionsPage;
