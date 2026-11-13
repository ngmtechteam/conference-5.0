import React from "react";
import Image from "next/image";
type Partner = { name: string; logo: string };

const PARTNERS: Partner[] = [
  { name: "Afropreneur (check)", logo: "/AboutPage/partners/afro.png" },
  { name: "Lotus", logo: "/AboutPage/partners/lotus.png" },
  { name: "Verraki", logo: "/AboutPage/partners/verraki.png" },
  { name: "Nestlé", logo: "/AboutPage/partners/nestle.png" },
  {
    name: "The Alternative Bank",
    logo: "/AboutPage/partners/bank.png",
  },
  { name: "Zedcrest Wealth", logo: "/AboutPage/partners/zedcrest.png" },
  { name: "SunFi", logo: "/AboutPage/partners/sunfi.png" },
  { name: "Rite", logo: "/AboutPage/partners/rite.png" },
  { name: "Rashak", logo: "/AboutPage/partners/rashak.png" },
  { name: "Hilal", logo: "/AboutPage/partners/hilal.png" },
  { name: "SunTrust Bank", logo: "/AboutPage/partners/suntrust.png" },
  { name: "Adaptive", logo: "/AboutPage/partners/adaptive.png" },
  { name: "Kaid Charity", logo: "/AboutPage/partners/kaid.png" },
  { name: "Dharmattan", logo: "/AboutPage/partners/dharmattan.png" },
  { name: "ENGY", logo: "/AboutPage/partners/engy.png" },
  { name: "Iwelabi", logo: "/AboutPage/partners/iwelabi.png" },
  { name: "Pearls", logo: "/AboutPage/partners/pearls.png" },
  { name: "Roperb", logo: "/AboutPage/partners/roperb.png" },
];

function Partners() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="max-w-[18ch] text-3xl font-bold leading-tight tracking-tight text-[#10198f] sm:max-w-none sm:text-4xl lg:text-5xl">
              The partners who walk with us
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Banks, foundations and companies who invest in our young people.
            </p>
          </div>
          <a
            href="/partner"
            className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#10198f] px-5 py-2.5 text-sm font-semibold text-[#10198f] transition hover:bg-[#10198f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10198f]"
          >
            Partner with us
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:mt-10 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="flex aspect-[1.45/1] items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(16,25,143,0.04)]"
            >
              <Image
                width={100}
                height={100}
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
