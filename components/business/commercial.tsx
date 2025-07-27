'use client'
import React, { useState } from 'react';
import {  ArrowRight,  CheckCircle,  DollarSign } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay";
import { commercialFinanceProducts, financeServices, commercialBenefits, financePhilosophy } from '@/data/business/commercial';

// Mock data for commercial finance products


const CommercialFinancePage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Commercial <span className="text-gray-800">Finance</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Property & asset finance solutions designed to unlock your commercial potential with competitive rates and expert guidance
            </p>
          </div>

          {/* Finance Products Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {commercialFinanceProducts.map((product) => {
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
                        <div className="text-xs text-gray-400 mb-1">Amount</div>
                        <div className="text-sm font-bold text-white">{product.amount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Rate</div>
                        <div className="text-sm font-bold text-white">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Term</div>
                        <div className="text-sm font-bold text-white">{product.term}</div>
                      </div>
                    </div>

                    {/* Benefits List - shown when selected */}
                    {selectedProduct === product.id && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Benefits</div>
                        <div className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>
                        {product.id === 'commercial-mortgage' ? 'Get Mortgage Quote' : 
                         product.id === 'property-development' ? 'Discuss Project' : 
                         product.id === 'asset-finance' ? 'Finance Assets' : 
                         product.id === 'bridging-finance' ? 'Get Bridge Quote' : 'Get Quote'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Finance Services */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Additional <span className="text-gray-800">Finance Services</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financeServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 leading-tight">{service.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Prime Commercial Finance */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Commercial Finance?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {commercialBenefits.map((benefit) => {
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

          {/* Commercial Finance Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Our Commercial Finance <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Empowering commercial success through intelligent financing and strategic partnerships
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {financePhilosophy.map((philosophy) => (
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
                Ready to <span className="text-gray-300">Unlock Your Potential?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Partner with our commercial finance experts to secure the funding your business needs. Get a tailored quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Get Finance Quote</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Speak to Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialFinancePage;