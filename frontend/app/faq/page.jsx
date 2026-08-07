import React from 'react';
import Image from 'next/image';
import FaqSection from './components/FaqSection';
import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | KMCT Law College',
  description: 'Find answers to common questions about admissions, courses, facilities, and more at KMCT Law College.',
};

export default function FAQPage() {
  return (
    <div className="w-full min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="FAQ"
            fill
            priority
            className="object-cover opacity-40 transition-all duration-700 scale-105"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-12">
          <div className="max-w-3xl text-left space-y-6">
            <span className="text-sm font-bold px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest inline-block mb-2">
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Frequently Asked <br className="hidden md:block" />
              <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Find answers to all your queries regarding admissions, academics, and campus life at KMCT Law College.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Main Content Area */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 md:w-16 h-px bg-primary"></span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Got Questions?
            </span>
            <span className="w-12 md:w-16 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            We Have Answers
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Browse through our most commonly asked questions below. If you can't find what you're looking for, feel free to reach out to our admissions team directly.
          </p>
        </div>

        {/* The interactive Accordion */}
        <FaqSection />
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 text-center space-y-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Still have questions?</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            If you need further assistance or have specific queries not covered here, our dedicated support team is ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-secondary hover:bg-primary text-white font-bold rounded-lg transition-all shadow-md w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
            <a
              href="tel:+914942123223"
              className="px-8 py-3 bg-white border border-slate-300 text-slate-700 hover:text-primary hover:border-primary font-bold rounded-lg transition-all w-full sm:w-auto text-center"
            >
              Call Admission Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
