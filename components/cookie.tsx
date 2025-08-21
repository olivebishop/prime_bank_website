'use client'
import React, { useState } from 'react';
import { Cookie,  } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay"
import { cookieCategories, cookieTypes, managementOptions } from '@/data/cookiesData';

const CookiePolicyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 mb-6 leading-tight">
              Cookie <span className="text-gray-800">Policy</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to improve your banking experience
            </p>
            <div className="mt-6 text-sm text-gray-600">
              Last updated: January 2025
            </div>
          </div>

          {/* What are Cookies */}
          <div className="mb-20">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-7 h-7 text-blue-900" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    What are <span className="text-gray-300">Cookies?</span>
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Cookies are small text files stored on your device when you visit our website. They help us provide you with a better, more secure, and personalized banking experience. We also use similar technologies like web beacons, pixels, and local storage.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Prime Bank uses cookies in compliance with UK and EU cookie laws, and we always ask for your consent before setting non-essential cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Categories */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Cookie <span className="text-gray-800">Categories</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {cookieCategories.map((category) => {
                const IconComponent = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <div
                    key={category.id}
                    className={`p-8 rounded-xl border bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] cursor-pointer ${
                      isSelected 
                        ? 'border-gray-600 shadow-lg' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-blue-900" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          category.canDisable 
                            ? 'bg-yellow-900 text-yellow-200' 
                            : 'bg-red-900 text-red-200'
                        }`}>
                          {category.canDisable ? 'OPTIONAL' : 'REQUIRED'}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>

                      {isSelected && (
                        <div className="space-y-3 pt-4 border-t border-gray-700">
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Purpose</div>
                            <div className="text-sm text-white">{category.purpose}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Examples</div>
                            <div className="text-sm text-white">{category.examples}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Retention</div>
                            <div className="text-sm text-white">{category.retention}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12 leading-tight">
              Types of <span className="text-gray-800">Cookies</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((cookieType, index) => {
                const IconComponent = cookieType.icon;
                return (
                  <div key={index} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">{cookieType.type}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{cookieType.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center leading-tight">
              Managing Your <span className="text-gray-800">Cookies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-6">How to Manage Cookies:</h4>
                <div className="space-y-3">
                  {managementOptions.map((option, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{option}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-6">Important Notes:</h4>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Disabling cookies may affect website functionality and your ability to access certain features of our online banking services.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Essential cookies cannot be disabled as they are necessary for security and basic website operation.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your cookie preferences are remembered and can be changed at any time through our cookie banner or preferences center.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-20">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                Third-Party <span className="text-gray-300">Services</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We use trusted third-party services that may set their own cookies. These include:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Analytics</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Google Analytics</li>
                    <li>• Microsoft Clarity</li>
                    <li>• Hotjar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Security</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Cloudflare</li>
                    <li>• reCAPTCHA</li>
                    <li>• Fraud detection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-3">Support</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Live chat widgets</li>
                    <li>• Customer feedback</li>
                    <li>• Help desk tools</li>
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

export default CookiePolicyPage;
