import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | KMCT Law College',
  description: 'Terms and Conditions for using the KMCT Law College website and services.',
};

export default function TermsConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center bg-slate-900 overflow-hidden" data-aos="fade-up">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="Terms of Service"
            fill
            priority
            className="object-cover opacity-40 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12">
          <div className="max-w-3xl text-left space-y-6">
            <span className="text-sm font-bold px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-widest inline-block mb-2">
              Legal Documents
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Terms of <span className="text-primary">Service</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="prose prose-slate prose-lg max-w-none text-justify">
          <p className="text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. Educational Purposes Only</h2>
          <p className="text-slate-600 mb-6">
            The content on this website is for general information and educational purposes only. It is subject to change without notice. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability or availability with respect to the website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">3. Intellectual Property Rights</h2>
          <p className="text-slate-600 mb-6">
            This website contains material which is owned by or licensed to KMCT Law College. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>
          <p className="text-slate-600 mb-6">
            All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">4. Admission & Fees</h2>
          <p className="text-slate-600 mb-6">
            Any admission information, fee structures, or program details listed on the website are indicative and subject to final confirmation by the college administration. The college reserves the right to modify fee structures, courses, and eligibility criteria as mandated by the University or Bar Council of India without prior notice on the website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">5. Links to Other Websites</h2>
          <p className="text-slate-600 mb-6">
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">6. Governing Law</h2>
          <p className="text-slate-600 mb-6">
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of India. Any legal disputes will be under the exclusive jurisdiction of the courts located in Kerala.
          </p>
        </div>
      </section>
    </div>
  );
}
