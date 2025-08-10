import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioDetail({ project, onBack }) {
  if (!project) return null;
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.5 }} className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 max-w-lg w-full relative">
        <button onClick={onBack} className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-blue-600">Back</button>
        <img src={project.img} alt={project.name} className="w-full h-56 object-cover rounded mb-4" />
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
      </div>
    </motion.div>
  );
}
