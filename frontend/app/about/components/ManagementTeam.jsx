import React from 'react';
import Image from 'next/image';

const ManagementTeam = () => {
  const team = [
    {
      name: 'Dr. K Moidu',
      title: 'Chairman',
      image: '/images/Founder - Dr K Moidu.jpg.jpeg',
    },
    {
      name: 'Dr.Navas K.M',
      title: 'Chairman',
      image: '/images/Dr Navas K M.jpg.jpeg',
    },
    {
      name: 'Dr. Ayisha Nazreen',
      title: 'Executive Trustee & Director',
      image: '/images/Dr Ayisha Nazreen - Excecutive Trustee & Director.jpg.jpeg',
    },
  ];

  return (
    <section className="w-full bg-slate-50 relative overflow-hidden py-24">
      {/* Decorative accent background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 md:w-16 h-px bg-primary"></span>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Leadership
              </span>
              <span className="w-12 md:w-16 h-px bg-primary"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Management Team Members
            </h2>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            The management team of KMCT Group of Institutions is led by prominent figures dedicated to fostering excellence in education and providing quality services. The strategic growth of KMCT Law College is closely monitored and guided by this eminent team, fulfilling its mission of delivering top-quality education across various disciplines.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-36 h-36 mb-6 relative rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-primary/20 transition-colors shadow-sm shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-2 mt-auto">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-xs text-secondary font-bold uppercase tracking-wider">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
