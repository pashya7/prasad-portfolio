import React, { useState } from "react";
import profileData from "./profileData";

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

export default function ProfileDataEditor() {
  const [data, setData] = useState(profileData);

  // Handler for generic field update
  const handleChange = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10 border border-green-200">
      <div className="flex items-center gap-3 mb-6">
        <img src="/servicenow-logo.png" alt="ServiceNow Logo" className="h-10 w-10 rounded" />
        <h2 className="text-3xl font-extrabold text-green-700 tracking-tight">Admin Profile Editor</h2>
      </div>
      <div className="mb-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded px-3 py-2">
        <InformationCircleIcon className="h-5 w-5 text-green-600" />
        <span className="text-green-700 text-sm">This admin page lets you manage all profile data. Each section can be saved independently. Changes update your live portfolio instantly.</span>
      </div>
      {/* Profile Section */}
      <section className="mb-10 bg-gray-50 border border-green-100 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <InformationCircleIcon className="h-5 w-5 text-green-600" />
          <h3 className="text-xl font-bold text-green-800">Profile Details</h3>
        </div>
        <p className="text-xs text-gray-500 mb-4">Edit your name, title, tagline, and about section. This appears at the top of your portfolio.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            Name
            <input
              className="input input-bordered w-full mt-1"
              value={data.profile.name}
              onChange={(e) => handleChange("profile", "name", e.target.value)}
            />
          </label>
          <label className="block">
            Title
            <input
              className="input input-bordered w-full mt-1"
              value={data.profile.title}
              onChange={(e) => handleChange("profile", "title", e.target.value)}
            />
          </label>
          <label className="block col-span-2">
            Tagline
            <input
              className="input input-bordered w-full mt-1"
              value={data.profile.tagline}
              onChange={(e) => handleChange("profile", "tagline", e.target.value)}
            />
          </label>
          <label className="block col-span-2">
            About (one per line)
            <textarea
              className="input input-bordered w-full mt-1"
              rows={3}
              value={data.profile.about.join("\n")}
              onChange={e => handleChange("profile", "about", e.target.value.split("\n"))}
            />
          </label>
        </div>
        <div className="mt-4 text-right">
          <button
            className="btn btn-success px-6"
            onClick={async () => {
              try {
                const res = await fetch('http://localhost:5174/api/save-profile', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ ...data, certifications: undefined, skills: undefined, funFacts: undefined, languages: undefined, downloads: undefined, articles: undefined }),
                });
                const result = await res.json();
                alert('Profile section saved! ' + result.message);
              } catch (e) {
                alert('Failed to save: ' + e.message);
              }
            }}
          >
            <CheckCircleIcon className="h-5 w-5 inline-block mr-1" /> Save Profile
          </button>
        </div>
      </section>
    </div>
  );
}
