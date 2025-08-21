"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, Shield, User, Building2, Home, Briefcase, Facebook, Instagram } from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      href: "/business/commercial/finance",
    },
  ];

  const servicesItems = [
    {
      title: "Mortgages",
      description: "Home financing solutions with competitive rates",
      href: "/mortgages",
    },
    {
      title: "Investments",
      description: "Grow your wealth with our investment products",
      href: "/investments",
    },
    {
      title: "Insurance",
      description: "Protect what matters most to you",
      href: "/insurance",
    },
  ];

  const aboutItems = [
    {
      title: "About Us",
      description: "Learn about our history and values",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact-us",
    },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Improved hover handlers
  const handleMouseEnter = (dropdown: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

  // Handle dropdown container mouse events
  const handleDropdownMouseEnter = () => {
    // Clear the timeout when mouse enters dropdown
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves the dropdown area
    setActiveDropdown(null);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-3 text-sm relative overflow-hidden">
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
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/primebank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/primebank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/primebank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Follow us on X"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
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
            <Link 
              href="/"
              className="flex items-center gap-3 cursor-pointer flex-shrink-0 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black text-blue-900 tracking-tight whitespace-nowrap">Prime</span>
                <span className="text-lg sm:text-xl font-black text-blue-900 ml-1 whitespace-nowrap">Bank</span>
                <span className="text-sm sm:text-base font-bold text-blue-600 ml-2 whitespace-nowrap">Connect</span>
              </div>
            </Link>

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
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md cursor-pointer ${
                      activeDropdown === "personal" 
                        ? "text-blue-900 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <User className="w-4 h-4 flex-shrink-0" />
                    Personal
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
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md cursor-pointer ${
                      activeDropdown === "business" 
                        ? "text-blue-900 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    Business
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      activeDropdown === "business" ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>

                {/* Services Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md cursor-pointer ${
                      activeDropdown === "services" 
                        ? "text-blue-900 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 flex-shrink-0" />
                    Services
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>

                {/* About Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2.5 text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap rounded-md cursor-pointer ${
                      activeDropdown === "about" 
                        ? "text-blue-900 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    }`}
                  >
                    <Home className="w-4 h-4 flex-shrink-0" />
                    About
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`} />
                  </button>
                </div>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/login"
                className="hidden lg:block px-4 py-2.5 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 whitespace-nowrap rounded-md cursor-pointer"
              >
                Login
              </Link>
              
              <button className="hidden lg:flex bg-black text-white px-6 py-2.5 rounded-md text-sm xl:text-base font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 items-center gap-2 whitespace-nowrap cursor-pointer">
                <span>Open Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0 cursor-pointer"
              >
                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        {(activeDropdown === "personal" || activeDropdown === "business" || activeDropdown === "services" || activeDropdown === "about") && (
          <div
            className="absolute top-full left-0 w-full bg-white border-t shadow-lg relative overflow-hidden opacity-100 animate-fadeInDown z-50"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <GrainOverlay />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                <div className="p-3 rounded-lg bg-blue-50 text-blue-900">
                  {activeDropdown === "personal" ? (
                    <User className="w-5 h-5" />
                  ) : activeDropdown === "business" ? (
                    <Building2 className="w-5 h-5" />
                  ) : activeDropdown === "services" ? (
                    <Briefcase className="w-5 h-5" />
                  ) : (
                    <Home className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {activeDropdown === "personal" ? "Personal Banking" 
                     : activeDropdown === "business" ? "Business Banking"
                     : activeDropdown === "services" ? "Our Services"
                     : "About Prime Bank Connect"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {activeDropdown === "personal" 
                      ? "Banking solutions for your personal financial needs" 
                      : activeDropdown === "business"
                      ? "Professional banking services for your business"
                      : activeDropdown === "services"
                      ? "Comprehensive financial services and products"
                      : "Learn more about us and get in touch"
                    }
                  </p>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className={`grid grid-cols-1 ${
                activeDropdown === "about" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
              } gap-6`}>
                {(activeDropdown === "personal" ? personalBankingItems 
                  : activeDropdown === "business" ? businessBankingItems
                  : activeDropdown === "services" ? servicesItems
                  : aboutItems
                ).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 backdrop-blur-sm cursor-pointer"
                  >
                    <h4 className="font-semibold mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center text-sm font-medium text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
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
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-900" />
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
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Business Banking */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleDropdownToggle("mobile-business")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-blue-900 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-blue-900" />
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
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Services */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleDropdownToggle("mobile-services")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-blue-900 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-blue-900" />
                    Services
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-services" && (
                  <div className="pl-8 space-y-1 mt-2 animate-slideDown">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleDropdownToggle("mobile-about")}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-blue-900 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-blue-900" />
                    About
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === "mobile-about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-about" && (
                  <div className="pl-8 space-y-1 mt-2 animate-slideDown">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <Link
                  href="/login"
                  className="block w-full py-3 text-left font-medium text-blue-900 hover:text-gray-700 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <button
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
