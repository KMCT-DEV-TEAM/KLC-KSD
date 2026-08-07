import React from 'react';
import Image from 'next/image';

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="About KMCT Law College"
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl text-left space-y-6">
          <span className="text-sm font-bold px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest inline-block mb-2">
            About Our Institution
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Nurturing Legal <br className="hidden md:block" />
            <span className="text-primary">Ethics & Brilliance</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
            KMCT Law College Kasaragod was established to deliver exemplary legal education, fostering judicial values, advocacy skills, and social responsibility for a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
