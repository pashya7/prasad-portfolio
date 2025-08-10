import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  const [activeTab, setActiveTab] = React.useState(0);
  const groupColors = [
    "bg-blue-100 text-blue-800 border-blue-300",
    "bg-green-100 text-green-800 border-green-300",
    "bg-yellow-100 text-yellow-800 border-yellow-300",
    "bg-purple-100 text-purple-800 border-purple-300"
  ];
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Skills</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      {/* Tabs for skill groups */}
      <div className="flex gap-0 justify-center mt-6 mb-4 flex-wrap border-b border-gray-200 bg-white rounded-t-lg overflow-x-auto" style={{minHeight:'48px'}}>
        {skills.map((group, idx) => (
          <button
            key={group.group}
            className={`px-3 py-2 font-bold border-b-2 transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-sn-light ${activeTab === idx ? 'border-green-600 text-green-700 bg-white' : 'border-transparent text-gray-700 bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setActiveTab(idx)}
            aria-selected={activeTab === idx}
          >
            {group.group}
          </button>
        ))}
      </div>
      {/* Pills for skills in active group */}
      <div className="flex flex-wrap gap-3 justify-center">
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
    </section>
  );
}
