import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaMoon, FaSun, FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa';
const EmailIcon = FaEnvelope;
const PhoneIcon = FaPhone;
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import resumePDF from '../public/resume.pdf';
import PortfolioGallery from './PortfolioGallery';
import PortfolioDetail from './PortfolioDetail';
import CareerJourneyMap from './CareerJourneyMap';
import profileData from './profileData';
import BlogSection from './BlogSection';
import SkillsSection from './SkillsSection';
import ProfessionalJourneySection from './ProfessionalJourneySection';
import QuickDownloadsSection from './QuickDownloadsSection';
import FunFactsSection from './FunFactsSection';
import LanguagesSection from './LanguagesSection';
import CertificationsTracker from './CertificationsTracker';
import TestimonialsSection from './TestimonialsSection';
import AIChatbot from './AIChatbot';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header & Dark/Light Toggle */}
      <header className="flex justify-between items-center py-4 px-4 md:px-8 shadow bg-sn bg-gradient-to-r from-[#005236] to-[#107360]">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-lg">{profileData.profile?.name}</h1>
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="p-2 rounded-full bg-white text-sn hover:bg-sn-light hover:text-white shadow-lg transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* About Me Card with Quote */}
      <motion.section
        className="py-10 px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-sn max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 shadow-xl bg-white bg-opacity-90">
          <img src={profileData.profile?.photo} alt={profileData.profile?.name} className="rounded-full w-28 h-28 md:w-36 md:h-36 shadow-lg border-4 border-sn" />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-sn mb-1">{profileData.profile?.name}</h2>
            <p className="italic text-sn-light mb-2 text-center md:text-left">{profileData.profile?.title}</p>
            <p className="text-gray-700 mb-2 text-center md:text-left">{profileData.profile?.about}</p>
            <blockquote className="border-l-4 border-sn pl-4 italic text-gray-500 mt-2 text-center md:text-left">{profileData.profile?.tagline}</blockquote>
<div className="flex flex-wrap gap-4 justify-center md:justify-start text-sn-light text-sm mt-2">
  {profileData.profile?.contact?.email?.value && (
    <span className="flex items-center gap-1"><EmailIcon />{profileData.profile.contact.email.value}</span>
  )}
  {profileData.profile?.contact?.phone?.value && (
    <span className="flex items-center gap-1"><PhoneIcon />{profileData.profile.contact.phone.value}</span>
  )}
</div>
          </div>
        </div>
      </motion.section>

      {/* Quick Downloads */}
      <QuickDownloadsSection downloads={profileData.downloads} />

      {/* Interactive Career Journey Map */}
      <CareerJourneyMap milestones={profileData.careerJourneyMap} />

      {/* Professional Journey */}
      <ProfessionalJourneySection journey={profileData.professionalJourney} />

      {/* Skills */}
      <SkillsSection skills={profileData.skills} />

      {/* Languages */}
      <section className="py-8 px-4 max-w-3xl mx-auto">
        <LanguagesSection languages={profileData.languages} />
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
        <div className="h-8 flex items-center justify-center w-full mb-2">
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
          <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Portfolio Gallery</h2>
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        </div>
        <div className="mb-8"></div>
        <PortfolioGallery projects={profileData.portfolios} onProjectClick={setSelectedProject} />
        {selectedProject && (
          <PortfolioDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        )}
      </section>

      {/* Blog Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
        <BlogSection articles={profileData.articles} />
      </section>

      {/* Certifications Tracker */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
        <CertificationsTracker certifications={profileData.certifications} />
      </section>

      {/* Testimonials & Endorsements */}
      <section className="py-12 px-4 max-w-4xl mx-auto w-full flex flex-col items-center">
        <TestimonialsSection testimonials={profileData.testimonials} />
      </section>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Fun Facts & Interests */}
      <FunFactsSection funFacts={profileData.funFacts} />

      {/* Social & Contact */}

      {/* Footer */}
      <footer className="text-center py-4 bg-sn bg-opacity-10" style={{ color: '#107360', fontWeight: 600 }}>
        &copy; {new Date().getFullYear()} {profileData.profile?.name}. All rights reserved.
      </footer>
    </div>
  );
}
