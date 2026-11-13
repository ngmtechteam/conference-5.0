"use client";

import Image from "next/image";
import React from "react";

const PORTRAITS = [
  { src: "/Events/PeopleOne.png", alt: "Conference speaker 1" },
  { src: "/Events/PeopleTwo.png", alt: "Conference speaker 2" },
  { src: "/Events/PeopleThree.png", alt: "Conference speaker 3" },
  { src: "/Events/PeopleFour.png", alt: "Conference speaker 4" },
  { src: "/Events/PeopleFive.png", alt: "Conference speaker 5" },
  { src: "/Events/PeopleSix.png", alt: "Conference speaker 6" },
];
// const MOMENTS = [
//   { src: "/Events/MomentAward.png", alt: "Moment 1" },
//   { src: "/Events/MomentStage.png", alt: "Moment 2" },
//   { src: "/Events/MomentKola.png", alt: "Moment 3" },
//   { src: "/Events/MomentPanel.png", alt: "Moment 4" },
//   { src: "/Events/MomentRashidat.png", alt: "Moment 5" },
//   { src: "/Events/MomentPitch.png", alt: "Moment 6" },
//   { src: "/Events/MomentRussell.png", alt: "Moment 7" },
// ];

function Conference() {
  return (
    <section className="w-full bg-[#0f1a8c] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Photo grid card */}
        <div className="rounded-3xl rounded-tr-[3.5rem] bg-[#1c2aa8] p-3 sm:p-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {PORTRAITS.map((p) => (
              <div
                key={p.src}
                className="aspect-[7/8] overflow-hidden bg-black"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={185}
                  height={215}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="text-left sm:text-center md:text-left">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Conference 5.0:
            <br />
            Ten years of NGM
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-indigo-200 sm:text-base md:mx-0">
            Building the Future: The Urgency of Now brought mentors, members and
            partners together for the Dare Nigeria Challenge final and the SME
            Pitch.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a className="w-full rounded-full bg-[#7be07a] px-7 py-3 text-center text-sm font-semibold text-[#0f1a8c] transition hover:bg-[#6ad069] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1a8c] sm:w-auto">
              See the conference
            </a>
            <a className="w-full rounded-full border border-white px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1a8c] sm:w-auto">
              View the photos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conference;
