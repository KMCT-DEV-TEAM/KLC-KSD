import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Affiliation() {
  const affiliations = [
    {
      title: "Bar Council of India",
      desc: "Approved by the statutory body regulating legal practice and education in India.",
      logo: "/images/bar council of india.svg"
    },
    {
      title: "University of Calicut",
      desc: "Affiliated to a recognized state university ensuring academic standards.",
      logo: "/images/university of calicut.jpg" 
    },
    {
      title: "Government of Kerala",
      desc: "Recognized by the Higher Education Department, Govt of Kerala.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Government_of_Kerala_Logo.svg/1024px-Government_of_Kerala_Logo.svg.png"
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Header */}
          <div className="md:w-1/3 flex flex-col items-center justify-center text-center space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-secondary leading-tight">
              Affiliations & Recognitions
            </h2>
            <p className="text-slate-600 text-sm max-w-sm">
              Our programs meet the highest academic and professional standards set by governing bodies.
            </p>
          </div>

          {/* Cards */}
          <div className="md:w-2/3 grid sm:grid-cols-3 gap-6">
            {affiliations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-secondary hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full p-2 flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                  <img 
                    src={item.logo} 
                    alt={item.title} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h4 className="text-secondary font-semibold text-sm mb-2">{item.title}</h4>
                <p className="text-slate-500 text-xs">{item.desc}</p>
                <div className="mt-4 flex justify-center text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
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
