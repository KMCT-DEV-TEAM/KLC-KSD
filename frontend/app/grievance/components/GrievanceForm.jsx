'use client';
import React, { useState } from 'react';
import { Send, FileText } from 'lucide-react';

export default function GrievanceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">Grievance Submitted!</h3>
        <p className="text-green-700">Thank you for bringing this to our attention. Our cell will review your grievance and contact you shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
        >
          Submit Another Grievance
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Grievance Redressal Form</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <input 
            type="text" 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="Enter Complaint Name"
          />
          <input 
            type="text" 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="Enter Student Name"
          />
          <input 
            type="email" 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="Enter Email"
          />
          <input 
            type="tel" 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Row 2: Address (span 2), State (span 1), City (span 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2">
            <input 
              type="text" 
              required
              className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
              placeholder="Enter Address"
            />
          </div>
          <select 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 appearance-none"
          >
            <option value="">Select a State</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamilnadu">Tamil Nadu</option>
            <option value="other">Other</option>
          </select>
          <input 
            type="text" 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
            placeholder="City"
          />
        </div>

        {/* Row 3: Programme and Nature of Grievance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <select 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 appearance-none"
          >
            <option value="">Programme Related to Which Grievance is</option>
            <option value="ba_llb">BA LL.B (5 Years)</option>
            <option value="llb">LLB (3 Years)</option>
            <option value="other">Other</option>
          </select>
          <select 
            required
            className="w-full px-5 py-3.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 appearance-none"
          >
            <option value="">Nature of Grievance</option>
            <option value="academic">Academic</option>
            <option value="administrative">Administrative</option>
            <option value="infrastructure">Infrastructure</option>
            <option value="harassment">Harassment</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Row 4: Description */}
        <div>
          <textarea 
            required
            rows={6}
            className="w-full px-5 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400"
            placeholder="Description"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-6 text-center">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-12 py-3.5 bg-secondary hover:bg-primary text-white font-bold rounded-lg transition-all shadow-md disabled:opacity-70 inline-flex items-center justify-center gap-2 min-w-[200px]"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Submitting...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Grievance</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
