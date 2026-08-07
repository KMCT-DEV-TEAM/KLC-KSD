'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col items-end gap-1.5 font-sans">
      {/* Vertical Admissions Tab */}
      <Link
        href="/admissions"
        className="bg-[#005691] hover:bg-[#004070] text-white text-xs font-bold px-3 py-4 rounded-r-lg shadow-xl tracking-wider uppercase transition-all flex items-center justify-center border-l-2 border-[#0077c8] hover:pr-4"
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
  );
}
