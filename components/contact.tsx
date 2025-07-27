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
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-gray-800 bg-black rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">We&apos;re here to help</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Get in <span className="text-gray-800">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
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
                  className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm transition-all duration-300 group hover:scale-105 hover:border-gray-700 text-center"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">{info.title}</h4>
                  <p className="text-gray-300 text-sm font-medium mb-1">{info.primary}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{info.secondary}</p>
                </div>
              )
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Send us a Message</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">Message Sent!</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Thank you for contacting us. We&apos;ll respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-white mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-all duration-300"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-gray-600 focus:outline-none transition-all duration-300"
                        required
                      >
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-gray-900">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Please describe how we can help you..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-white text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Business Hours */}
              <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {businessHours.map((hour, index) => (
                    <div key={index} className="border-l-2 border-gray-700 pl-4">
                      <p className="text-white font-bold text-sm leading-tight">{hour.location}</p>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">{hour.hours}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Channels */}
              <div className="p-6 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6 leading-tight">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  {supportChannels.map((channel) => {
                    const IconComponent = channel.icon
                    return (
                      <div
                        key={channel.id}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1 leading-tight">{channel.title}</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">{channel.description}</p>
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
            <div className="p-8 rounded-xl border border-gray-800 bg-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Need Immediate Assistance?</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
                For urgent banking matters or account emergencies, our 24/7 support line is always available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+442071234567"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Call Emergency Line
                </a>
                <span className="text-gray-300 text-sm">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage