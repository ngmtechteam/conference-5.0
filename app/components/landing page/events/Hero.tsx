import Image from "next/image";
import React from "react";

const IMAGES = {
  pill: "/Events/EventHeroOne.png",
  avatars: "/Events/EventHeroTwo.png",
  moments: "/Events/Moments.png",
};

const MOMENTS = [
  { src: "/Events/MomentAward.png", alt: "Moment 1" },
  { src: "/Events/MomentStage.png", alt: "Moment 2" },
  { src: "/Events/MomentKola.png", alt: "Moment 3" },
  { src: "/Events/MomentPanel.png", alt: "Moment 4" },
  { src: "/Events/MomentRashidat.png", alt: "Moment 5" },
  { src: "/Events/MomentPitch.png", alt: "Moment 6" },
  { src: "/Events/MomentRussell.png", alt: "Moment 7" },
];

const MOMENT_LAYOUT: [number, string, string][] = [
  [
    1,
    "hidden md:block md:-ml-[7.9vw] md:w-[14vw] md:h-[22vw] md:mt-[7vw] md:rounded-t-[2.2vw]",
    "object-top",
  ],
  [
    0,
    "w-[32vw] h-[48vw] md:w-[16.8vw] md:h-[26vw] rounded-t-full",
    "object-top",
  ],
  [
    2,
    "w-[27vw] h-[42vw] mt-[6vw] md:w-[13.9vw] md:h-[22vw] md:mt-[4.2vw] rounded-t-[7vw] md:rounded-t-[4.3vw]",
    "object-top",
  ],
  [
    3,
    "w-[36vw] h-[42vw] mt-[3vw] md:w-[22.5vw] md:h-[19vw] md:mt-[2.8vw] rounded-t-[2.5vw] md:rounded-t-[1.5vw]",
    "object-center",
  ],
  [
    4,
    "hidden md:block md:w-[13.9vw] md:h-[20vw] md:mt-[5.6vw] rounded-t-full",
    "object-top",
  ],
  [
    5,
    "hidden md:block md:w-[19.6vw] md:h-[20vw] md:mt-[4.2vw] rounded-tl-[1.8vw] rounded-tr-[4.5vw]",
    "object-center",
  ],
  [
    6,
    "hidden md:block md:w-[14vw] md:h-[22vw] md:mt-[4.2vw] md:rounded-t-[2vw]",
    "object-top",
  ],
];

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-10 text-left sm:text-center sm:px-6 sm:pt-14 lg:pt-16">
        {/* Heading */}
        <h1 className="text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-[#0f1a8c] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {/* Line 1 */}
          <span className="flex flex-wrap items-center justify-start sm:justify-center gap-x-[0.2em]">
            <span>Events that</span>
            <Image
              src={IMAGES.pill}
              alt="Attendees at a conference"
              width={200}
              height={104}
              className="h-[0.85em] w-auto max-w-none rounded-full object-cover"
            />
          </span>

          {/* Line 2 */}
          <span className="flex flex-wrap items-center justify-start sm:justify-center gap-x-[0.2em]">
            <span>move you</span>
            <Image
              src={IMAGES.avatars}
              alt="Mentors and community members"
              width={276}
              height={104}
              className="h-[0.95em] w-auto max-w-none object-contain"
            />
            <span>forward</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-500 sm:mt-8 sm:max-w-lg sm:text-base">
          Conferences, webinars, knowledge circles and pitch days, where mentors
          and members learn side by side.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:gap-6">
          <a
            href="#events"
            className="rounded-full bg-[#0f1a8c] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0b1370] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1a8c] focus-visible:ring-offset-2"
          >
            See what&apos;s coming up
          </a>
          <a
            href="#updates"
            className="text-sm font-semibold text-[#0f1a8c] transition hover:underline"
          >
            Get event updates
          </a>
        </div>
      </div>

      <div className="mt-10 flex h-[44vw] w-full items-start justify-center gap-[2vw] overflow-hidden sm:mt-14 md:h-[21vw] md:justify-start md:gap-[1.15vw] lg:mt-16">
        {MOMENT_LAYOUT.map(([i, cls, focus]) => {
          const m = MOMENTS[i];
          return (
            <div
              key={m.src}
              className={`relative shrink-0 overflow-hidden ${cls}`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 24vw, 40vw"
                className={`object-cover ${focus}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
