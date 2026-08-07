'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
  Download,
  Menu,
  X
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [desktopAcademicsOpen, setDesktopAcademicsOpen] = useState(false);

  const navRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setDesktopAcademicsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopAcademicsOpen(false);
  }, [pathname]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full font-sans shadow-md">
      {/* Top Bar (Primary) */}
      <div className="bg-primary text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
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
            <a href="https://admissions.kmct.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Admissions
            </a>
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
      <div className="bg-white text-slate-900 border-b border-slate-200 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between gap-4">

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
              className={`transition-colors ${pathname === '/' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`transition-colors ${pathname === '/about' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
                }`}
            >
              About Us
            </Link>

            {/* Desktop Academics (Click to open) */}
            <div className="relative py-2">
              <button
                onClick={() => setDesktopAcademicsOpen(!desktopAcademicsOpen)}
                className={`flex items-center gap-1 cursor-pointer transition-colors focus:outline-none ${pathname.startsWith('/academics') || desktopAcademicsOpen ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
                  }`}
              >
                <span>Academics</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${desktopAcademicsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-0 w-40 bg-white border border-slate-100 shadow-xl rounded-lg flex flex-col overflow-hidden transition-all duration-300 origin-top ${
                  desktopAcademicsOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
                }`}
              >
                <Link href="/academics/ba-llb" className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#0077c8] hover:bg-slate-50 transition-colors">
                  BA LLB
                </Link>
                <Link href="/academics/llb" className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#0077c8] hover:bg-slate-50 transition-colors">
                  LLB
                </Link>
              </div>
            </div>

            <Link
              href="/grievance"
              className={`transition-colors ${pathname === '/grievance' ? 'text-[#0077c8]' : 'text-slate-700 hover:text-[#0077c8]'
                }`}
            >
              Grievance
            </Link>
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-secondary hover:bg-primary text-white text-xs font-bold transition-all shadow-sm cursor-default"
            >
              <Download className="w-4 h-4 hover:bg-primary" />
              <span>Download Brochure</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-slate-900 p-2 focus:outline-none relative z-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`xl:hidden bg-white text-slate-900 px-6 py-6 border-b border-slate-200 shadow-lg absolute w-full left-0 transition-all duration-300 origin-top overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible py-0 border-transparent shadow-none'
        }`}
      >
        <div className="space-y-4">
          <nav className="flex flex-col gap-4 font-medium text-sm">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${pathname === '/' ? 'text-[#0077c8]' : 'hover:text-[#0077c8]'}`}>Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${pathname === '/about' ? 'text-[#0077c8]' : 'hover:text-[#0077c8]'}`}>About Us</Link>
            
            {/* Mobile Academics Toggle */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                className="flex items-center justify-between text-slate-700 font-medium focus:outline-none"
              >
                <span className={pathname.startsWith('/academics') ? 'text-[#0077c8]' : ''}>Academics</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`pl-4 flex flex-col gap-3 border-l-2 border-slate-100 ml-1 overflow-hidden transition-all duration-300 ${
                  mobileAcademicsOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <Link href="/academics/ba-llb" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${pathname === '/academics/ba-llb' ? 'text-[#0077c8]' : 'text-slate-600 hover:text-[#0077c8]'}`}>BA LLB</Link>
                <Link href="/academics/llb" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${pathname === '/academics/llb' ? 'text-[#0077c8]' : 'text-slate-600 hover:text-[#0077c8]'}`}>LLB</Link>
              </div>
            </div>
            
            <Link href="/grievance" onClick={() => setMobileMenuOpen(false)} className={`transition-colors ${pathname === '/grievance' ? 'text-[#0077c8]' : 'hover:text-[#0077c8]'}`}>Grievance</Link>
          </nav>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <div
              className="w-full text-center py-3 rounded bg-secondary hover:bg-primary text-white text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-default"
            >
              <Download className="w-4 h-4" /> Download Brochure
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
