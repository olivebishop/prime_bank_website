'use client'
import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';
import GrainOverlay from '@/components/shared/grainOverlay';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] relative overflow-hidden">
      <GrainOverlay />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Main Content */}
          <div className="text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black leading-none">
                4<span className="text-gray-800">0</span>4
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
                Page <span className="text-gray-800">Not Found</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the URL incorrectly.
              </p>
            </div>

            {/* Go Home Button */}
            <Link href="/">
              <button className="cursor-pointer px-8 py-4 rounded-xl font-bold text-lg bg-black text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group mx-auto">
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Go Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;