'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { trackEvent, trackPhoneClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-apple-border-subtle'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-apple-blue flex items-center justify-center shadow-card">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" />
                <circle cx="10" cy="11" r="2.5" fill="#0071E3" />
              </svg>
            </div>
            <div>
              <span className="text-[17px] font-semibold text-apple-dark tracking-tight">GrowBridge Plumbing</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[15px] text-apple-secondary hover:text-apple-dark rounded-lg hover:bg-apple-surface transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5552478629"
              onClick={() => trackPhoneClick('navbar')}
              className="flex items-center gap-2 text-[15px] font-medium text-apple-dark hover:text-apple-blue transition-colors"
            >
              <Phone size={16} className="text-apple-blue" />
              (555) 247-8629
            </a>
            <a
              href="#contact"
              onClick={() => trackEvent('nav_cta_clicked')}
              className="px-5 py-2.5 bg-apple-blue text-white text-[15px] font-medium rounded-lg hover:bg-apple-blue-hover transition-colors shadow-card"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-apple-surface transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-apple-border-subtle px-6 pb-6 pt-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-[17px] text-apple-dark hover:bg-apple-surface rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-apple-border-subtle">
            <a
              href="tel:5552478629"
              onClick={() => trackPhoneClick('mobile_nav')}
              className="flex items-center justify-center gap-2 py-3 bg-apple-surface rounded-xl text-[17px] font-medium text-apple-dark"
            >
              <Phone size={18} className="text-apple-blue" />
              (555) 247-8629
            </a>
            <a
              href="#contact"
              onClick={() => { trackEvent('nav_cta_clicked'); setMenuOpen(false) }}
              className="py-3 bg-apple-blue text-white text-[17px] font-medium rounded-xl text-center"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
