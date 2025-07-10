'use client'
import React, { useState } from 'react';
import { CreditCard, Check, ArrowRight, Shield, Gift } from 'lucide-react';
import { creditCards } from '@/data/personalBanking/creditCards';
import GrainOverlay from '@/components/shared/grainOverlay';

const CreditCardsPage = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
;

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart <span className="text-blue-400">Credit</span> Cards
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our range of credit cards with competitive rates, rewards, and exclusive benefits.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {creditCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      selectedCard === card.id 
                        ? 'border-green-500/50 shadow-lg shadow-green-500/10' 
                        : 'border-gray-800/50 hover:border-gray-700/50'
                    }`}
                    onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {card.name}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Cashback/Rewards</div>
                        <div className="text-lg font-bold text-blue-400">{card.cashback}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">APR</div>
                        <div className="text-lg font-bold text-white">{card.apr}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Annual Fee</div>
                        <div className="text-lg font-bold text-white">{card.annualFee}</div>
                      </div>
                    </div>

                    {/* Features - Only show when selected */}
                    {selectedCard === card.id && (
                      <div className="mb-6 animate-in slide-in-from-top-2 duration-300">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {card.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
                      <span className="relative text-white z-10">Apply Now</span>
                      <ArrowRight className="relative w-4 h-4 text-white z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Simple Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Fraud Protection</h4>
                <p className="text-gray-400">Advanced security with zero liability guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Instant Approval</h4>
                <p className="text-gray-400">Get a decision in 60 seconds online</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Exclusive Rewards</h4>
                <p className="text-gray-400">Earn cashback and points on every purchase</p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Apply for Your Credit Card?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get instant approval and start earning rewards today. Apply online in just minutes with our secure application process.
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
                  <CreditCard className="relative w-6 h-6 text-black z-10" />
                  <span className="relative text-black z-10">Apply Today</span>
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
                  <span className="relative text-white z-10">Compare Cards</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardsPage;