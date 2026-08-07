import React from 'react';
import HeroSection from './components/HeroSection';
import AboutCollege from './components/AboutCollege';
import Affiliation from './components/Affiliation';
import ManagementDesk from './components/ManagementDesk';
import OurPrograms from './components/OurPrograms';
import Facilities from './components/Facilities';

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <HeroSection />
      <AboutCollege />
      <Affiliation />
      <ManagementDesk />
      <OurPrograms />
      {/* <Facilities /> */}
    </div>
  );
}
