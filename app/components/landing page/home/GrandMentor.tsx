import Image from "next/image";
import React from "react";

const grandMentorImage = "/HomePage/GrandMentor.png";

type GrandMentorProps = {
  image?: string;
  name?: string;
  role?: string;
};

function GrandMentor({
  image = grandMentorImage,
  name = "Engr. Nasir Giwa",
  role = "Founder & Grand Mentor",
}: GrandMentorProps) {
  return (
    <section className="bg-[#f4f6fb] px-5 py-10 font-['Archivo','Inter',system-ui,sans-serif] sm:px-12 md:py-20 lg:px-[88px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center justify-items-center gap-8 text-center md:grid-cols-[5fr_7fr] md:justify-items-start md:gap-12 md:text-left lg:gap-[72px]">
        <div className="relative grid aspect-[4/5] w-full max-w-[280px] place-items-end overflow-hidden rounded-t-full bg-[#3a3030] md:max-w-[400px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 280px, 400px"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <h2 className="m-0 mb-5 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#101a8f] sm:text-4xl md:mb-7 lg:text-5xl">
            A note from
            <br />
            our Grand Mentor
          </h2>

          <blockquote className="m-0 mb-4 max-w-[560px] text-lg font-medium leading-snug tracking-[-0.01em] text-[#1f2430] md:mb-5 md:text-xl lg:text-2xl">
            &ldquo;When young people are given the right guidance, opportunities
            and encouragement, they can achieve extraordinary things.&rdquo;
          </blockquote>

          <p className="m-0 mb-8 max-w-[440px] text-[13px] leading-relaxed text-[#101a8f] md:mb-11">
            For nearly three decades, {name} has mentored young people who had
            the talent but not the map. NGM is how that work grew beyond one
            man.
          </p>

          <div className="flex flex-col items-start gap-1 text-[#101a8f]">
            <strong className="text-[13px] font-extrabold">{name}</strong>
            <span className="text-[11px]">{role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrandMentor;
