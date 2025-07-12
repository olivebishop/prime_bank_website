'use client'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyValues, companyStats, milestones, } from '@/data/about';
import GrainOverlay from "@/components/shared/grainOverlay"

const AboutUsPage = () => {
   

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-400">Primeo Bank</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Bridging continents through innovative financial solutions, connecting African ambition with British expertise
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-12 border border-blue-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Our <span className="text-blue-400">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                To empower individuals and businesses across Africa and the UK with accessible, innovative financial services 
                that drive economic growth, create opportunities, and build lasting prosperity for our communities.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              {companyStats.map((stat) => (
                <div key={stat.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-blue-400">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {companyValues.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div key={value.id} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

         
          {/* Company Timeline */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our <span className="text-blue-400">Journey</span>
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border-2 border-blue-400/30">
                      <span className="text-blue-400 font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Final CTA */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join <span className="text-blue-400">Our Journey?</span>
              </h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Discover how Primeo Bank can help you achieve your financial goals. Start your journey with us today.
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
                  <span className="relative text-black z-10">Open Account</span>
                  <ArrowRight className="relative w-5 h-5 text-black z-10" />
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
                  <span className="relative text-white z-10">Contact Us</span>
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