'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What courses are offered at KMCT Law College?",
    answer: "KMCT Law College offers two major programs: a 5-year integrated BA LL.B program and a 3-year LL.B program, both designed to provide comprehensive legal education and practical training."
  },
  {
    question: "Is KMCT Law College recognized by the Bar Council of India?",
    answer: "Yes, KMCT Law College is fully recognized and approved by the Bar Council of India (BCI) and is affiliated with the respective state university."
  },
  {
    question: "What are the eligibility criteria for the BA LL.B program?",
    answer: "Candidates must have successfully completed their 10+2 (or equivalent) examination from a recognized Board with a minimum required percentage as stipulated by the university guidelines."
  },
  {
    question: "Does the college provide hostel facilities?",
    answer: "Yes, we provide excellent and secure hostel facilities for both boys and girls, equipped with all modern amenities to ensure a comfortable stay."
  },
  {
    question: "How can I apply for admission?",
    answer: "Admissions can be initiated by contacting our admission desk or filling out the inquiry forms available on our website. Our counselors will guide you through the documentation and enrollment process."
  },
  {
    question: "Are there moot court facilities available for students?",
    answer: "Absolutely. We have a dedicated, state-of-the-art moot court hall where students regularly participate in mock trials and competitions to hone their advocacy skills."
  },
  {
    question: "Does the college offer placement assistance?",
    answer: "Yes, we have an active placement cell that assists students with internships and final placements by connecting them with reputed law firms, corporate houses, and senior advocates."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-primary/50'}`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-900'}`}>
                {faq.question}
              </h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-600 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
