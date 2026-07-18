"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "WORK", href: "/" },
  { label: "MEET", href: "/meet" },
  { label: "THINK", href: "/think" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream sticky top-0 z-50">
      <div className="max-w-[1500px] mx-auto px-[4vw] flex items-center justify-between h-[60px]">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-body text-ink text-[16px] font-normal leading-none tracking-normal"
        >
          PETER BUCK // CCO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Site navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-body text-ink text-[16px] font-normal leading-[24px] transition-opacity duration-[450ms] hover:opacity-50"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden font-body text-ink text-[22px] leading-none w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "+"}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {open && (
        <nav
          className="lg:hidden fixed inset-0 top-[60px] bg-cream z-40 flex flex-col items-start px-[6vw] pt-10 gap-8"
          aria-label="Mobile site navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-body text-ink text-[18px] font-normal"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
