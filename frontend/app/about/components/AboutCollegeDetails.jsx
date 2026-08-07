import React from 'react';
import Image from 'next/image';

const AboutCollegeDetails = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full bg-white">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Side: Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold text-primary/50 tracking-widest uppercase">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary">
              KMCT Law College
            </h2>
          </div>

          <p className="text-lg font-medium text-slate-800 leading-relaxed">
            KMCT Law college, Kuttippuram is a self-financing law college established in the year 2013
          </p>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed text-justify">
            <p>
              KMCT Law college, Kuttippuram is a self-financing law college established in the year 2013 and has set a bench mark for quality legal education in the State of Kerala. The objective of the institution focused on imparting legal education to all sects of the society. The institution was built on strong foundation and has maintained its reputation as a fine institution for legal education over a period of time.
            </p>

            <p>
              The Kunhitharuvai Memorial Charitable Trust Group of Institutions or KMCT was established in 1994 by Dr. K. Moidu a leading medical practitioner and a visionary educationist with an objective of promoting high standards and excellence in the field of technical and professional education and to provide information and training in a systematic manner to the student community, expanded in to a conglomeration of around eighteen educational institutions under the brand name &quot;KMCT Group of Institutions&quot;. The KMCT Group of Institutions is one of the largest groups of educational institutions in Kerala.
            </p>

            <p>
              The courses offered in KMCT Law College are Integrated 5 year B.B.A.LL.B, B.Com.LL.B and 3 year L.L.B programmes. B.B.A.LL.B and B.Com.LL.B programmes
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
