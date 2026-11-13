"use client";

import React, { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

type QuestionsProps = {
  faqs?: Faq[];
};

const PLACEHOLDER =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl euismod nunc.";

const DEFAULT_FAQS: Faq[] = [
  {
    question: "Who can join NGM?",
    answer:
      "Undergraduates, recent graduates and early- to mid-career professionals who want guidance and are ready to do the work.",
  },
  { question: "Does it cost anything to join?", answer: PLACEHOLDER },
  { question: "How am I matched with a mentor?", answer: PLACEHOLDER },
  { question: "Do I need to live in Nigeria?", answer: PLACEHOLDER },
  { question: "Is NGM only about careers?", answer: PLACEHOLDER },
  { question: "What is the NGM Conference?", answer: PLACEHOLDER },
  { question: "Can I become a mentor?", answer: PLACEHOLDER },
];

function Questions({ faqs = DEFAULT_FAQS }: QuestionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 py-12 font-['Archivo','Inter',system-ui,sans-serif] sm:px-12 md:py-16 lg:px-[88px] lg:py-20">
      <div className="mx-auto max-w-[640px]">
        <header className="text-center">
          <h2 className="m-0 text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#101a8f] sm:text-4xl lg:text-5xl">
            Questions people ask before joining
          </h2>
          <p className="m-0 mt-3 text-[13px] text-[#5b6070]">
            Still unsure? Send us a message and a real person will reply.
          </p>
        </header>

        <ul className="m-0 mt-8 flex list-none flex-col gap-3 p-0 md:mt-10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <li key={faq.question} className="rounded-2xl bg-[#f4f6fb]">
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border-0 bg-transparent px-5 py-4 text-left text-[13px] font-bold text-[#101a8f] md:px-6"
                  >
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className={`grid size-6 shrink-0 place-items-center rounded-full transition-colors ${
                        open
                          ? "bg-[#101a8f] text-white"
                          : "bg-white text-[#101a8f]"
                      }`}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="size-3 fill-none stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        <path d="M2.5 6h7" />
                        <path
                          d="M6 2.5v7"
                          className={`origin-center transition-transform duration-300 ${
                            open ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[460px] px-5 pb-5 text-xs leading-relaxed text-[#101a8f] md:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Questions;
