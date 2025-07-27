'use client'
import React, { useState } from 'react';
import { CreditCard, ArrowRight, CheckCircle } from 'lucide-react';
import { currentAccountsData, whyChooseUsData, accountPhilosophy } from '@/data/personalBanking/currentAccount';
import GrainOverlay from '@/components/shared/grainOverlay';

const CurrentAccountsPage = () => {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Current <span className="text-gray-800">Accounts</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Fee-free everyday banking with smart features to help you manage your money better and achieve your financial goals
            </p>
          </div>

          {/* Accounts Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {currentAccountsData.map((account) => {
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
                        <IconComponent className="w-7 h-7 text-black" />
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
                        <div className="text-xs text-gray-400 mb-1">Overdraft</div>
                        <div className="text-sm font-bold text-white">{account.overdraft}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Rating</div>
                        <div className="text-sm font-bold text-white">{account.rating}★</div>
                      </div>
                    </div>

                    {/* Features List - shown when selected */}
                    {selectedAccount === account.id && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Features</div>
                        <div className="space-y-2">
                          {account.features.map((feature, index) => (
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
                      <span>
                        {account.id === 'everyday-account' ? 'Open Everyday Account' : 
                         account.id === 'premium-account' ? 'Get Premium Account' : 
                         account.id === 'student-account' ? 'Open Student Account' : 
                         account.id === 'digital-account' ? 'Go Digital' : 'Open Account'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Prime Current Accounts */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Current Accounts?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUsData.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
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

          {/* Current Account Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Our Banking <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Empowering your financial journey with innovative banking that puts you in control
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {accountPhilosophy.map((philosophy) => (
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
                Ready to <span className="text-gray-300">Switch to Better Banking?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join over 3 million customers who trust us with their everyday banking. Switch in just a few minutes with our account switching service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
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

export default CurrentAccountsPage;