'use client'
import { FileText, AlertCircle } from 'lucide-react';
import GrainOverlay from "@/components/shared/grainOverlay"

import { termsSection, importantNotices } from '@/data/terms';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Terms & <span className="text-gray-800">Conditions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully as they govern your use of Prime Connect services
            </p>
            <div className="mt-6 text-sm text-gray-600">
              Last updated: January 2025
            </div>
          </div>

          {/* Main Terms Sections */}
          <div className="mb-20">
            <div className="grid gap-6">
              {termsSection.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={section.id}
                    className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                          {section.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12 leading-tight">
              Detailed <span className="text-gray-800">Terms</span>
            </h2>
            
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">1. Eligibility</h4>
                  <p className="text-gray-300 leading-relaxed">
                    To open an account with Prime Connect, you must be at least 18 years old, have legal capacity to enter into contracts, and provide required identification and documentation. Business accounts require additional verification.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">2. Account Security</h4>
                  <p className="text-gray-300 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials. Use strong passwords, enable two-factor authentication where available, and never share your login information with third parties.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">3. Transaction Limits</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Daily transaction limits apply to various services for security purposes. These limits may vary based on account type, verification level, and regulatory requirements. Limits can be reviewed and adjusted upon request.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">4. Liability and Disputes</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Prime Connect&apos;s liability is limited as set forth in these terms and applicable law. For transaction disputes, please contact us immediately. We will investigate and resolve disputes in accordance with banking regulations and our internal procedures.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">5. Termination</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Either party may terminate the banking relationship with appropriate notice. Upon termination, you remain liable for any outstanding obligations, and we will return your funds according to applicable procedures and regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notices */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center leading-tight">
              Important <span className="text-gray-800">Notices</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {importantNotices.map((notice, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02] hover:border-gray-700">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-sm leading-relaxed">{notice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Questions About <span className="text-gray-300">These Terms?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group">
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Contact Support</span>
                </button>
                <button className="px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 text-white bg-transparent transition-all duration-300 hover:scale-105 hover:border-gray-600">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;