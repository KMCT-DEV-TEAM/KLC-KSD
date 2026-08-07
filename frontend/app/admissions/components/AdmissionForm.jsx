'use client';
import React from 'react';
import { Send } from 'lucide-react';

export default function AdmissionForm() {
  return (
    <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
      <h2 className="text-2xl font-bold text-white">Online Application Form</h2>
      <form className="space-y-4 text-sm" onSubmit={(e) => e.preventDefault()}>
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
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all"
        >
          Submit Application <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
