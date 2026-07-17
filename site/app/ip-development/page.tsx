import type { Metadata } from "next";
import Image from "next/image";
import FitText from "@/components/FitText";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Peter Buck — CCO | Brand Strategy & Creative Leadership",
  description:
    "Peter Buck has developed original television formats including a Bonneville Speed Record build-and-race show, a greatest albums documentary series with integrated e-commerce, and a stand-up comedy competition format.",
};

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

export default function IpDevelopmentPage() {
  return (
    <div className="bg-ink">
      <div className="max-w-[1500px] mx-auto px-[4vw] pt-10 pb-24">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <Reveal variant="scale">
          <div className="relative">
            {/* TV gif — absolutely positioned right ~62% from content left, overlapping H1 */}
            <div
              className="absolute pointer-events-none select-none"
              style={{ left: "62%", top: 0, width: "25%", zIndex: 10 }}
            >
              <Image
                src={`${CDN}/e723dcb5-ae28-43b8-a4c7-693698dc5db6/tv1.gif`}
                alt=""
                width={114}
                height={80}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <FitText text="ENTERTAIN ME." className="text-cream" />
          </div>
        </Reveal>

        {/* Sub-headline */}
        <Reveal variant="fade" delay={0.1}>
          <h2
            className="text-cream font-heading font-medium leading-[1.14] mt-4 mb-16"
            style={{ fontSize: "var(--text-h2)" }}
          >
            IP development &amp; branded entertainment.{" "}
            <br className="hidden lg:block" />
            From briefs to IP.{" "}
            <br className="hidden lg:block" />
            From campaigns to franchises.
          </h2>
        </Reveal>

        {/* ── Section 1: A RECORD BREAKING TV SHOW ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_66%] gap-x-[4%] mb-24">
          {/* Left: heading + body */}
          <Reveal variant="scale">
            <h2
              className="text-cream font-heading font-medium leading-[1.14] mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              A RECORD BREAKING TV SHOW.
            </h2>
            <p className="text-cream font-body text-[16px] leading-[1.5]">
              In each episode of this one hour, hosted competition, build &amp;
              race series, two teams are brought together from different parts of
              the world to compete in the same category. Their challenge: to
              build an incredible and super-fast vehicle on a tight budget within
              a crunched time period then set a new or break an existing
              Bonneville Speed Record. The winning car will be immortalized as
              part of the Hot Wheels Speed Machines toy car series.
            </p>
          </Reveal>

          {/* Right: HW.png hero image */}
          <Reveal variant="scale" delay={0.1}>
            <Image
              src={`${CDN}/0f0edfed-6d64-49ce-9084-9f78b4390e89/HW.png`}
              alt=""
              width={390}
              height={213}
              className="w-full h-auto"
            />
          </Reveal>
        </div>

        {/* car.gif — full-width below section 1 */}
        <Reveal variant="fade" className="mb-24">
          <Image
            src={`${CDN}/fb86c601-488f-427d-9084-0a4dff2c37bd/car.gif`}
            alt=""
            width={388}
            height={210}
            unoptimized
            className="w-full h-auto"
          />
        </Reveal>

        {/* ── Section 2: A TV SHOW LIKE AN ORGASM FOR YOUR EARS ────────── */}
        <Reveal variant="scale" className="grid grid-cols-1 lg:grid-cols-[66%_30%] gap-x-[4%] mb-24">
          {/* Left: images + Vimeo */}
          <div className="space-y-8">
            <Image
              src={`${CDN}/5eda8125-ec20-423a-926e-5c8b557cf0fb/TheRecord.png`}
              alt=""
              width={390}
              height={214}
              className="w-full h-auto"
            />
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/384442658"
                title="IP Development — greatest albums documentary"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: gif + heading + body */}
          <div>
            <Image
              src={`${CDN}/1bcc3714-f847-4f4c-a073-79cf0b79e641/music.gif`}
              alt=""
              width={237}
              height={158}
              unoptimized
              className="w-full h-auto mb-6"
            />
            <h2
              className="text-cream font-heading font-medium leading-[1.14] mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              A TV SHOW LIKE AN ORGASM FOR YOUR EARS.
            </h2>
            <p className="text-cream font-body text-[16px] leading-[1.5] mb-4">
              A six-part hour-long hosted documentary series that explores the
              greatest albums and songs of all time, told through the lens of
              today&apos;s top musicians. This investigative series takes the
              audience on a personal journey into the greatest albums.
            </p>
            <p className="text-cream font-body text-[16px] leading-[1.5]">
              The result is music you&apos;ve never heard, although you&apos;ve
              heard it a thousand times. As we create new music, we allow the
              audience to buy the songs directly through an integrated e-commerce
              platform. Combining art and commerce to a profitable business.
            </p>
          </div>
        </Reveal>

        {/* ── Section 3: A COMEDY SHOW ─────────────────────────────────── */}
        <Reveal variant="scale" className="grid grid-cols-1 lg:grid-cols-[30%_66%] gap-x-[4%]">
          {/* Left: heading + body + laughter.gif */}
          <div>
            <h2
              className="text-cream font-heading font-medium leading-[1.14] mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              A COMEDY SHOW THAT&apos;LL MAKE YOU CRY WITH LAUGHTER.
            </h2>
            <p className="text-cream font-body text-[16px] leading-[1.5] mb-4">
              Punchline is a stand alone comedy competition. Two teams of
              up-and-coming comedians hit the &apos;ring&apos; in one-on-one
              battles to prove their comedic chops and make us all laugh. A
              recurring celebrity comedian will serve as the host and referee.
              The two teams of two will be comprised of up-and-coming comedians
              as well as some celebrity ones.
            </p>
            <p className="text-cream font-body text-[16px] leading-[1.5] mb-4">
              Each team will have a &apos;veteran&apos; comedian as their coach.
              They will be mic&apos;d up so we can hear all the hilarious advice
              they give to their comedians. The coaches are different for each
              episode.
            </p>
            <p className="text-cream font-body text-[16px] leading-[1.5] mb-8">
              The audience will be jam-packed with people who love to laugh.
            </p>
            <Image
              src={`${CDN}/7962d131-4375-4a72-819b-35db2f51366e/laughter.gif`}
              alt=""
              width={237}
              height={158}
              unoptimized
              className="w-full h-auto"
            />
          </div>

          {/* Right: punch.png */}
          <div>
            <Image
              src={`${CDN}/67eedbcc-96ea-4c6c-a95d-bf8671c10acf/punch.png`}
              alt=""
              width={390}
              height={341}
              className="w-full h-auto"
            />
          </div>
        </Reveal>

      </div>
    </div>
  );
}
