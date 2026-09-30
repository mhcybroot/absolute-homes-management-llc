import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'St. Augustine & Zoysia Turf Care',
    frequency: 'Bi-Weekly Estate Maintenance',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Estimate Request: ${formData.serviceType} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Property Address: ${formData.address}\n` +
      `Service Requested: ${formData.serviceType}\n` +
      `Preferred Frequency: ${formData.frequency}\n\n` +
      `Project Notes / Details:\n${formData.notes}\n`
    );
    window.location.href = `mailto:info@ahmestates.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Request Your Free Landscape Estimate
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We are here to help you with all your property needs. Reach out to us via phone, email, or request a fast digital proposal below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-700/20">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Our Office Address</h4>
                <p className="text-base font-bold text-slate-900">2125 Biscayne Blvd, Ste 204</p>
                <p className="text-sm text-slate-600">Miami, Florida 33137</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-900/20">
                <Phone className="w-6 h-6 text-teal-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Call Us Directly</h4>
                <a
                  href="tel:2392669340"
                  className="text-lg font-extrabold text-teal-800 hover:text-teal-950 transition-colors block"
                >
                  (239)-266-9340
                </a>
                <p className="text-xs text-slate-500">Direct dispatch and customer inquiries</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-800/20">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Us</h4>
                <a
                  href="mailto:info@ahmestates.com"
                  className="text-base font-bold text-teal-800 hover:text-teal-950 transition-colors break-all block"
                >
                  info@ahmestates.com
                </a>
                <p className="text-xs text-slate-500">Fast digital estimates & proposal submissions</p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Estimate Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fafaf9] border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Free Estimate Form</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Tell Us About Your Property
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill in your details below and our Miami grounds team will prepare a custom proposal.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-teal-100 border border-teal-300 text-teal-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>Thank you! Your email client has been opened to submit your request to info@ahmestates.com.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Sterling"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(239) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marcus@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Property Address in South Florida *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street, City, Zip Code"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Requested
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    >
                      <option value="St. Augustine & Zoysia Turf Care">St. Augustine & Zoysia Turf Care</option>
                      <option value="Tropical Botanical Garden Design">Tropical Botanical Garden Design</option>
                      <option value="Hardwood Mulch & White Rock Beds">Hardwood Mulch & White Rock Beds</option>
                      <option value="Royal Palm Pruning & Hedge Sculpting">Royal Palm Pruning & Hedge Sculpting</option>
                      <option value="Post-Storm Cleanup & Yard Revival">Post-Storm Cleanup & Yard Revival</option>
                      <option value="Luxury Estate & Commercial Grounds">Luxury Estate & Commercial Grounds</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Service Frequency
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                    >
                      <option value="Weekly Estate Maintenance">Weekly Estate Maintenance</option>
                      <option value="Bi-Weekly Maintenance">Bi-Weekly Maintenance</option>
                      <option value="Monthly Scheduled Care">Monthly Scheduled Care</option>
                      <option value="One-Time Cleanup / Project">One-Time Cleanup / Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Notes or Special Instructions
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about lawn dimensions, palm heights, gate access, current turf health, etc."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Estimate Request</span>
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  🔒 We respect your privacy. No spam. Direct dispatch estimate within 24 hours.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
