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
            <Link href="/admissions" className="hover:text-white transition-colors">
              Admissions
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
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
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="/images/logo.png" 
              alt="KMCT College of Legal Studies Logo" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
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

            <Link
              href="/programs"
              className={`transition-colors ${
                pathname === '/programs' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
              }`}
            >
              Academics
            </Link>

            <Link
              href="/grievance"
              className={`transition-colors ${
                pathname === '/grievance' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
              }`}
            >
              Grievance
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
            <Link href="/grievance" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0077c8]">Grievance</Link>
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
