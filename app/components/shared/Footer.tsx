import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Mentors", href: "/mentors" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Conference", href: "/conference" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Join NGM", href: "/join" },
      { label: "Partner with us", href: "/partners" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#10165f] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-8 px-4 py-9 sm:px-6 md:grid-cols-2 md:gap-12 md:px-16 md:py-16 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-10">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/ngm.jpg"
            alt="Nasir Giwa Mentorship logo"
            width={52}
            height={52}
            className="mb-5 h-[38px] w-[38px] rounded-3xl object-contain sm:h-[52px] sm:w-[52px]"
          />

          <h2 className="max-w-[360px] text-lg font-semibold leading-tight tracking-tight sm:text-xl md:text-2xl">
            Raising leaders, one conversation
            <br />
            at a time.
          </h2>
        </div>

        {/* Navigation links */}
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-[11px] font-semibold text-green-400">
              {group.title}
            </h3>

            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white transition hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Support */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="mb-3 text-[11px] font-semibold text-green-400">
            Support NGM
          </h3>

          <ul className="space-y-2.5 text-xs">
            <li>Lotus Bank</li>
            <li>1003411958</li>
            <li>Nasir Giwa Mentorship Initiative</li>
          </ul>
        </div>
      </div>

      {/* Social links and copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col-reverse justify-between gap-4 px-4 py-5 text-[11px] sm:px-6 md:flex-row md:items-center md:gap-5 md:px-16 md:text-xs">
          <p className="text-white/80">
            © 2026 Nasir Giwa Mentorship Platform ·
            <a
              href="https://ngmplatform.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-green-400"
            >
              ngmplatform.com
            </a>
          </p>

          <div className="flex items-center gap-5 font-semibold">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              Instagram
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-green-400"
            >
              X
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="hidden overflow-hidden px-2 pt-5 md:block">
        <p className="whitespace-nowrap text-[5vw] font-bold leading-[0.9] tracking-[-0.06em] text-[#151c91]">
          Nasir Giwa Mentorship
        </p>
      </div>
    </footer>
  );
}
