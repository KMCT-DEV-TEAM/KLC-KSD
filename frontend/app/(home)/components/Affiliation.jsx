import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Affiliation() {
  const affiliations = [
    {
      title: "Bar Council of India",
      desc: "Approved by the statutory body regulating legal practice and education in India.",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Bar_Council_of_India_logo.png"
    },
    {
      title: "Affiliating University",
      desc: "Affiliated to a recognized state university ensuring academic standards.",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=128&h=128&fit=crop" 
    },
    {
      title: "Government of Kerala",
      desc: "Recognized by the Higher Education Department, Govt of Kerala.",
      logo: "https://images.unsplash.com/photo-1555601568-c9e6f328489b?w=128&h=128&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="md:w-1/3 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 mb-2">
              <Award className="w-6 h-6 text-[#0077c8]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Affiliations & Recognitions
            </h2>
            <p className="text-slate-600 text-sm">
              Our programs meet the highest academic and professional standards set by governing bodies.
            </p>
          </div>

          {/* Cards */}
          <div className="md:w-2/3 grid sm:grid-cols-3 gap-6">
            {affiliations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0077c8] hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full p-2 flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                  <img 
                    src={item.logo} 
                    alt={item.title} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h4 className="text-slate-900 font-semibold text-sm mb-2">{item.title}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
                <div className="mt-4 flex justify-center text-[#0077c8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
