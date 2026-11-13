import React from "react";

type Stat = {
  value: string;
  label: string;
  cardClass: string;
  mobileWidth: string;
  valueClass?: string;
};

const STATS: Stat[] = [
  {
    value: "30+",
    label: "senior mentors leading in their fields",
    cardClass: "bg-[#cdf4df] text-[#101a8f] lg:min-h-[135px]",
    mobileWidth: "w-[62%]",
  },
  {
    value: "80%",
    label: "of active student members secured scholarships or internships",
    cardClass: "bg-[#7bdc78] text-[#101a8f] lg:min-h-[200px]",
    mobileWidth: "w-[73%]",
  },
  {
    value: "85%",
    label: "of early-career members moved up in their careers",
    cardClass: "bg-[#0b7a3b] text-white lg:min-h-[245px]",
    mobileWidth: "w-[85%]",
  },
  {
    value: "5,000+",
    label:
      "young people reached through mentorship, conferences and competitions",
    cardClass: "bg-[#101a8f] text-white lg:min-h-[290px]",
    mobileWidth: "w-[96%]",
    valueClass: "text-[#7bdc78]",
  },
];

function Growth() {
  return (
    <section className="overflow-hidden bg-white px-5 pb-10 pt-10 font-['Archivo','Inter',system-ui,sans-serif] sm:px-12 md:pt-16 lg:px-[88px] lg:pb-0 lg:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:mb-14 lg:mb-[72px]">
          <h2 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#101a8f] sm:text-5xl lg:text-[52px]">
            Ten years of <br className="hidden sm:block" />
            people growing
          </h2>
          <p className="m-0 max-w-none text-[13px] leading-normal text-[#5b6070] sm:mt-2 sm:max-w-[220px]">
            What one conversation at a time has added up to since 2016.
          </p>
        </header>

        <ul className="m-0 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:items-end lg:gap-0">
          {STATS.map((stat) => (
            <li
              key={stat.value}
              className={`flex flex-col gap-2.5 rounded-l-lg rounded-r-[40px] p-5 sm:w-auto sm:rounded-[32px] sm:p-6 lg:rounded-b-none lg:rounded-t-[48px] lg:p-8 ${stat.mobileWidth} ${stat.cardClass}`}
            >
              <span
                className={`text-[44px] font-extrabold leading-none tracking-[-0.03em] lg:text-5xl xl:text-[56px] ${
                  stat.valueClass ?? ""
                }`}
              >
                {stat.value}
              </span>
              <span className="text-[13px] leading-snug lg:max-w-[190px] lg:text-[11px]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Growth;
