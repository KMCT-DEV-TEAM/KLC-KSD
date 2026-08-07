import React from 'react';
import ProgramHero from '../components/ProgramHero';
import ProgramDetails from '../components/ProgramDetails';

export const metadata = {
  title: 'LLB (3 Years) | KMCT Law College Kasaragod',
  description: 'LLB (3 Years) degree program at KMCT Law College, Kasaragod.',
};

export default function LLBPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <ProgramHero 
        badgeText="Academics" 
        titleMain="LLB" 
        titleHighlight="(3 Years)"
        description="A comprehensive three-year degree program designed to provide students with an in-depth understanding of legal principles, practices, and professional ethics."
      />
      
      <ProgramDetails 
        aboutText="The 3-Year LLB Program at KMCT Law College is designed for graduates from any discipline who wish to pursue a career in law. This program provides students with a comprehensive understanding of legal principles and practices. The curriculum covers essential areas such as constitutional law, criminal law, contract law, family law, and more, equipping students with the knowledge and skills required to excel in the legal profession."
        eligibility={[
          "A Bachelor's degree (in any discipline) from a recognized university.",
          "A minimum of 45% aggregate marks in the qualifying degree (relaxation of marks for reserved categories as per university norms).",
          "Candidates must also meet any additional requirements set by the University of Calicut or Bar Council of India."
        ]}
        duration="The 3-Year LLB Program is completed in three academic years, divided into six semesters."
        features={[
          { title: "Core Subjects", desc: "The curriculum includes foundational legal subjects such as Constitutional Law, Criminal Law, Civil Procedure, and Family Law." },
          { title: "Practical Learning", desc: "Students are encouraged to participate in moot court sessions, internships, and legal research projects to gain practical insights into the legal profession." },
          { title: "Elective Options", desc: "Students can choose from a range of electives based on their interests and career goals." }
        ]}
        syllabus={[
          {
            title: "I Semester",
            subjects: ["Jurisprudence", "Law of Contracts", "Law of Torts", "Constitutional Law - I", "Law of Crimes - I"]
          },
          {
            title: "II Semester",
            subjects: ["Constitutional Law - II", "Property Law", "Family Law - I", "Law of Crimes - II", "Administrative Law"]
          }
        ]}
      />
    </div>
  );
}
