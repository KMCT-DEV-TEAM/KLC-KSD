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
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden" data-aos="fade-up">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10" data-aos="fade-up">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col border border-slate-100/50"
            >
              {/* Full-width square image container */}
              <div className="w-full aspect-square relative overflow-hidden bg-slate-100">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 absolute inset-0"
                />
                {/* Subtle gradient overlay at the bottom of the image for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Text Content */}
              <div className="p-6 bg-white relative z-10 flex flex-col items-center text-center flex-1">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">
                  {profile.name}
                </h3>
                <div className="w-6 h-px bg-secondary rounded-full mb-3 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
                <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider mb-4">
                  {profile.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
