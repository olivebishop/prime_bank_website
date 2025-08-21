import React from 'react';
import { Shield, Clock, TrendingUp, Zap } from 'lucide-react';

const WhyPrimeBank = () => {
  const features = [
    {
      icon: Shield,
      title: "Award-Winning Security",
      description: "Bank-grade encryption and biometric authentication keep your money safe.",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Get help whenever you need it with our round-the-clock support team.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Enjoy some of the best rates in the UK for savings and mortgages.",
    },
    {
      icon: Zap,
      title: "Innovation-First Approach",
      description: "Experience the future of banking with our cutting-edge technology.",
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Why Choose Prime Bank?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join millions of customers who trust Prime Bank for their financial needs. 
            Discover what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-blue-900 backdrop-blur-sm rounded-2xl p-8 text-white border border-blue-700 hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white text-blue-900 mb-6 relative z-10">
                <feature.icon className="w-8 h-8" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gray-900 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800"></div>
            </div>
            <span className="text-gray-300 text-sm">
              Trusted by <span className="text-white font-semibold">2M+ customers</span> across the UK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrimeBank;
