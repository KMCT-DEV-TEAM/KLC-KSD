'use client';

import React from 'react';
import Link from 'next/link';
import { Newspaper, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-between bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 scale-105 opacity-40"
          style={{ backgroundImage: `url('/images/hero-bg.png')` }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl text-left space-y-10" data-aos="fade-up" data-aos-delay="100">
          {/* Subtitle with trailing line */}
          <div className="flex items-center gap-4 mb-2">
            <p className="text-sm md:text-base font-medium text-white tracking-wide drop-shadow-md italic">
              "Pioneering Legal Education, Advocating Justice, Inspiring Excellence"
            </p>
            <span className="w-16 md:w-32 h-px bg-white/70 drop-shadow-md" />
          </div>

          {/* Main Statement Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug !mt-4 !mb-4">
            KMCT College of Legal Studies <br className="hidden sm:block" />
            is dedicated to fostering <br className="hidden sm:block" />
            critical thinking, ethical values, <br className="hidden sm:block" />
            and professional competence.
          </h1>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 !mt-1">
            <Link
              href="/admissions"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Flash News Bar */}
      <div className="relative z-20 w-full bg-secondary border-t border-blue-900 flex items-stretch overflow-hidden text-xs md:text-sm">
        {/* Flash News Badge */}
        <div className="bg-[#0077c8] text-white px-5 py-3 font-bold flex items-center gap-2 shrink-0 z-10 shadow-md">
          <Newspaper className="w-4 h-4" />
          <span>Flash News</span>
        </div>

        {/* Ticker Content */}
        <div className="flex-1 py-3 px-6 overflow-hidden flex items-center bg-secondary">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-3 text-blue-100 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#0077c8] inline-block animate-pulse" />
            <span>Admissions are now open for 2026–27 – Apply Today! Call: 9691 000 000 | Visit: www.kmct.org</span>
          </div>
        </div>
      </div>
    </div>
  );
}
