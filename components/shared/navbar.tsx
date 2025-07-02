"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowRight, ChevronDown, Shield, Phone, MapPin, Clock } from "lucide-react"

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
      href: "/personal/current-accounts",
    },
    {
      title: "Savings & ISAs",
      description: "Grow your money with competitive rates up to 4.75% AER",
      href: "/personal/savings",
    },
    {
      title: "Credit Cards",
      description: "Flexible spending with 0% purchase rates",
      href: "/personal/credit-cards",
    },
    {
      title: "Personal Loans",
      description: "Achieve your goals with rates from 3.9% APR",
      href: "/personal/loans",
    },
    {
      title: "Overdrafts",
      description: "Financial flexibility when you need it most",
      href: "/personal/overdrafts",
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
    {
      title: "Business Credit Cards",
      description: "Expense management made easy",
      href: "/business/credit-cards",
    },
  ]

  const supportItems = [
    {
      title: "Contact Us",
      description: "Get in touch with our UK-based support team",
      href: "/support/contact",
      icon: Phone,
    },
    {
      title: "Branch Locator",
      description: "Find your nearest Prime Bank branch",
      href: "/support/branches",
      icon: MapPin,
    },
    {
      title: "24/7 Help",
      description: "Round-the-clock assistance when you need it",
      href: "/support/help",
      icon: Clock,
    },
  ]

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                FSCS Protected up to £85,000
              </span>
              <span className="hidden md:block">FCA Regulated • Established 1987</span>
            </div>
            <div className="flex items-center gap-4">
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
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-pointer">
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-foreground tracking-tight">Prime</span>
                <span className="text-xl font-light text-primary ml-1">Bank</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Personal Banking Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("personal")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  Personal Banking
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "personal" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-1 w-80 bg-popover border rounded-lg shadow-lg p-2"
                    >
                      {personalBankingItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-md hover:bg-accent transition-colors group"
                        >
                          <h4 className="font-medium text-popover-foreground group-hover:text-primary">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Business Banking Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("business")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  Business Banking
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "business" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-1 w-80 bg-popover border rounded-lg shadow-lg p-2"
                    >
                      {businessBankingItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block p-3 rounded-md hover:bg-accent transition-colors group"
                        >
                          <h4 className="font-medium text-popover-foreground group-hover:text-primary">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Regular Navigation Items */}
              <a
                href="/mortgages"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                Mortgages
              </a>
              <a
                href="/investments"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                Investments
              </a>
              <a
                href="/insurance"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
              >
                Insurance
              </a>

              {/* Support Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown("support")}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                >
                  Support
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === "support" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full right-0 mt-1 w-72 bg-popover border rounded-lg shadow-lg p-2"
                    >
                      {supportItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors group"
                          >
                            <IconComponent className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium text-popover-foreground group-hover:text-primary">
                                {item.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                            </div>
                          </a>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Sign In
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Open Account
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
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
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t bg-background"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
                {/* Mobile Personal Banking */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle("mobile-personal")}
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-foreground"
                  >
                    Personal Banking
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
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
                        className="pl-4 space-y-2 mt-2"
                      >
                        {personalBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                <div>
                  <button
                    onClick={() => handleDropdownToggle("mobile-business")}
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-foreground"
                  >
                    Business Banking
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
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
                        className="pl-4 space-y-2 mt-2"
                      >
                        {businessBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                <a
                  href="/mortgages"
                  className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mortgages
                </a>
                <a
                  href="/investments"
                  className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Investments
                </a>
                <a
                  href="/insurance"
                  className="block py-2 font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Insurance
                </a>

                {/* Mobile Support */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle("mobile-support")}
                    className="flex items-center justify-between w-full py-2 text-left font-medium text-foreground"
                  >
                    Support
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "mobile-support" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "mobile-support" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {supportItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 border-t space-y-3">
                  <button
                    className="w-full py-2 text-left font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </button>
                  <button
                    className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Open Account
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
