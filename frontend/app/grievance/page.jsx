import React from 'react';
import Image from 'next/image';
import GrievanceForm from './components/GrievanceForm';

export const metadata = {
  title: 'Grievance Redressal | KMCT Law College Kasaragod',
  description: 'Register and submit your grievances online at KMCT Law College Kasaragod.',
};

export default function GrievancePage() {
  return (
    <div className="w-full min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="Grievance Redressal"
            fill
            priority
            className="object-cover opacity-40 transition-all duration-700 scale-105"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-12">
          <div className="max-w-3xl text-left space-y-6">
            <span className="text-sm font-bold px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest inline-block mb-2">
              Support & Redressal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Grievance <br className="hidden md:block" />
              <span className="text-primary">Redressal Cell</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              We are committed to providing a safe, fair, and transparent environment. Submit your concerns here and our dedicated committee will address them promptly.
            </p>
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
              alt="Grievance Redressal Meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
              Overview of Grievance Redressal
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                The Grievance Redressal Committee (GRC) at KMCT College of Legal Studies is a body formed to address and resolve grievances or complaints raised by students, faculty, or other stakeholders associated with the institution.
              </p>
              <p>
                Its primary goal is to maintain a harmonious, fair, and transparent educational environment by providing a secure platform where individuals can express their concerns without fear of retaliation. We ensure that every grievance is heard, evaluated impartially, and resolved promptly according to our institutional guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Form */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <GrievanceForm />
      </div>

    </div>
  );
}
