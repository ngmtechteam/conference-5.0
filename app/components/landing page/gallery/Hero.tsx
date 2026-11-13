import Image from "next/image";

const heroPhotos = [
  "/Gallery/HeroOne.png",
  "/Gallery/HeroTwo.png",
  "/Gallery/HeroThree.png",
];

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-white px-5 py-10 sm:min-h-[320px]">
      <div className="w-full max-w-[650px] text-left sm:text-center">
        <h1 className="text-[2.4rem] font-bold leading-[1.1] tracking-tight text-[#151c91] sm:text-6xl lg:text-7xl">
          {/* Line 1 */}
          <span className="block whitespace-nowrap">
            Ten years{" "}
            <span className="relative inline-block h-[0.85em] w-[1.9em] overflow-hidden rounded-full align-middle">
              <Image
                src={heroPhotos[0]}
                alt="NGM anniversary memory"
                fill
                sizes="150px"
                className="object-cover"
              />
            </span>
          </span>

          {/* Line 2 */}
          <span className="block whitespace-nowrap">
            of moments{" "}
            <span className="relative inline-block h-[0.9em] w-[2.4em] align-middle">
              <Image
                src={heroPhotos[1]}
                alt="NGM community moments"
                fill
                sizes="200px"
                className="object-contain"
              />
            </span>
          </span>

          {/* Line 3*/}
          <span className="block whitespace-nowrap">
            worth keeping{" "}
            <span className="relative hidden h-[0.85em] w-[0.85em] overflow-hidden rounded-full align-middle sm:inline-block">
              <Image
                src={heroPhotos[2]}
                alt="NGM anniversary memory"
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
          </span>
        </h1>

        <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-[410px] sm:text-[11px]">
          Photos from ten years of NGM: the stages, the finals and the people.
          Pick an album and look back with us.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-5 sm:mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#albums"
            className="rounded-full bg-[#151c91] px-5 py-4 text-center text-sm font-semibold text-white transition hover:opacity-80 sm:py-3 sm:text-[11px]"
          >
            Browse the albums
          </a>
          <a
            href="#share"
            className="text-center text-sm font-semibold text-[#151c91] sm:text-[11px]"
          >
            Share your photos
          </a>
        </div>
      </div>
    </section>
  );
}
