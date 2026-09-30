import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="inline-flex items-center gap-1.5 text-teal-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              2125 Biscayne Blvd, Ste 204, Miami, Florida 33137
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@ahmestates.com"
              className="hover:text-teal-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              info@ahmestates.com
            </a>
            <a
              href="tel:2392669340"
              className="font-bold text-white hover:text-teal-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              (239)-266-9340
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
        } border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Absolute Homes Management LLC Logo"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900">ABSOLUTE</span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-teal-700">HOMES</span>
              </div>
              <p className="text-[10px] font-bold tracking-wider text-amber-600 uppercase">
                Management LLC • Miami, FL
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-teal-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:2392669340"
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>(239)-266-9340</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:scale-95 rounded-lg shadow-sm shadow-teal-700/30 transition-all"
            >
              <span>Get Free Estimate</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 hover:text-teal-700 hover:bg-teal-50/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:2392669340"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                Call (239)-266-9340
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow"
              >
                Request Free Estimate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
