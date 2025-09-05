import React from 'react';
import { motion } from 'framer-motion';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PortfolioDetail({ project, onBack, onPrev, onNext, showNav, direction }) {
  if (!project) return null;
  return (
    <motion.div
    initial={{ opacity: 0, x: direction === 1 ? 80 : direction === -1 ? -80 : 0, y: 40 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    exit={{ opacity: 0, x: direction === 1 ? -80 : direction === -1 ? 80 : 0, y: 40 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
  >
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-[75vw] h-[90vh] overflow-y-auto relative">
      <button onClick={onBack} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-blue-600">Back</button>
      {showNav && (
        <>
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:bg-blue-700 hover:scale-110 transition focus:outline-none focus:ring-4 focus:ring-blue-400/40 z-20 border-4 border-white dark:border-gray-900"
            style={{ opacity: 0.95 }}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={onNext}
            aria-label="Next project"
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:bg-blue-700 hover:scale-110 transition focus:outline-none focus:ring-4 focus:ring-blue-400/40 z-20 border-4 border-white dark:border-gray-900"
            style={{ opacity: 0.95 }}
          >
            <FaChevronRight />
          </button>
        </>
      )}

      <div className="w-full flex justify-center items-center mb-4">
        <img src={project.img} alt={project.name} className="w-full max-h-[50vh] object-contain rounded shadow" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <p className="mb-3 text-gray-700 dark:text-gray-200">{project.desc}</p>
      {project.video && (
        <video src={project.video} controls className="w-full rounded mb-3" />
      )}
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((t) => (
          <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      {project.details && <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{project.details}</div>}
      {(project.company || project.client) && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {project.company && <><b>Company - </b>{project.company}</>}
          {project.company && project.client && " | "}
          {project.client && <><b>Client - </b>{project.client}</>}
        </div>
      )}
    </div>
  </motion.div>
  
  );
}

