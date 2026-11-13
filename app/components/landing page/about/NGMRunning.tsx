import React from "react";
import Image from "next/image";

const ngmPeople = [
  "/AboutPage/FusedPair1.png",
  "/AboutPage/FusedPair2.png",
  "/AboutPage/FusedPair3.png",
  "/AboutPage/FusedPair4.png",
  "/AboutPage/Circle5.png",
  "/AboutPage/FusedPair6.png",
  "/AboutPage/Circle7.png",
  "/AboutPage/Circle8.png",
  "/AboutPage/Fused9.png",
  "/AboutPage/FusedPair10.png",
  "/AboutPage/FusedPair11.png",
  "/AboutPage/FusedPair12.png",
  "/AboutPage/FusedPair13.png",
  "/AboutPage/FusedPair14.png",
  "/AboutPage/FusedPair15.png",
  "/AboutPage/FusedPair16.png",
];

type Team = { title: string; members: string[] };

const TEAMS: Team[] = [
  {
    title: "Academic Excellence & Scholarships",
    members: ["Najimdeen Hamzah", "Ummulkhair Logun"],
  },
  {
    title: "Case Study & Research",
    members: ["AbdulRoheem Iposu", "Mustapha Odunsi"],
  },
  {
    title: "Digital Communications",
    members: ["Zainab Aderounmu", "Faidat Balogun"],
  },
  {
    title: "Engagement & Experience",
    members: ["Abdulraheem Sanni", "Amal Ajani"],
  },
  { title: "Financial Literacy & Tax", members: ["Mubarak Babslawal"] },
  {
    title: "Global Book & Knowledge Circle",
    members: ["Oladapo Simbiat", "Omotosho Malik A."],
  },
  { title: "Leadership, Politics & Governance", members: ["Abubakar Yakub"] },
  { title: "Legal Affairs", members: ["Kamoru Sodiq"] },
  {
    title: "Medical & Health",
    members: [
      "Al-Ameen Kalejaiye",
      "Dr Mustapha Muhammad Fatih",
      "Dr Rad Ahmad M.O.",
    ],
  },
  {
    title: "News & Editorial",
    members: ["Abdurahman Arogundade", "Adeyemi Shukroh"],
  },
  {
    title: "Counselling Unit",
    members: ["Salawu Lateefah", "Ridwanullah Idowu"],
  },
  {
    title: "Public Speaking & Creative Writing",
    members: ["Al-Ameen Abolare", "Hikmah Ogunnubi"],
  },
  {
    title: "Technology, Data & AI",
    members: ["Abdulrahman Yusuf", "Ridwanullah Giwa"],
  },
  { title: "Design & Branding", members: ["Awwal Adeoye", "Zubair Tayyib"] },
  {
    title: "Career Development",
    members: ["Abdurasheem Sadiq", "Alimat Shodipo"],
  },
  {
    title: "Impact Assessment",
    members: ["Fadlullah Owolabi", "Yusuf Olaniyi"],
  },
];

const joinNames = (names: string[]) =>
  names.length <= 1
    ? names.join("")
    : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

function NGMRunning() {
  return (
    <section className="w-full bg-[#10198f] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          The people who keep NGM running
        </h2>
        <p className="mt-3 max-w-xl text-sm text-white/75 sm:text-base">
          Meet the 30 members who lead our teams, from scholarships and research
          to design and AI.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:mt-12 lg:grid-cols-4">
          {TEAMS.map((team, ti) => {
            return (
              <li key={team.title} className="flex flex-col">
                {/* Fixed row aligned across teams */}
                <div className="flex h-[4.5rem] items-center">
                  <Image
                    src={ngmPeople[ti]}
                    alt={joinNames(team.members)}
                    width={130}
                    height={72}
                    className="h-[4.5rem] w-auto max-w-full object-contain object-left"
                  />
                </div>
                <h3 className="mt-4 max-w-[22ch] text-base font-bold leading-snug text-white">
                  {team.title}
                </h3>
                <p className="mt-1.5 max-w-[30ch] text-xs leading-relaxed text-white/70">
                  {joinNames(team.members)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default NGMRunning;
