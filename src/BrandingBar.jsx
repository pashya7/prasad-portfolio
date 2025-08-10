import React from 'react';
import logo from './logo192.png'; // Use a placeholder or your own logo

export default function BrandingBar() {
  return (
    <div className="flex items-center gap-4 py-3 px-4 md:px-8 bg-white border-b border-sn shadow-sm">
      <img src={logo} alt="Prasad Logo" className="h-10 w-10 rounded-full border-2 border-sn" />
      <div>
        <span className="font-bold text-sn text-lg md:text-xl">Prasad Shelar</span>
        <span className="block text-xs text-sn-light font-mono">Transforming challenges into seamless digital solutions.</span>
      </div>
    </div>
  );
}
