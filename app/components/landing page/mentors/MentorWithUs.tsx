import React from "react";
import Image from "next/image";
type Figure = {
  photo: string;
  alt: string;
  frame: string;
  bg: string;
  bar: string;
};

const FIGURES: Figure[] = [
  {
    photo: "/Mentors/RiserTaiwo.png",
    alt: "NGM mentor",
    frame: "rounded-t-[1.25rem]",
    bg: "bg-[#c9cbf3]",
    bar: "h-10 sm:h-14",
  },
  {
    photo: "/Mentors/RiserAfunku.png",
    alt: "NGM mentor",
    frame: "rounded-t-full",
    bg: "bg-[#cdf5e0]",
    bar: "h-16 sm:h-24",
  },
  {
    photo: "/Mentors/RiserMoshood.png",
    alt: "NGM mentor",
    frame: "rounded-t-full",
    bg: "bg-[#6bdf78]",
    bar: "h-24 sm:h-32",
  },
];

function MentorWithUs() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] bg-[#10198f] sm:rounded-[2.5rem] md:grid-cols-[1.2fr_1fr] md:items-end">
        <div className="px-6 pb-8 pt-10 sm:px-10 sm:pt-14 md:pb-14 lg:px-14">
          <h2 className="max-w-[18ch] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built something worth sharing? Mentor with us.
          </h2>
          <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-white/80 sm:text-base">
            <span className="block sm:inline">A mentee becomes a mentor.</span>{" "}
            <span className="block sm:inline">
              A beneficiary becomes a benefactor.
            </span>{" "}
            <span className="block sm:inline">That&rsquo;s how NGM grows.</span>
          </p>
          <div className="mt-7 flex flex-col text-center sm:flex-row gap-3">
            <a
              href="/mentor"
              className="rounded-full bg-[#6bdf78] px-6 py-3 text-sm font-semibold text-[#10198f] transition hover:bg-[#86e891] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Become a mentor
            </a>
            <a
              href="/join"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#10198f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join NGM
            </a>
          </div>
        </div>

        <div
          className="flex items-end justify-center gap-2 px-6 sm:gap-3 md:justify-end md:px-8"
          aria-hidden="true"
        >
          {FIGURES.map((f, i) => (
            <div key={i} className="flex w-24 flex-col sm:w-28 md:w-24 lg:w-28">
              <div
                className={`aspect-[4/5] overflow-hidden ${f.frame} ${f.bg}`}
              >
                <Image
                  src={f.photo}
                  alt={f.alt}
                  width={100}
                  height={125}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className={`bg-[#1b25ad] ${f.bar}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorWithUs;
