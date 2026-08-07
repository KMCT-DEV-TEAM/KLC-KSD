import React from 'react';
import Image from 'next/image';

const AboutCollegeDetails = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full bg-white" data-aos="fade-up">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 md:w-16 h-px bg-primary"></span>
              <span className="text-sm font-bold text-primary tracking-widest uppercase">
                About
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary space-y-2">
              KMCT College of Legal Studies
            </h2>
          </div>

          <p className="text-base font-medium text-slate-800 leading-relaxed">
            Since its establishment, KMCT College of Legal Studies has rapidly emerged as a center for legal excellence. Our institution is dedicated to offering rigorous academic training combined with practical exposure to the legal system.
          </p>

          <div className="space-y-6 text-base text-slate-600 leading-relaxed text-justify">
            <p>
              KMCT College of Legal Studies, Kasaragod is a self-financing law college established in the year 2013 and has set a benchmark for quality legal education in the State of Kerala. The objective of the institution focused on imparting legal education to all sects of the society. The institution was built on strong foundation and has maintained its reputation as a fine institution for legal education over a period of time.
            </p>

            <p>
              The Kunhitharuvai Memorial Charitable Trust Group of Institutions or KMCT was established in 1994 by Dr. K. Moidu a leading medical practitioner and a visionary educationist with an objective of promoting high standards and excellence in the field of technical and professional education and to provide information and training in a systematic manner to the student community, expanded in to a conglomeration of around eighteen educational institutions under the brand name &quot;KMCT Group of Institutions&quot;. The KMCT Group of Institutions is one of the largest groups of educational institutions in Kerala.
            </p>

            <p>
              The courses offered in KMCT College of Legal Studies are Integrated 5 year B.A. LL.B and 3 year LL.B programmes.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop"
            alt="Law Students in Library"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCollegeDetails;
