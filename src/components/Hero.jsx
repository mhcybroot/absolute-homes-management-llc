import React from 'react';
import { Phone, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Star, Trees, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white bg-pattern-grid pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Miami's Premier Luxury Landscaping & Tropical Grounds Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Elevating South Florida Properties With <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">Pristine Tropical Landscapes</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              ABSOLUTE HOMES MANAGEMENT LLC delivers master-crafted tropical landscaping, St. Augustine & Zoysia turf preservation, royal palm pruning, decorative rock & mulch architecture, and luxury estate grounds management in Miami, Biscayne, and across South Florida.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/60 py-2 px-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/60 py-2 px-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Miami-Dade Fast Dispatch</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200/60 py-2 px-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call (239)-266-9340</span>
              </a>
            </div>

            {/* Social Proof / Rating */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-700 text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">MIA</div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">FL</div>
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm">EST</div>
              </div>
              <div className="text-left">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 font-semibold">Top-Rated Miami Grounds & Estate Care</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Cards */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Luxury Border */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100 p-2 bg-white">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/hero_landscape.jpg"
                    alt="Luxury Miami Landscaping and Grounds"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">Luxury Grounds Preservation</p>
                      <p className="text-[11px] font-medium text-slate-500">2125 Biscayne Blvd, Miami, FL</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-[11px] font-extrabold rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                    Active Crew
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
