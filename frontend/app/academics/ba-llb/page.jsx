import React from 'react';
import ProgramHero from '../components/ProgramHero';
import ProgramDetails from '../components/ProgramDetails';

export const metadata = {
  title: 'BA LL.B (5 Years) | KMCT Law College Kasaragod',
  description: 'BA LL.B (5 Years) integrated degree program at KMCT Law College, Kasaragod.',
};

export default function BALLBPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <ProgramHero
        badgeText="Academics"
        titleMain="BA LL.B"
        titleHighlight="(5 Years)"
        description="A five-year integrated degree program combining the study of arts and law, designed to build a strong foundation in humanities alongside rigorous legal training."
      />

      <ProgramDetails
        aboutText="The BA LL.B (5 Years) Program at KMCT Law College is designed for students who wish to pursue a career in law immediately after their higher secondary education. This dual-degree program provides students with a comprehensive understanding of both Bachelor of Arts (humanities) and Bachelor of Legislative Law subjects. The curriculum covers essential areas such as constitutional law, criminal law, contract law, family law, sociology, political science, and more, equipping students with the multifaceted knowledge and skills required to excel in the modern legal profession."
        eligibility={[
          "A passing grade in 10+2 (or equivalent) examination from a recognized Board.",
          "A minimum of 45% aggregate marks in the qualifying examination (relaxation of marks for reserved categories as per university norms).",
          "Candidates must also meet any additional requirements set by the University of Calicut or Bar Council of India.",
          "Qualification in the Kerala State Law Entrance Exam (KLEE) or relevant admission test as prescribed."
        ]}
        duration="The BA LL.B Program is an integrated course completed in five academic years, divided into ten semesters."
        features={[
          { title: "Core Subjects", desc: "The curriculum bridges foundational arts subjects (Political Science, Economics, Sociology) with core legal subjects (Constitutional Law, Criminal Law, Civil Procedure, and Family Law)." },
          { title: "Practical Learning", desc: "Students are vigorously encouraged to participate in moot court sessions, internships, legal aid clinics, and legal research projects to gain practical insights." },
          { title: "Elective Options", desc: "Students can choose from a specialized range of electives based on their specific interests and career goals in higher semesters." }
        ]}

      />
    </div>
  );
}
