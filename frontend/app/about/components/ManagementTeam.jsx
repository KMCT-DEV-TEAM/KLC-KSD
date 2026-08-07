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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Text Description */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 md:w-16 h-px bg-primary"></span>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">
                  Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
                Management Team Members
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              The management team of KMCT Group of Institutions is led by prominent figures dedicated to fostering excellence in education and providing quality services. The strategic growth of KMCT Law College is closely monitored and guided by this eminent team. Together, they work to ensure the continued success of the college and the entire KMCT Group, fulfilling its mission of delivering top-quality education across various disciplines.
            </p>
          </div>

          {/* Right Side: Team Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col space-y-5 cursor-pointer">
                <div className="relative aspect-[3/4] w-full overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out rounded-[18px]"
                  />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
