import Image from "next/image";
import React from "react";

type Card = {
  src: string;
  alt: string;
  bg: string;
  shape: string;
  top: string;
};

const CARDS: Card[] = [
  {
    src: "/Mentors/hero/MrsKofo.png",
    alt: "Mrs Kofo",
    bg: "bg-[#c9cbf3]",
    shape: "rounded-t-full",
    top: "mt-10",
  },
  {
    src: "/Mentors/hero/MrHaneef.png",
    alt: "Mr Haneef",
    bg: "bg-[#0f9d48]",
    shape: "rounded-t-[1.5rem]",
    top: "mt-6",
  },
  {
    src: "/Mentors/hero/MrsBimpe.png",
    alt: "Mrs Bimpe",
    bg: "bg-[#cdf5e0]",
    shape: "rounded-t-full",
    top: "mt-2",
  },
  {
    src: "/Mentors/hero/MrAbiodun.png",
    alt: "Mr Abiodun",
    bg: "bg-[#6bdf78]",
    shape: "rounded-t-[1.5rem]",
    top: "mt-8",
  },
  {
    src: "/Mentors/hero/MrTaliha.png",
    alt: "Mr Taliha",
    bg: "bg-[#c9cbf3]",
    shape: "rounded-t-full",
    top: "mt-0",
  },
  {
    src: "/Mentors/hero/MrLookman.png",
    alt: "Mr Lookman",
    bg: "bg-[#1b25ad]",
    shape: "rounded-t-[1.5rem]",
    top: "mt-6",
  },
  {
    src: "/Mentors/hero/MrsOyin.png",
    alt: "Mrs Oyin",
    bg: "bg-[#0f9d48]",
    shape: "rounded-t-[1.5rem]",
    top: "mt-8",
  },
  {
    src: "/Mentors/hero/MrSaheed.png",
    alt: "Mr Saheed",
    bg: "bg-[#cdf5e0]",
    shape: "rounded-t-full",
    top: "mt-2",
  },
  {
    src: "/Mentors/hero/MrsAni.png",
    alt: "Mrs Ani",
    bg: "bg-[#c9cbf3]",
    shape: "rounded-t-[1.5rem]",
    top: "mt-6",
  },
];

const pill = "inline-block overflow-hidden align-middle";

function Hero() {
  return (
    <section className="w-full overflow-hidden bg-white pt-10 sm:pt-14">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#10198f] sm:text-6xl lg:text-7xl">
          <span className="block">
            Mentors{" "}
            <span
              className={`${pill} h-[0.85em] w-[1.9em] rounded-full bg-[#cdf5e0]`}
            >
              <Image
                src="/Mentors/hero/AvatarAisha.png"
                alt="MrsAisha"
                width={100}
                height={100}
                className="h-full w-full object-cover object-top"
              />
            </span>{" "}
            who
          </span>
          <span className="block">
            meet you{" "}
            <span className="inline-flex align-middle">
              {[
                "/AboutPage/hero/AboutHero15.png",
                "/AboutPage/hero/AboutHero18.png",
                "/AboutPage/hero/AboutHero8.png",
              ].map((s, i) => (
                <Image
                  key={s}
                  src={s}
                  alt="Image trio"
                  width={100}
                  height={100}
                  className={`h-[0.85em] w-[0.85em] rounded-full border-2 border-white object-cover object-top ${
                    i === 0 ? "" : "-ml-[0.15em]"
                  } ${["bg-[#0f9d48]", "bg-[#e5484d]", "bg-[#0f9d48]"][i]}`}
                />
              ))}
            </span>
          </span>
          <span className="block">
            where you are{" "}
            <span
              className={`${pill} h-[0.85em] w-[0.85em] rounded-full bg-[#10198f]`}
            >
              <Image
                src="/Mentors/hero/AvatarMoshood.png"
                alt="MrMoshood"
                width={100}
                height={100}
                className="h-full w-full object-cover object-top"
              />
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[42ch] text-sm leading-relaxed text-slate-500 sm:text-base">
          30+ senior leaders from KPMG, Google, ExxonMobil, Deloitte and more,
          giving their time to students and young professionals.
        </p>

        <div className="mt-7 flex items-center justify-center gap-5">
          <a
            href="/join"
            className="rounded-full bg-[#10198f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1370] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
          >
            Join NGM
          </a>
          <a
            href="/mentor"
            className="rounded text-sm font-semibold text-[#10198f] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
          >
            Become a mentor
          </a>
        </div>
      </div>

      <div
        className="mt-10 flex h-44 justify-center gap-2 overflow-hidden sm:mt-14 sm:h-56 sm:gap-3 lg:h-64"
        aria-hidden="true"
      >
        {CARDS.map((c, i) => (
          <div
            key={i}
            className={`aspect-[3/4.4] w-20 shrink-0 overflow-hidden sm:w-28 lg:w-32 ${c.top} ${c.bg} ${c.shape}`}
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={160}
              height={230}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
