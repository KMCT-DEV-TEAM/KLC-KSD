import React from 'react';
import { Quote } from 'lucide-react';

export default function ManagementDesk() {
  const profiles = [
    {
      name: "Dr. K Moidu",
      title: "Founder Chairman",
      message: "Education is the key to transforming society. At KMCT, our vision is to provide accessible, high-quality learning that empowers individuals to build a brighter, more just future.",
      image: "/images/Founder - Dr K Moidu.jpg.jpeg"
    },
    {
      name: "Dr. K M Navas",
      title: "Chairman, KMCT Group",
      message: "Our commitment at KMCT is to foster an environment where academic rigor meets ethical responsibility. We aim to mold legal professionals who will uphold justice and lead with integrity.",
      image: "/images/Dr Navas K M.jpg.jpeg"
    },
    {
      name: "Dr. Ayisha Nazreen",
      title: "Director",
      message: "Legal education is the cornerstone of a just society. We integrate practical learning with deep theoretical insights to prepare our students for global challenges.",
      image: "/images/Dr Ayisha Nazreen - Excecutive Trustee & Director.jpg.jpeg"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 md:w-16 h-px bg-primary"></span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Leadership
            </span>
            <span className="w-12 md:w-16 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight">Management Desk</h2>
          <p className="text-slate-600 text-sm">Guided by visionaries dedicated to educational excellence and social progress.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="w-28 h-28 shrink-0 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-primary transition-colors shadow-md">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{profile.name}</h3>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider mt-1">{profile.title}</p>
                  </div>
                  <div className="relative text-left">
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
