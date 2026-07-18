import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudy, getAllSlugs } from "@/content/case-studies/index";
import type { MediaSlot, ImgSlot, StoryRow } from "@/content/case-studies/types";
import Reveal from "@/components/Reveal";

// Static generation — only build slugs we have data for
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.pageTitle} — PETER BUCK // CCO`,
    description: study.description,
  };
}

// ── Shared media renderer ─────────────────────────────────────────────────────

function MediaBlock({ slot, className = "" }: { slot: MediaSlot; className?: string }) {
  if (slot.kind === "vimeo") {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://player.vimeo.com/video/${slot.id}`}
          title={slot.title ?? ""}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <Image
      src={slot.src}
      alt={slot.alt ?? ""}
      width={slot.w ?? 960}
      height={slot.h ?? 540}
      unoptimized={slot.gif}
      className={`w-full h-auto block ${className}`}
    />
  );
}

// ── Story row renderers ───────────────────────────────────────────────────────

function StoryRowEl({ row }: { row: StoryRow }) {
  switch (row.t) {
    case "h2":
      return (
        <Reveal variant="scale" className="mb-10 mt-14 first:mt-0">
          <h2
            className="text-cream font-heading font-medium leading-[1.14] whitespace-pre-line"
            style={{ fontSize: "var(--text-h2)" }}
          >
            {row.text}
          </h2>
        </Reveal>
      );

    case "body":
      return (
        <div className="mb-10 space-y-4">
          {row.paras.map((p, i) => (
            <Reveal key={i} variant="fade" delay={i * 0.07}>
              <p className="text-cream font-body text-[16px] leading-[1.6]">{p}</p>
            </Reveal>
          ))}
        </div>
      );

    case "slot":
      return (
        <Reveal variant="scale" className="mb-10">
          <MediaBlock slot={row.item} />
        </Reveal>
      );

    case "slots2": {
      const leftIsVimeo = row.left.kind === "vimeo";
      const rightIsVimeo = row.right.kind === "vimeo";

      // All image cells in slots2 are clipped to 16:9 at lg+ (1024px+) with
      // object-fit: cover, matching Squarespace FE matched-row-height behaviour.
      // At md (768px) images render at natural height — preserving the 768px match.
      // On single-column mobile, always natural h-auto (no sizer rendered).
      const renderSlot2Cell = (slot: MediaSlot, isVimeo: boolean, delay: number) => {
        if (isVimeo || slot.kind !== "img") {
          return (
            <Reveal variant="scale" delay={delay}>
              <MediaBlock slot={slot} />
            </Reveal>
          );
        }
        return (
          <Reveal variant="scale" delay={delay} className="lg:relative lg:overflow-hidden">
            {/* Sizer: enforces 16:9 cell height at lg+ to match Squarespace row height */}
            <div className="hidden lg:block w-full" style={{ paddingBottom: "56.25%" }} />
            <Image
              src={slot.src}
              alt={slot.alt ?? ""}
              width={slot.w ?? 960}
              height={slot.h ?? 540}
              unoptimized={slot.gif}
              className="w-full h-auto block lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover lg:object-center"
            />
          </Reveal>
        );
      };

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {renderSlot2Cell(row.left, leftIsVimeo, 0)}
          {renderSlot2Cell(row.right, rightIsVimeo, 0.1)}
        </div>
      );
    }

    case "slots3":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[row.a, row.b, row.c].map((slot, i) => (
            <Reveal key={i} variant="scale" delay={i * 0.08}>
              <MediaBlock slot={slot} />
            </Reveal>
          ))}
        </div>
      );

    case "split-caption": {
      const imgEl = (
        <Reveal variant="scale" className="w-full md:w-[40%] shrink-0">
          <MediaBlock slot={row.img as ImgSlot} />
        </Reveal>
      );
      const captionEl = (
        <Reveal variant="scale" delay={0.1} className="flex items-center">
          <h2
            className="text-cream font-heading font-medium leading-[1.14]"
            style={{ fontSize: "var(--text-h2)" }}
          >
            {row.heading}
          </h2>
        </Reveal>
      );
      return (
        <div className={`flex flex-col md:flex-row gap-8 mb-10 items-start ${row.imgLeft ? "" : "md:flex-row-reverse"}`}>
          {row.imgLeft ? (
            <>
              {imgEl}
              {captionEl}
            </>
          ) : (
            <>
              {captionEl}
              {imgEl}
            </>
          )}
        </div>
      );
    }

    default:
      return null;
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      {/* ── Hero — cream background ─────────────────────────────────── */}
      <div className="bg-cream">
        <div className="max-w-[1500px] mx-auto px-[4vw] pt-10 pb-16">
          {/* Title */}
          <Reveal variant="scale">
            <h2
              className="text-ink font-heading font-medium leading-[1.14] mb-10"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {study.title}
            </h2>
          </Reveal>

          {/* 3-column text block: Strategic Insight | The Result | The Human Truth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[5%] gap-y-8">
            {/* Strategic Insight */}
            <Reveal variant="fade">
              <div>
                <p className="font-body text-ink text-[13px] font-bold uppercase tracking-wider mb-3">
                  Strategic Insight
                </p>
                {study.strategicInsight.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-ink text-[14px] leading-[1.6] mb-3">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* The Result */}
            <Reveal variant="fade" delay={0.08}>
              <div>
                <p className="font-body text-ink text-[13px] font-bold uppercase tracking-wider mb-3">
                  The Result
                </p>
                {study.theResult.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-ink text-[14px] leading-[1.6] mb-3">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* The Human Truth + client quote */}
            <Reveal variant="fade" delay={0.16}>
              <div>
                <p className="font-body text-ink text-[13px] font-bold uppercase tracking-wider mb-3">
                  The Human Truth
                </p>
                <p className="font-body text-ink text-[14px] leading-[1.6] mb-6">
                  {study.theHumanTruth}
                </p>
                {study.clientQuote && (
                  <div>
                    <p className="font-body text-ink text-[14px] italic leading-[1.6] mb-1">
                      {study.clientQuote.text}
                    </p>
                    <p className="font-body text-ink text-[13px] leading-[1.5]">
                      {study.clientQuote.attribution}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Story — dark background ─────────────────────────────────── */}
      <div className="bg-ink">
        <div className="max-w-[1500px] mx-auto px-[4vw] pt-16 pb-24">
          {study.story.map((row, i) => (
            <StoryRowEl key={i} row={row} />
          ))}
        </div>

        {/* ── Pagination ─────────────────────────────────────────── */}
        <div className="border-t border-[rgba(255,255,255,0.15)] max-w-[1500px] mx-auto px-[4vw] py-12 flex justify-between items-center">
          {study.prev ? (
            <Link
              href={`/work-1/${study.prev.slug}`}
              className="group flex flex-col"
            >
              <span className="font-body text-[rgba(255,255,255,0.5)] text-[13px] uppercase tracking-wider mb-1">
                Previous
              </span>
              <Reveal variant="scale">
                <h2
                  className="text-cream font-heading font-medium leading-[1.14] transition-opacity duration-[450ms] group-hover:opacity-60"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {study.prev.label}
                </h2>
              </Reveal>
            </Link>
          ) : (
            <div />
          )}

          {study.next ? (
            <Link
              href={`/work-1/${study.next.slug}`}
              className="group flex flex-col items-end"
            >
              <span className="font-body text-[rgba(255,255,255,0.5)] text-[13px] uppercase tracking-wider mb-1">
                Next
              </span>
              <Reveal variant="scale">
                <h2
                  className="text-cream font-heading font-medium leading-[1.14] transition-opacity duration-[450ms] group-hover:opacity-60"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {study.next.label}
                </h2>
              </Reveal>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
