import React from "react";
import PropTypes from "prop-types";
export default function QuickDownloadsSection({ downloads }) {
  downloads = Array.isArray(downloads) ? downloads : [];
  if (!downloads.length) {
    return (
      <section className="py-8 px-4 max-w-4xl mx-auto text-center text-gray-400">
        <h2 className="text-3xl font-extrabold text-sn tracking-tight mb-2">Quick Downloads</h2>
        <p className="text-lg">No downloads available.</p>
      </section>
    );
  }
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Quick Downloads</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {downloads.map(dl => (
          <a
            key={dl.name}
            href={dl.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center glass-card px-8 py-8 rounded-2xl border-4 border-green-400/70 bg-white/70 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-green-500 hover:shadow-green-200 focus:outline-none focus:ring-4 focus:ring-green-200 w-full md:w-1/2 max-w-xs relative"
            tabIndex={0}
            aria-label={dl.ariaLabel || `Download ${dl.label}`}
          >
            <span className="flex items-center justify-center mb-4">
              <span className="rounded-full bg-gradient-to-br from-green-600 to-blue-400 p-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300 text-4xl">
                {dl.icon}
              </span>
            </span>
            <span className="font-extrabold text-xl text-blue-700 mb-1">{dl.label}</span>
            <span className="text-xs font-semibold text-blue-600 mb-2 tracking-wide uppercase">{dl.type}</span>
            <span className="text-xs text-blue-900/70 text-center">{dl.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
