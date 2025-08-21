import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import GrainOverlay from './grainOverlay';



const CTASection = () => {
  return (
    <section className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Grain Overlay */}
      <GrainOverlay />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
            Ready to <span className="text-gray-800">Get Started?</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl text-blue-800 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of satisfied customers and experience the future of banking today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Open Account */}
            <button className="group relative bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
              <span>Open Account Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Secondary CTA - Schedule Call */}
            <button className="group relative bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default CTASection;
