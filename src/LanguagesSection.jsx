import React from "react";

export default function LanguagesSection({ languages }) {
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Languages</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {languages.map(lang => (
          <div key={lang.name} className="card-sn flex flex-col items-center p-4 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="text-3xl mb-2">{lang.flag}</span>
            <span className="font-semibold text-sn-light flex items-center gap-1"><span className="text-base">{lang.name}</span></span>
            <span className="text-xs text-gray-500 mb-1">{lang.native ? 'Native' : lang.proficiency}</span>
            <div className="w-full bg-sn-light bg-opacity-20 rounded-full h-2 mt-2">
              <div className="bg-sn h-2 rounded-full" style={{ width: `${lang.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
