"use client";

import React, { useState } from "react";

type Team = {
  title: string;
  tagline: string;
  items: string[];
  cardClass: string;
  desktopShape: string;
  desktopTitle?: [string, string];
};

const TEAMS: Team[] = [
  {
    title: "NGM Academy",
    tagline: "Learn to think, write and win.",
    cardClass: "bg-[#7bdc78]",
    desktopShape:
      "lg:rounded-tl-none lg:rounded-tr-[56px] lg:rounded-br-[56px] lg:rounded-bl-none",
    items: [
      "Academic Excellence & Scholarships",
      "Case Study & Research",
      "Global Book & Knowledge Circle",
      "Public Speaking & Creative Writing",
    ],
  },
  {
    title: "NGM Professionals",
    tagline: "Build a career that lasts.",
    desktopTitle: ["NGM", "Professionals"],
    cardClass: "bg-white",
    desktopShape:
      "lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-[56px] lg:rounded-bl-[56px]",
    items: [
      "Career Development",
      "Financial Literacy & Tax",
      "Technology, Data & AI",
      "Energy, Oil & Gas",
      "Entrepreneurship Club",
      "Legal Affairs",
      "Medical & Health",
      "Leadership, Politics & Governance",
    ],
  },
  {
    title: "Engagement & Care",
    tagline: "No one grows alone.",
    desktopTitle: ["Engagement &", "Care"],
    cardClass: "bg-[#cdf4df]",
    desktopShape:
      "lg:rounded-tl-[56px] lg:rounded-tr-[56px] lg:rounded-br-none lg:rounded-bl-none",
    items: [
      "Onboarding & Integration",
      "Engagement & Experience",
      "Ambassadors & Peer Mentors",
      "Counselling Unit",
    ],
  },
  {
    title: "HQ & Central Support",
    tagline: "The teams behind every programme.",
    desktopTitle: ["HQ & Central", "Support"],
    cardClass: "bg-[#c5c8f0]",
    desktopShape:
      "lg:rounded-tl-[56px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[56px]",
    items: [
      "Strategic Planning",
      "Admissions & Selection",
      "Impact Assessment",
      "Conference Team",
      "News & Editorial",
      "Design & Branding",
      "Digital Communications",
    ],
  },
];

const TOTAL_TEAMS = TEAMS.reduce((sum, t) => sum + t.items.length, 0);

function Teams() {
  // Mobile accordion
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#101a8f] px-5 py-12 font-['Archivo','Inter',system-ui,sans-serif] text-white sm:px-12 md:py-16 lg:px-[88px] lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
          <h2 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[52px]">
            Find your team.
            <br className="hidden sm:block" /> Grow your craft.
          </h2>
          <p className="m-0 max-w-none text-[13px] leading-relaxed text-white/80 sm:max-w-[300px] md:mt-2">
            Every member joins a team built around a real skill, from
            scholarships to AI.
          </p>
        </header>

        {/* Mobile: accordion */}
        <div className="mt-8 flex flex-col gap-3 sm:hidden">
          {TEAMS.map((team, i) => {
            const open = openIndex === i;
            const panelId = `team-panel-${i}`;
            return (
              <article key={team.title}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 border-0 px-5 py-5 text-left text-[#101a8f] ${team.cardClass} ${
                    open ? "rounded-t-[28px]" : "rounded-[28px]"
                  }`}
                >
                  <span>
                    <span className="block text-xl font-extrabold leading-tight tracking-[-0.02em]">
                      {team.title}
                    </span>
                    <span className="mt-1 block text-xs leading-snug">
                      {team.tagline} · {team.items.length} teams
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-[#101a8f] text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14" />
                      {!open && <path d="M12 5v14" />}
                    </svg>
                  </span>
                </button>

                {open && (
                  <ul
                    id={panelId}
                    className="m-0 list-none rounded-b-[28px] bg-[#1c28ab] p-0 px-5 py-4"
                  >
                    {team.items.map((item) => (
                      <li
                        key={item}
                        className="py-2.5 text-sm leading-snug text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}

          <p className="m-0 mt-4 text-sm font-semibold text-[#7bdc78]">
            {TOTAL_TEAMS} teams. Pick one, or let us help you choose.
          </p>
        </div>

        {/* Tablet / desktop */}
        <div className="mt-10 hidden grid-cols-1 gap-x-4 gap-y-10 sm:grid sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {TEAMS.map((team) => (
            <article key={team.title} className="flex flex-col">
              <div
                className={`flex h-24 items-end rounded-[20px] rounded-tr-[56px] p-4 sm:h-28 lg:h-[88px] lg:p-3.5 ${team.cardClass} ${team.desktopShape}`}
              >
                <h3 className="m-0 text-lg font-extrabold leading-tight tracking-[-0.02em] text-[#101a8f] lg:text-[17px]">
                  {team.desktopTitle ? (
                    <>
                      {team.desktopTitle[0]}
                      <br className="hidden lg:block" />
                      <span className="lg:hidden"> </span>
                      {team.desktopTitle[1]}
                    </>
                  ) : (
                    team.title
                  )}
                </h3>
              </div>

              <p className="m-0 mt-5 text-[13px] font-bold">{team.tagline}</p>

              <ul className="m-0 mt-4 list-none p-0">
                {team.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-white/20 py-3 text-[11px] leading-snug text-white/85 last:border-b"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teams;
