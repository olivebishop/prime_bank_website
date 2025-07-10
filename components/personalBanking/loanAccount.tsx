'use client'
import React, { useState } from 'react';
import { CreditCard, ArrowRight, Calculator,  CheckCircle } from 'lucide-react';
import GrainOverlay from '@/components/shared/grainOverlay';
import { personalLoansData, loanBenefitsData } from '@/data/personalBanking/loans';

const PersonalLoansPage = () => {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      <GrainOverlay />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Personal <span className="text-blue-400">Loans</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Competitive rates for your personal projects. Borrow £1,000 to £50,000 with flexible terms and no hidden fees.
            </p>
            
            {/* Key Info Bar */}
            <div className="inline-flex items-center gap-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-gray-800/50">
              <div className="text-center">
                <div className="text-sm text-gray-400">Representative APR</div>
                <div className="text-lg font-bold text-blue-400">from 3.9%</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Borrow Amount</div>
                <div className="text-lg font-bold text-white">£1,000 - £50,000</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Repayment Terms</div>
                <div className="text-lg font-bold text-white">1-7 years</div>
              </div>
            </div>
          </div>

          {/* Loan Products Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {personalLoansData.map((loan) => {
                const IconComponent = loan.icon;
                return (
                  <div
                    key={loan.id}
                    className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      selectedLoan === loan.id 
                        ? 'border-green-500/50 shadow-lg shadow-green-500/10' 
                        : 'border-gray-800/50 hover:border-gray-700/50'
                    }`}
                    onClick={() => setSelectedLoan(selectedLoan === loan.id ? null : loan.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {loan.name}
                        </h3>
                        <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                          {loan.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {loan.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Borrow Amount</div>
                        <div className="text-lg font-bold text-blue-400">{loan.borrowAmount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">APR</div>
                        <div className="text-lg font-bold text-white">{loan.apr}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Term</div>
                        <div className="text-lg font-bold text-white">{loan.term}</div>
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
                      <span className="relative text-white z-10">Apply for Loan</span>
                      <ArrowRight className="relative w-4 h-4 text-white z-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Expanded Features */}
            {selectedLoan && (
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 mb-16">
                <h3 className="text-2xl font-bold text-white mb-6">
                  All Features - {personalLoansData.find(loan => loan.id === selectedLoan)?.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {personalLoansData.find(loan => loan.id === selectedLoan)?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Loan Benefits */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {loanBenefitsData.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Loan Calculator Preview */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quick Loan Calculator
                </h3>
                <p className="text-gray-400">
                  Get an estimate of your monthly repayments
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Example Loan</div>
                  <div className="text-2xl font-bold text-white">£10,000</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Over 3 Years</div>
                  <div className="text-2xl font-bold text-white">36 months</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-400 mb-2">Monthly Payment</div>
                  <div className="text-2xl font-bold text-blue-400">£295.24</div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-700 group overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800 transition-all duration-300 group-hover:bg-gray-700"></div>
                  <div 
                    className="absolute inset-0 opacity-15 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px'
                    }}
                  ></div>
                  <span className="relative text-white z-10 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Use Full Calculator
                  </span>
                </button>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Apply for Your Personal Loan?
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Quick online application with instant decisions. Get the funds you need within 24 hours of approval.
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
                  <span className="relative text-black z-10">Apply Now</span>
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
                  <span className="relative text-white z-10">Check Eligibility</span>
                </button>
              </div>
              
              {/* Disclaimer */}
              <div className="mt-8 text-xs text-gray-500 max-w-3xl mx-auto">
                <p className="mb-2">
                  Representative example: Borrowing £10,000 over 36 months with a representative APR of 3.9%, 
                  you would pay monthly instalments of £295.24 with a total amount payable of £10,628.64.
                </p>
                <p>
                  The rate you are offered will depend on your individual circumstances. 
                  Rates from 3.9% APR to 29.9% APR. Loans subject to status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoansPage;