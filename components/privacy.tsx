'use client'
import React from 'react';
import { Shield,  } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay"
import { privacySections, dataTypes, yourRights } from '@/data/privacy';

const PrivacyPolicyPage = () => {
  

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Privacy <span className="text-gray-800">Policy</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-600">
              Last updated: January 2025
            </div>
          </div>

          {/* Privacy Overview */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-6">
              {privacySections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-blue-900" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data We Collect */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Data We <span className="text-gray-800">Collect</span>
            </h2>
            
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We collect various types of information to provide you with secure and personalized banking services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {dataTypes.map((dataType, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{dataType}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Your <span className="text-gray-800">Rights</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-6">Under GDPR & Data Protection Laws:</h4>
                <div className="space-y-3">
                  {yourRights.map((right, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{right}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-6">How to Exercise Your Rights:</h4>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Contact our Data Protection Officer at privacy@primebank.com or use our secure customer portal to submit requests.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We will respond to your request within 30 days and may require identity verification for security purposes.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Some rights may be limited by legal obligations or legitimate business interests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              International <span className="text-gray-800">Transfers</span>
            </h3>
            
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                As an international bank operating in the UK and Kenya, we may transfer your data between our offices and authorized service providers in different countries.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Safeguards:</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 text-sm">• Adequacy decisions by relevant authorities</li>
                    <li className="text-gray-300 text-sm">• Standard Contractual Clauses (SCCs)</li>
                    <li className="text-gray-300 text-sm">• Binding Corporate Rules</li>
                    <li className="text-gray-300 text-sm">• Appropriate technical and organizational measures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Your Control:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You can contact us to learn more about the safeguards we use for international transfers or to exercise your rights regarding such transfers.
                  </p>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
