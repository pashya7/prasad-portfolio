import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  skills = Array.isArray(skills) ? skills : [];
  const [activeTab, setActiveTab] = React.useState(0);
  const [openAccordions, setOpenAccordions] = React.useState(Array(skills.length).fill(false));
  if (!skills.length) {
    return (
      <section className="py-6 px-2 sm:px-4 max-w-4xl mx-auto text-center text-gray-400">
        <h2 className="text-3xl font-extrabold text-sn tracking-tight mb-2">Skills</h2>
        <p className="text-lg">No skills to display.</p>
      </section>
    );
  }
  const groupColors = [
    "bg-blue-100 text-blue-800 border-blue-300",
    "bg-green-100 text-green-800 border-green-300",
    "bg-yellow-100 text-yellow-800 border-yellow-300",
    "bg-purple-100 text-purple-800 border-purple-300"
  ];
  return (
    <motion.section
      className="py-6 px-2 sm:px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Skills</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>

      {/* Mobile: Accordion style */}
      <div className="block sm:hidden mt-4">
        {skills.map((group, idx) => (
          <div key={group.group} className={`mb-3 rounded-lg border transition-all duration-200 ${openAccordions[idx] ? 'bg-green-50 border-green-600 shadow-lg' : 'bg-gray-50 border-gray-200'}`}>
            <button
              className={`w-full flex justify-between items-center px-4 py-3 font-bold text-left text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-sn-light ${openAccordions[idx] ? 'text-green-700' : 'text-gray-700'}`}
              onClick={() => setOpenAccordions(acc => acc.map((open, i) => i === idx ? !open : open))}
              aria-expanded={openAccordions[idx]}
            >
              <span>{group.group}</span>
              <span className={`ml-2 transition-transform ${openAccordions[idx] ? 'rotate-90 text-green-600' : 'rotate-0 text-gray-400'}`}>▶</span>
            </button>
            {openAccordions[idx] && (
              <div className="flex flex-wrap gap-2 gap-y-3 justify-center px-2 pb-3">
                {group.skills.map((skill, sidx) => (
                  <motion.div
                    key={`${group.group}-${skill.name}`}
                    className={`flex items-center px-3 py-2 rounded-full border text-sm font-semibold shadow-sm transition-all duration-200 ${groupColors[idx % groupColors.length]} hover:bg-blue-200 text-blue-800`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: sidx * 0.06, type: 'spring', bounce: 0.18 }}
                    whileHover={{ scale: 1.06 }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <span className="mr-2 z-10 text-blue-800">{skill.name}</span>
                    <span className="ml-auto text-xs font-bold bg-white/70 rounded-full px-2 py-0.5 border border-current shadow-sm">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: Tabbed style */}
      <div className="hidden sm:block">
        <div className="flex gap-0 justify-start mt-6 mb-4 border-b border-gray-200 bg-white rounded-t-lg overflow-x-auto scrollbar-thin scrollbar-thumb-sn/40 scrollbar-track-transparent" style={{minHeight:'48px'}}>
          {skills.map((group, idx) => (
            <button
              key={group.group}
              className={`min-w-max px-3 py-2 font-bold border-b-2 transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-sn-light ${activeTab === idx ? 'border-green-600 text-green-700 bg-white' : 'border-transparent text-gray-700 bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab(idx)}
              aria-selected={activeTab === idx}
            >
              {group.group}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 gap-y-3 justify-center">
          {skills[activeTab].skills.map((skill, idx) => (
            <motion.div
              key={`${skills[activeTab].group}-${skill.name}`}
              className={`flex items-center px-4 py-2 rounded-full border text-base font-semibold shadow-sm transition-all duration-200 ${groupColors[activeTab % groupColors.length]} hover:bg-blue-200 text-blue-800`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, type: 'spring', bounce: 0.18 }}
              whileHover={{ scale: 1.06 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="mr-2 z-10 text-blue-800">{skill.name}</span>
              <span className="ml-auto text-xs font-bold bg-white/70 rounded-full px-2 py-0.5 border border-current shadow-sm">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
