import Image from "next/image";
import React from "react";

type Person = {
  name: string;
  detail: string;
  image?: string;
  initials?: string;
  left: number;
  top: number;
  side?: "left" | "right";
  avatarClass?: string;
};

type MapsProps = {
  people?: Person[];
};

const DEFAULT_PEOPLE: Person[] = [
  {
    name: "Aisha Alimi",
    image: "/HomePage/MapAisha.png",
    detail: "Mentor · Canada",
    left: 19,
    top: 13,
    avatarClass: "bg-[#c9a58a]",
  },
  {
    name: "Yinka Ojikutu",
    image: "/HomePage/MapYinka.png",
    detail: "Mentor · USA",
    left: 8,
    top: 29,
    avatarClass: "bg-[#0b7a3b]",
  },
  {
    name: "Ridwan Usman",
    image: "/HomePage/MapRidwan.png",
    detail: "Mentee · UK",
    left: 43,
    top: 26,
    side: "left",
    avatarClass: "bg-[#8a6a55]",
  },
  {
    name: "Mubarak Babslawal",
    image: "/HomePage/MapMubarak.png",
    detail: "Ambassador · Italy",
    left: 50,
    top: 34,
    avatarClass: "bg-[#2a3a6a]",
  },
  {
    name: "Khalid Kolki",
    image: "/HomePage/MapKhalid.png",
    detail: "Ambassador · Qatar",
    left: 59,
    top: 46,
    avatarClass: "bg-[#333]",
  },
  {
    name: "Taiwo Kuye",
    image: "/HomePage/MapTaiwo.png",
    detail: "Mentor · Nigeria",
    left: 45,
    top: 56,
    side: "left",
    avatarClass: "bg-[#0b7a3b]",
  },
  {
    name: "Muhammed Aliyu",
    image: "/HomePage/MapMuhammed.png",
    detail: "Ambassador · Rwanda",
    left: 57,
    top: 66,
    initials: "MA",
    avatarClass: "bg-[#7bdc78] text-[#101a8f]",
  },
  {
    name: "Yusuf Olaniyi",
    image: "/HomePage/MapYusuf.png",
    detail: "Mentee · Singapore",
    left: 76,
    top: 63,
    avatarClass: "bg-[#8a8f9a]",
  },
];

type Poly = [number, number][];

const LAND: Poly[] = [
  // North America
  [
    [-168, 66],
    [-150, 71],
    [-125, 70],
    [-95, 73],
    [-80, 73],
    [-62, 66],
    [-55, 52],
    [-67, 45],
    [-76, 38],
    [-81, 31],
    [-80, 25],
    [-90, 29],
    [-97, 26],
    [-97, 18],
    [-88, 16],
    [-83, 10],
    [-77, 8],
    [-84, 9],
    [-92, 15],
    [-105, 20],
    [-117, 32],
    [-124, 40],
    [-125, 49],
    [-135, 58],
    [-152, 59],
    [-165, 55],
  ],
  // Greenland
  [
    [-55, 60],
    [-45, 60],
    [-20, 70],
    [-20, 82],
    [-60, 82],
    [-70, 76],
  ],
  // South America
  [
    [-78, 8],
    [-62, 11],
    [-50, 0],
    [-35, -6],
    [-39, -15],
    [-48, -26],
    [-58, -38],
    [-65, -42],
    [-68, -54],
    [-74, -50],
    [-72, -35],
    [-70, -18],
    [-81, -6],
    [-80, 0],
  ],
  // Europe & Asia
  [
    [-9, 37],
    [-9, 43],
    [-2, 43.5],
    [-4, 48],
    [2, 51],
    [8, 54],
    [9, 57],
    [10, 58],
    [6, 62],
    [14, 68],
    [25, 71],
    [40, 67],
    [44, 68],
    [60, 69],
    [70, 73],
    [80, 73],
    [100, 77],
    [115, 74],
    [130, 71],
    [150, 71],
    [170, 69],
    [180, 67],
    [180, 64],
    [165, 60],
    [160, 54],
    [156, 51],
    [155, 59],
    [142, 59],
    [137, 54],
    [140, 48],
    [131, 43],
    [127, 39],
    [126, 35],
    [125, 38],
    [121, 40],
    [122, 37],
    [120, 32],
    [122, 30],
    [118, 24],
    [110, 21],
    [108, 16],
    [109, 11],
    [105, 9],
    [100, 13],
    [101, 7],
    [103, 1.5],
    [98, 8],
    [98, 16],
    [94, 17],
    [91, 22],
    [87, 21],
    [80, 15],
    [78, 8],
    [73, 17],
    [72, 21],
    [67, 24],
    [61, 25],
    [57, 26],
    [52, 28],
    [49, 30],
    [48, 29],
    [50, 26],
    [56, 24],
    [59, 22],
    [55, 17],
    [44, 12.5],
    [43, 14],
    [39, 21],
    [35, 28],
    [34, 31],
    [36, 36],
    [30, 36],
    [27, 37],
    [26, 40],
    [24, 38],
    [22, 37],
    [21, 40],
    [19, 42],
    [13, 45],
    [12, 44],
    [16, 41],
    [18, 40],
    [16, 38],
    [15, 38],
    [12, 42],
    [9, 44],
    [3, 43],
    [0, 39],
    [-1, 37],
    [-5, 36],
  ],
  // Africa
  [
    [-17, 21],
    [-10, 30],
    [-6, 36],
    [10, 37],
    [11, 33],
    [32, 31],
    [34, 28],
    [43, 12],
    [51, 12],
    [40, -3],
    [40, -15],
    [35, -24],
    [32, -29],
    [20, -35],
    [17, -30],
    [12, -17],
    [13, -6],
    [9, 4],
    [-8, 4],
    [-15, 11],
  ],
  // Australia
  [
    [114, -22],
    [130, -12],
    [142, -11],
    [146, -19],
    [153, -27],
    [150, -37],
    [140, -38],
    [131, -31],
    [115, -34],
  ],
  // UK, Iceland, Japan, Madagascar, Borneo, Sumatra
  [
    [-5, 50],
    [1, 51],
    [2, 53],
    [-2, 57],
    [-5, 58],
    [-6, 56],
    [-3, 54],
    [-5, 52],
  ],
  [
    [-24, 64],
    [-14, 66],
    [-14, 64],
    [-22, 63],
  ],
  [
    [130, 31],
    [135, 34],
    [140, 36],
    [142, 40],
    [141, 45],
    [139, 41],
    [135, 36],
    [131, 34],
  ],
  [
    [44, -25],
    [50, -15],
    [49, -12],
    [44, -17],
  ],
  [
    [109, 1],
    [117, 7],
    [119, 1],
    [116, -4],
    [110, -3],
  ],
  [
    [95, 5],
    [104, -3],
    [106, -6],
    [98, 2],
  ],
];

const W = 1000;
const H = 460;
const project = ([lon, lat]: [number, number]) =>
  `${(((lon + 180) / 360) * W).toFixed(1)},${(((84 - lat) / 142) * H).toFixed(1)}`;

const LAND_POINTS = LAND.map((poly) => poly.map(project).join(" "));

function Avatar({
  person,
  className = "",
}: {
  person: Person;
  className?: string;
}) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full text-[10px] font-bold ${person.avatarClass ?? ""} ${className}`}
    >
      {person.image ? (
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="44px"
          className="object-cover"
        />
      ) : person.initials ? (
        <span className="text-xs sm:text-sm">{person.initials}</span>
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-[75%] w-[75%] translate-y-[15%] fill-white/60"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 24c0-5 3.6-9 8-9s8 4 8 9z" />
        </svg>
      )}
    </span>
  );
}

function Maps({ people = DEFAULT_PEOPLE }: MapsProps) {
  return (
    <section className="bg-white px-5 py-12 font-['Archivo','Inter',system-ui,sans-serif] sm:px-12 md:py-16 lg:px-[88px] lg:py-20">
      <div className="mx-auto max-w-[900px]">
        <header className="text-left md:text-center">
          <h2 className="m-0 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#101a8f] sm:text-4xl lg:text-5xl">
            From Nigeria to the world
          </h2>
          <p className="m-0 mt-3 text-[13px] text-[#5b6070] sm:text-sm">
            Mentors, mentees and ambassadors in 8 countries across 4 continents.
          </p>
        </header>

        {/* Map */}
        <div className="relative mt-8 aspect-[1000/460] w-full md:mt-12">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label="Dotted world map"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <pattern
                id="ngm-map-dots"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="1.8" fill="#c9cbf3" />
              </pattern>
              <clipPath id="ngm-map-land">
                {LAND_POINTS.map((points, i) => (
                  <polygon key={i} points={points} />
                ))}
              </clipPath>
            </defs>
            <rect
              width={W}
              height={H}
              fill="url(#ngm-map-dots)"
              clipPath="url(#ngm-map-land)"
            />
          </svg>

          {people.map((person) => {
            const labelLeft = person.side === "left";
            return (
              <div
                key={person.name}
                className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 ${
                  labelLeft ? "flex-row-reverse" : "flex-row"
                }`}
                style={{ left: `${person.left}%`, top: `${person.top}%` }}
              >
                {/* Mobile: small green dot */}
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#0b9a4a] md:hidden"
                />

                {/* Tablet / desktop: avatar */}
                <Avatar
                  person={person}
                  className="hidden size-10 md:grid lg:size-11"
                />

                <span
                  className={`hidden whitespace-nowrap rounded-xl bg-white px-2.5 py-1.5 shadow-[0_4px_16px_rgba(16,26,143,0.12)] md:block ${
                    labelLeft ? "text-right" : "text-left"
                  }`}
                >
                  <span className="block text-[11px] font-bold leading-tight text-[#1f2430] lg:text-xs">
                    {person.name}
                  </span>
                  <span className="block text-[9px] leading-tight text-[#5b6070] lg:text-[10px]">
                    {person.detail}
                  </span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <ul className="m-0 mt-8 grid list-none grid-cols-1 gap-4 p-0 md:hidden">
          {people.map((person) => (
            <li key={person.name} className="flex items-center gap-3">
              <Avatar person={person} className="size-10" />
              <span>
                <span className="block text-sm font-bold leading-tight text-[#1f2430]">
                  {person.name}
                </span>
                <span className="mt-0.5 block text-xs text-[#5b6070]">
                  {person.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Maps;
