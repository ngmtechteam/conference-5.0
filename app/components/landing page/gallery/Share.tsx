import Image from "next/image";

const portraits = [
  "/Gallery/ShareOne.png",
  "/Gallery/ShareTwo.png",
  "/Gallery/ShareThree.png",
];

export default function ShareSection() {
  return (
    <section id="share" className="bg-white px-[13px] py-10 md:px-10 md:py-16">
      <div className="relative mx-auto flex min-h-[508px] max-w-[1200px] flex-col justify-between overflow-hidden rounded-[30px] bg-[#151c91] px-[19px] pt-[38px] md:min-h-[475px] md:flex-row md:items-start md:rounded-[40px] md:px-20 md:pt-20">
        {/* Text content */}
        <div className="relative z-10 w-full max-w-[500px] pb-10 md:pb-0">
          <h2 className="text-[32px] leading-[1.05] font-bold tracking-tight text-white md:text-5xl">
            Were you there?
            <br />
            Share your photos.
          </h2>

          <p className="mt-6 max-w-[450px] text-base leading-relaxed text-blue-100 md:text-base">
            Send us your pictures from any NGM event, and we&apos;ll add them to
            the album with your name.
          </p>

          <div className="mt-5 flex w-full flex-col items-stretch gap-[11px] md:mt-8 md:flex-row md:flex-wrap md:items-center md:gap-5">
            <a
              href="mailto:hello@ngm.com?subject=Sharing%20NGM%20photos"
              className="rounded-full bg-green-400 px-7 py-4 text-center text-sm font-semibold text-[#151c91] transition hover:bg-green-300"
            >
              Send your photos
            </a>

            <a
              href="#albums"
              className="rounded-full border border-white px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-[#151c91]"
            >
              Join NGM
            </a>
          </div>
        </div>

        {/* Portraits */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-0 md:absolute md:right-7 md:bottom-0 md:left-auto md:mt-0 md:gap-4">
          {portraits.map((person, index) => (
            <div
              key={person}
              className={`relative shrink-0 overflow-hidden rounded-t-full ${
                index === 0
                  ? "h-[112px] w-[82px] md:h-[185px] md:w-[137px]"
                  : index === 1
                    ? "h-[132px] w-[92px] md:h-[220px] md:w-[137px]"
                    : "h-[114px] w-[82px] md:h-[190px] md:w-[137px]"
              }`}
            >
              <Image
                src={person}
                alt={`NGM community member ${index + 1}`}
                fill
                sizes="(max-width: 768px) 92px, 137px"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
