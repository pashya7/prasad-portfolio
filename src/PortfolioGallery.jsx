import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PortfolioGallery({ projects, onProjectClick, currentIdx, setCurrentIdx, direction }) {
  const current = currentIdx;
  const total = projects.length;

  // Get indices for left, center, right cards (circular)
  const leftIdx = (current - 1 + total) % total;
  const rightIdx = (current + 1) % total;

  // Card configs
  const cardConfigs = [
    {
      idx: leftIdx,
      z: 10,
      scale: 0.8,
      blur: 'blur-sm',
      opacity: 0.6,
      x: '-32',
      pointer: true,
    },
    {
      idx: current,
      z: 30,
      scale: 1.05,
      blur: '',
      opacity: 1,
      x: '0',
      pointer: false,
    },
    {
      idx: rightIdx,
      z: 10,
      scale: 0.8,
      blur: 'blur-sm',
      opacity: 0.6,
      x: '32',
      pointer: true,
    },
  ];

  const handleCardClick = (idx) => {
    if (idx === leftIdx) setCurrent(leftIdx);
    else if (idx === rightIdx) setCurrent(rightIdx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIdx((i) => (i === 0 ? total - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrentIdx((i) => (i === total - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-4" style={{ minHeight: 340 }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={projects[current].name}
            className="relative w-full flex flex-col items-center"
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? -60 : 60 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.18 }}
          >
            <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-4 border-blue-500 dark:border-blue-400 hover:shadow-2xl transition-all duration-300">
              <img src={projects[current].img} alt={projects[current].name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-center">{projects[current].name}</h3>
                <p className="text-sm mb-1 text-center line-clamp-2">{projects[current].desc}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  {projects[current].tech.map((t) => (
                    <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">{t}</span>
                  ))}
                </div>
                <button onClick={() => onProjectClick(projects[current])} className="block mx-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition mt-2">View Details</button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">{current + 1} / {total}</div>
    </div>
  );
}
