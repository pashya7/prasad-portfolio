import React from "react";

export default function FunFactsSection({ funFacts }) {
  return (
    <section className="py-8 px-4 max-w-3xl mx-auto">
      <div className="h-8 flex items-center justify-center w-full mb-2">
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
        <h2 className="text-3xl font-extrabold text-sn tracking-tight text-center">Fun Facts & Personal Interests</h2>
        <span className="inline-block w-24 border-t-2 border-sn opacity-30 mx-2"></span>
      </div>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        {funFacts.map((fact, idx) => (
          <li key={idx} className="text-base text-sn-light">{fact}</li>
        ))}
      </ul>
    </section>
  );
}
