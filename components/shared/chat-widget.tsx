"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+254751281779"
    const message = encodeURIComponent("Hello! I need assistance from Prime Bank Connect support.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="icon"
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-4 right-4 sm:bottom-24 sm:right-6 sm:left-auto z-50 w-auto sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="relative h-20 sm:h-24 overflow-hidden">
            {/* Custom Gradient Background */}
            <div className="absolute inset-0 bg-blue-600"></div>
            
            {/* Content */}
            <div className="relative z-10 p-3 sm:p-4 text-white flex items-center h-full">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base sm:text-lg font-semibold">Hello, there</span>
                  <span className="text-base sm:text-lg" role="img" aria-label="waving hand">
                    👋
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-tight">Prime Bank Connect support team is here to help.</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">PBC</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-slate-800 text-sm font-medium truncate">Prime Bank Connect Support</p>
                <p className="text-slate-500 text-xs">Online now</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">Ready to grow your finances? Let's chat!</p>
            </div>

            <Button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 text-sm sm:text-base"
            >
              Chat with us
            </Button>

            <p className="text-xs text-slate-400 text-center mt-3">Powered by WhatsApp</p>
          </div>
        </div>
      )}
    </>
  )
}
