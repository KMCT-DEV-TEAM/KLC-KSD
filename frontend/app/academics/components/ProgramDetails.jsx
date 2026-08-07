'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const ProgramDetails = ({ aboutText, eligibility, duration, features }) => {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (idx) => {
    if (openSemester === idx) {
      setOpenSemester(null);
    } else {
      setOpenSemester(idx);
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full bg-white" data-aos="fade-up">
      {/* About Programme */}
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">About Programme</h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            {aboutText}
          </p>
        </div>

        {/* Eligibility Criteria */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Eligibility Criteria:</h3>
          <p className="text-slate-600 mb-4">
            To be eligible for the program, candidates must meet the following criteria:
          </p>
          <ul className="space-y-3">
            {eligibility.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Course Duration */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Course Duration:</h3>
          <p className="text-slate-600 leading-relaxed">
            {duration}
          </p>
        </div>

        {/* Program Features */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Program Features:</h3>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">{feature.title}: </span>
                  {feature.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>



      </div>
    </section>
  );
};

export default ProgramDetails;
