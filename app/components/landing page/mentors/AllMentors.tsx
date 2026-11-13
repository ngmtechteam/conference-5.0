"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

type Category =
  | "Finance"
  | "Energy & Engineering"
  | "Law & Public Service"
  | "Business, Tech & Academia";

type Mentor = {
  photo: string;
  category: Category;
  bg: string;
};

const BLUE = "bg-[#1b25ad]";
const LIME = "bg-[#6bdf78]";
const GREEN = "bg-[#0f9d48]";

const MENTORS: Mentor[] = [
  {
    photo: "/Mentors/ngmMentors/MentorAisha.png",
    category: "Finance",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorYinka.png",
    category: "Finance",
    bg: LIME,
  },
  {
    photo: "/Mentors/ngmMentors/MentorMoshood.png",
    category: "Energy & Engineering",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorBimpe.png",
    category: "Business, Tech & Academia",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAzeezah.png",
    category: "Law & Public Service",
    bg: GREEN,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAbudu.png",
    category: "Finance",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorTaiwo.png",
    category: "Finance",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorKofo.png",
    category: "Law & Public Service",
    bg: LIME,
  },
  {
    photo: "/Mentors/ngmMentors/MentorBeita.png",
    category: "Energy & Engineering",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAbiodun.png",
    category: "Finance",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorHaneef.png",
    category: "Business, Tech & Academia",
    bg: GREEN,
  },
  {
    photo: "/Mentors/ngmMentors/MentorRahmah.png",
    category: "Business, Tech & Academia",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorIbrahim.png",
    category: "Energy & Engineering",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorDolapo.png",
    category: "Energy & Engineering",
    bg: LIME,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAfunku.png",
    category: "Law & Public Service",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorYusuff.png",
    category: "Energy & Engineering",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAdamu.png",
    category: "Business, Tech & Academia",
    bg: GREEN,
  },
  {
    photo: "/Mentors/ngmMentors/MentorWale.png",
    category: "Finance",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorAbimbola.png",
    category: "Law & Public Service",
    bg: BLUE,
  },
  {
    photo: "/Mentors/ngmMentors/MentorTaofeek.png",
    category: "Business, Tech & Academia",
    bg: LIME,
  },
];

const CATEGORIES: Category[] = [
  "Finance",
  "Energy & Engineering",
  "Law & Public Service",
  "Business, Tech & Academia",
];

// Tablet or desktop paging
const PAGE_SIZE = 20;
const STEP = 10;

// Mobile paging
const MOBILE_PAGE_SIZE = 8;
const MOBILE_STEP = 20;

function AllMentors() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [mobileVisible, setMobileVisible] = useState(MOBILE_PAGE_SIZE);

  const filtered = useMemo(
    () =>
      active === "All" ? MENTORS : MENTORS.filter((m) => m.category === active),
    [active],
  );
  const remaining = Math.max(filtered.length - visible, 0);
  const mobileRemaining = Math.max(filtered.length - mobileVisible, 0);

  const chips: { label: "All" | Category; text: string; count: number }[] = [
    { label: "All", text: "All mentors", count: MENTORS.length },
    ...CATEGORIES.map((c) => ({
      label: c,
      text: c,
      count: MENTORS.filter((m) => m.category === c).length,
    })),
  ];

  return (
    <section className="w-full bg-[#10198f] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-[14ch] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Find a mentor in your field
        </h2>
        <p className="mt-3 max-w-md text-sm text-white/75 sm:text-base">
          Leaders in finance, energy, law, business and more. Filter by the
          field you&rsquo;re growing into.
        </p>

        <div
          className="-mx-5 mt-6 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
          role="group"
          aria-label="Filter mentors by field"
        >
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {chips.map((c) => {
              const on = active === c.label;
              return (
                <button
                  key={c.label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setActive(c.label);
                    setVisible(PAGE_SIZE);
                    setMobileVisible(MOBILE_PAGE_SIZE);
                  }}
                  className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    on
                      ? "border-[#6bdf78] bg-[#6bdf78] text-[#10198f]"
                      : "border-white/30 text-white hover:border-white"
                  }`}
                >
                  {c.text} <span className="ml-1 opacity-70">{c.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.slice(0, Math.max(visible, mobileVisible)).map((m, i) => (
            <li
              key={m.photo}
              className={`relative aspect-[3/4.2] overflow-hidden rounded-[1.25rem] rounded-br-[2rem] ${m.bg} ${
                i < mobileVisible ? "block" : "hidden"
              } ${i < visible ? "sm:block" : "sm:hidden"}`}
            >
              <Image
                src={m.photo}
                alt="NGM mentor"
                width={250}
                height={360}
                className="h-full w-full object-cover object-top"
              />
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        {mobileRemaining > 0 && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileVisible((v) => v + MOBILE_STEP)}
              className="rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#10198f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Show {Math.min(mobileRemaining, MOBILE_STEP)} more mentors
            </button>
          </div>
        )}

        {/* Tablet & desktop button */}
        {remaining > 0 && (
          <div className="mt-10 hidden justify-center sm:flex">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="rounded-full border border-white px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#10198f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Show {Math.min(remaining, STEP)} more mentors
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllMentors;
