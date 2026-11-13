"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "Conference" | "Competition" | "Awards" | "Sessions";

type Album = {
  title: string;
  category: Category;
  description: string;
  image: string;
};

const albums: Album[] = [
  {
    title: "Conference 5.0",
    category: "Conference",
    description:
      "The 10th-anniversary conference: the stage, the finals and the incredible.",
    image: "/Gallery/AlbumOne.png",
  },
  {
    title: "Conference 4.0",
    category: "Conference",
    description: "Honouring our moments from the Conference 4.0 stage.",
    image: "/Gallery/AlbumTwo.png",
  },
  {
    title: "Conference 2.0",
    category: "Conference",
    description: "Panels and Q&A from Solving Tomorrow's Problem Today.",
    image: "/Gallery/AlbumThree.png",
  },
  {
    title: "Academic Excellence Awards",
    category: "Awards",
    description: "Celebrating members who graduated top of their class.",
    image: "/Gallery/AlbumFour.png",
  },
  {
    title: "SME Pitch",
    category: "Competition",
    description: "Founders pitching, and pitching for funding and mentorship.",
    image: "/Gallery/AlbumFive.png",
  },
  {
    title: "Bootcamps and sessions",
    category: "Sessions",
    description:
      "Mentors working through ideas with founders and members in small rooms.",
    image: "/Gallery/AlbumSix.png",
  },
];

const filters = [
  { label: "All albums", value: "All" },
  { label: "Conferences", value: "Conference" },
  { label: "Competitions", value: "Competition" },
  { label: "Awards", value: "Awards" },
  { label: "Sessions", value: "Sessions" },
];

export default function AlbumSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAlbums =
    activeFilter === "All"
      ? albums
      : albums.filter((album) => album.category === activeFilter);

  return (
    <section id="albums" className="bg-blue-900 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-start">
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-4xl">
            Browse by album
          </h2>
          <p className="mt-3 text-sm text-white md:text-base">
            Every conference, competition and session, kept in one place.
          </p>
        </div>

        {/* Category filters */}
        <div
          className="-mx-5 mb-10 overflow-x-auto px-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
          role="group"
          aria-label="Filter albums by category"
        >
          <div className="flex w-max items-center gap-3 sm:w-auto sm:flex-wrap sm:justify-center">
            {filters.map((filter) => {
              const count =
                filter.value === "All"
                  ? albums.length
                  : albums.filter((album) => album.category === filter.value)
                      .length;

              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-600 text-blue"
                      : "border border-gray-200 bg-white text-blue-800 hover:border-[#151c91] hover:text-[#151c91]"
                  }`}
                >
                  {filter.label}
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Album cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAlbums.map((album) => (
            <article key={album.title}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px]">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="px-0 py-5 ">
                <span className="inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-[#151c91]">
                  {album.category === "Awards" ? "Award" : album.category}
                </span>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {album.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white">
                  {album.description}
                </p>

                <a
                  href={`mailto:hello@ngm.com?subject=${encodeURIComponent(
                    `Photos from ${album.title}`,
                  )}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-500 transition hover:gap-3"
                >
                  Open album
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
