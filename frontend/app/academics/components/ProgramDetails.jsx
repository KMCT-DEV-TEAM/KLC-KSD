'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const ProgramDetails = ({ aboutText, eligibility, duration, features, syllabus }) => {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (idx) => {
    if (openSemester === idx) {
      setOpenSemester(null);
    } else {
      setOpenSemester(idx);
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full bg-white">
      {/* About Programme */}
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">About Programme</h2>
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

        {/* Syllabus Section */}
        <div className="pt-8">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 border-b border-slate-200 pb-4">Syllabus</h2>
          
          <div className="space-y-4">
            {syllabus.map((semester, idx) => (
              <div 
                key={idx} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${openSemester === idx ? 'border-primary/30 shadow-md shadow-primary/5 bg-slate-50' : 'border-slate-200 bg-white hover:border-primary/20'}`}
              >
                <button 
                  onClick={() => toggleSemester(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-xl font-serif font-medium text-slate-800">
                    {semester.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openSemester === idx ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {openSemester === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSemester === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                      {semester.subjects.map((subject, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramDetails;
