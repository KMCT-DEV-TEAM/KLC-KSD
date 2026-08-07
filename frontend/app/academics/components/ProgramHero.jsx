import React from 'react';
import Image from 'next/image';

const ProgramHero = ({ badgeText, titleMain, titleHighlight, description, bgImage }) => {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center bg-slate-900" data-aos="fade-up">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop"}
          alt={titleMain}
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
          {badgeText && (
            <span className="text-sm font-bold px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest inline-block mb-2">
              {badgeText}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {titleMain} <br className="hidden md:block" />
            {titleHighlight && <span className="text-primary">{titleHighlight}</span>}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
