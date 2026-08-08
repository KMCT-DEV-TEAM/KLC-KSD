import React from 'react';
import ContactInfo from './components/ContactInfo';

export const metadata = {
  title: 'Contact Us | KMCT College of Legal Studies Kasaragod',
  description: 'Get in touch with KMCT College of Legal Studies Kasaragod office. Find our address, phone number, and location on the map.',
};

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center bg-slate-900 overflow-hidden" data-aos="fade-up">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="Contact KMCT College of Legal Studies"
            fill
            priority
            className="object-cover opacity-40 transition-all duration-700 scale-105"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-left space-y-6">
            <span className="text-sm font-bold text-primary uppercase tracking-widest inline-block mb-2">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Contact KMCT <br className="hidden md:block" />
              <span className="text-primary">College of Legal Studies</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              We are here to assist you with course inquiries, admissions, and campus visits. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-slate-50 py-24" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <ContactInfo />
        </div>
      </section>
    </div>
  );
}
