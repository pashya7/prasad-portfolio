import React from 'react';
import { motion } from 'framer-motion';

export default function CertificationsTracker({ certifications }) {
  certifications = Array.isArray(certifications) ? certifications : [];
  const [current, setCurrent] = React.useState(0);
  const [showImg, setShowImg] = React.useState(false);
  const total = certifications.length;

  if (!total) {
    return (
      <section className="py-16 px-2 w-full min-h-[220px] flex flex-col items-center justify-center text-center text-gray-400">
        <h2 className="text-3xl font-extrabold text-sn tracking-tight mb-2">Certifications Tracker</h2>
        <p className="text-lg">No certifications to display.</p>
      </section>
    );
  }

  // Indices for left, center, right cards (circular)
  const leftIdx = (current - 1 + total) % total;
  const centerIdx = current;
  const rightIdx = (current + 1) % total;
  const visible = [leftIdx, centerIdx, rightIdx];

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Modal image state
  const [modalCert, setModalCert] = React.useState(null);

  // Defensive: if current index is out of bounds, reset to 0
  React.useEffect(() => {
    if (current >= total) setCurrent(0);
  }, [total, current]);

  return (
    <motion.section className="relative py-16 px-2 w-full min-h-[420px] flex flex-col items-center justify-center overflow-visible bg-gradient-to-br from-blue-50 via-green-50 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Certifications Tracker</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">Completed and upcoming certifications with verification links.</p>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={() => setCurrent((c) => (c === 0 ? certifications.length - 1 : c - 1))} aria-label="Previous certification" className="p-3 md:p-4 bg-sn-light text-white rounded-full shadow-lg hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-sn-light text-xl md:text-2xl" tabIndex={0}>&#8592;</button>
          <div
            className="glass-card p-8 flex flex-col items-center shadow-xl transition-all duration-300 rounded-2xl border border-sn bg-white/60 dark:bg-gray-900/50 backdrop-blur-md min-w-[260px] min-h-[180px] w-full max-w-md mx-auto relative overflow-hidden"
            tabIndex={0}
            aria-live="polite"
            onTouchStart={e => touchStartX.current = e.touches[0].clientX}
            onTouchEnd={e => {
              if (touchStartX.current === null) return;
              const diff = e.changedTouches[0].clientX - touchStartX.current;
              if (diff > 50) setCurrent((c) => (c === 0 ? certifications.length - 1 : c - 1));
              else if (diff < -50) setCurrent((c) => (c === certifications.length - 1 ? 0 : c + 1));
              touchStartX.current = null;
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-7 2 1.5-8.5L3 9l8.5-1.5L12 3l1.5 4.5L22 9l-3.5 3.5L19 21z"/></svg>
              <h3 className="font-bold text-lg text-center text-sn">{certifications[current]?.name || ''}</h3>
            </div>
            <span className="text-xs text-gray-500 mb-4">{certifications[current]?.year || ''}</span>
            {certifications[current]?.img ? (
              <button
                className="button-sn px-6 py-2 text-xs font-semibold rounded bg-blue-600 text-white border border-blue-700 shadow-lg hover:bg-blue-700 hover:text-white focus:bg-blue-800 focus:text-white dark:bg-blue-500 dark:text-white dark:border-blue-300 dark:hover:bg-blue-700 dark:hover:text-white focus:scale-105 transition-transform duration-200 flex items-center gap-2 mt-auto"
                tabIndex={0}
                aria-label={`View certificate: ${certifications[current]?.name || ''}`}
                onClick={() => setModalCert(certifications[current])}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z" /></svg>
                View
              </button>
            ) : (
              <button className="button-sn px-6 py-2 text-xs font-semibold rounded bg-gray-300 text-gray-500 cursor-not-allowed mt-auto" disabled>View</button>
            )}
          </div>
          <button onClick={() => setCurrent((c) => (c === certifications.length - 1 ? 0 : c + 1))} aria-label="Next certification" className="p-3 md:p-4 bg-sn-light text-white rounded-full shadow-lg hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-sn-light text-xl md:text-2xl" tabIndex={0}>&#8594;</button>
        </div>
        <div className="flex justify-center gap-2 mt-4 mb-2">
          {certifications.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-sn' : 'bg-gray-300'} transition-all`}></span>
          ))}
        </div>
      </div>
      {modalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setModalCert(null)} tabIndex={-1}>
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center relative max-w-md" onClick={e => e.stopPropagation()} tabIndex={0}>
            <button className="absolute top-2 right-2 button-sn text-lg" onClick={() => setModalCert(null)} aria-label="Close certificate preview">×</button>
            {modalCert.img ? (
              <img src={modalCert.img} alt={modalCert.name} className="max-h-64 w-auto rounded shadow mb-4" />
            ) : (
              <div className="mb-4 text-gray-500">No certificate image available.</div>
            )}
            <h3 className="font-bold text-lg mb-2 text-center">{modalCert?.name || ''}</h3>
            <span className="text-xs text-gray-500 mb-2">{modalCert?.year || ''}</span>
          </div>
        </div>
      )}
    </motion.section>
  );
}
