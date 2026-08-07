import React from 'react';
import { Quote } from 'lucide-react';

export default function ManagementDesk() {
  const profiles = [
    {
      name: "Dr. K M Navas",
      title: "Chairman, KMCT Group",
      message: "Our commitment at KMCT is to foster an environment where academic rigor meets ethical responsibility. We aim to mold legal professionals who will uphold justice and lead with integrity.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Ayisha Nazreen",
      title: "Director",
      message: "Legal education is the cornerstone of a just society. At KMCT College of Legal Studies, we integrate practical learning with deep theoretical insights to prepare our students for global challenges.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-[#005691] border border-blue-200 uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Management Desk</h2>
          <p className="text-slate-600 text-sm">Guided by visionaries dedicated to educational excellence and social progress.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#0077c8] hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-[#005691] transition-colors shadow-md">
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-4 text-center sm:text-left">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#005691] transition-colors">{profile.name}</h3>
                    <p className="text-xs font-bold text-[#0077c8] uppercase tracking-wider mt-1">{profile.title}</p>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-slate-200 rotate-180" />
                    <p className="text-slate-600 text-sm italic relative z-10 pl-6 leading-relaxed">
                      "{profile.message}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
