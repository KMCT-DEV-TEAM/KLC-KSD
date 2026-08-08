'use client';
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
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
      <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-primary/5 text-secondary rounded-full flex items-center justify-center mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
        <p className="text-secondary">Thank you for reaching out. We will get back to you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-primary/70 font-medium transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
      <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Send us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="John"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="+91 0000000000"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-secondary hover:bg-primary text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
