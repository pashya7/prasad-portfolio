import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PropTypes from "prop-types";
export default function BlogSection({ articles }) {
  articles = Array.isArray(articles) ? articles : [];
  if (!articles.length) {
    return (
      <section className="py-12 px-2 max-w-4xl mx-auto text-center text-gray-400">
        <h2 className="text-3xl font-extrabold text-sn tracking-tight mb-2">Articles & Blog</h2>
        <p className="text-lg">No articles to display.</p>
      </section>
    );
  }
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  return (
    <motion.section className="py-12 px-2 max-w-4xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Articles & Blog</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Tutorials, insights, and solutions from my ServiceNow journey.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleArticles.map((a, idx) => (
          <div key={a.title} className="card-sn p-5 flex flex-col shadow hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex flex-wrap gap-2 mb-2">
              {a.tags.map((t) => <span key={t} className="bg-sn-light text-white text-xs px-2 py-1 rounded">{t}</span>)}
            </div>
            <h3 className="font-bold text-lg mb-1">{a.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{a.excerpt}</p>
            <span className="text-xs text-gray-400 mb-2">{a.category}</span>
            <a
  className="button-sn px-6 py-2 text-xs font-semibold rounded bg-blue-600 text-white border border-blue-700 shadow-lg hover:bg-blue-700 hover:text-white focus:bg-blue-800 focus:text-white dark:bg-blue-500 dark:text-white dark:border-blue-300 dark:hover:bg-blue-700 dark:hover:text-white focus:scale-105 transition-transform duration-200 flex items-center gap-2 mt-auto"
  href={a.url}
  target="_blank"
  rel="noopener noreferrer"
  tabIndex={0}
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z" /></svg>
  Read More
</a>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold shadow-lg border-2 border-blue-400 hover:from-green-500 hover:to-blue-600 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-base"
            onClick={() => setVisibleCount(c => Math.min(c + 3, articles.length))}
            aria-label="Load more blog articles"
          >
            Load More
          </button>
        </div>
      )}
    </motion.section>
  );
}
