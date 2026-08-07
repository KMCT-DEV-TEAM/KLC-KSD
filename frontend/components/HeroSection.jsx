'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-between bg-white text-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105"
        style={{ backgroundImage: `url('/images/hero-bg.png')` }}
      >
        {/* Lighter Gradient Overlay for blue theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/50 to-transparent" />
      </div>

      {/* Floating Right Sidebar Actions */}
      <div className="fixed right-0 top-1/3 z-40 flex flex-col items-end gap-1.5 font-sans">
        {/* Vertical Admissions Tab */}
        <Link
          href="/admissions"
          className="bg-[#005691] hover:bg-[#004070] text-white text-xs font-bold px-3 py-4 rounded-l-lg shadow-xl tracking-wider uppercase transition-all flex items-center justify-center border-l-2 border-[#0077c8] hover:pr-4"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Admission 26-27
        </Link>

        {/* Action Icon Buttons */}
        <div className="flex flex-col gap-1.5 shadow-2xl">
          <a
            href="tel:+919691000000"
            title="Call Us"
            className="w-10 h-10 bg-[#005691] hover:bg-[#004070] flex items-center justify-center text-white rounded-l-lg shadow-md transition-transform hover:-translate-x-1"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/919691000000"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            className="w-10 h-10 bg-[#25D366] hover:bg-[#1eb956] flex items-center justify-center text-white rounded-l-lg shadow-md transition-transform hover:-translate-x-1"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="mailto:lawcollege.ksd@kmct.edu.in"
            title="Email Us"
            className="w-10 h-10 bg-[#0077c8] hover:bg-[#0060a0] flex items-center justify-center text-white rounded-l-lg shadow-md transition-transform hover:-translate-x-1"
          >
            <Mail className="w-4 h-4" />
          </a>
          <Link
            href="/contact"
            title="Location Map"
            className="w-10 h-10 bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white rounded-l-lg shadow-md transition-transform hover:-translate-x-1"
          >
            <MapPin className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Subtitle with subtle dashes */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-blue-300/80" />
            <p className="text-xs md:text-sm font-medium text-blue-100 tracking-wide italic">
              "Pioneering Legal Education, Advocating Justice, Inspiring Excellence"
            </p>
            <span className="w-8 h-px bg-blue-300/80" />
          </div>

          {/* Main Statement Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.25] text-white tracking-tight drop-shadow-md">
            KMCT College of Legal Studies is dedicated to fostering critical thinking, ethical values, and professional competence.
          </h1>
        </div>
      </div>

      {/* Bottom Flash News Bar */}
      <div className="relative z-20 w-full bg-[#002b4d] border-t border-blue-900 flex items-stretch overflow-hidden text-xs md:text-sm">
        {/* Flash News Badge */}
        <div className="bg-[#0077c8] text-white px-5 py-3 font-bold flex items-center gap-2 shrink-0 z-10 shadow-md">
          <Newspaper className="w-4 h-4" />
          <span>Flash News</span>
        </div>

        {/* Ticker Content */}
        <div className="flex-1 py-3 px-6 overflow-hidden flex items-center bg-[#002b4d]">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-3 text-blue-100 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#0077c8] inline-block animate-pulse" />
            <span>Admissions are now open for 2026–27 – Apply Today! Call: 9691 000 000 | Visit: www.kmct.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}
