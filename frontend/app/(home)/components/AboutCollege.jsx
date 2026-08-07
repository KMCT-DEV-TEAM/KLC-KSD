import React from 'react';
import { BookOpen, Target, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutCollege() {
  return (
    <section className="py-24 px-6 relative bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Images */}
        <div className="relative" data-aos="fade-right">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 relative z-10">
            <img
              src="/images/img2.jpeg"
              alt="KMCT College of Legal Studies Campus"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
            <img
              src="/images/img1.jpeg"
              alt="Law Students"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 lg:pl-8" data-aos="fade-left">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 md:w-16 h-px bg-primary"></span>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                About KMCT College of Legal Studies
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              <span className='text-secondary'>A Legacy of Legal</span>  <span className="text-primary">Excellence</span>
            </h2>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Located in the serene landscapes of Kasaragod, KMCT College of Legal Studies is a premier institution dedicated to shaping the next generation of legal luminaries. We blend rigorous academic training with practical advocacy skills, empowering students to navigate and lead in the complex world of law and justice.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/5 border border-secondary/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-slate-500">To provide socially relevant legal education and promote justice.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/5 border border-secondary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1">Our Vision</h4>
                <p className="text-xs text-slate-500">To be a center of excellence in legal studies and research.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
