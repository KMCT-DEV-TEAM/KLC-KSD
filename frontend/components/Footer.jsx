import React from 'react';
import Link from 'next/link';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#005691] flex items-center justify-center text-white border border-[#0077c8]">
            <Scale className="w-4 h-4" />
          </div>
          <span className="text-white font-semibold tracking-wide">KMCT College of Legal Studies (KLC-KSD)</span>
        </div>

        <div className="flex items-center gap-6 text-slate-400">
          <Link href="/" className="hover:text-[#0077c8] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#0077c8] transition-colors">About</Link>
          <Link href="/programs" className="hover:text-[#0077c8] transition-colors">Programs</Link>
          <Link href="/admissions" className="hover:text-[#0077c8] transition-colors">Admissions</Link>
          <Link href="/contact" className="hover:text-[#0077c8] transition-colors">Contact</Link>
        </div>

        <p>© {new Date().getFullYear()} KMCT College of Legal Studies. All rights reserved.</p>
      </div>
    </footer>
  );
}
