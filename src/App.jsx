import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 selection:bg-teal-800 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <ServiceArea />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
