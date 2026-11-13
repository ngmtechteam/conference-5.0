import Image from "next/image";
import React from "react";

type Stat = {
  name: string;
  photo: string;
  value: string;
  label: string;
  barHeight: string;
  mobileWidth: string;
  highlight?: boolean;
};

const STATS: Stat[] = [
  {
    name: "Alimat Shodipo",
    photo: "/AboutPage/LeadAlimat.png",
    value: "70%",
    label: "of mid-career members moved into higher positions",
    barHeight: "lg:h-[10.5rem]",
    mobileWidth: "w-[73%]",
  },
  {
    name: "AbdulRoheem Iposu",
    photo: "/AboutPage/LeadIposu.png",
    value: "80%",
    label: "of active student members secured scholarships or internships",
    barHeight: "lg:h-[12rem]",
    mobileWidth: "w-[79%]",
  },
  {
    name: "Salawu Lateefah",
    photo: "/AboutPage/LeadLateefah.png",
    value: "85%",
    label: "of early-career members moved up in their careers",
    barHeight: "lg:h-[13.5rem]",
    mobileWidth: "w-[85%]",
  },
  {
    name: "Abdulrahman Yusuf",
    photo: "/AboutPage/LeadAbdul.png",
    value: "3,000+",
    label: "mentees across Nigeria and the diaspora",
    barHeight: "lg:h-[15rem]",
    mobileWidth: "w-[91%]",
  },
  {
    name: "Mustapha Odunsi",
    photo: "/AboutPage/LeadMustapha.png",
    value: "5,000+",
    label: "young people reached through NGM",
    barHeight: "lg:h-[16.5rem]",
    mobileWidth: "w-[97%]",
    highlight: true,
  },
];

function PeopleGraph() {
  return (
    <section className="w-full overflow-hidden bg-[#e3fdee] pt-12 sm:pt-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-[#10198f] sm:text-5xl">
            Ten years
          </h2>
          <p className="max-w-[26ch] text-sm leading-relaxed text-[#10198f] sm:pt-2">
            A decade of mentoring, measured in the people it moved forward.
          </p>
        </div>
      </div>

      <div
        className="mx-auto mt-10 max-w-5xl px-5 pb-12 sm:px-8 lg:overflow-visible lg:px-14 lg:pb-0"
        role="region"
        aria-label="NGM impact over ten years"
      >
        <ul className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:gap-0">
          {STATS.map((s) => (
            <li
              key={s.name}
              className={`relative flex flex-row ${s.mobileWidth} lg:w-auto lg:flex-1 lg:flex-col lg:justify-end`}
            >
              {/* Photo + name */}
              <div className="absolute bottom-0 right-3 z-10 lg:relative lg:bottom-auto lg:right-auto lg:-mb-3 lg:px-3">
                <Image
                  src={s.photo}
                  alt={s.name}
                  width={300}
                  height={300}
                  className="mx-auto h-[7.5rem] rounded-t-2xl w-auto object-contain object-bottom lg:h-40"
                />
                <span className="absolute bottom-0 right-0 translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#10198f] shadow-sm sm:text-xs lg:left-4 lg:right-auto">
                  {s.name}
                </span>
              </div>

              {/* Card */}
              <div
                className={`flex min-h-[7.5rem] w-full flex-col justify-center rounded-br-xl rounded-tr-[2.5rem] bg-[#10198f] py-5 pl-5 pr-[46%] lg:min-h-0 lg:justify-end lg:rounded-br-none lg:rounded-t-[2rem] lg:px-5 lg:pb-6 lg:pt-8 ${s.barHeight}`}
              >
                <p
                  className={`text-4xl font-bold tracking-tight sm:text-[2.6rem] ${
                    s.highlight ? "text-[#4cd964]" : "text-white"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-white/85">
                  {s.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PeopleGraph;
