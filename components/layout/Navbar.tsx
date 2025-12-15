"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-green-600">🏏 CricketScore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#matches" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Live Matches
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#matches" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Live Matches
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;