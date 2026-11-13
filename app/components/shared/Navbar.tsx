"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/app/lib/cn";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/mentors", label: "Mentors" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  // { href: "/conference", label: "Conference" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative top-0 z-50 bg-white  backdrop-blur">
      <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-extrabold text-ink"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/ngm.jpg"
            alt="NGM Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium text-black transition hover:text-navy",
                pathname === link.href && "font-bold text-green-400",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center justify-end gap-2">
          <Link
            href="#contact"
            className="rounded-2xl bg-green-400 px-4 py-3 text-xs text-blue-900 hover:bg-green-300"
          >
            Join NGM
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center justify-center rounded-2xl bg-blue-900 px-4 py-3 text-xs text-white hover:bg-navy/5 md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex h-dvh flex-col bg-[#141f91] px-5 py-3 md:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <Image
              src="/ngm.jpg"
              alt="NGM Logo"
              width={30}
              height={30}
              className="rounded-full"
            />

            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white px-5 py-2 text-xs text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Navigation links */}
          <nav aria-label="Mobile navigation" className="mt-7">
            <ul className="m-0 flex list-none flex-col p-0">
              {links.map((link) => (
                <li key={link.label} className="border-b border-white/10">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 text-xl font-bold text-white transition hover:text-green-400",
                      pathname === link.href && "text-green-400",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom CTAs and social links */}
          <div className="mt-auto pb-1">
            <div className="flex flex-col gap-2">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-green-400 py-3 text-center text-xs font-medium text-blue-900 hover:bg-green-300"
              >
                Join NGM
              </Link>

              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white py-3 text-center text-xs font-medium text-white hover:bg-white/10"
              >
                Become a mentor
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-5 text-[10px] text-white">
              <a href="#" className="hover:text-green-400">
                Instagram
              </a>
              <a href="#" className="hover:text-green-400">
                X
              </a>
              <a href="#" className="hover:text-green-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
