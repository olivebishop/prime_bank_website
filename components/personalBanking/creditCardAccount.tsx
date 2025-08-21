'use client'
import React, { useState } from 'react';
import { CreditCard, ArrowRight, CheckCircle } from 'lucide-react';
import { creditCards , cardBenefits, cardPhilosophy } from '@/data/personalBanking/creditCards';
import GrainOverlay from '@/components/shared/grainOverlay';


const CreditCardsPage = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Smart <span className="text-gray-800">Credit Cards</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose from our range of credit cards with competitive rates, rewards, and exclusive benefits designed for your lifestyle
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {creditCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`p-8 rounded-xl border bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 cursor-pointer ${
                      selectedCard === card.id 
                        ? 'border-gray-600 shadow-lg' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedCard(selectedCard === card.id ? null : card.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-blue-900" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {card.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Cashback/Rewards</div>
                        <div className="text-sm font-bold text-white">{card.cashback}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">APR</div>
                        <div className="text-sm font-bold text-white">{card.apr}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Annual Fee</div>
                        <div className="text-sm font-bold text-white">{card.annualFee}</div>
                      </div>
                    </div>

                    {/* Features List - shown when selected */}
                    {selectedCard === card.id && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Features</div>
                        <div className="space-y-2">
                          {card.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>
                        {card.id === 'cashback-card' ? 'Apply for Cashback' : 
                         card.id === 'rewards-card' ? 'Get Rewards Card' : 
                         card.id === 'student-card' ? 'Apply as Student' : 
                         card.id === 'business-card' ? 'Get Business Card' : 'Apply Now'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Prime Credit Cards */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Credit Cards?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {cardBenefits.map((benefit) => {
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

          {/* Credit Card Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              Our Credit Card <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Building financial freedom through responsible credit and rewarding experiences
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {cardPhilosophy.map((philosophy) => (
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
                Ready to <span className="text-gray-300">Apply for Your Card?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get instant approval and start earning rewards today. Apply online in just minutes with our secure application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Apply Today</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Compare Cards
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