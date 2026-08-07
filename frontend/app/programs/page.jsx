import React from 'react';
import { BookOpen, GraduationCap, Scale, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Academic Programs | KMCT Law College',
  description: 'Explore 5-Year BA LL.B (Hons) and 3-Year LL.B programs at KMCT Law College.',
};

export default function ProgramsPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 uppercase tracking-wider">
          Course Offerings
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive Legal Programs
        </h1>
        <p className="text-slate-400 text-lg">
          Accredited law courses designed to build strong foundations in jurisprudence, litigation practice, and corporate law.
        </p>
      </div>

      <div className="space-y-12">
        {/* BA LL.B */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              5-Year Integrated Degree
            </span>
            <h2 className="text-3xl font-bold text-white">BA LL.B (Honours)</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designed for Higher Secondary (10+2) graduates. Integrates humanities, political science, sociology, and economics with core law subjects over 10 semesters.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Eligibility: 10+2 with minimum 45% aggregate marks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Duration: 5 Years (10 Semesters)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Includes Internship & Moot Court Clinical Modules</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
            <p className="text-sm font-semibold text-white">Ready to Apply?</p>
            <a href="/admissions" className="block w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all">
              Apply for BA LL.B
            </a>
          </div>
        </div>

        {/* 3-Year LL.B */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              3-Year Degree Program
            </span>
            <h2 className="text-3xl font-bold text-white">3-Year LL.B</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Targeted towards university graduates seeking a professional qualification in Law. Focuses on criminal law, constitutional law, contracts, property law, and court procedure.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Eligibility: Bachelor degree in any discipline</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Duration: 3 Years (6 Semesters)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Advanced Moot Court & ADR Training</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
            <p className="text-sm font-semibold text-white">Ready to Apply?</p>
            <a href="/admissions" className="block w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all">
              Apply for 3-Year LL.B
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
