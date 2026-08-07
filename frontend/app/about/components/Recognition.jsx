import React from 'react';
import Image from 'next/image';

const Recognition = () => {
  const logos = [
    {
      name: "Bar Council of India",
      image: "/images/bar council of india.svg"
    },
    {
      name: "University of Kannur",
      image: "/images/kannur.png"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-slate-50/50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 md:w-16 h-px bg-primary"></span>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Accreditation
            </span>
            <span className="w-12 md:w-16 h-px bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
            Recognitions & Affiliations
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group bg-white p-12 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col items-center justify-center border border-slate-100"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-10 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-8 h-1 bg-slate-200 rounded-full mb-6 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
              <h3 className="text-2xl font-bold text-slate-800 text-center group-hover:text-primary transition-colors duration-300">
                {logo.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Recognition;
