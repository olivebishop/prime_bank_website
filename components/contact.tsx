"use client"
import { useState } from "react"
import { Send, Clock, CheckCircle, Phone } from "lucide-react"
import { contactInfo, supportChannels, businessHours, subjectOptions } from "@/data/contact"
import GrainOverlay from "@/components/shared/grainOverlay"

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm font-medium">We&apos;re here to help</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get in <span className="text-blue-400">Touch</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Our dedicated team is ready to assist you with all your banking needs. Reach out through any of our
                convenient channels.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.id}
                    className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 text-center hover:transform hover:scale-105"
                  >
                    <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{info.title}</h4>
                    <p className="text-blue-400 text-sm font-medium mb-1">{info.primary}</p>
                    <p className="text-gray-400 text-sm">{info.secondary}</p>
                  </div>
                )
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-800/50">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                    <p className="text-gray-400">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for contacting us. We&apos;ll respond shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                          required
                        >
                          {subjectOptions.map((option) => (
                            <option key={option.value} value={option.value} className="bg-gray-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                          placeholder="Please describe how we can help you..."
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="relative w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700"></div>
                        <div
                          className="absolute inset-0 opacity-25 mix-blend-overlay"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundSize: "200px 200px",
                          }}
                        ></div>
                        <span className="relative text-black z-10">Send Message</span>
                        <Send className="relative w-5 h-5 text-black z-10" />
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-3xl p-8 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {businessHours.map((hour, index) => (
                      <div key={index} className="border-l-2 border-blue-500/30 pl-4">
                        <p className="text-white font-semibold text-sm">{hour.location}</p>
                        <p className="text-gray-400 text-sm mt-1">{hour.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Channels */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                  <h3 className="text-xl font-bold text-white mb-6">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    {supportChannels.map((channel) => {
                      const IconComponent = channel.icon
                      return (
                        <div
                          key={channel.id}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                        >
                          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-sm mb-1">{channel.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">{channel.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-500/5 to-blue-500/10 rounded-3xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  For urgent banking matters or account emergencies, our 24/7 support line is always available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+442071234567"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Emergency Line
                  </a>
                  <span className="text-gray-400 text-sm">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage