import React from "react";

function Session() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl bg-[#0f1a8c] px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-20 lg:py-16">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Never miss a session.
            <br />
            Come learn with us.
          </h2>
          <p className="mt-4 max-w-md text-sm text-indigo-100 sm:mt-5 sm:text-base">
            Members hear about every webinar, circle and pitch day first.
          </p>
        </div>

        {/* Button */}
        <a
          href="#join"
          className="w-full shrink-0 rounded-full bg-[#7be07a] px-8 py-3 text-center text-sm font-semibold text-[#0f1a8c] transition hover:bg-[#6ad069] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1a8c] sm:w-auto lg:mr-6"
        >
          Join NGM
        </a>
      </div>
    </section>
  );
}

export default Session;
