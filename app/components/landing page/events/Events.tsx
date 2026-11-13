"use client";

import React, { useState } from "react";

type EventItem = {
  day: string;
  sub: string;
  title: string;
  meta: string;
  tag: string;
  href?: string;
};

const UPCOMING: EventItem[] = [
  {
    day: "14",
    sub: "Nov 2026",
    title: "Book & Knowledge Circle: November read",
    meta: "Online · Wakai Book & Knowledge Circle",
    tag: "Knowledge circle",
  },
  {
    day: "29",
    sub: "Nov 2026",
    title: "From application to award: winning scholarships",
    meta: "Webinar · Academic Excellence & Scholarships",
    tag: "Webinar",
  },
  {
    day: "06",
    sub: "Dec 2026",
    title: "Careers clinic: CVs, interviews and first jobs",
    meta: "Online · Career Development",
    tag: "Clinic",
  },
  {
    day: "Jan",
    sub: "2027",
    title: "SME Pitch 2027: applications open",
    meta: "Entrepreneurship Club · NGM x Alliance",
    tag: "Competition",
  },
];

const PAST: EventItem[] = [];
const PAST_COUNT = 12;

type Tab = "upcoming" | "past";

function Events() {
  const [tab, setTab] = useState<Tab>("upcoming");
  const items = tab === "upcoming" ? UPCOMING : PAST;

  const pillBase =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1a8c] focus-visible:ring-offset-2";
  const countBase =
    "inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px]";

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f1a8c] sm:text-4xl lg:text-5xl">
              Find your next event
            </h2>
            <p className="mt-3 max-w-md text-sm text-gray-500">
              Most sessions are free for members, and many are open to everyone.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTab("upcoming")}
              className={`${pillBase} ${
                tab === "upcoming"
                  ? "bg-[#0f1a8c] text-white"
                  : "border border-gray-200 text-[#0f1a8c] hover:bg-gray-50"
              }`}
            >
              Upcoming
              <span
                className={`${countBase} ${
                  tab === "upcoming"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {UPCOMING.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setTab("past")}
              className={`${pillBase} ${
                tab === "past"
                  ? "bg-[#0f1a8c] text-white"
                  : "border border-gray-200 text-[#0f1a8c] hover:bg-gray-50"
              }`}
            >
              Past events
              <span
                className={`${countBase} ${
                  tab === "past"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {PAST_COUNT}
              </span>
            </button>
          </div>
        </div>

        {/* List */}
        <ul className="mt-8 border-t border-gray-200 sm:mt-10">
          {items.length === 0 && (
            <li className="py-10 text-center text-sm text-gray-500">
              Nothing to show here yet.
            </li>
          )}

          {items.map((e) => (
            <li
              key={`${e.day}-${e.title}`}
              className="grid grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-3 border-b border-gray-200 py-5 sm:grid-cols-[5rem_1fr_auto_auto] sm:gap-x-6 sm:py-6"
            >
              {/* Date */}
              <div className="leading-none">
                <p className="text-2xl font-extrabold text-[#0f1a8c] sm:text-3xl">
                  {e.day}
                </p>
                <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
                  {e.sub}
                </p>
              </div>

              {/* Title + meta */}
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#0f1a8c] sm:text-base">
                  {e.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{e.meta}</p>
              </div>

              {/* Tag + Details */}
              <div className="col-start-2 flex items-center gap-4 sm:contents">
                <span className="w-fit rounded-full bg-[#d9f5dc] px-3 py-1 text-[11px] font-semibold text-[#2f8f3a]">
                  {e.tag}
                </span>
                <a className="text-xs font-semibold text-[#0f1a8c] hover:underline">
                  Details
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Events;
