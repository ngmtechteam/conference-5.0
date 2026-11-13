import Image from "next/image";
import React from "react";

type Person = {
  name: string;
  role: string;
  src: string;
  bg: string;
  offset: string;
};

const PEOPLE: Person[] = [
  {
    name: "Aisha Alimi",
    role: "Mentor, Deloitte",
    src: "/AboutPage/ChangeAisha.png",
    bg: "bg-[#c9cbf3]",
    offset: "lg:mt-0",
  },
  {
    name: "Najimdeen Hamzah",
    role: "Team lead, Academic Excellence",
    src: "/AboutPage/ChangeNajimdeen.png",
    bg: "bg-[#4cd964]",
    offset: "lg:mt-8",
  },
  {
    name: "Taiwo Kuye",
    role: "Mentor, KPMG",
    src: "/AboutPage/ChangeTaiwo.png",
    bg: "bg-[#e3fbe9]",
    offset: "lg:mt-2",
  },
  {
    name: "Zainab Aderounmu",
    role: "Team lead, Digital Communications",
    src: "/AboutPage/ChangeZainab.png",
    bg: "bg-white",
    offset: "lg:mt-10",
  },
  {
    name: "Moshood Olajide",
    role: "Mentor, Axxela",
    src: "/AboutPage/ChangeMoshood.png",
    bg: "bg-[#c9cbf3]",
    offset: "lg:mt-4",
  },
  {
    name: "Salawu Lateefah",
    role: "Team lead, Counselling Unit",
    src: "/AboutPage/ChangeLateefah.png",
    bg: "bg-[#4cd964]",
    offset: "lg:mt-9",
  },
];

function MentorChange() {
  return (
    <section className="w-full bg-[#10198f] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-[22ch] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          One conversation, one mentor or one opportunity can{" "}
          <em className="font-bold italic text-[#4cd964]">change</em> the
          direction of a life.
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-6 lg:items-start lg:gap-x-5">
          {PEOPLE.map((p) => (
            <li key={p.name} className={p.offset}>
              <div
                className={`aspect-[3/4] overflow-hidden rounded-[1.25rem] rounded-br-[2rem] ${p.bg}`}
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={180}
                  height={270}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-xs font-bold text-white sm:text-sm">
                {p.name}
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-white/75 sm:text-xs">
                {p.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MentorChange;
