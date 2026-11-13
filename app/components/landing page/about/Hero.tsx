import Image from "next/image";
import React from "react";

type Tone = "lavender" | "mint" | "green";

type Tile = {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: Tone;
  src: string;
  alt: string;
};

const TONES: Record<Tone, string> = {
  lavender: "bg-[#c9cbf3]",
  mint: "bg-[#d3f5e0]",
  green: "bg-[#0f9d48]",
};

const TILES: Tile[] = [
  // top row
  {
    x: 28,
    y: 10,
    w: 88,
    h: 110,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero1.png",
    alt: "NGM team member",
  },
  {
    x: 154,
    y: 35,
    w: 66,
    h: 84,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero2.png",
    alt: "NGM team member",
  },
  {
    x: 258,
    y: 65,
    w: 50,
    h: 62,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero3.png",
    alt: "NGM team member",
  },
  {
    x: 340,
    y: 15,
    w: 68,
    h: 84,
    tone: "green",
    src: "/AboutPage/hero/AboutHero4.png",
    alt: "NGM team member",
  },
  {
    x: 438,
    y: 65,
    w: 52,
    h: 62,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero5.png",
    alt: "NGM team member",
  },
  {
    x: 527,
    y: 35,
    w: 66,
    h: 84,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero6.png",
    alt: "NGM team member",
  },
  {
    x: 631,
    y: 10,
    w: 88,
    h: 108,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero7.png",
    alt: "NGM team member",
  },

  // side row
  {
    x: 5,
    y: 280,
    w: 50,
    h: 62,
    tone: "green",
    src: "/AboutPage/hero/AboutHero8.png",
    alt: "NGM team member",
  },
  {
    x: 65,
    y: 280,
    w: 50,
    h: 62,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero9.png",
    alt: "NGM team member",
  },
  {
    x: 635,
    y: 280,
    w: 50,
    h: 62,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero10.png",
    alt: "NGM team member",
  },
  {
    x: 695,
    y: 280,
    w: 50,
    h: 62,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero11.png",
    alt: "NGM team member",
  },

  // bottom row
  {
    x: 28,
    y: 480,
    w: 88,
    h: 108,
    tone: "green",
    src: "/AboutPage/hero/AboutHero12.png",
    alt: "NGM team member",
  },
  {
    x: 154,
    y: 495,
    w: 66,
    h: 84,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero13.png",
    alt: "NGM team member",
  },
  {
    x: 258,
    y: 505,
    w: 50,
    h: 62,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero14.png",
    alt: "NGM team member",
  },
  {
    x: 340,
    y: 510,
    w: 68,
    h: 84,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero15.png",
    alt: "NGM team member",
  },
  {
    x: 438,
    y: 505,
    w: 50,
    h: 62,
    tone: "green",
    src: "/AboutPage/hero/AboutHero16.png",
    alt: "NGM team member",
  },
  {
    x: 527,
    y: 495,
    w: 66,
    h: 84,
    tone: "lavender",
    src: "/AboutPage/hero/AboutHero17.png",
    alt: "NGM team member",
  },
  {
    x: 631,
    y: 480,
    w: 88,
    h: 108,
    tone: "mint",
    src: "/AboutPage/hero/AboutHero18.png",
    alt: "NGM team member",
  },
];

const W = 750;
const H = 600;

function Photo({
  tile,
  className = "",
  style,
}: {
  tile: Tile;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.5rem] rounded-br-[2.25rem] ${TONES[tile.tone]} ${className}`}
      style={style}
    >
      <Image
        src={tile.src}
        alt={tile.alt}
        width={150}
        height={150}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}

function Hero() {
  const topMobile = TILES.slice(0, 7);
  const bottomMobile = TILES.slice(11, 18);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:py-0">
      <div className="mx-auto max-w-[900px]">
        {/* Mobile & tablet */}
        <div
          className="flex flex-wrap justify-center gap-2 pb-8 lg:hidden"
          aria-hidden="true"
        >
          {topMobile.map((t, i) => (
            <Photo key={i} tile={t} className="h-16 w-12 sm:h-20 sm:w-16" />
          ))}
        </div>

        <div className="relative lg:aspect-[750/600]">
          {/* Desktop */}
          <div className="hidden lg:block" aria-hidden="true">
            {TILES.map((t, i) => (
              <Photo
                key={i}
                tile={t}
                className="absolute"
                style={{
                  left: `${(t.x / W) * 100}%`,
                  top: `${(t.y / H) * 100}%`,
                  width: `${(t.w / W) * 100}%`,
                  aspectRatio: `${t.w} / ${t.h}`,
                }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center text-center lg:absolute lg:inset-y-[20%] lg:inset-x-[15%] lg:justify-center">
            <h1 className="max-w-[16ch] text-[2.75rem] font-bold leading-[1.02] tracking-tight text-[#10198f] sm:text-6xl lg:text-[clamp(3rem,7.4vw,4.5rem)]">
              A mentorship family built by{" "}
              <em className="font-semibold italic text-[#0b7a38]">
                many hands
              </em>
            </h1>

            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-slate-500 sm:text-base lg:text-[clamp(0.75rem,1.3vw,0.95rem)]">
              NGM began with one man, Engr. Nasir Giwa, making time for young
              people who needed a guide. Today, many hands carry that work.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <a
                href="/join"
                className="rounded-full bg-[#10198f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c1370] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
              >
                Join NGM
              </a>
              <a
                href="/team"
                className="rounded text-sm font-semibold text-[#10198f] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
              >
                Meet the team
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 pt-8 lg:hidden"
          aria-hidden="true"
        >
          {bottomMobile.map((t, i) => (
            <Photo key={i} tile={t} className="h-16 w-12 sm:h-20 sm:w-16" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
