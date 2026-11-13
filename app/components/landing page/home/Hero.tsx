import Image from "next/image";
import React from "react";

const homeImages = [
  "/HomePage/HomeHeroOne.png",
  "/HomePage/HomeHeroTwo.png",
  "/HomePage/HomeHeroThree.png",
  "/HomePage/HomeHeroFour.png",
  "/HomePage/HomeHeroFive.png",
  "/HomePage/HomeHeroSix.png",
  "/HomePage/HomeHeroSeven.png",
  "/HomePage/HomeHeroEight.png",
  "/HomePage/HomeHeroNine.png",
  "/HomePage/HomeHeroTen.png",
  "/HomePage/HomeHero11.png",
  "/HomePage/HomeHero12.png",
  "/HomePage/HomeHero13.png",
  "/HomePage/HomeHero14.png",
  "/HomePage/HomeHero15.png",
  "/HomePage/HomeHero16.png",
  "/HomePage/HomeHero17.png",
];

type HeroProps = {
  photos?: readonly string[];
  onJoin?: () => void;
  onMeetMentors?: () => void;
};

type Row = {
  left: number;
  right: number;
  text: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  { left: 2, text: "The mentorship", right: 2 },
  { left: 3, text: "platform where", right: 2 },
  { left: 1, text: "mentees grow", right: 3, highlight: true },
  { left: 2, text: "into mentors.", right: 2 },
];

function Tile({ src, extra }: { src?: string; extra: boolean }) {
  return (
    <span
      className={`${
        extra ? "hidden md:grid" : "grid"
      } relative size-11 shrink-0 place-items-end overflow-hidden rounded-lg bg-[#1c28ab] sm:size-16 md:size-20 lg:size-28 lg:rounded-xl`}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 44px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 112px"
          className="object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[70%] w-[70%] justify-self-center fill-white/20"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
        </svg>
      )}
    </span>
  );
}

function Hero({ photos = homeImages, onJoin, onMeetMentors }: HeroProps) {
  return (
    <section className="overflow-hidden bg-[#101a8f] py-8 font-['Archivo','Inter',system-ui,sans-serif] text-white md:py-12 lg:py-14">
      <div
        className="flex flex-col gap-2 md:gap-3 lg:gap-3.5"
        aria-label="The mentorship platform where mentees grow into mentors."
      >
        {ROWS.map((row, rowIndex) => {
          const startIndex = ROWS.slice(0, rowIndex).reduce(
            (total, previousRow) =>
              total + previousRow.left + previousRow.right,
            0,
          );

          return (
            <div
              key={row.text}
              aria-hidden="true"
              className="-mx-3 flex items-center justify-center gap-2 md:-mx-6 md:gap-3 lg:-mx-10 lg:gap-3.5"
            >
              <div className="flex shrink-0 justify-end gap-2 md:gap-3 lg:gap-3.5">
                {Array.from({ length: row.left }).map((_, i) => (
                  <Tile
                    key={i}
                    src={
                      photos.length
                        ? photos[(startIndex + i) % photos.length]
                        : undefined
                    }
                    extra={i < row.left - 1}
                  />
                ))}
              </div>

              <h1
                className={`m-0 whitespace-nowrap px-1 text-[clamp(24px,7.4vw,36px)] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:px-2 md:text-6xl lg:text-7xl xl:text-[76px] ${
                  row.highlight ? "text-[#7bdc78]" : "text-white"
                }`}
              >
                {row.text}
              </h1>

              <div className="flex shrink-0 gap-2 md:gap-3 lg:gap-3.5">
                {Array.from({ length: row.right }).map((_, i) => {
                  const photoIndex = startIndex + row.left + i;

                  return (
                    <Tile
                      key={i}
                      src={
                        photos.length
                          ? photos[photoIndex % photos.length]
                          : undefined
                      }
                      extra={i > 0}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-start gap-5 px-5 pt-8 sm:px-12 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-14 lg:px-[88px]">
        <p className="m-0 max-w-[460px] text-sm leading-relaxed text-white/90">
          The Nasir Giwa Mentorship Platform (NGM) guides students and young
          professionals in Nigeria and beyond, in life, career and spirituality.
        </p>

        <div className="flex w-full shrink-0 items-center justify-between gap-7 md:w-auto md:justify-start">
          <button
            type="button"
            onClick={onJoin}
            className="cursor-pointer rounded-full bg-[#7bdc78] px-8 py-3.5 text-sm font-bold text-[#101a8f] transition hover:-translate-y-px hover:brightness-105"
          >
            Join NGM
          </button>

          <button
            type="button"
            onClick={onMeetMentors}
            className="cursor-pointer text-[13px] font-bold text-white hover:underline"
          >
            Meet the mentors
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
