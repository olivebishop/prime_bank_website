'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyValues, companyStats, milestones, } from '@/data/about';
import GrainOverlay from "@/components/shared/grainOverlay"

const AboutUsPage = () => {
   
  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              About <span className="text-gray-800">Primeo Bank</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Bridging continents through innovative financial solutions, connecting African ambition with British expertise
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center leading-tight">
                Our <span className="text-gray-300">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                To empower individuals and businesses across Africa and the UK with accessible, innovative financial services 
                that drive economic growth, create opportunities, and build lasting prosperity for our communities.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="mb-20">
            <div className="grid md:grid-cols-4 gap-6">
              {companyStats.map((stat) => (
                <div key={stat.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-bold text-white mb-2 leading-tight">{stat.label}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Our <span className="text-gray-800">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {companyValues.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.id} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">{value.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Our <span className="text-gray-800">Journey</span>
            </h2>
            
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center border-2 border-gray-800">
                      <span className="text-blue-900 font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700 flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 leading-tight">{milestone.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Ready to Join <span className="text-gray-300">Our Journey?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how Primeo Bank can help you achieve your financial goals. Start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-blue-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <span>Open Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Secondary CTA Button */}
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
