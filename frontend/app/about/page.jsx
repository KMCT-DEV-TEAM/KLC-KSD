import React from 'react';
import AboutHeroSection from './components/AboutHeroSection';
import AboutCollegeDetails from './components/AboutCollegeDetails';
import ManagementTeam from './components/ManagementTeam';
import PrincipalsMessage from './components/PrincipalsMessage';
import Recognition from './components/Recognition';
import VisionMission from './components/VisionMission';

export const metadata = {
  title: 'About Us | KMCT Law College Kasaragod',
  description: 'Learn about KMCT Law College, Kasaragod - our mission, vision, and legal education legacy.',
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col bg-white">
      <AboutHeroSection />
      <AboutCollegeDetails />
      <ManagementTeam />
      {/* <PrincipalsMessage /> */}
      <VisionMission />
      <Recognition />

    </div>
  );
}
