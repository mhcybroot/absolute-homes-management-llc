import React from 'react';
import { Scissors, Sparkles, Layers, SunMedium, Building2, Check, ArrowRight, TreePine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'St. Augustine & Zoysia Turf Care',
      tagline: 'Coastal Precision Mowing & Feeding',
      desc: 'Expert height-calibrated rotary mowing, razor-sharp concrete edging, chinch bug prevention, and specialized feeding formulated for South Florida warm-season turfgrass.',
      icon: Scissors,
      image: '/images/lawn_mowing_fresh.jpg',
      features: ['Precision height rotary mowing', 'Clean driveway & perimeter edging', 'Coastal turf fertilization & weed suppression', 'Complete grass clippings cleanup & disposal'],
    },
    {
      title: 'Tropical Botanical Garden Design',
      tagline: 'Exotic Palms & Vibrant Floral Architecture',
      desc: 'Custom South Florida landscape architecture featuring Bird of Paradise, Bougainvillea, Hibiscus, Crotons, and drought-tolerant tropical foliage.',
      icon: TreePine,
      image: '/images/landscape_planting_fresh.jpg',
      features: ['Salt-tolerant tropical specimen selection', 'Custom floral bed & perimeter design', 'Rich organic soil amendment', 'Seasonal flowering rejuvenation programs'],
    },
    {
      title: 'Hardwood Mulch & White Rock Beds',
      tagline: 'Moisture Retention & Coastal Protection',
      desc: 'Premium dark cocoa hardwood mulch, cypress mulch, and decorative white marble rock beds that protect delicate root systems and suppress tropical weeds.',
      icon: Layers,
      image: '/images/mulch_bed_fresh.jpg',
      features: ['Double-shredded premium hardwood mulch', 'Decorative white river rock & shell stone', 'Heavy-duty breathable weed barrier installation', 'Crisp spade-cut bed trenching'],
    },
    {
      title: 'Royal Palm Pruning & Hedge Sculpting',
      tagline: 'Canopy Elevation & Formal Topiary',
      desc: 'Certified pruning of Royal, Foxtail, and Coconut palms, seed pod removal, and artistic sculpting of clusia hedges, ficus walls, and podocarpus borders.',
      icon: Sparkles,
      image: '/images/hedge_trimming_fresh.jpg',
      features: ['Palm frond thinning & seed pod removal', 'Clusia & ficus formal hedge sculpting', 'Pedestrian & roofline clearance elevation', 'Safety hazard removal & debris hauling'],
    },
    {
      title: 'Post-Storm Cleanup & Yard Revival',
      tagline: 'Tropical Storm Debris Clearing & Aeration',
      desc: 'Rapid storm response and seasonal grounds rejuvenation including fallen frond removal, deep core lawn aeration, and bed restoration.',
      icon: SunMedium,
      image: '/images/seasonal_cleanup_fresh.jpg',
      features: ['Rapid storm branch & frond clearing', 'Lawn core aeration & soil decompaction', 'Bed detritus removal & fresh rake-out', 'Complete green waste haul-away'],
    },
    {
      title: 'Luxury Estate & Commercial Grounds',
      tagline: 'Turnkey Portfolio Grounds Preservation',
      desc: 'Full-service grounds management contracts for Miami luxury waterfront estates, boutique hotels, HOAs, and commercial properties on Biscayne Boulevard.',
      icon: Building2,
      image: '/images/commercial_grounds_fresh.jpg',
      features: ['Dedicated estate grounds supervisor', 'Weekly & bi-weekly schedule contracts', 'High-impact curb appeal maintenance', 'Commercial irrigation audit & care'],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafaf9] bg-pattern-dots border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            Our Landscape Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Complete South Florida Grounds & Landscape Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated 100% to superior tropical turf health, precision palm care, and luxury estate grounds management in Miami.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Floating Service Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-teal-700 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                      {service.tagline}
                    </p>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href="#contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-700 hover:text-white border border-teal-200/80 rounded-xl transition-all"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
