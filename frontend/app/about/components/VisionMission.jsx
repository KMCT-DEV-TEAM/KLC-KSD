import React from 'react';
import { Award, Shield } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="p-10 rounded-[2rem] bg-slate-900/40 border border-slate-800/60 shadow-xl backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            To become a premier legal institution recognized for academic quality, innovative research, clinical legal education, and community advocacy across India and beyond.
          </p>
        </div>

        <div className="p-10 rounded-[2rem] bg-slate-900/40 border border-slate-800/60 shadow-xl backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Equip law students with rigorous analytical skills, constitutional values, practical moot training, and legal assistance initiatives for the betterment of society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
