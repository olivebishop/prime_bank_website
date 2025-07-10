import React from 'react';
import { Shield, Clock, TrendingUp, Zap } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay"

const WhyPrimeBank = () => {
  const features = [
    {
      icon: Shield,
      title: "Award-Winning Security",
      description: "Bank-grade encryption and biometric authentication keep your money safe.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Get help whenever you need it with our round-the-clock support team.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Enjoy some of the best rates in the UK for savings and mortgages.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Innovation-First Approach",
      description: "Experience the future of banking with our cutting-edge technology.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4  bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
        {/* Grain Overlay */}
        <GrainOverlay />
  
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text ">
            Why Choose Prime Bank?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join millions of customers who trust Prime Bank for their financial needs. 
            Discover what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#242f43] backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 relative z-10`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-[#242f43] group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

             
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-slate-700/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-[#f5f6f8] rounded-full border-2 border-slate-800"></div>
              <div className="w-8 h-8 bg-[#007add] rounded-full border-2 border-slate-800"></div>
              <div className="w-8 h-8 bg-[#a5a6ab] rounded-full border-2 border-slate-800"></div>
            </div>
            <span className="text-slate-300 text-sm">
              Trusted by <span className="text-white font-semibold">2M+ customers</span> across the UK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrimeBank;