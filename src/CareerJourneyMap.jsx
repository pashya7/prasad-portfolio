import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaUserTie, FaAward, FaProjectDiagram, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

export default function CareerJourneyMap({ milestones }) {
  const [active, setActive] = useState(null);
  return (
    <motion.section className="py-12 px-2 max-w-4xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="h-8 flex items-center justify-center w-full mb-2">
  <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
  <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Interactive Career Journey Map</h2>
  <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
</div>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Click any milestone to see details and impact.</p>
      <VerticalTimeline lineColor="#107360">
        {milestones.map((m, idx) => ( // milestones comes from profileData.careerJourneyMap
           <VerticalTimelineElement
            key={idx}
            icon={
              <span style={{
                fontSize: '1.6rem',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: 1
              }}>{m.icon}</span>
            }
            date={m.date}
            iconStyle={{ background: idx === active ? '#107360' : '#e6f2ef', color: '#fff', cursor: 'pointer' }}
            contentStyle={{ background: '#fff', color: '#22292f', boxShadow: '0 4px 24px rgba(16,115,96,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #107360' }}
            onTimelineElementClick={() => setActive(idx)}
          >
            <motion.div initial={{ opacity: 0.7 }} animate={{ opacity: active === idx ? 1 : 0.7, scale: active === idx ? 1.03 : 1 }} transition={{ duration: 0.3 }}>
              <h3 className="font-bold text-lg mb-1 cursor-pointer" onClick={() => setActive(active === idx ? null : idx)} tabIndex={0} onKeyDown={e => { if(e.key === 'Enter' || e.key === ' ') setActive(active === idx ? null : idx); }} aria-expanded={active === idx} aria-controls={`cj-details-${idx}`}>{m.title}</h3>
              {active === idx && (
                <div id={`cj-details-${idx}`} className="mt-2 text-sn text-sm font-semibold animate-fade-in">
                  {m.details ? m.details : m.description}
                </div>
              )}
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
