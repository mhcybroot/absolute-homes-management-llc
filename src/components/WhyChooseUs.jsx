import React from 'react';
import { ShieldCheck, Compass, DollarSign, Clock, Leaf, Award, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Compass,
      title: 'South Florida Tropical Mastery',
      desc: 'Our landscape specialists understand Miami sandy-loam soils, saltwater air exposure, hurricane seasons, and tropical turf cultivation.',
    },
    {
      icon: Award,
      title: 'Precision Commercial Equipment',
      desc: 'We operate pristine, daily-sharpened commercial mowers and pro-grade hedge trimmers that guarantee clean, surgical cuts on all foliage.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Upfront Estimates',
      desc: 'No hidden fees or unexpected billing. We provide detailed, itemized digital estimates with upfront pricing before touching your lawn.',
    },
    {
      icon: Clock,
      title: 'Consistent Scheduled Dispatch',
      desc: 'Reliable weekly or bi-weekly maintenance windows. Our Biscayne Blvd crew arrives on schedule so your property always looks immaculate.',
    },
    {
      icon: Leaf,
      title: 'Eco-Safe Coastal Fertilizers',
      desc: 'Carefully balanced organic fertilizers that protect Florida waterways and Biscayne Bay while keeping your family and pets safe.',
    },
    {
      icon: ShieldCheck,
      title: '100% Satisfaction Guarantee',
      desc: 'If any portion of your lawn, hedge, or palm pruning does not meet your exacting standards, our crew returns promptly to make it right.',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white bg-pattern-grid border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            The Absolute Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why Miami Property Owners Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Professional excellence, tropical landscape reliability, and exceptional curb appeal on every property.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local Banner Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 text-white p-8 md:p-10 border border-teal-700/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4" />
              <span>Miami Biscayne Crew Ready for Dispatch</span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              Need Tropical Lawn Care or Palm Pruning?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Get an accurate, free estimate within 24 hours. Serving luxury residential estates, HOAs, and commercial grounds across Miami-Dade.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md"
            >
              Get Instant Estimate
            </a>
            <a
              href="tel:2392669340"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl text-sm transition-all"
            >
              Call (239)-266-9340
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
