import React from 'react';
import ContactInfo from './components/ContactInfo';

export const metadata = {
  title: 'Contact Us | KMCT Law College Kasaragod',
  description: 'Get in touch with KMCT Law College Kasaragod office.',
};

export default function ContactPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Contact KMCT Law College
        </h1>
        <p className="text-slate-400 text-lg">
          We are here to assist you with course inquiries, admissions, and campus visits.
        </p>
      </div>

      <ContactInfo />
    </div>
  );
}
