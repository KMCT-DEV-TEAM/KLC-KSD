import React from 'react';

export default function Facilities() {
  const facilities = [
    {
      title: "Moot Court Hall",
      desc: "Simulated courtroom for practical legal training.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      title: "Digital Library",
      desc: "Access to SCC Online and thousands of reports.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      title: "Smart Classrooms",
      desc: "Equipped with modern AV teaching aids.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      title: "Hostel Facilities",
      desc: "Safe and comfortable on-campus accommodation.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1"
    },
    {
      title: "College Transportation",
      desc: "Extensive bus network across Kasaragod.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    },
    {
      title: "Sports & Recreation",
      desc: "Promoting physical fitness and team spirit.",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      rowSpan: "row-span-1"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-[#005691] border border-blue-200 uppercase tracking-wider">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">World-Class Facilities</h2>
            <p className="text-slate-600 text-sm">
              We provide a conducive environment for both academic learning and personal growth with state-of-the-art infrastructure.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {facilities.map((fac, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-slate-200 hover:border-[#0077c8] hover:shadow-lg hover:shadow-blue-900/10 transition-all ${fac.colSpan} ${fac.rowSpan}`}
            >
              <img 
                src={fac.image} 
                alt={fac.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{fac.title}</h3>
                <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
