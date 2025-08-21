'use client'
import React, { useState } from 'react';
import { CreditCard, ArrowRight, CheckCircle } from 'lucide-react';
import { personalLoansData, loanBenefitsData,  loanPhilosophy  } from '@/data/personalBanking/loans';
import GrainOverlay from '@/components/shared/grainOverlay';



const PersonalLoansPage = () => {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Personal <span className="text-gray-800">Loans</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Competitive rates for your personal projects. Borrow £1,000 to £50,000 with flexible terms and no hidden fees.
            </p>
            
            {/* Key Info Bar */}
            <div className="inline-flex items-center gap-6 bg-black rounded-xl px-8 py-4 border border-gray-800">
              <div className="text-center">
                <div className="text-sm text-gray-400">Representative APR</div>
                <div className="text-lg font-bold text-white">from 3.9%</div>
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

          {/* Loans Grid */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {personalLoansData.map((loan) => {
                const IconComponent = loan.icon;
                return (
                  <div
                    key={loan.id}
                    className={`p-8 rounded-xl border bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 cursor-pointer ${
                      selectedLoan === loan.id 
                        ? 'border-gray-600 shadow-lg' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedLoan(selectedLoan === loan.id ? null : loan.id)}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-blue-900" />
                      </div>
                      
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {loan.name}
                        </h3>
                        <span className="text-xs font-bold text-gray-300 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                          {loan.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {loan.description}
                      </p>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Borrow Amount</div>
                        <div className="text-sm font-bold text-white">{loan.borrowAmount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">APR</div>
                        <div className="text-sm font-bold text-white">{loan.apr}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Term</div>
                        <div className="text-sm font-bold text-white">{loan.term}</div>
                      </div>
                    </div>

                    {/* Features List - shown when selected */}
                    {selectedLoan === loan.id && (
                      <div className="mb-6 border-t border-gray-700 pt-4">
                        <div className="text-xs text-gray-400 mb-3">Key Features</div>
                        <div className="space-y-2">
                          {loan.features.map((feature, index) => (
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
                        {loan.id === 'personal-loan' ? 'Apply for Personal Loan' : 
                         loan.id === 'home-improvement' ? 'Get Home Loan' : 
                         loan.id === 'car-loan' ? 'Finance Your Car' : 
                         loan.id === 'debt-consolidation' ? 'Consolidate Debts' : 'Apply for Loan'}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Why Choose <span className="text-gray-800">Prime Personal Loans?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {loanBenefitsData.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
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

          {/* Personal Loans Philosophy */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              Our Lending <span className="text-gray-800">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Supporting your personal goals through responsible lending and exceptional service
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {loanPhilosophy.map((philosophy) => (
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
                Ready to <span className="text-gray-300">Apply for Your Loan?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Quick online application with instant decisions. Get the funds you need within 24 hours of approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Apply Now</span>
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Check Eligibility
                </button>
              </div>
              
              {/* Disclaimer */}
              <div className="mt-8 text-xs text-gray-400 max-w-3xl mx-auto">
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
