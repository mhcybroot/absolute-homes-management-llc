import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alexander V.',
      role: 'Estate Owner in Miami Beach, FL',
      review:
        'Absolute Homes Management has taken our beachfront landscape to another level. Their knowledge of salt-tolerant tropical flowers and precision palm trimming is extraordinary. Always on time, polite, and thorough.',
      rating: 5,
    },
    {
      name: 'Sophia M.',
      role: 'Boutique Hotel General Manager, Biscayne',
      review:
        'We contracted Absolute Homes Management for our courtyard garden, royal palms, and weekly turf mowing. The curb appeal has dramatically improved, and their itemized digital proposals make accounting effortless.',
      rating: 5,
    },
    {
      name: 'Julian C.',
      role: 'HOA President, Coral Gables',
      review:
        'Their rapid response after summer tropical storms was remarkable. Within 24 hours, all fallen fronds and debris were cleared, and mulch beds were restored to perfection.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fafaf9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            Verified Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Miami Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from luxury residential estate owners, HOAs, and commercial managers across Miami.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-teal-600/30" />
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
