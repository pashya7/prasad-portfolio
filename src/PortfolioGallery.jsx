import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PortfolioGallery({ projects, onProjectClick }) {
  const [current, setCurrent] = useState(0);
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

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-full mb-4" style={{ minHeight: 340 }}>
        <button onClick={prev} className="z-40 absolute left-0 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition top-1/2 -translate-y-1/2"><FaChevronLeft /></button>
        <div className="flex w-full justify-center gap-0 md:gap-8">
          {cardConfigs.map((cfg, i) => {
            const p = projects[cfg.idx];
            return (
              <motion.div
                key={p.name}
                layout
                className={`relative ${cfg.pointer ? 'cursor-pointer' : 'cursor-default'} ${cfg.blur}`}
                style={{
                  zIndex: cfg.z,
                  scale: cfg.scale,
                  opacity: cfg.opacity,
                  marginLeft: i === 1 ? '-2rem' : 0,
                  marginRight: i === 1 ? '-2rem' : 0,
                  boxShadow: cfg.idx === current ? '0 8px 32px #10736044, 0 2px 12px rgba(16,115,96,0.13)' : 'none',
                  transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
                  pointerEvents: cfg.pointer ? 'auto' : 'auto',
                  willChange: 'transform, box-shadow, opacity',
                }}
                onClick={() => handleCardClick(cfg.idx)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: cfg.opacity, y: 0, scale: cfg.scale }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={cfg.pointer ? { scale: 1.06, boxShadow: '0 12px 40px #10736033, 0 2px 8px #0072C633' } : {}}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.18, delay: i * 0.08 }}
              >
                <div className={`w-64 md:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border-4 ${cfg.idx === current ? 'border-blue-500 dark:border-blue-400' : 'border-transparent'} hover:shadow-2xl transition-all duration-300`}>
                  <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-center">{p.name}</h3>
                    <p className="text-sm mb-1 text-center line-clamp-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                      {p.tech.map((t) => (
                        <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">{t}</span>
                      ))}
                    </div>
                    {cfg.idx === current && (
                      <button onClick={() => onProjectClick(p)} className="block mx-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition mt-2">View Details</button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <button onClick={next} className="z-40 absolute right-0 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:scale-110 transition top-1/2 -translate-y-1/2"><FaChevronRight /></button>
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-sm">{current + 1} / {total}</div>
    </div>
  );
}
