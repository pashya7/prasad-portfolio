import React from "react";

export default function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <img
        src={profile.photo}
        alt={profile.name}
        className="rounded-full w-32 h-32 mb-4 md:mb-0 shadow-lg border-4 border-blue-400"
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
{profile.contact?.phone?.value && <span>{profile.contact.phone.value}</span>}
{profile.contact?.github && <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
        </div>
      </div>
    </div>
  );
}
