import Image from "next/image";
import React from "react";

function NGMSpeakers() {
  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[#10198f] sm:text-3xl lg:text-4xl">
          In the Grand Mentor’s words
        </h2>

        <blockquote className="mt-8 max-w-[26ch] text-2xl font-medium leading-[1.25] tracking-tight text-[#10198f] sm:mt-10 sm:text-3xl lg:text-4xl">
          “The stage may belong to the speakers today, but the story of NGM was
          built by{" "}
          <em className="font-semibold italic text-[#0b7a38]">many hands.”</em>
        </blockquote>

        {/* NGM Community Faces */}
        <div className="mt-8 sm:mt-10">
          <Image
            src="/AboutPage/NGMFaces.png"
            alt="NGM community members"
            width={800}
            height={400}
            priority={false}
            className="h-auto w-64 object-contain sm:w-80 md:w-96"
          />
        </div>

        <p className="mt-4 max-w-sm text-xs text-slate-500 sm:text-sm">
          Mentors, team leads, volunteers and members: every one of them part of
          the story.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-[#10198f]">Engr. Nasir Giwa</p>
            <p className="text-xs text-[#10198f]">Founder & Grand Mentor</p>
          </div>

          <a
            href="/letter"
            className="rounded text-sm font-semibold text-[#10198f] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
          >
            Read his full letter
          </a>
        </div>
      </div>
    </section>
  );
}

export default NGMSpeakers;
