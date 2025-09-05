import React, { useState, useEffect } from 'react';
import {
  FaLinkedin, FaGithub, FaTwitter, FaMoon, FaSun, FaDownload, FaEnvelope, FaPhone, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

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

const EmailIcon = FaEnvelope;
const PhoneIcon = FaPhone;

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [galleryDirection, setGalleryDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-4 md:px-8 shadow bg-sn bg-gradient-to-r from-[#005236] to-[#107360]">
        <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-lg">
          {profileData.profile?.name}
        </h1>
        <button
          onClick={() => setDarkMode((d) => !d)}
          className="p-2 rounded-full bg-white text-sn hover:bg-sn-light hover:text-white shadow-lg transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* About Me */}
      <motion.section
        className="py-10 px-4 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-sn max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 shadow-xl bg-white bg-opacity-90">
          <img
            src={profileData.profile?.photo}
            alt={profileData.profile?.name}
            className="rounded-full w-28 h-28 md:w-36 md:h-36 shadow-lg border-4 border-sn"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-sn mb-1">
              {profileData.profile?.name}
            </h2>
            <p className="italic text-sn-light mb-2 text-center md:text-left">
              {profileData.profile?.title}
            </p>
            <p className="text-gray-700 mb-2 text-center md:text-left">
              {profileData.profile?.about}
            </p>
            <blockquote className="border-l-4 border-sn pl-4 italic text-gray-500 mt-2 text-center md:text-left">
              {profileData.profile?.tagline}
            </blockquote>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sn-light text-sm mt-2">
              {profileData.profile?.contact?.email?.value && (
                <span className="flex items-center gap-1">
                  <EmailIcon />
                  {profileData.profile.contact.email.value}
                </span>
              )}
              {profileData.profile?.contact?.phone?.value && (
                <span className="flex items-center gap-1">
                  <PhoneIcon />
                  {profileData.profile.contact.phone.value}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sections */}
      <section className="w-full max-w-6xl px-4 mx-auto">
        <QuickDownloadsSection downloads={profileData.downloads} />
        <CareerJourneyMap milestones={profileData.careerJourneyMap} />
        <ProfessionalJourneySection journey={profileData.professionalJourney} />
        <SkillsSection skills={profileData.skills} />
      </section>

      {/* Languages */}
      <section className="py-8 px-4 max-w-3xl mx-auto w-full">
        <LanguagesSection languages={profileData.languages} />
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full overflow-x-hidden">
        <div className="h-8 flex items-center justify-center w-full mb-2">
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
          <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">
            Portfolio Gallery
          </h2>
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        </div>
        <div className="mb-8"></div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-4">
            <button
              onClick={() => {
                setGalleryDirection(-1);
                setGalleryIdx((i) => (i === 0 ? profileData.portfolios.length - 1 : i - 1));
              }}
              aria-label="Previous project"
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => {
                setGalleryDirection(1);
                setGalleryIdx((i) => (i === profileData.portfolios.length - 1 ? 0 : i + 1));
              }}
              aria-label="Next project"
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaChevronRight />
            </button>
          </div>
          <PortfolioGallery
            projects={profileData.portfolios}
            onProjectClick={(p) => setSelectedProject(p)}
            currentIdx={galleryIdx}
            setCurrentIdx={setGalleryIdx}
            direction={galleryDirection}
          />
        </div>
        {selectedProject !== null && (
          <PortfolioDetail
            project={profileData.portfolios[galleryIdx]}
            onBack={() => setSelectedProject(null)}
            onPrev={() => {
              setGalleryDirection(-1);
              setGalleryIdx((i) => (i === 0 ? profileData.portfolios.length - 1 : i - 1));
            }}
            onNext={() => {
              setGalleryDirection(1);
              setGalleryIdx((i) => (i === profileData.portfolios.length - 1 ? 0 : i + 1));
            }}
            showNav={true}
            direction={galleryDirection}
          />
        )}
      </section>

      {/* Blog */}
      <section className="py-6 px-4 max-w-6xl mx-auto w-full">
        <BlogSection articles={profileData.articles} />
      </section>

      {/* Certifications */}
      <section className="py-6 px-4 max-w-6xl mx-auto w-full">
        <CertificationsTracker certifications={profileData.certifications} />
      </section>

      {/* Testimonials */}
      <section className="py-6 px-4 max-w-6xl mx-auto w-full">
        <TestimonialsSection testimonials={profileData.testimonials} />
      </section>

      {/* AI Chatbot */}
      <section className="py-6 px-4 max-w-6xl mx-auto w-full overflow-x-hidden">
        <AIChatbot />
      </section>

      {/* Fun Facts */}
      <section className="py-6 px-4 max-w-6xl mx-auto w-full">
        <FunFactsSection funFacts={profileData.funFacts} />
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-sn bg-opacity-10" style={{ color: '#107360', fontWeight: 600 }}>
        &copy; {new Date().getFullYear()} {profileData.profile?.name}. All rights reserved.
      </footer>
    </div>
  );
}
