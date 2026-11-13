import React from "react";
import Image from "next/image";

type Trustee = {
  name: string;
  role: string;
  photo: string;
  bg: string;
  frame: string;
  wrapper: string;
};

const TRUSTEES: Trustee[] = [
  {
    name: "Dr Umar Oseni",
    role: "Member",
    photo: "/AboutPage/TrusteeOne.png",
    bg: "bg-[#c9cbf3]",
    frame: "aspect-[142/170] rounded-tr-[2rem] rounded-br-[3rem]",
    wrapper: "",
  },
  {
    name: "Engr. Nasir Giwa",
    role: "Founder, Grand Mentor & Chairman",
    photo: "/AboutPage/TrusteeTwo.png",
    bg: "bg-[#cdf5e0]",
    frame: "aspect-[170/210] rounded-t-full",
    wrapper:
      "order-first col-span-2 mx-auto !w-[68%] sm:order-none sm:col-span-1 sm:!w-full",
  },
  {
    name: "Mr Luqman Obileye",
    role: "Member",
    photo: "/AboutPage/TrusteeThree.png",
    bg: "bg-[#c9cbf3]",
    frame: "aspect-[142/170] rounded-tl-[2rem] rounded-bl-[3rem]",
    wrapper: "",
  },
];

function Trustees() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#10198f] sm:text-4xl lg:text-5xl">
          Guided by our Board of Trustees
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          They hold NGM to its values, and to the long view.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-14 sm:grid-cols-[1fr_1.2fr_1fr] sm:items-end sm:gap-4 lg:gap-8">
          {TRUSTEES.map((t) => (
            <li key={t.name} className={`w-full ${t.wrapper}`}>
              <div className={`overflow-hidden ${t.bg} ${t.frame}`}>
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-[#10198f] sm:text-base">
                {t.name}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                {t.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Trustees;
