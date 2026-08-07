'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Compass,
  ChevronDown,
  User,
  Download,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-md">
      {/* Top Bar (Deep Blue) */}
      <div className="bg-[#005691] text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-blue-200">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Top Right Links */}
          <div className="flex items-center gap-6 text-blue-100 font-medium">
            <Link href="/virtual-tour" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Compass className="w-3.5 h-3.5" />
              <span>Virtual Tour</span>
            </Link>
            <Link href="/admissions" className="hover:text-white transition-colors">
              Admissions
            </Link>
            <Link href="/clubs" className="hover:text-white transition-colors">
              Clubs
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3">
              {/* New Geometric Blue Logo mark */}
              <div className="relative w-12 h-12 text-[#0077c8] flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" opacity="0.1" />
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                  <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="currentColor" strokeWidth="4" />
                  <polygon points="50,30 65,40 65,60 50,70 35,60 35,40" fill="currentColor" />
                </svg>
              </div>
              <div className="leading-tight flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-serif tracking-wide text-black">KMCT</span>
                  <span className="text-xs text-slate-500 font-serif">.org</span>
                </div>
                <span className="text-[10px] block text-slate-500 tracking-[0.2em] font-medium uppercase mt-0.5">
                  Group of Institutions
                </span>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-300 hidden md:block mx-2" />
            <div className="hidden md:block leading-tight">
              <span className="text-lg font-serif tracking-wide text-black block uppercase">
                KMCT College of
              </span>
              <span className="text-lg font-serif tracking-wide text-black block uppercase mt-0.5">
                Legal Studies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === '/' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`transition-colors ${
                pathname === '/about' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
              }`}
            >
              About Us
            </Link>

            <div className="relative group cursor-pointer py-2 flex items-center gap-1 text-slate-700 hover:text-[#0077c8]">
              <Link href="/programs">Academics</Link>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </div>

            <div className="relative group cursor-pointer py-2 flex items-center gap-1 text-slate-700 hover:text-[#0077c8]">
              <span>Department</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </div>

            <div className="relative group cursor-pointer py-2 flex items-center gap-1 text-slate-700 hover:text-[#0077c8]">
              <span>Fees</span>
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform" />
            </div>

            <Link href="/facilities" className="text-slate-700 hover:text-[#0077c8] transition-colors">
              Facilities
            </Link>
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[#005691] text-[#005691] hover:bg-[#005691] hover:text-white text-xs font-semibold transition-all"
            >
              <User className="w-4 h-4" />
              <span>Students Login</span>
            </Link>

            <Link
              href="/brochure"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0077c8] hover:bg-[#005691] text-white text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-slate-900 p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white text-slate-900 px-6 py-6 border-b border-slate-200 shadow-lg space-y-4 absolute w-full">
          <nav className="flex flex-col gap-4 font-medium text-sm">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#0077c8]">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">About Us</Link>
            <Link href="/programs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">Academics</Link>
            <Link href="/admissions" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">Admissions</Link>
            <Link href="/facilities" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">Facilities</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">Contact Us</Link>
          </nav>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded border border-[#005691] text-[#005691] text-sm font-semibold flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" /> Students Login
            </Link>
            <Link
              href="/brochure"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded bg-[#0077c8] text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Brochure
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
