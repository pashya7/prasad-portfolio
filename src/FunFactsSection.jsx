import React from "react";

export default function FunFactsSection({ funFacts }) {
  return (
    <section className="py-4 px-2 sm:py-6 sm:px-4 max-w-full sm:max-w-3xl mx-auto">
      <div className="flex flex-col items-center w-full mb-2">
        <div className="flex items-center w-full justify-center mb-2">
          <span className="hidden sm:inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-sn tracking-tight text-center">Fun Facts & Personal Interests</h2>
          <span className="hidden sm:inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        </div>
      </div>
      <ul className="list-disc pl-4 sm:pl-6 space-y-2 mt-4">
        {funFacts.map((fact, idx) => (
          <li key={idx} className="text-base sm:text-lg text-sn-light">{fact}</li>
        ))}
      </ul>
    </section>
  );
}
