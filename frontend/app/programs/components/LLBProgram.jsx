import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function LLBProgram() {
  return (
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
        <a href="https://admissions.kmct.org/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all">
          Apply for 3-Year LL.B
        </a>
      </div>
    </div>
  );
}
