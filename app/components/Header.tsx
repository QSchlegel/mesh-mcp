'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-bold text-xl">Mesh MCP</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#setup" className="text-gray-300 hover:text-white transition-colors">
              Setup Guide
            </a>
            <a href="#api-tools" className="text-gray-300 hover:text-white transition-colors">
              API Tools
            </a>
            <a href="#examples" className="text-gray-300 hover:text-white transition-colors">
              Examples
            </a>
            <a 
              href="https://meshjs.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">
                Features
              </a>
              <a href="#setup" className="block px-3 py-2 text-gray-300 hover:text-white">
                Setup Guide
              </a>
              <a href="#api-tools" className="block px-3 py-2 text-gray-300 hover:text-white">
                API Tools
              </a>
              <a href="#examples" className="block px-3 py-2 text-gray-300 hover:text-white">
                Examples
              </a>
              <a href="https://meshjs.dev" className="block px-3 py-2 text-gray-300 hover:text-white">
                Docs
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}