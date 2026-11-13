import Image from "next/image";
import React from "react";

type Level = 0 | 1 | 2 | 3 | 4;

const NGMFamily = [
  "/HomePage/NGMFamilyOne.png",
  "/HomePage/NGMFamilyTwo.png",
  "/HomePage/NGMFamilyThree.png",
  "/HomePage/NGMFamilyFour.png",
  "/HomePage/NGMFamilyFive.png",
  "/HomePage/NGMFamilySix.png",
  "/HomePage/NGMFamilySeven.png",
  "/HomePage/NGMFamilyEight.png",
  "/HomePage/NGMFamilyNine.png",
];

type Hanging = {
  name: string;
  image: string;
  level: Level;
  bg: string;
  line: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type StoriesProps = {
  hanging?: Hanging[];
};

const LEVELS: Record<Level, { wrapper: string; line: string }> = {
  0: { wrapper: "flex", line: "h-2 lg:h-3" },
  1: { wrapper: "flex", line: "h-4 md:h-[17px] lg:h-[21px]" },
  2: { wrapper: "flex", line: "h-7 md:h-10 lg:h-[50px]" },
  3: { wrapper: "hidden md:flex", line: "md:h-[72px] lg:h-[90px]" },
  4: { wrapper: "hidden md:flex", line: "md:h-[110px] lg:h-[138px]" },
};

const DEFAULT_HANGING: Hanging[] = [
  {
    name: "Mentor 1",
    level: 4,
    image: NGMFamily[0],
    bg: "bg-[#101a8f]",
    line: "bg-[#c5c8f0]",
  },
  {
    name: "Mentor 2",
    level: 3,
    image: NGMFamily[1],
    bg: "bg-[#7bdc78]",
    line: "bg-[#0b7a3b]",
  },
  {
    name: "Mentor 3",
    level: 2,
    image: NGMFamily[2],
    bg: "bg-[#cdf4df]",
    line: "bg-[#c5c8f0]",
  },
  {
    name: "Mentor 4",
    level: 1,
    image: NGMFamily[3],
    bg: "bg-[#7bdc78]",
    line: "bg-[#0b7a3b]",
  },
  {
    name: "Mentor 5",
    level: 0,
    image: NGMFamily[4],
    bg: "bg-[#d8dcf7]",
    line: "bg-[#c5c8f0]",
  },
  {
    name: "Mentor 6",
    level: 1,
    image: NGMFamily[5],
    bg: "bg-[#101a8f]",
    line: "bg-[#0b7a3b]",
  },
  {
    name: "Mentor 7",
    level: 2,
    image: NGMFamily[6],
    bg: "bg-[#7bdc78]",
    line: "bg-[#c5c8f0]",
  },
  {
    name: "Mentor 8",
    level: 3,
    image: NGMFamily[7],
    bg: "bg-[#cdf4df]",
    line: "bg-[#0b7a3b]",
  },
  {
    name: "Mentor 9",
    level: 4,
    image: NGMFamily[8],
    bg: "bg-[#7bdc78]",
    line: "bg-[#c5c8f0]",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "NGM did not just give us a network; it gave us a mindset that refuses to settle for mediocrity.",
    name: "Engr. Suleiman Rotimi Iliasu",
    role: "Pioneer mentee · Former Commissioner for Works, Kwara State",
  },
  {
    quote:
      "From being a beneficiary of NGM’s guidance to now serving as a Team Lead, the journey has come full circle.",
    name: "Najimdeen Hamzah Abayomi",
    role: "Team Lead, Academic Excellence & Scholarships",
  },
  {
    quote:
      "He taught me to think and act beyond my perceived limitations and dare to achieve.",
    name: "Dr Mustapha Muhammad Fatihi",
    role: "Lead, Medical & Health Advancement",
  },
];

function Stories({ hanging = DEFAULT_HANGING }: StoriesProps) {
  return (
    <section className="overflow-hidden bg-white px-5 pb-12 font-['Archivo','Inter',system-ui,sans-serif] sm:px-12 md:pb-20 lg:px-[88px]">
      {/* Hanging avatars */}
      <div className="flex items-start justify-between gap-2.5 md:justify-center md:gap-5 lg:gap-6">
        {hanging.map((item) => {
          const level = LEVELS[item.level];
          return (
            <div
              key={item.name}
              className={`${level.wrapper} flex-col items-center`}
            >
              <span className={`block w-px ${item.line} ${level.line}`} />
              <span
                className={`relative block h-14 w-11 overflow-hidden rounded-b-lg rounded-t-full md:h-20 md:w-16 lg:h-24 lg:w-20 lg:rounded-b-xl ${item.bg}`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 44px, 80px"
                    className="object-cover object-top"
                  />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[80%] w-[80%] justify-self-center fill-white/50"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 24c0-5 3.6-9 8-9s8 4 8 9z" />
                  </svg>
                )}
              </span>
            </div>
          );
        })}
      </div>

      {/* Title */}
      <header className="relative mt-8 text-left md:-mt-16 md:text-center lg:-mt-20">
        <h2 className="m-0 text-[30px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#101a8f] sm:text-5xl lg:text-[52px]">
          Stories from
          <br className="hidden md:block" /> the NGM family
        </h2>
        <p className="m-0 mt-4 max-w-[300px] text-[13px] leading-relaxed text-[#5b6070] md:mx-auto md:max-w-[260px]">
          Mentees who became mentors, and mentors who keep showing up.
        </p>
      </header>

      {/* Featured quote */}
      <figure className="m-0 mx-auto mt-10 max-w-[820px] text-left md:mt-20 md:text-center">
        <blockquote className="m-0 text-xl font-medium leading-snug tracking-[-0.02em] text-[#1f2430] sm:text-3xl lg:text-[34px]">
          &ldquo;A thoughtful answer, an honest conversation or an introduction
          at the right time can change the course of someone&rsquo;s
          life.&rdquo;
        </blockquote>

        <figcaption className="mt-6 flex items-center justify-start gap-3 text-left md:mt-8 md:justify-center">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#7bdc78] text-[11px] font-bold text-[#101a8f]">
            IM
          </span>
          <span className="flex flex-col gap-0.5 text-[#101a8f]">
            <strong className="text-xs font-bold md:text-[11px]">
              Idris Musa Shehu
            </strong>
            <span className="text-[11px] leading-snug md:text-[10px]">
              Early NGM mentee · GM, IT &amp; Asset Integrity, Oando Energy
              Resources
            </span>
          </span>
        </figcaption>
      </figure>

      {/* Testimonials */}
      <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="m-0 border-t border-[#d9dce8] pt-5">
            <blockquote className="m-0 text-[13px] leading-relaxed text-[#1f2430]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex flex-col gap-0.5 text-[#101a8f]">
              <strong className="text-[11px] font-bold md:text-[10px]">
                {t.name}
              </strong>
              <span className="text-[11px] leading-snug md:text-[10px]">
                {t.role}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Stories;
