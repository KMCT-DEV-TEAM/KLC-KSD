"use client";

import React, { useState } from 'react';
import { Scale, BookOpen, MonitorPlay, Home, Bus, Trophy } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      title: "Moot Court Hall",
      desc: "Simulated courtroom for practical legal training.",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800&auto=format&fit=crop",
      icon: Scale,
    },
    {
      id: 2,
      title: "Digital Library",
      desc: "Access to SCC Online and thousands of reports.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Smart Classrooms",
      desc: "Equipped with modern AV teaching aids.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      icon: MonitorPlay,
    },
    {
      id: 4,
      title: "Hostel Facilities",
      desc: "Safe and comfortable on-campus accommodation.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
      icon: Home,
    },
    {
      id: 5,
      title: "College Transportation",
      desc: "Extensive bus network across Kasaragod.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      icon: Bus,
    },
    {
      id: 6,
      title: "Sports & Recreation",
      desc: "Promoting physical fitness and team spirit.",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop",
      icon: Trophy,
    }
  ];

  const [activeTab, setActiveTab] = useState(facilities[0]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="w-12 md:w-16 h-px bg-primary"></span>
              <span className="text-sm font-bold text-primary uppercase tracking-widest">
                Infrastructure
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">World-Class Facilities</h2>
            <p className="text-slate-600 text-sm">
              We provide a conducive environment for both academic learning and personal growth with state-of-the-art infrastructure.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-8">
          {/* Left Side: Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-1">
            {facilities.map((fac) => {
              const Icon = fac.icon;
              const isActive = activeTab.id === fac.id;
              
              return (
                <button
                  key={fac.id}
                  onClick={() => setActiveTab(fac)}
                  className={`flex items-center gap-4 py-2 px-3 rounded-xl transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-slate-50 shadow-sm border border-slate-200' 
                      : 'hover:bg-slate-50/50 border border-transparent hover:border-slate-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isActive ? 'bg-primary/10 border-primary/20 text-primary scale-105' : 'bg-transparent border-slate-200 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-primary' : 'text-slate-700'}`}>
                      {fac.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Image Display */}
          <div className="lg:w-2/3 grid grid-cols-6 gap-3 auto-rows-[160px] lg:auto-rows-[220px]">
            {/* First Line: 2 Images */}
            <div className="col-span-3 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img key={`${activeTab.id}-main1`} src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover animate-in fade-in duration-500" />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img key={`${activeTab.id}-main2`} src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover animate-in fade-in duration-500 delay-75" />
            </div>
            
            {/* Second Line: 3 Images */}
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img key={`${activeTab.id}-thumb1`} src={activeTab.image} className="w-full h-full object-cover animate-in fade-in duration-500 delay-100" alt="Thumbnail 1" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img key={`${activeTab.id}-thumb2`} src={activeTab.image} className="w-full h-full object-cover animate-in fade-in duration-500 delay-150" alt="Thumbnail 2" />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img key={`${activeTab.id}-thumb3`} src={activeTab.image} className="w-full h-full object-cover animate-in fade-in duration-500 delay-200" alt="Thumbnail 3" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
