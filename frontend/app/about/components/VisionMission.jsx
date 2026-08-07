import React from 'react';
import { Award, Shield } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="w-full bg-slate-50 py-24">
      <div className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              To become a premier legal institution recognized for academic quality, innovative research, clinical legal education, and community advocacy across India and beyond.
            </p>
          </div>

          <div className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Equip law students with rigorous analytical skills, constitutional values, practical moot training, and legal assistance initiatives for the betterment of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
