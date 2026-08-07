import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: MapPin, title: 'Location', text: 'KMCT Law College Campus, Kasaragod, Kerala' },
          { icon: Phone, title: 'Phone', text: '+91 4994 200 300 / +91 94000 12345' },
          { icon: Mail, title: 'Email', text: 'lawcollege.ksd@kmct.edu.in' },
          { icon: Clock, title: 'Office Hours', text: 'Monday – Saturday: 9:00 AM – 4:30 PM' },
        ].map((info, idx) => {
          const IconComp = info.icon;
          return (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <IconComp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{info.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{info.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
