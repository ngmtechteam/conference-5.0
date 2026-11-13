import Image from "next/image";
import React from "react";

const AVATARS = [
  { src: "/AboutPage/LeadIposu.png", bg: "bg-[#4cd964]" },
  { src: "/AboutPage/hero/AboutHero6.png", bg: "bg-[#c9cbf3]" },
  { src: "/AboutPage/hero/AboutHero17.png", bg: "bg-[#c9cbf3]" },
  { src: "/AboutPage/LeadIdowu.png", bg: "bg-[#c9cbf3]" },
  { src: "/AboutPage/LeadOmotosho.png", bg: "bg-[#4cd964]" },
  { src: "/AboutPage/LeadAlimat.png", bg: "bg-[#c9cbf3]" },
  { src: "/AboutPage/LeadSodiq.png", bg: "bg-[#d3f5e0]" },
  { src: "/AboutPage/hero/AboutHero18.png", bg: "bg-[#4cd964]" },
];

function PreFooter() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-[2rem] bg-[#10198f] px-6 py-10 sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-16 lg:py-20">
        <div>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Start where you are.
            <br />
            <span className="text-[#4cd964]">We&rsquo;ll walk with you.</span>
          </h2>

          <p className="mt-6 text-sm text-white/80 sm:text-base">
            Join 3,000+ mentees growing in life, career and spirituality.
          </p>

          <div className="mt-7 flex text-center flex-col gap-3 sm:flex-row">
            <a className="rounded-full  bg-[#4cd964] px-6 py-3 text-sm font-semibold text-[#10198f] transition hover:bg-[#6ae27d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Join NGM
            </a>
            <a className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#10198f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Become a mentor
            </a>
          </div>
        </div>

        <ul
          className="flex shrink-0 flex-wrap items-center md:flex-nowrap"
          aria-label="NGM community members"
        >
          {AVATARS.map((a, i) => (
            <li key={i} className="-ml-2 first:ml-0 sm:-ml-2.5">
              <Image
                src={a.src}
                alt="NGM community"
                loading="lazy"
                width={40}
                height={40}
                className={` rounded-full border-2 border-[#10198f] object-cover object-top sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${a.bg}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PreFooter;
