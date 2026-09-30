import React from 'react';
import { ClipboardList, CalendarDays, Wrench, ThumbsUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      icon: ClipboardList,
      title: 'Free Property Consultation',
      desc: 'We inspect your property dimensions, palm health, grass variety, soil moisture, and aesthetic preferences to deliver a transparent quote.',
    },
    {
      step: '02',
      icon: CalendarDays,
      title: 'Tailored Landscape Plan',
      desc: 'We design a customized mowing cycle, palm pruning calendar, or tropical planting blueprint formulated for South Florida weather.',
    },
    {
      step: '03',
      icon: Wrench,
      title: 'Expert Grounds Execution',
      desc: 'Our uniformed crew arrives on time with sharp commercial gear to mow, prune, plant, and leave your outdoor surfaces spotless.',
    },
    {
      step: '04',
      icon: ThumbsUp,
      title: 'Quality Walkthrough & Sign-off',
      desc: 'We conduct a comprehensive final review, blow all hard surfaces clean of debris, and guarantee complete satisfaction.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How Our Miami Grounds Care Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From initial consultation to scheduled estate maintenance, we make caring for your South Florida property effortless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-[#fafaf9] p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-teal-500/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-teal-700/30 group-hover:text-teal-700 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-teal-700 shadow-sm flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
