"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#domains", label: "Domains" },
    { href: "#team", label: "Team" },
  ]

  return (
    <nav className="relative z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <img
                src="/gamecom-logo.png"
                alt="GameCom Logo"
                className="w-[60px] h-[60px] object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-[26px] font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GameCom
              </span>
              <div className="text-[14px] text-gray-400">SRM Institute</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative uppercase font-semibold text-lg tracking-wide text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                
              </a>
            ))}
            <Link
              to="/login"
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg font-medium text-white overflow-hidden group"
            >
              <span className="relative uppercase z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-lg font-semibold uppercase text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/login"
              className="block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
