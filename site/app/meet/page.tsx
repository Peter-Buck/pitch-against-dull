import type { Metadata } from "next";
import Image from "next/image";
import FitText from "@/components/FitText";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Peter Buck — CCO | Brand Strategy & Creative Leadership",
  description:
    "Peter Buck has spent 20+ years refusing to choose between craft and strategy. A CCO who leads from inside the work — integrating AI as a creative collaborator while keeping human thinking at the center. Read his philosophy.",
};

const PARAGRAPHS = [
  "Most creative leaders choose one or the other. They either stay close to the craft and lose sight of the business, or they climb into strategy and forget what great work actually feels like. I've spent more than 20 years refusing that choice.",
  "Hands in. Great creative leadership isn't a spectator sport. It lives in the thinking, the making, and the relentless attention to what's working and why. That's where trust gets built with teams, with clients, and with the work itself.",
  "Increasingly, it also means understanding AI not as a shortcut, but as a creative collaborator. Knowing when to use it, when to challenge it, and how to keep human thinking at the center.",
  "Head up. Creativity without context is decoration. Every brief exists inside a business problem, a cultural moment, and a competitive reality. Understanding that is the difference between work that's merely interesting and work that genuinely matters.",
  "The best brands I've worked with share two qualities that sound contradictory: consistency and surprise. A clear enough identity that audiences always know who's speaking. And enough creative courage to keep people leaning forward.",
  "Consistency builds trust. Surprise builds love. You need both.",
  "That balance — between making and leading, craft and strategy, instinct and intelligence is what I bring to every organization I work with.",
  "“Peter was the best creative and strategic thinker I ever had the pleasure to work with. And that means something — a career spanning over 35 years.” — Tim Riester, Founder, Riester",
  "More than two decades across Jaguar Land Rover, Red Bull, P&G, Diageo, Archer Aviation, and as Co-Founder & ECD of MeClub — a community-driven engagement platform built on the conviction that human connection was the thing brands were about to lose. Over 150 international industry awards. And a clear perspective on where creativity, culture, and human connection go next in a world increasingly shaped by automation.",
];

export default function MeetPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-[1500px] mx-auto px-[4vw] pt-10 pb-20">

        {/* Display headline */}
        <Reveal variant="scale">
          <FitText text="HANDS IN. HEAD UP." className="text-ink" />
        </Reveal>

        {/* Two-column grid — switches to side-by-side at md (768px) to match live site */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[5%] mt-10">

          {/* Right column — image + Resumé button
              Source order: image first so it appears at top on mobile (matching live site) */}
          <Reveal variant="scale" delay={0.1} className="order-first md:order-last relative mb-10 md:mb-0">
            <a
              href="https://www.peter-buck.com/s/CV_PeterBuck_May2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[10%] -left-[8%] z-10 inline-block bg-yellow px-6 py-[22px] font-body text-ink text-[16px] font-bold underline transition-opacity duration-[450ms] hover:opacity-70"
            >
              Resumé PDF →
            </a>
            <Image
              src="https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a/50f88739-1f3d-4f5b-a53e-84a41f8a05a0/PB.png"
              alt="Peter Buck"
              width={364}
              height={547}
              className="w-full h-auto"
              priority
            />
          </Reveal>

          {/* Left column — body copy
              order-last on mobile so image appears first */}
          <div className="order-last md:order-first space-y-6">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} variant="fade" delay={i * 0.05}>
                <p className="font-body text-ink text-[16px] leading-[1.5]">{p}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
