import React from 'react';
import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-300 pt-20 pb-8 px-6 border-t-[6px] border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6 h-8">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-white text-xl font-bold tracking-wide">KMCT Law College</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 text-justify mb-6">
              Empowering the next generation of legal minds. We are committed to nurturing legal professionals equipped with profound knowledge, ethics, and a deep sense of responsibility towards society.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 h-8 flex items-center">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Admissions', path: 'https://admissions.kmct.org/', isExternal: true },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  {link.isExternal ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.path} className="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                      <ChevronRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 h-8 flex items-center">Academics</h3>
            <ul className="space-y-3">
              {[
                { name: 'BA LLB (5 Years)', path: '/academics/ba-llb' },
                { name: 'LLB (3 Years)', path: '/academics/llb' },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ChevronRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 h-8 flex items-center">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  KMCT Law College<br />
                  Kuttippuram, Kasaragod<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/918086634000" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 80866 34000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:kmctcls@kmct.org" className="text-sm text-slate-400 hover:text-white transition-colors">
                  kmctcls@kmct.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} KMCT College of Legal Studies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
