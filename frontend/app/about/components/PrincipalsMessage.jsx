import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const PrincipalsMessage = () => {
  return (
    <section className="py-24 px-6 relative bg-white overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-2xl -z-10 -translate-x-1/2 translate-y-1/4" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Premium Image Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-[90%] mx-auto lg:w-full">
              {/* Offset Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-6 translate-y-6" />
              
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 z-10">
                <Image
                  src="/images/sheena principal.jpg"
                  alt="Dr. Sheena C S - Principal"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Name Card */}
              <div className="absolute -bottom-8 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 w-[85%]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-slate-900 font-bold">
                      Dr. Sheena C S
                    </h3>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mt-0.5">
                      Principal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Content */}
          <div className="lg:col-span-7 relative lg:pl-10 mt-16 lg:mt-0">
            {/* Giant watermark quote */}
            <Quote className="absolute -top-10 left-0 lg:left-10 w-40 h-40 text-primary/[0.03] rotate-180 -z-10" />

            <div className="space-y-4 mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Message From The Desk
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Empowering the Next Generation of <span className="text-primary italic">Legal Minds</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed text-justify relative z-10">
              <p>
                Welcome to KMCT Law College, Kuttippuram — a hub of academic excellence and holistic development in legal education. Since its establishment in 2013, our institution has been committed to nurturing legal professionals equipped with knowledge, ethics, and a sense of responsibility towards society.
              </p>
              <p>
                At KMCT Law College, we believe that education is not just about academics but also about character-building and practical exposure. Our students benefit from a robust curriculum, engaging moot court practices, and active participation in conferences, seminars, and community outreach programs. The support of a dedicated faculty team, modern facilities, and an inspiring learning environment ensures that our graduates are well-prepared to face the challenges of the legal profession.
              </p>
              <p>
                We take pride in our students&apos; achievements, from excelling in academics to securing placements in reputed organizations. As we continue to uphold our mission of fostering excellence, I invite you to explore KMCT Law College and join us in our journey toward creating a brighter future for legal education.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 pt-8 border-t border-slate-100">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <div>
                <p className="text-slate-500 italic mb-1">Warm regards,</p>
                <p className="font-serif text-xl font-bold text-slate-900">Dr. Sheena C S</p>
                <p className="text-sm text-primary font-medium">KMCT Law College</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;
