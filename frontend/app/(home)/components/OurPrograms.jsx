import React from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';

export default function OurPrograms() {
  const programs = [
    {
      title: '5-Year BA LL.B (Hons)',
      desc: 'An integrated undergraduate program combining liberal arts and comprehensive legal studies for 12th graduates.',
      icon: BookOpen,
      badge: 'Integrated Course'
    },
    {
      title: '3-Year LL.B',
      desc: 'Intensive law degree designed for graduates aiming to enter litigation, judicial services, or corporate law.',
      icon: GraduationCap,
      badge: 'Post-Graduate'
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-slate-100" data-aos="fade-up">
      <div className="max-w-7xl mx-auto space-y-16" data-aos="fade-up">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 md:w-16 h-px bg-primary"></span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Academic Excellence
            </span>
            <span className="w-12 md:w-16 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Programs</h2>
          <p className="text-slate-600 text-sm">
            Distinguished law degree curricula crafted to nurture analytical thinking and advocacy skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((prog, idx) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-secondary transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-secondary/5 border border-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {prog.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-secondary group-hover:text-primary gap-2">
                  <Link href="/programs" className="flex items-center gap-1">
                    View Curriculum <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
