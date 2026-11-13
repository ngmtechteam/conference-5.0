import Image from "next/image";
import React from "react";

const mentorsTreeImages = [
  "/HomePage/GrowthTop.png",
  "/HomePage/GrowthLeft.png",
  "/HomePage/GrowthCentre.png",
  "/HomePage/GrowthRight.png",
  "/HomePage/GrowthBottom.png",
];

type MentorsTreeProps = {
  photos?: string[];
  onJoin?: () => void;
};

type Tile = {
  alt: string;
  className: string;
};

const TILES: Tile[] = [
  {
    alt: "Mentor, top",
    className:
      "col-start-2 row-start-1 rounded-b-[18px] bg-[#7bdc78] sm:rounded-b-[24px]",
  },
  {
    alt: "Mentor, left",
    className:
      "col-start-1 row-start-2 rounded-br-[18px] rounded-tl-[18px] bg-[#1c28ab] sm:rounded-br-[24px] sm:rounded-tl-[24px]",
  },
  {
    alt: "Mentor, right",
    className:
      "col-start-3 row-start-2 rounded-bl-[18px] rounded-tr-[18px] bg-[#7bdc78] sm:rounded-bl-[24px] sm:rounded-tr-[24px]",
  },
  {
    alt: "Mentor, bottom",
    className:
      "col-start-2 row-start-3 rounded-t-[18px] bg-[#7bdc78] sm:rounded-t-[24px]",
  },
];

function Silhouette() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 h-[85%] w-[85%] -translate-x-1/2 fill-white/50"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 24c0-5 3.6-9 8-9s8 4 8 9z" />
    </svg>
  );
}

function MentorsTree({ photos = mentorsTreeImages, onJoin }: MentorsTreeProps) {
  const photoFor = (tileIndex: number) =>
    [photos[0], photos[1], photos[3], photos[4]][tileIndex];

  return (
    <section className="bg-white px-4 py-8 font-['Archivo','Inter',system-ui,sans-serif] sm:px-6 md:py-12 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-8 rounded-[28px] bg-[#101a8f] px-6 py-10 text-white sm:px-12 sm:py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:rounded-[40px] md:px-14 md:py-16 lg:px-[72px]">
        <div className="w-full md:w-auto">
          <h2 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[52px]">
            Grow with us,
            <br />
            then give back.
          </h2>
          <p className="m-0 mt-5 max-w-[380px] text-[13px] leading-relaxed text-white/85 sm:text-sm">
            Your place in the NGM family is ready. Start where you are.
          </p>
          <button
            type="button"
            onClick={onJoin}
            className="mt-7 w-full cursor-pointer rounded-full border-0 bg-[#7bdc78] px-8 py-3.5 text-[13px] font-bold text-[#101a8f] transition hover:-translate-y-px hover:brightness-105 md:w-auto"
          >
            Join NGM
          </button>
        </div>

        {/* photo cluster */}
        <div className="mx-auto grid aspect-[224/238] w-[200px] shrink-0 grid-cols-[65fr_94fr_65fr] grid-rows-[65fr_97fr_65fr] gap-1 sm:w-[240px] md:mx-0 lg:w-[290px] lg:gap-1.5">
          {TILES.map((tile, i) => {
            const src = photoFor(i);
            return (
              <div
                key={tile.alt}
                className={`relative overflow-hidden ${tile.className}`}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 1024px) 120px, 140px"
                    className="object-cover object-top"
                  />
                ) : (
                  <Silhouette />
                )}
              </div>
            );
          })}

          <div className="relative col-start-2 row-start-2 grid place-items-center">
            <div className="relative aspect-square w-[76%] overflow-hidden rounded-full border-[3px] border-[#3a4560] bg-[#1c28ab] md:border-[#7bdc78]">
              {photos[2] ? (
                <Image
                  src={photos[2]}
                  alt="Mentor, centre"
                  fill
                  sizes="(max-width: 1024px) 100px, 120px"
                  className="object-cover object-top"
                />
              ) : (
                <Silhouette />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorsTree;
