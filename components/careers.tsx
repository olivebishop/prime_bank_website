'use client'
import React from 'react';
import { Briefcase, Users, Globe, TrendingUp, Heart, Award, Mail, MapPin } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay"

const CareersPage = () => {
  const benefits = [
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities, mentorship programs, and clear advancement paths to help you reach your potential.'
    },
    {
      id: 'balance',
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, generous leave policies, and wellness programs to support your personal well-being.'
    },
    {
      id: 'innovation',
      icon: Award,
      title: 'Innovation Culture',
      description: 'Be part of cutting-edge fintech initiatives and help shape the future of banking with the latest technologies.'
    },
    {
      id: 'diversity',
      icon: Users,
      title: 'Diverse & Inclusive',
      description: 'Join a multicultural team that values different perspectives and creates an environment where everyone can thrive.'
    }
  ];

  const values = [
    'Customer-first approach in everything we do',
    'Innovation through collaboration and creativity',
    'Integrity and transparency in all our actions',
    'Excellence in service delivery and solutions',
    'Respect for diversity and individual contributions',
    'Sustainability and social responsibility'
  ];

  const locations = [
    {
      city: 'London, UK',
      description: 'Our headquarters with opportunities across all departments',
      icon: MapPin
    },
    {
      city: 'Nairobi, Kenya',
      description: 'Regional hub with focus on African market expansion',
      icon: MapPin
    },
    {
      city: 'Remote',
      description: 'Flexible remote positions available globally',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Build Your <span className="text-gray-800">Career</span> With Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team thatk&apos;s transforming banking across the UK and Kenya. Shape the future of finance while growing your career.
            </p>
          </div>

          {/* Current Status */}
          <div className="mb-20">
            <div className="p-12 rounded-xl border border-gray-800 bg-black backdrop-blur-sm text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Wek&apos;re Not Hiring <span className="text-gray-300">Right Now</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                While we donk&apos;t have any open positions at the moment, wek&apos;re always interested in connecting with talented individuals who share our vision for the future of banking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center cursor-pointer">
                <button className="px-8 py-4 cursor-pointer rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Join Our Talent Pool</span>
                </button>
                
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Why Work <span className="text-gray-800">With Prime Bank?</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={benefit.id}
                    className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-black" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Our <span className="text-gray-800">Values</span>
            </h2>
            
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
                Our values guide everything we do and shape the culture wek&apos;re building together:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Where We <span className="text-gray-800">Work</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location, index) => {
                const IconComponent = location.icon;
                return (
                  <div key={index} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 leading-tight">{location.city}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{location.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Future Opportunities */}
          <div className="mb-20">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center leading-tight">
                Future <span className="text-gray-300">Opportunities</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                While wek&apos;re not actively recruiting, we&apos;re always planning ahead. Here are the types of roles we typically look for:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
                  <h4 className="text-white font-bold mb-3">Technology</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Software Engineers</li>
                    <li>• DevOps Engineers</li>
                    <li>• Data Scientists</li>
                    <li>• Cybersecurity Specialists</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
                  <h4 className="text-white font-bold mb-3">Banking</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Relationship Managers</li>
                    <li>• Credit Analysts</li>
                    <li>• Compliance Officers</li>
                    <li>• Risk Management</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-lg bg-gray-900 border border-gray-700">
                  <h4 className="text-white font-bold mb-3">Business</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Product Managers</li>
                    <li>• Business Analysts</li>
                    <li>• Marketing Specialists</li>
                    <li>• Customer Success</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>     
        </div>
      </div>
    </div>
  );
};

export default CareersPage;