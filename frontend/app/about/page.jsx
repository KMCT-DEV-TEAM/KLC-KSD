import React from 'react';
import { Award, BookOpen, Users, Shield } from 'lucide-react';

export const metadata = {
  title: 'About Us | KMCT Law College Kasaragod',
  description: 'Learn about KMCT Law College, Kasaragod - our mission, vision, and legal education legacy.',
};

export default function AboutPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 uppercase tracking-wider">
          About KLC-KSD
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Nurturing Legal Ethics & Academic Brilliance
        </h1>
        <p className="text-slate-400 text-lg">
          KMCT Law College Kasaragod was established to deliver exemplary legal education, fostering judicial values, advocacy skills, and social responsibility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            To become a premier legal institution recognized for academic quality, innovative research, clinical legal education, and community advocacy across India and beyond.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Shield className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Equip law students with rigorous analytical skills, constitutional values, practical moot training, and legal assistance initiatives for the betterment of society.
          </p>
        </div>
      </div>
    </div>
  );
}
