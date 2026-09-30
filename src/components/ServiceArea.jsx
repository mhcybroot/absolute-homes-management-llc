import React from 'react';
import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const areas = [
    { city: 'Miami, FL (Biscayne HQ)', desc: 'Central Dispatch Hub covering Biscayne Corridor, Midtown, and Edgewater' },
    { city: 'Miami Beach, FL', desc: 'Luxury Waterfront Estate Grounds & Coastal Turf Management' },
    { city: 'Coral Gables, FL', desc: 'Historic Canopy Care, Palm Pruning & Botanical Garden Architecture' },
    { city: 'Coconut Grove, FL', desc: 'Lush Tropical Landscape Design, Hardwood Mulching & Shrub Sculpting' },
    { city: 'Brickell & Downtown Miami', desc: 'Commercial Properties, Urban Rooftop Terraces & HOA Grounds' },
    { city: 'Aventura & Sunny Isles', desc: 'High-End Residential Lawns, Zoysia Turf Care & Salt-Tolerant Planting' },
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            South Florida Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Service Areas Across Miami & South Florida
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our specialized landscape crews operate daily across Miami-Dade and surrounding coastal communities.
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  {area.city}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Info */}
        <div className="mt-12 text-center bg-teal-50 border border-teal-200/80 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-sm text-teal-950 font-medium">
            📍 Based at <strong className="font-bold">2125 Biscayne Blvd, Ste 204, Miami, Florida 33137</strong>. Don't see your neighborhood? Call <a href="tel:2392669340" className="font-bold underline text-teal-800 hover:text-teal-950">(239)-266-9340</a> to check dispatch availability.
          </p>
        </div>

      </div>
    </section>
  );
}
