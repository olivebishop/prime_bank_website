"use client"
import { motion } from "motion/react"
import { CreditCard, PiggyBank, Home, TrendingUp,  Smartphone, Users, Building2 } from "lucide-react"
import GrainOverlay from "@/components/shared/grainOverlay"

const ServicesSection = () => {
  const personalServices = [
    {
      icon: CreditCard,
      title: "Current Accounts",
      description: "Fee-free everyday banking with instant notifications and budgeting tools",
      features: ["No monthly fees", "Contactless payments", "Mobile banking"],
      color: "blue",
    },
    {
      icon: PiggyBank,
      title: "Savings & ISAs",
      description: "Competitive rates up to 4.75% AER with flexible access options",
      features: ["Tax-free ISAs", "Regular savers", "Instant access"],
      color: "lightBlue",
    },
    {
      icon: Home,
      title: "Mortgages",
      description: "First-time buyer friendly with rates from 3.99% and up to 95% LTV",
      features: ["First-time buyer", "Remortgage deals", "Buy-to-let"],
      color: "navy",
    },
    {
      icon: TrendingUp,
      title: "Investments",
      description: "ISAs, pensions, and investment accounts with expert guidance",
      features: ["Stocks & shares ISA", "SIPP pensions", "Robo-advisor"],
      color: "darkBlue",
    },
  ]

  const businessServices = [
    {
      icon: Building2,
      title: "Business Banking",
      description: "Comprehensive business accounts with integrated payment solutions",
      features: ["Free business banking", "Payment processing", "Multi-user access"],
      color: "blue",
    },
    {
      icon: Users,
      title: "Commercial Finance",
      description: "Asset finance, invoice factoring, and commercial mortgages",
      features: ["Equipment finance", "Invoice factoring", "Commercial loans"],
      color: "lightBlue",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/10",
        icon: "text-blue-400",
        border: "border-blue-500/20",
        hover: "hover:bg-blue-500/20",
      },
      lightBlue: {
        bg: "bg-blue-400/10",
        icon: "text-blue-300",
        border: "border-blue-400/20",
        hover: "hover:bg-blue-400/20",
      },
      darkBlue: {
        bg: "bg-blue-600/10",
        icon: "text-blue-500",
        border: "border-blue-600/20",
        hover: "hover:bg-blue-600/20",
      },
      navy: {
        bg: "bg-slate-600/10",
        icon: "text-slate-400",
        border: "border-slate-600/20",
        hover: "hover:bg-slate-600/20",
      },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden grain-overlay">
      {/* Grain Overlay */}
      <GrainOverlay />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Banking <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From everyday banking to complex financial planning, we offer comprehensive solutions for individuals and
            businesses across the UK.
          </p>
        </motion.div>

        {/* Personal Banking Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-blue-400" />
            Personal Banking
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.map((service, index) => {
              const colorClasses = getColorClasses(service.color)
              const IconComponent = service.icon

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl border ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} backdrop-blur-sm transition-all duration-300 group`}
                >
                  <div
                    className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 ${colorClasses.icon}`} />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                        <div className={`w-1 h-1 ${colorClasses.bg} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Business Banking Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-400" />
            Business Banking
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {businessServices.map((service, index) => {
              const colorClasses = getColorClasses(service.color)
              const IconComponent = service.icon

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-xl border ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} backdrop-blur-sm transition-all duration-300 group`}
                >
                  <div
                    className={`w-14 h-14 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-7 h-7 ${colorClasses.icon}`} />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-slate-400 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-center gap-3">
                        <div className={`w-2 h-2 ${colorClasses.bg} rounded-full`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
         
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
