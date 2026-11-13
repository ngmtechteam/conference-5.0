import Image from "next/image";
import React from "react";

const homeFamilyImages = [
  "/HomePage/NGMStage.png",
  "/HomePage/NGMPanel.png",
  "/HomePage/NGMPitch.png",
  "/HomePage/NGMAudience.png",
  "/HomePage/NGMAward.png",
];

type HomeFamilyProps = {
  images?: string[];
  onOpenGallery?: () => void;
};

const TILES: { alt: string; className: string }[] = [
  {
    alt: "Award presentation on stage",
    className:
      "col-span-2 aspect-[4/3] rounded-[20px] md:col-span-1 md:col-start-1 md:row-span-3 md:row-start-1 md:aspect-auto",
  },
  {
    alt: "Conference panel session",
    className:
      "aspect-[5/4] rounded-[20px] md:col-start-2 md:row-span-1 md:row-start-1 md:aspect-auto",
  },
  {
    alt: "Pitch day grand prize winners",
    className:
      "aspect-[5/4] rounded-[20px] md:col-start-2 md:row-span-2 md:row-start-2 md:aspect-auto",
  },
  {
    alt: "Audience at a conference",
    className:
      "aspect-[4/5] rounded-b-[20px] rounded-t-full md:col-start-3 md:row-span-2 md:row-start-1 md:aspect-auto",
  },
  {
    alt: "Speaker at a workshop",
    className:
      "aspect-[4/5] rounded-[20px] md:col-start-3 md:row-span-1 md:row-start-3 md:aspect-auto",
  },
];

function HomeFamily({
  images = homeFamilyImages,
  onOpenGallery,
}: HomeFamilyProps) {
  return (
    <section className="bg-[#101a8f] px-5 py-12 font-['Archivo','Inter',system-ui,sans-serif] text-white sm:px-12 md:py-16 lg:px-[88px] lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <header className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="m-0 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              The NGM family, in pictures
            </h2>
            <p className="m-0 mt-4 max-w-[320px] text-[13px] leading-relaxed text-white/80">
              Conference stages, award nights, pitch days and the quiet sessions
              in between.
            </p>
          </div>

          {/* Tablet / desktop button */}
          <button
            type="button"
            onClick={onOpenGallery}
            className="hidden shrink-0 cursor-pointer rounded-full border border-white/80 bg-transparent px-7 py-3 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#101a8f] md:block"
          >
            Open the gallery
          </button>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-14 md:aspect-[666/343] md:grid-cols-[266fr_211fr_166fr] md:grid-rows-[163fr_35fr_121fr]">
          {TILES.map((tile, i) => (
            <div
              key={tile.alt}
              className={`relative overflow-hidden bg-[#1c28ab] ${tile.className}`}
            >
              {images[i] ? (
                <Image
                  src={images[i]}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center text-white/20"
                >
                  <svg viewBox="0 0 24 24" className="size-10 fill-current">
                    <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={onOpenGallery}
          className="mt-8 block w-full cursor-pointer rounded-full border border-white/80 bg-transparent py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101a8f] md:hidden"
        >
          Open the gallery
        </button>
      </div>
    </section>
  );
}

export default HomeFamily;
