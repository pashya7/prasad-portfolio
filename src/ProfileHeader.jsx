import React from "react";

export default function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <img
        src={profile.photo}
        alt={profile.name}
        className="rounded-full w-32 h-32 mb-4 md:mb-0 shadow-lg border-4 border-blue-400 object-cover aspect-square"
        style={{objectFit:'cover'}}
      />
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-sn" tabIndex={0} style={{ letterSpacing: ".01em" }}>
          {profile.name}
        </h2>
        <p className="italic text-blue-600 dark:text-blue-300 mb-2 text-lg" tabIndex={0}>
          {profile.title}
        </p>
        <p className="max-w-xl text-base md:text-lg mb-4" tabIndex={0}>
          {profile.about}
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sn-light text-sm">
          {profile.location && <span>{profile.location}</span>}
{profile.contact?.email?.value && <a href={`mailto:${profile.contact.email.value}`} className="underline">{profile.contact.email.value}</a>}
{profile.contact?.phone?.value && (
  <span className="flex items-center gap-2">
    {profile.contact.phone.value}
    {profile.contact?.linkedin && (
      <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:underline hover:text-blue-900 ml-1">
        <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.62v4.69z"/></svg>
      </a>
    )}
  </span>
)}
{profile.contact?.github && <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
        </div>
      </div>
    </div>
  );
}
