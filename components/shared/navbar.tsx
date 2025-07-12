"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowRight, ChevronDown, Shield,  User, Building2 } from "lucide-react"
import GrainOverlay from "@/components/shared/grainOverlay"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  ]

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
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

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
              <button className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Find Branch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="/"
              whileHover={{ scale: 1.02 }} 
              className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            >
              <div className="flex items-baseline">
                <span className="text-xl sm:text-2xl font-black text-foreground tracking-tight whitespace-nowrap">Prime</span>
                <span className="text-lg sm:text-xl font-black text-foreground ml-1 whitespace-nowrap">Bank</span>
              </div>
            </motion.a>

            {/* Desktop Navigation - Better Centered */}
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
                        ? "text-primary bg-primary/5" 
                        : "text-foreground hover:text-primary hover:bg-primary/5"
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
                        ? "text-primary bg-primary/5" 
                        : "text-foreground hover:text-primary hover:bg-primary/5"
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
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Mortgages
                </a>
                <a
                  href="/investments"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Investments
                </a>
                <a
                  href="/insurance"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Insurance
                </a>
                <a
                  href="/about-us"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  About Us
                </a>
                <a
                  href="/contact-us"
                  className="px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
                >
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Login Link - Hidden on Mobile */}
              <a
                href="#"
                className="hidden lg:block px-4 py-2.5 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 whitespace-nowrap rounded-md"
              >
                Login
              </a>
              
              {/* Open Account Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:flex bg-black text-white px-6 py-2.5 rounded-md text-sm xl:text-base font-medium hover:bg-black/90 transition-all duration-200 items-center gap-2 whitespace-nowrap"
              >
                <span>Open Account</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors flex-shrink-0"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Mega Menu */}
        <AnimatePresence>
          {(activeDropdown === "personal" || activeDropdown === "business") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-t shadow-lg relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Grain Overlay for Dropdown */}
              <GrainOverlay />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                {/* Section Header with Icon and Title */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
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
                    <h3 className="text-lg font-semibold text-foreground">
                      {activeDropdown === "personal" ? "Personal Banking" : "Business Banking"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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
                      className={`group p-6 rounded-lg hover:bg-accent/50 transition-all duration-200 border border-transparent hover:border-border/50 backdrop-blur-sm ${
                        activeDropdown === "personal" 
                          ? "hover:bg-blue-50/50" 
                          : "hover:bg-green-50/50"
                      }`}
                    >
                      <h4 className={`font-semibold mb-2 transition-colors ${
                        activeDropdown === "personal"
                          ? "text-foreground group-hover:text-blue-600"
                          : "text-foreground group-hover:text-green-600"
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t bg-white relative overflow-hidden"
            >
              {/* Grain Overlay for Mobile Menu */}
              <GrainOverlay />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-2 relative z-10">
                {/* Mobile Personal Banking */}
                <div className="border-b border-border/30 pb-4">
                  <button
                    onClick={() => handleDropdownToggle("mobile-personal")}
                    className="flex items-center justify-between w-full py-3 text-left font-medium text-foreground hover:text-primary transition-colors"
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
                  <AnimatePresence>
                    {activeDropdown === "mobile-personal" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 space-y-1 mt-2"
                      >
                        {personalBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Business Banking */}
                <div className="border-b border-border/30 pb-4">
                  <button
                    onClick={() => handleDropdownToggle("mobile-business")}
                    className="flex items-center justify-between w-full py-3 text-left font-medium text-foreground hover:text-primary transition-colors"
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
                  <AnimatePresence>
                    {activeDropdown === "mobile-business" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 space-y-1 mt-2"
                      >
                        {businessBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Regular Items */}
                <div className="space-y-1">
                  <a
                    href="/mortgages"
                    className="block py-3 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Mortgages
                  </a>
                  <a
                    href="/investments"
                    className="block py-3 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Investments
                  </a>
                  <a
                    href="/insurance"
                    className="block py-3 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Insurance
                  </a>
                  <a
                    href="/about-us"
                    className="block py-3 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="/contact-us"
                    className="block py-3 font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border/30 space-y-3">
                  <button
                    className="w-full py-3 text-left font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </button>
                  <button
                    className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Open Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar