import React, { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'turf', name: 'Turf Care' },
    { id: 'planting', name: 'Tropical Planting' },
    { id: 'mulch', name: 'Mulch & Stone' },
    { id: 'shrub', name: 'Palm & Hedge Sculpting' },
    { id: 'commercial', name: 'Commercial Estates' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Precision St. Augustine Turf Management',
      category: 'turf',
      location: 'Miami Beach, FL',
      image: '/images/gallery_lawn1.jpg',
    },
    {
      id: 2,
      title: 'Exotic Tropical Garden & Floral Architecture',
      category: 'planting',
      location: 'Coral Gables, FL',
      image: '/images/gallery_cleanup.jpg',
    },
    {
      id: 3,
      title: 'Dark Cypress Mulch & White Marble Rock Beds',
      category: 'mulch',
      location: 'Coconut Grove, FL',
      image: '/images/gallery_mulch.jpg',
    },
    {
      id: 4,
      title: 'Royal Palm Pruning & Podocarpus Sculpting',
      category: 'shrub',
      location: 'Biscayne, Miami, FL',
      image: '/images/gallery_shrub.jpg',
    },
    {
      id: 5,
      title: 'Boutique Commercial Campus Grounds Care',
      category: 'commercial',
      location: 'Brickell, Miami, FL',
      image: '/images/gallery_commercial.jpg',
    },
    {
      id: 6,
      title: 'Zoysia Striped Estate Lawn Restoration',
      category: 'turf',
      location: 'Aventura, FL',
      image: '/images/gallery_lawn2.jpg',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white bg-pattern-grid border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Recent Landscaping Projects Across South Florida
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explore authentic transformations delivered by our Miami grounds crew.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {item.location}
                </span>
                <h3 className="text-base font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
