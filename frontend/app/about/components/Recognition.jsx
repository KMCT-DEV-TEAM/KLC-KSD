import React from 'react';
import Image from 'next/image';

const Recognition = () => {
  const logos = [
    {
      name: "University of Calicut",
      image: "/images/university of calicut.jpg"
    },
    {
      name: "Bar Council of India",
      image: "/images/bar council of india.svg"
    },
    {
      name: "Department of Justice",
      image: "/images/justice for all.jpg"
    },
    {
      name: "National Service Scheme",
      image: "/images/nss.jpg"
    },
    {
      name: "IEDC",
      image: "/images/innovation.jpg"
    }
  ];

  return (
    <section className="py-16 px-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
          Recognition
        </h2>

        {/* Logos Container */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center w-28 h-28 md:w-32 md:h-32 transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Recognition;
