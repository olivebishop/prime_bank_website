'use client'
import React, { useState } from 'react';
import { Home, Check, ArrowRight, Shield, Target, Clock } from 'lucide-react';
import GrainOverlay from '@/components/shared/grainOverlay';
import { mortgageProducts } from '@/data/mortgages';

const MortgagesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay/>
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Your Perfect <span className="text-gray-800">Mortgage</span> Awaits
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re buying your first home or expanding your portfolio, we have competitive mortgage solutions tailored to your needs.
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {mortgageProducts.map((product) => {
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
                        <div className="text-xs text-gray-400 mb-1">Interest Rate</div>
                        <div className="text-sm font-bold text-white">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Min Deposit</div>
                        <div className="text-sm font-bold text-white">{product.minDeposit}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Max Loan</div>
                        <div className="text-sm font-bold text-white">{product.maxLoan}</div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {selectedProduct === product.id && (
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-bold text-white mb-3 leading-tight">Key Features</h4>
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="w-3 h-3 text-white mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300 leading-relaxed">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white mb-3 leading-tight">Benefits</h4>
                            <ul className="space-y-2">
                              {product.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="w-3 h-3 text-white mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300 leading-relaxed">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Simple Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm text-center transition-all duration-300 group hover:scale-105 hover:border-gray-700">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-blue-900" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">FCA Regulated</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Fully regulated and authorized by the Financial Conduct Authority</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm text-center transition-all duration-300 group hover:scale-105 hover:border-gray-700">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">Quick Decisions</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Get a mortgage decision in principle within 24 hours</p>
            </div>
            
            <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm text-center transition-all duration-300 group hover:scale-105 hover:border-gray-700">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-blue-900" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">Expert Advice</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Free mortgage advice from qualified specialists</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Ready to Find Your Perfect Home?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who&apos;ve found their dream home with our mortgage solutions. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Apply Now</span>
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

export default MortgagesPage;
