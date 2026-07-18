import type { Metadata } from "next";
import Link from "next/link";
import FitText from "@/components/FitText";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Peter Buck — CCO | Brand Strategy & Creative Leadership",
  description:
    "Thinking, writing and tools from Peter Buck — CCO. Humanizing an AI-Driven World, The Deeply Human Property, and more. All free.",
  alternates: { canonical: "https://www.peter-buck.com/think" },
  openGraph: {
    title: "Peter Buck — CCO | Brand Strategy & Creative Leadership",
    description:
      "Thinking, writing and tools from Peter Buck — CCO. Humanizing an AI-Driven World, The Deeply Human Property, and more. All free.",
    url: "https://www.peter-buck.com/think",
    type: "website",
  },
  twitter: {
    title: "Peter Buck — CCO | Brand Strategy & Creative Leadership",
    description:
      "Thinking, writing and tools from Peter Buck — CCO. Humanizing an AI-Driven World, The Deeply Human Property, and more. All free.",
  },
};

const RESOURCES = [
  {
    display: "THINK FIRST.",
    title: "Humanizing an AI-Driven World.",
    subtitle: "Behind the work. Free. →",
    href: "https://book-peter-buck.vercel.app/",
    external: true,
  },
  {
    display: "BUILT TO LAST.",
    title: "The Deeply Human Property.",
    subtitle: "Behind the IPs. Free. →",
    href: "https://property-peter-buck.vercel.app/",
    external: true,
  },
  {
    display: "NO OFFICE MUG.",
    title: "The 12 Principles.",
    subtitle: "For your wall or above your bed. Free →",
    href: "https://www.peter-buck.com/s/12Principles_Poster.png",
    external: true,
  },
  {
    display: "OBNOXIOUS OPINIONS.",
    title: "AI, brand and why dull is killing your margins.",
    subtitle: "Growing weekly. Free →",
    href: "https://buckpeter.substack.com/",
    external: true,
  },
];

export default function ThinkPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-[1500px] mx-auto px-[4vw] pt-10 pb-20">
        {RESOURCES.map((r) => (
          <div key={r.display}>
            {/* Row: display text left (~62%), yellow card right (~33%) — side-by-side at md (768px) */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-8 md:py-10">
              {/* Left — FitText display */}
              <Reveal variant="fade" className="md:w-[62%] md:pr-[5%]">
                <FitText text={r.display} className="text-ink" />
              </Reveal>

              {/* Right — yellow resource card */}
              <Reveal variant="fade" delay={0.1} className="md:w-[33%] md:ml-auto">
                <Link
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="block bg-yellow px-8 py-8 text-ink transition-opacity duration-[450ms] hover:opacity-80"
                >
                  <span className="block font-body text-[16px] font-bold leading-[1.5] underline">
                    {r.title}
                  </span>
                  <span className="block font-body text-[16px] italic leading-[1.5] underline">
                    {r.subtitle}
                  </span>
                </Link>
              </Reveal>
            </div>

            {/* Divider — after every row */}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
