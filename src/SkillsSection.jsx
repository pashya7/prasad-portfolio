import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Skills</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center card-sn p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring', bounce: 0.18 }}
            whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 #10736044, 0 2px 12px rgba(16,115,96,0.13)' }}
            style={{ willChange: 'transform, box-shadow, opacity' }}
          >
            <span className="font-semibold text-sn mb-1 text-lg">{skill.name}</span>
            <div className="w-full bg-sn-light bg-opacity-20 rounded-full h-2 mt-2 mb-1">
              <div
                className="bg-sn h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 mt-1">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
