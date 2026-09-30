import React from 'react';
import { Phone, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Star, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Miami's Premier Luxury Landscaping & Tropical Grounds Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Elevating South Florida Properties With <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-300">Pristine Tropical Landscapes</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              ABSOLUTE HOMES MANAGEMENT LLC delivers master-crafted tropical landscaping, St. Augustine & Zoysia turf preservation, royal palm pruning, decorative rock & mulch architecture, and luxury estate grounds management in Miami, Biscayne, and across South Florida.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Rapid Miami-Dade Dispatch</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="tel:2392669340"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call (239)-266-9340</span>
              </a>
            </div>

            {/* Social Proof / Rating */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">MIA</div>
                <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">FL</div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">EST</div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium">Top-Rated Miami Grounds & Estate Care</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-800">
                <img
                  src="/images/hero_landscape.jpg"
                  alt="Luxury Miami Landscaping and Grounds"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 p-3.5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-600/20 text-teal-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Luxury Grounds Preservation</p>
                      <p className="text-[11px] text-slate-400">2125 Biscayne Blvd, Miami, FL</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Active Miami Crew
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
