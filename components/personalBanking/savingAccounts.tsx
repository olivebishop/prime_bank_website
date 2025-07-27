'use client'
import React, { useState } from 'react';
import { PiggyBank,  ArrowRight, CheckCircle } from 'lucide-react';
import GrainOverlay from '@/components/shared/grainOverlay';
import { savingsProducts, savingsBenefits  } from '@/data/personalBanking/savings';

// Define the extended product type with features
interface SavingsProductWithFeatures {
  id: string;
  name: string;
  description: string;
  rate: string;
  minBalance: string;
  access: string;
  icon: React.ComponentType<{ className?: string }>;
  features?: string[];
}

const SavingsAccountsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Smart <span className="text-gray-800">Savings</span> Accounts
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect savings solution for your financial goals with competitive rates and flexible access
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {savingsProducts.map((product) => {
                const IconComponent = product.icon;
                const productWithFeatures = product as SavingsProductWithFeatures;
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
                        <div className="text-xs text-gray-400 mb-1">Interest Rate</div>
                        <div className="text-sm font-bold text-white">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Min Balance</div>
                        <div className="text-sm font-bold text-white">{product.minBalance}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Access</div>
                        <div className="text-sm font-bold text-white">{product.access}</div>
                      </div>
                    </div>

                    {/* Features List - shown when selected */}
                    {selectedProduct === product.id && productWithFeatures.features && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Features</div>
                        <div className="space-y-2">
                          {productWithFeatures.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>Open Account</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Prime Savings */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Savings?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {savingsBenefits.map((benefit) => {
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

          {/* Final CTA */}
          <div className="text-center">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Ready to <span className="text-gray-300">Start Earning More?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 2 million customers who trust us with their savings. Open your account online in just 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <PiggyBank className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Start Saving Today</span>
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

export default SavingsAccountsPage;