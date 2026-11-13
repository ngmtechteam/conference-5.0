import Image from "next/image";
import React from "react";

function Mission() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#10198f] sm:text-4xl lg:text-5xl">
          What we&rsquo;re here to do
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center md:mt-14 md:grid-cols-[1fr_auto_1fr]">
          {/* Mission */}
          <article className="rounded-r-[3rem] rounded-t-none bg-[#eeeefb] px-7 py-9 md:rounded-l-none md:rounded-r-[3rem] md:px-10 md:py-12">
            <h3 className="text-base font-bold text-[#10198f] sm:text-lg">
              Mission
            </h3>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-[#10198f] sm:text-base">
              We guide students and young professionals in life, career and
              spirituality, one conversation at a time.
            </p>
          </article>

          {/* Badge */}
          <div className="flex justify-center py-5 md:px-5 md:py-0">
            <div className="rounded-full bg-[#d3f5e0] p-3 sm:p-4">
              <Image
                src="/AboutPage/AboutLogo.png"
                alt="NGM logo"
                width={80}
                height={80}
                className="h-16 w-16 rounded-full bg-white object-contain sm:h-20 sm:w-20"
              />
            </div>
          </div>

          {/* Vision */}
          <article className="rounded-b-none rounded-l-[3rem] bg-[#10198f] px-7 py-9 md:rounded-l-[3rem] md:rounded-r-none md:px-10 md:py-12">
            <h3 className="text-base font-bold text-[#4cd964] sm:text-lg">
              Vision
            </h3>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white sm:text-base">
              A leading African mentorship platform that shows what&rsquo;s
              possible when we invest in people.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mission;
