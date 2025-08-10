import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialsSection({ testimonials }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef();
  const touchStartX = useRef(null);

  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((prev) => (prev + 1) % testimonials.length);

  // Auto-swipe logic
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current || !sectionRef.current.contains(document.activeElement)) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Touch swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    else if (diff < -50) next();
    touchStartX.current = null;
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 px-2 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      aria-label="Testimonials"
      tabIndex={0}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
    >
      <>
        <div className="h-8 flex items-center justify-center w-full mb-2">
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
          <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center" tabIndex={0}>Testimonials & Endorsements</h2>
          <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        </div>
        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">What colleagues, clients, and managers say about me.</p>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <button onClick={prev} aria-label="Previous testimonial" className="p-2 bg-sn-light text-white rounded-full shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-sn-light" tabIndex={0}><FaChevronLeft /></button>
            <div
              className="card-sn p-6 max-w-xl w-full shadow-lg flex flex-col items-center transition-all duration-500"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              tabIndex={0}
              aria-live="polite"
            >
              <p className="italic text-lg text-center mb-4" style={{color:'#005236'}}>{testimonials[active].quote}</p>
              <div className="flex flex-col items-center gap-1 mb-2">
                <span className="font-semibold text-sn">{testimonials[active].name}</span>
                <span className="text-xs text-gray-500">{testimonials[active].role}</span>
                {testimonials[active].linkedin && (
                  <a href={testimonials[active].linkedin} target="_blank" rel="noopener noreferrer" className="text-sn-light underline text-xs">LinkedIn</a>
                )}
              </div>
              {testimonials[active].video && (
                <div className="w-full aspect-video rounded overflow-hidden mt-4">
                  <iframe src={testimonials[active].video} title="Testimonial Video" className="w-full h-full" allowFullScreen />
                </div>
              )}
            </div>
            <button onClick={next} aria-label="Next testimonial" className="p-2 bg-sn-light text-white rounded-full shadow hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-sn-light" tabIndex={0}><FaChevronRight /></button>
          </div>
          <div className="flex gap-2 mt-4">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`testimonial-dot${idx === active ? ' active' : ''}`}
                onClick={() => setActive(idx)}
                tabIndex={0}
                aria-current={idx === active}
              />
            ))}
          </div>
        </div>
      </>
    </motion.section>
  );
}
