
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import React, { useState } from "react";
import { FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import profileData from './profileData';

export default function ProfessionalJourneySection({ journey }) {
  // Only one expanded at a time
  const [expandedIdx, setExpandedIdx] = useState(null);
  // Color map for types
  const typeColors = {
    education: 'from-purple-200 to-purple-50 border-purple-400',
    certification: 'from-yellow-100 to-yellow-50 border-yellow-400',
    experience: 'from-green-100 to-green-50 border-green-400',
    award: 'from-pink-100 to-pink-50 border-pink-400',
    default: 'from-blue-100 to-blue-50 border-blue-400'
  };
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto relative overflow-hidden">
      {/* Infinity loop SVG background inspired by ServiceNow */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50 animate-spin-slow"
        width="1200" height="700" viewBox="0 0 1200 700" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="loopGradient" x1="0" y1="0" x2="1200" y2="700" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#34d399" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 300 350 C 300 150, 900 150, 900 350 C 900 550, 300 550, 300 350 Z"
          stroke="url(#loopGradient)"
          strokeWidth="32"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M 900 350 C 900 150, 300 150, 300 350 C 300 550, 900 550, 900 350 Z"
          stroke="url(#loopGradient)"
          strokeWidth="32"
          fill="none"
          filter="url(#glow)"
        />
        {/* Animated stars/particles */}
        <g>
          <circle cx="350" cy="180" r="3" fill="#fff" opacity="0.7">
            <animate attributeName="cy" values="180;170;180" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1050" cy="520" r="2.5" fill="#fff" opacity="0.7">
            <animate attributeName="cy" values="520;540;520" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="100" r="2" fill="#fff" opacity="0.5">
            <animate attributeName="cx" values="600;620;600" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="250" r="1.8" fill="#fff" opacity="0.5">
            <animate attributeName="cy" values="250;230;250" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Professional Journey</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto text-lg">
        A quick look at my academic, certification, and professional milestones.
      </p>
      <VerticalTimeline lineColor="#107360">
        {journey.map((item, idx) => {
          const colorClass = typeColors[item.type] || typeColors.default;
          const expanded = expandedIdx === idx;
          return (
            <VerticalTimelineElement
              key={idx}
              date={<span className="font-mono text-xs text-blue-700 bg-blue-50 rounded px-2 py-1 shadow-sm">{item.date}</span>}
              icon={(() => {
                const iconMap = {
                  FaSun: (color) => <FaSun color={color || '#059669'} />,
                };
                if (iconMap[item.icon]) {
                  return iconMap[item.icon](item.iconColor);
                }
                return <span style={{fontSize:'2rem',display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>{item.icon}</span>;
              })()}
              iconStyle={{ background: 'linear-gradient(135deg, #e6f2ef 90%, #fff 100%)', color: '#107360', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(16,115,96,0.10)' }}
              contentStyle={{ background: 'linear-gradient(135deg, #fff 90%, #e6f2ef 100%)', color: '#23272a', boxShadow: '0 8px 32px rgba(16,115,96,0.08)', borderRadius: '1.5rem', border: '2 px solid #e6f2ef', padding: '2rem 2rem 1.5rem 2rem' }}
              contentArrowStyle={{ borderRight: '7 px solid #107360' }}
            >
              <>
                <div className={`glass-card transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl bg-gradient-to-br ${colorClass} rounded-2xl border-1 w-full relative px-4 py-4 md:px-8 md:py-6`} style={{borderWidth:'1px',margin:'0 auto',fontSize:'1.09rem',lineHeight:'1.8'}}>  
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="font-bold text-xl mb-1 text-sn">{item.title}</h3>
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold mb-1 w-fit">{item.org}</span>
                    <button
                      className={`mt-2 mb-1 px-5 py-1 border-2 border-blue-400 text-blue-700 bg-white text-sm rounded-md font-semibold flex items-center gap-1 hover:bg-blue-100 hover:text-blue-900 focus:bg-blue-200 focus:text-blue-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 w-fit`}
                      style={{ minHeight: '30px' }}
                      onClick={() => setExpandedIdx(expanded ? null : idx)}
                      aria-expanded={expanded}
                      aria-controls={`pj-details-${idx}`}
                    >
                      {expanded ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>
                {expanded && (
                  <AnimatePresence initial={false}>
                    <div className={`w-full flex mt-2 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                      <motion.div
                        key={`pj-details-${idx}`}
                        initial={{ x: idx % 2 === 0 ? -64 : 64, opacity: 0, scale: 0.97, height: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1, height: 'auto' }}
                        exit={{ x: idx % 2 === 0 ? -64 : 64, opacity: 0, scale: 0.97, height: 0 }}
                        transition={{ duration: 0.42, type: 'spring', bounce: 0.22 }}
                        className={`sn-timeline-detail-box focus-within:ring-4 focus-within:ring-blue-200 ${idx % 2 !== 0 ? 'ml-auto' : ''}`}
        style={{
          outline: 'none',
          background: item.type === 'certification' ? 'linear-gradient(135deg, #fffbe6 90%, #fff 100%)' :
            item.type === 'education' ? 'linear-gradient(135deg, #ede9fe 90%, #fff 100%)' :
            item.type === 'experience' ? 'linear-gradient(135deg, #e6f2ef 90%, #fff 100%)' :
            item.type === 'award' ? 'linear-gradient(135deg, #ffe6ee 90%, #fff 100%)' :
            'linear-gradient(135deg, #eaf6fa 90%, #fff 100%)',
          border: item.type === 'certification' ? '2.5px solid #ffe066' :
            item.type === 'education' ? '2.5px solid #a78bfa' :
            item.type === 'experience' ? '2.5px solid #107360' :
            item.type === 'award' ? '2.5px solid #ff80b5' :
            '2.5px solid #107360',
        }}
                        aria-live="polite"
                        tabIndex={0}
                      >
                        {
  Array.isArray(item.details)
    ? (
        <ul className="sn-timeline-detail-desc list-disc pl-6">
          {item.details.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )
    : (typeof item.details === 'string' && item.details.includes('.') && item.details.split('.').filter(s => s.trim()).length > 1
        ? (
            <ul className="sn-timeline-detail-desc list-disc pl-6">
              {item.details.split('.').filter(s => s.trim()).map((point, i) => (
                <li key={i}>{point.trim()}</li>
              ))}
            </ul>
          )
        : <div className="sn-timeline-detail-desc">{item.details}</div>
      )
}
                      </motion.div>
                    </div>
                  </AnimatePresence>
                )}
              </>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

