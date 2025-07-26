"use client"

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown, Shield, User, Building2 } from "lucide-react";

const GrainOverlay = () => (
  <div 
    className="absolute inset-0 opacity-[0.15] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      mixBlendMode: 'multiply'
    }}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const personalBankingItems = [
    {
      title: "Current Accounts",
      description: "Everyday banking made simple with no monthly fees",
      href: "/personal-banking/current-accounts",
    },
    {
      title: "Savings",
      description: "Grow your money with competitive rates up to 4.75% AER",
      href: "/personal-banking/saving-accounts",
    },
    {
      title: "Credit Cards",
      description: "Flexible spending with 0% purchase rates",
      href: "/personal-banking/credit-cards",
    },
    {
      title: "Personal Loans",
      description: "Achieve your goals with rates from 3.9% APR",
      href: "/personal-banking/loans",
    },
  ];

  const businessBankingItems = [
    {
      title: "Business Current Accounts",
      description: "Banking that works for your business growth",
      href: "/business/current-accounts",
    },
    {
      title: "Business Loans",
      description: "Fuel your business growth with competitive rates",
      href: "/business/loans",
    },
    {
      title: "Commercial Finance",
      description: "Property & asset finance solutions",
      href: "/business/finance",
    },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-3 text-sm relative overflow-hidden">
        <GrainOverlay/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                FSCS Protected up to £85,000
              </span>
              <span className="hidden md:block">FCA Regulated • Established 1987</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden sm:block">24/7 Support: 0800 123 4567</span>
              <button className="text-white hover:text-gray-200 transition-colors">
                Find Branch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a 
              href="/"
              className="flex items-center gap-3 cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black text-black tracking-tight whitespace-nowrap">Prime</span>
                <span className="text-lg sm:text-xl font-black text-black ml-1 whitespace-nowrap">Bank</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-1 xl:gap-2">
                {/* Personal Banking Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("personal")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md ${
                      activeDropdown === "personal" 
                        ? "text-black bg-gray-100" 
                        : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    Personal Banking
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      activeDropdown === "personal" ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>

                {/* Business Banking Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("business")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md ${
                      activeDropdown === "business" 
                        ? "text-black bg-gray-100" 
                        : "text-gray-700 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    Business Banking
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      activeDropdown === "business" ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>

                {/* Regular Navigation Items */}
                <a
                  href="/mortgages"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Mortgages
                </a>
                <a
                  href="/investments"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Investments
                </a>
                <a
                  href="/insurance"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Insurance
                </a>
                <a
                  href="/about-us"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  About Us
                </a>
                <a
                  href="/contact-us"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Login Link */}
              <a
                href="#"
                className="hidden lg:block px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-200 whitespace-nowrap rounded-md"
              >
                Login
              </a>
              
              {/* Open Account Button */}
              <button className="hidden lg:flex bg-black text-white px-6 py-2.5 rounded-md text-sm xl:text-base font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 items-center gap-2 whitespace-nowrap">
                <span>Open Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        {(activeDropdown === "personal" || activeDropdown === "business") && (
          <div
            className="absolute top-full left-0 w-full bg-white border-t shadow-lg relative overflow-hidden opacity-0 animate-fadeInDown"
            onMouseEnter={() => handleMouseEnter(activeDropdown || "")}
            onMouseLeave={handleMouseLeave}
          >
            <GrainOverlay />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                <div className={`p-3 rounded-lg ${
                  activeDropdown === "personal" 
                    ? "bg-blue-50 text-blue-600" 
                    : "bg-green-50 text-green-600"
                }`}>
                  {activeDropdown === "personal" ? (
                    <User className="w-5 h-5" />
                  ) : (
                    <Building2 className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {activeDropdown === "personal" ? "Personal Banking" : "Business Banking"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {activeDropdown === "personal" 
                      ? "Banking solutions for your personal financial needs" 
                      : "Professional banking services for your business"
                    }
                  </p>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(activeDropdown === "personal" ? personalBankingItems : businessBankingItems).map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`group p-6 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 backdrop-blur-sm ${
                      activeDropdown === "personal" 
                        ? "hover:bg-blue-50/50" 
                        : "hover:bg-green-50/50"
                    }`}
                  >
                    <h4 className={`font-semibold mb-2 transition-colors ${
                      activeDropdown === "personal"
                        ? "text-black group-hover:text-blue-600"
                        : "text-black group-hover:text-green-600"
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                    <div className={`flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
                      activeDropdown === "personal" ? "text-blue-600" : "text-green-600"
                    }`}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white relative overflow-hidden animate-slideDown">
            <GrainOverlay />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-2 relative z-10">
              {/* Mobile Personal Banking */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleDropdownToggle("mobile-personal")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-black hover:text-gray-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Banking
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === "mobile-personal" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-personal" && (
                  <div className="pl-8 space-y-1 mt-2 animate-slideDown">
                    {personalBankingItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Business Banking */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleDropdownToggle("mobile-business")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-black hover:text-gray-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-green-600" />
                    Business Banking
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === "mobile-business" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-business" && (
                  <div className="pl-8 space-y-1 mt-2 animate-slideDown">
                    {businessBankingItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Regular Items */}
              <div className="space-y-1">
                <a
                  href="/mortgages"
                  className="block py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mortgages
                </a>
                <a
                  href="/investments"
                  className="block py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Investments
                </a>
                <a
                  href="/insurance"
                  className="block py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Insurance
                </a>
                <a
                  href="/about-us"
                  className="block py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/contact-us"
                  className="block py-3 font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <button
                  className="w-full py-3 text-left font-medium text-black hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
                <button
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span>Open Account</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

    
    </>
  );
};

export default Navbar;