import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-950 py-8 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">Ready for a Healthier, Greener South Florida Landscape?</h3>
            <p className="text-xs text-slate-400">Call our Miami dispatch desk today for a prompt, free estimate.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:2392669340"
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(239)-266-9340</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Absolute Homes Management LLC"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-base font-extrabold tracking-tight text-white">ABSOLUTE HOMES</span>
                <p className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">Management LLC • Miami, FL</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              ABSOLUTE HOMES MANAGEMENT LLC provides premier residential and commercial landscaping, tropical turf management, royal palm pruning, and luxury estate grounds care across Miami and South Florida.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Licensed & Insured South Florida Grounds Crew</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Landscape Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">St. Augustine & Zoysia Mowing</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Tropical Botanical Garden Design</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Hardwood Mulching & River Rock</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Royal Palm Pruning & Topiary</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Post-Storm Cleanup & Aeration</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Luxury Estate Grounds Contracts</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Coverage Areas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Miami (Biscayne HQ)</a></li>
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Miami Beach, FL</a></li>
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Coral Gables, FL</a></li>
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Coconut Grove, FL</a></li>
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Brickell & Downtown</a></li>
              <li><a href="#service-areas" className="hover:text-teal-400 transition-colors">Aventura & Sunny Isles</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>2125 Biscayne Blvd, Ste 204, Miami, Florida 33137</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href="tel:2392669340" className="hover:text-white font-bold text-slate-200">(239)-266-9340</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:info@ahmestates.com" className="hover:text-white">info@ahmestates.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ABSOLUTE HOMES MANAGEMENT LLC. All rights reserved. Professional Landscaping & Grounds Preservation.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
