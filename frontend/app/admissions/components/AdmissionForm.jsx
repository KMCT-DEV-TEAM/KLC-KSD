'use client';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
        <p className="text-slate-400 max-w-sm mb-8">
          Thank you for applying to KMCT Law College. Our admissions team will review your application and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
      <h2 className="text-2xl font-bold text-white">Online Application Form</h2>
      <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 mb-1 text-xs font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1 text-xs font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 mb-1 text-xs font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1 text-xs font-medium">Select Program</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-indigo-500">
              <option value="ballb">5-Year BA LL.B (Hons)</option>
              <option value="llb">3-Year LL.B</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-slate-300 mb-1 text-xs font-medium">Message / Query (Optional)</label>
          <textarea
            rows={4}
            placeholder="Any specific questions about eligibility or fees..."
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all w-full sm:w-auto disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : (
            <>
              Submit Application <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
