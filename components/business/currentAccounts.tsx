'use client'
import React, { useState } from 'react';
import { ArrowRight, CreditCard, CheckCircle, } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay";
import { businessAccounts, accountBenefits, businessPhilosophy } from '@/data/business/current';

// Mock data for business accounts


const BusinessCurrentAccountsPage = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Business <span className="text-gray-800">Current Accounts</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Powerful banking solutions designed to fuel your business growth and simplify your financial operations
            </p>
          </div>

          {/* Accounts Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {businessAccounts.map((account) => {
                const IconComponent = account.icon;
                return (
                  <div
                    key={account.id}
                    className={`p-8 rounded-xl border bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 cursor-pointer ${
                      selectedAccount === account.id 
                        ? 'border-gray-600 shadow-lg' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedAccount(selectedAccount === account.id ? null : account.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-blue-900" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {account.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {account.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Monthly Fee</div>
                        <div className="text-sm font-bold text-white">{account.monthlyFee}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Transactions</div>
                        <div className="text-sm font-bold text-white">{account.transactions}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Features</div>
                        <div className="text-sm font-bold text-white">{account.features}</div>
                      </div>
                    </div>

                    {/* Benefits List - shown when selected */}
                    {selectedAccount === account.id && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Benefits</div>
                        <div className="space-y-2">
                          {account.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>
                        {account.id === 'starter-business' ? 'Start Free Account' : 
                         account.id === 'growth-business' ? 'Choose Growth' : 
                         account.id === 'premium-business' ? 'Go Premium' : 
                         account.id === 'enterprise-business' ? 'Contact Sales' : 'Open Account'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Prime Business Banking */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Business Banking?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {accountBenefits.map((benefit) => {
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

          {/* Business Banking Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              Our Business Banking <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with intelligent banking solutions that adapt to your growth journey
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {businessPhilosophy.map((philosophy) => (
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
                Ready to <span className="text-gray-300">Power Your Business?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 500,000 businesses that trust us with their banking. Open your account in under 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Open Account Now</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Compare Accounts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCurrentAccountsPage;
