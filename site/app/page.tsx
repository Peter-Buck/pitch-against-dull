import Image from "next/image";
import Link from "next/link";
import ValuesCounter from "@/components/ValuesCounter";
import FitText from "@/components/FitText";

/* ── Case study data ─────────────────────────────────────────────── */
const TRANSFORMATION = [
  {
    name: "RED BULL",
    desc: "A brand turned culture, turned gold standard in experiential marketing.",
    value: "Fame is invaluable",
    href: "/work-1/redbull",
  },
  {
    name: "EōS Fitness",
    desc: "From price war to willpower. With a 90% YouTube watch rate.",
    value: "Dull is expensive",
    href: "/work-1/eos-fitness",
  },
  {
    name: "RIESTER",
    desc: "AI-powered creativity. A deeply human agency in the age of automation.",
    value: "Truth triumphs, always",
    href: "/work-1/riester",
  },
  {
    name: "HONOR HEALTH",
    desc: "Turning healthcare ads into everyday wellness people can actually use.",
    value: "Feelings refine facts",
    href: "/work-1/honorhealth",
  },
];

const COMMUNICATION = [
  {
    name: "LAND ROVER",
    desc: "Storytelling as loyalty system. CRM built on brand DNA.",
    value: "Craft shows love",
    href: "/work-1/land-rover",
  },
  {
    name: "CHP BIKER SAFETY",
    desc: "AI-produced. Human-purposed. 71M+ impressions. Lives saved.",
    value: "Daring is caring",
    href: "/work-1/california-highway-patrol",
  },
  {
    name: "CLEAN ELECTIONS",
    desc: "Making democracy funny. Because serious wasn't working.",
    value: "Laughter is contagious",
    href: "/work-1/clean-elections",
  },
  {
    name: "RANGE ROVER",
    desc: "Two global launches. One standard: make it unmissable.",
    value: "Product is king",
    href: "/work-1/range-rover",
  },
];

const INNOVATION = [
  {
    name: "ARCHER AVIATION",
    desc: "Brand soul built before first flight.",
    value: "Simple isn't",
    href: "/work-1/archer-aviation",
  },
  {
    name: "IP DEVELOPMENT",
    desc: "From briefs to IPs. From campaigns to franchises.",
    value: "Invisible is enemy",
    href: "/ip-development",
  },
  {
    name: "ATOMIC WASTE",
    desc: "A fake government agency. Real nuclear mail.",
    value: "Risk creates rewards",
    href: "/work-1/atomic-waste",
  },
  {
    name: "MeCLUB",
    desc: "Co-Founded. IRL community platform. Human connection at scale.",
    value: "Wrong could be right",
    href: "/work-1/meclub",
  },
];

/* ── CaseStudy row ───────────────────────────────────────────────── */
function CaseStudy({
  name,
  desc,
  value,
  href,
}: {
  name: string;
  desc: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <hr className="border-t border-rule" />
      <div className="py-6">
        <h2
          className="text-cream font-heading font-medium leading-[1.11] tracking-[-0.94px] mb-2"
          style={{ fontSize: "var(--text-h2)" }}
        >
          {name}
        </h2>
        <p className="text-cream font-body text-[16px] leading-[1.5] mb-3">
          {desc}
        </p>
        <Link
          href={href}
          className="text-cream font-body text-[16px] leading-[1.5] underline transition-opacity duration-[450ms] hover:opacity-50"
        >
          {value}
        </Link>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO — black section ─────────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* GIF: covers the right portion, layered behind text */}
        <div
          className="absolute top-0 right-0 w-full md:w-[65%] h-full pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/26.gif"
            alt=""
            fill
            unoptimized
            className="object-contain object-right-top"
            priority
          />
        </div>

        {/* Text: full-width, in front of GIF */}
        <div
          className="relative max-w-[1500px] mx-auto px-[4vw] pt-12 pb-16 md:pt-16 md:pb-24"
          style={{ zIndex: 10 }}
        >
          <h4
            className="text-cream font-heading font-medium leading-[1.5] mb-6 md:mb-10"
            style={{ fontSize: "var(--text-h4)" }}
          >
            20+ years creative and strategic leadership · Heritage brands to
            startups · JLR · Red Bull · Archer Aviation · Co-Founder
          </h4>

          {/* Display text — fit-to-container-width (Squarespace sqsrte-large behaviour) */}
          <FitText text="HUMANIZING" className="text-cream" />
          <div className="mb-8 md:mb-12">
            <FitText text="AN AI-DRIVEN WORLD." className="text-cream" />
          </div>

          {/* Body copy — full-width on mobile, constrained at desktop so GIF shows */}
          <div className="md:max-w-[40%]">
            <h4
              className="text-cream font-heading font-medium leading-[1.5] mb-4"
              style={{ fontSize: "var(--text-h4)" }}
            >
              In a world where AI can make anything, the scarcest resource is
              humanity. I help organizations remain culturally relevant and
              emotionally meaningful by building brands that people believe
              in — and buy.
            </h4>
            <p className="text-cream font-body text-[16px] leading-[1.5] mb-2">
              Because brands built on big human ideas are four times more
              profitable*.
            </p>
            <p className="text-cream font-body text-[14px] leading-[1.5]">
              *2023 Research collab between WARC &amp; Kantar.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES COUNTER — black section ───────────────────────── */}
      <ValuesCounter />

      {/* ── CASE STUDIES — black section ─────────────────────────── */}
      <section className="bg-ink">
        <div className="max-w-[1500px] mx-auto px-[4vw] pt-16 pb-24">
          <h2
            className="text-cream font-heading font-medium leading-[1.11] tracking-[-0.94px] mb-12"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Twelve values. Three disciplines. Zero tolerance for dull.
          </h2>

          {/* TRANSFORMATION */}
          <h3
            className="text-cream font-heading font-medium leading-[1.14] mb-8"
            style={{ fontSize: "var(--text-h3)" }}
          >
            TRANSFORMATION · For brands in need of an edge · Creative and
            strategic leadership · Interim or permanent.
          </h3>
          {TRANSFORMATION.map((cs) => (
            <CaseStudy key={cs.href} {...cs} />
          ))}
          <hr className="border-t border-rule mb-16" />

          {/* COMMUNICATION */}
          <h3
            className="text-cream font-heading font-medium leading-[1.14] mb-8"
            style={{ fontSize: "var(--text-h3)" }}
          >
            COMMUNICATION · Creative thinker · Sharp instincts · AI-powered
            creation · Across all channels
          </h3>
          {COMMUNICATION.map((cs) => (
            <CaseStudy key={cs.href} {...cs} />
          ))}
          <hr className="border-t border-rule mb-16" />

          {/* INNOVATION */}
          <h3
            className="text-cream font-heading font-medium leading-[1.14] mb-8"
            style={{ fontSize: "var(--text-h3)" }}
          >
            INNOVATION · Ideas that outlive the campaign · IP Development ·
            Live creative{" "}
            <Link
              href="/pitch"
              className="text-cream underline transition-opacity duration-[450ms] hover:opacity-50"
            >
              KILL DULL workshops
            </Link>
          </h3>
          {INNOVATION.map((cs) => (
            <CaseStudy key={cs.href} {...cs} />
          ))}
          <hr className="border-t border-rule mt-0 mb-10" />

          {/* Conviction CTA */}
          <p className="text-cream font-body text-[16px] leading-[1.5]">
            The conviction behind everything{" "}
            <Link
              href="https://book-peter-buck.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream underline transition-opacity duration-[450ms] hover:opacity-50"
            >
              → Humanizing an AI-Driven World
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
