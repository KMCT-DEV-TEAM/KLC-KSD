import React from 'react';
import Image from 'next/image';

const ManagementTeam = () => {
  const team = [
    {
      name: 'Dr. K Moidu',
      title: 'Chairman',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Dr.Navas K.M',
      title: 'Chairman',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Dr. Ayisha Nazreen',
      title: 'Executive Trustee & Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full bg-white relative overflow-hidden">
      {/* Decorative accent background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Side: Text Description */}
        <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-24">
          <div className="space-y-2">
            <span className="text-sm font-semibold text-primary/60 tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
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
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="text-xl font-serif text-slate-900 group-hover:text-primary transition-colors duration-300 font-medium">
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
    </section>
  );
};

export default ManagementTeam;
