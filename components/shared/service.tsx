"use client"
import React from 'react';
import { CreditCard, PiggyBank, Home, TrendingUp, Smartphone, Users, Building2 } from "lucide-react";

const ServicesSection = () => {
  const personalServices = [
    {
      icon: CreditCard,
      title: "Current Accounts",
      description: "Fee-free everyday banking with instant notifications and budgeting tools",
      features: ["No monthly fees", "Contactless payments", "Mobile banking"],
    },
    {
      icon: PiggyBank,
      title: "Savings & ISAs",
      description: "Competitive rates up to 4.75% AER with flexible access options",
      features: ["Tax-free ISAs", "Regular savers", "Instant access"],
    },
    {
      icon: Home,
      title: "Mortgages",
      description: "First-time buyer friendly with rates from 3.99% and up to 95% LTV",
      features: ["First-time buyer", "Remortgage deals", "Buy-to-let"],
    },
    {
      icon: TrendingUp,
      title: "Investments",
      description: "ISAs, pensions, and investment accounts with expert guidance",
      features: ["Stocks & shares ISA", "SIPP pensions", "Robo-advisor"],
    },
  ];

  const businessServices = [
    {
      icon: Building2,
      title: "Business Banking",
      description: "Comprehensive business accounts with integrated payment solutions",
      features: ["Free business banking", "Payment processing", "Multi-user access"],
    },
    {
      icon: Users,
      title: "Commercial Finance",
      description: "Asset finance, invoice factoring, and commercial mortgages",
      features: ["Equipment finance", "Invoice factoring", "Commercial loans"],
    },
  ];

  return (
    <section className="py-20 bg-gray-200  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            Banking <span className="text-gray-800">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From everyday banking to complex financial planning, we offer comprehensive solutions for individuals and
            businesses across the UK.
          </p>
        </div>

        {/* Personal Banking Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-black" />
            Personal Banking
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={service.title}
                  className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-200 flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Banking Services */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-black" />
            Business Banking
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {businessServices.map((service) => {
              const IconComponent = service.icon;

              return (
                <div
                  key={service.title}
                  className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-black" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 leading-tight">{service.title}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-200 flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-900 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-800"></div>
            </div>
            <span className="text-gray-300 text-sm">
              Serving <span className="text-white font-semibold">500K+ businesses</span> nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;