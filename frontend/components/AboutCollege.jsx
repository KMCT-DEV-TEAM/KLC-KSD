import React from 'react';
import { BookOpen, Target, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutCollege() {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Images */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop" 
              alt="KMCT College of Legal Studies Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
            <img 
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop" 
              alt="Law Students" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0077c8]/10 rounded-full blur-3xl" />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 lg:pl-8">
          <div className="space-y-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0077c8] border border-blue-200 uppercase tracking-wider">
              About KMCT College of Legal Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              A Legacy of Legal <span className="text-[#005691]">Excellence</span>
            </h2>
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Located in the serene landscapes of Kasaragod, KMCT College of Legal Studies is a premier institution dedicated to shaping the next generation of legal luminaries. We blend rigorous academic training with practical advocacy skills, empowering students to navigate and lead in the complex world of law and justice.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-[#0077c8]" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-slate-500">To provide socially relevant legal education and promote justice.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#0077c8]" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[#005691] text-[#005691] font-semibold hover:bg-[#005691] hover:text-white transition-all duration-300"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
