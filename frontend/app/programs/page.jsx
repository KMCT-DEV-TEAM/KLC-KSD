import React from 'react';
import BALLBProgram from './components/BALLBProgram';
import LLBProgram from './components/LLBProgram';

export const metadata = {
  title: 'Academic Programs | KMCT College of Legal Studies',
  description: 'Explore 5-Year BA LL.B (Hons) and 3-Year LL.B programs at KMCT College of Legal Studies.',
};

export default function ProgramsPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16" data-aos="fade-up">
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
        <BALLBProgram />
        <LLBProgram />
      </div>
    </div>
  );
}
