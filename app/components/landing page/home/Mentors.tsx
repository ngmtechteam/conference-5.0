import Image from "next/image";
import React from "react";

const mentorsImages = [
  "/HomePage/MeetMentorOne.png",
  "/HomePage/MeetMentorTwo.png",
  "/HomePage/MeetMentorThree.png",
  "/HomePage/MeetMentorFour.png",
  "/HomePage/MeetMentorFive.png",
];

const mentorDetails = [
  { name: "Aisha Alimi", company: "Deloitte" },
  { name: "Yinka Ojikutu, CFA", company: "Google" },
  { name: "", company: "" },
  { name: "", company: "" },
  { name: "", company: "" },
];

type MentorsProps = {
  mentors?: string[];
  onSeeAll?: () => void;
};

function Mentors({ mentors = mentorsImages, onSeeAll }: MentorsProps) {
  return (
    <section className="overflow-hidden bg-[#101a8f] py-12 font-['Archivo','Inter',system-ui,sans-serif] text-white md:py-16 lg:py-20">
      <div className="flex flex-col items-start gap-6 px-5 sm:px-12 md:flex-row md:items-center md:justify-between lg:px-[88px]">
        <div>
          <h2 className="m-0 text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[52px]">
            Meet the mentors
            <br />
            who walk with you
          </h2>

          <p className="m-0 mt-5 max-w-[420px] text-[13px] leading-relaxed text-white/80 sm:text-sm">
            Senior leaders from KPMG, Google, ExxonMobil, Deloitte and more,
            giving their time to the next generation.
          </p>
        </div>

        {/* Tablet / desktop button */}
        <button
          type="button"
          onClick={onSeeAll}
          className="hidden cursor-pointer rounded-full border border-white/80 bg-transparent px-7 py-3 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#101a8f] md:block"
        >
          See all mentors
        </button>
      </div>

      <ul className="m-0 mt-10 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto p-0 pl-5 pr-5 [scrollbar-width:none] sm:gap-4 sm:pl-12 md:mt-14 lg:pl-[88px] [&::-webkit-scrollbar]:hidden">
        {mentors.map((image, index) => {
          const detail = mentorDetails[index];
          return (
            <li
              key={image}
              className="relative aspect-[7/10] w-[42vw] shrink-0 snap-start overflow-hidden rounded-[20px] rounded-tr-[64px] bg-[#1c28ab] sm:w-[30vw] md:w-[22vw] lg:w-[17.5vw] lg:max-w-[240px]"
            >
              <Image
                src={image}
                alt={detail?.name || `Mentor ${index + 1}`}
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 240px"
                className="object-cover object-top"
              />

              {/* Mobile name overlay */}
              {detail?.name && (
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(16,26,143,0.85),transparent)] p-3 pt-10 md:hidden">
                  <p className="m-0 text-sm font-bold leading-tight">
                    {detail.name}
                  </p>
                  <p className="m-0 mt-0.5 text-xs text-white/80">
                    {detail.company}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile button */}
      <div className="mt-6 px-5 sm:px-12 md:hidden">
        <button
          type="button"
          onClick={onSeeAll}
          className="w-full cursor-pointer rounded-full border border-white/80 bg-transparent py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#101a8f]"
        >
          See all mentors
        </button>
      </div>
    </section>
  );
}

export default Mentors;
