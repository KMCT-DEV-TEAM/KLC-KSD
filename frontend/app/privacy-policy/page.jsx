import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | KMCT Law College',
  description: 'Privacy Policy of KMCT Law College. Learn how we handle and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.png"
            alt="Privacy Policy"
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none text-justify">
          <p className="text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Introduction</h2>
          <p className="text-slate-600 mb-6">
            Welcome to KMCT Law College. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. The Data We Collect About You</h2>
          <p className="text-slate-600 mb-6">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you including:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">3. How We Use Your Personal Data</h2>
          <p className="text-slate-600 mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g. processing admissions).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">4. Data Security</h2>
          <p className="text-slate-600 mb-6">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">5. Contact Us</h2>
          <p className="text-slate-600 mb-6">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
            <br /><br />
            <strong>KMCT Law College</strong><br />
            Kuttippuram, Kerala, India<br />
            Email: info@kmct.edu.in<br />
            Phone: +91 494 2123 223
          </p>
        </div>
      </section>
    </div>
  );
}
