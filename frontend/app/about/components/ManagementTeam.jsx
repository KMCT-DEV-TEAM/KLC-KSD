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
    <section className="w-full bg-slate-50 relative overflow-hidden py-24" data-aos="fade-up">
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col border border-slate-100/50"
            >
              {/* Full-width square image container */}
              <div className="w-full aspect-square relative overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle gradient overlay at the bottom of the image for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Text Content */}
              <div className="p-6 bg-white relative z-10 flex flex-col items-center text-center">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors duration-300 mb-2">
                  {member.name}
                </h3>
                <div className="w-6 h-px bg-secondary rounded-full mb-3 transition-all duration-500 group-hover:w-12 group-hover:bg-primary" />
                <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider">
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
