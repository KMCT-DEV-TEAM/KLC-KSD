'use client';

import React from 'react';
import { Send, FileCheck, Calendar } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 uppercase tracking-wider">
          Admissions Open 2026-2027
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Join KMCT Law College
        </h1>
        <p className="text-slate-400 text-lg">
          Begin your legal career journey. Submit your application online or contact our admissions office.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
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

        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-indigo-400" />
              <h3 className="text-base font-bold text-white">Required Documents</h3>
            </div>
            <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
              <li>10th & 12th Marklists / Degree Certificate</li>
              <li>Transfer Certificate (TC) & Conduct Certificate</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Passport size photographs (4 copies)</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-purple-400" />
              <h3 className="text-base font-bold text-white">Key Dates</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applications open throughout May - August. Contact admissions desk for spot admission details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
