"use client"

import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import GrainOverlay from "@/components/shared/grainOverlay";

export default function PrimeBankFooter() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Grain Overlay */}
      <GrainOverlay />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">

              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-white tracking-tight">Prime</span>
                <span className="text-xl font-black text-white ml-1">Bank</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted financial partner in the UK. We provide comprehensive banking solutions with a commitment to
              excellence and customer satisfaction.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-300">
             
              <span>FCA Regulated & FSCS Protected</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Personal Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Loans & Credit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Investment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Branch & Connect Section */}
          <div className="lg:col-span-4">
            {/* Branch Info */}
            <div className="mb-8">
              <h4 className="font-semibold text-white mb-6 text-lg">Visit Us</h4>
              <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="font-medium text-white mb-2">London Headquarters</div>
                <div className="text-gray-400 text-sm mb-1">25 Canary Wharf</div>
                <div className="text-gray-400 text-sm mb-3">London E14 5AB</div>
                <div className="text-gray-300 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Follow Us</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-900 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-400">
              <span>© 2025 Prime Bank. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>Crafted by 🐦‍⬛</span>
              <a
                href="https://crowstudios.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-medium"
              >
                Crow Studios
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}