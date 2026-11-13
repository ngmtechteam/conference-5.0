import React from "react";

type Value = {
  title: string;
  body: string;
  shape: "arch" | "inverted";
  card: string;
  text: string;
};

const VALUES: Value[] = [
  {
    title: "Integrity",
    body: "We keep our word, in public and in private.",
    shape: "arch",
    card: "bg-[#10198f]",
    text: "text-white",
  },
  {
    title: "Excellence",
    body: "Our best work, always. Two mentees graduated with a perfect 5.0 CGPA.",
    shape: "inverted",
    card: "bg-[#cdf5e0]",
    text: "text-[#10198f]",
  },
  {
    title: "Leadership",
    body: "We raise leaders who lift others as they climb.",
    shape: "arch",
    card: "bg-[#0b7a38]",
    text: "text-white",
  },
  {
    title: "Service",
    body: "We give our time so someone else can grow.",
    shape: "inverted",
    card: "bg-[#eeeefb]",
    text: "text-[#10198f]",
  },
];

function Values() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#10198f] sm:text-4xl lg:text-5xl">
          Four values, unchanged since day one
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
          Integrity, excellence, leadership and service have guided NGM from its
          first conversation.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {VALUES.map((v) => {
            const isArch = v.shape === "arch";
            return (
              <li
                key={v.title}
                className={[
                  "flex flex-col sm:aspect-[150/230]",
                  isArch
                    ? "justify-end rounded-t-[3rem] px-6 pb-6 pt-14 sm:rounded-t-full sm:p-5 lg:p-6"
                    : "justify-start rounded-b-[3rem] px-6 pb-14 pt-6 sm:rounded-b-full sm:p-5 lg:p-6",
                  v.card,
                  v.text,
                ].join(" ")}
              >
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                  {v.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Values;
