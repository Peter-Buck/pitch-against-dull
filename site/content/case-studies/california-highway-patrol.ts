import type { CaseStudy, ImgSlot, VimeoSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

const img = (uuid: string, file: string, opts?: Partial<ImgSlot>): ImgSlot => ({
  kind: "img",
  src: `${CDN}/${uuid}/${file}`,
  alt: "",
  ...opts,
});

const gif = (uuid: string, file: string, w?: number, h?: number): ImgSlot =>
  img(uuid, file, { gif: true, w, h });

const vimeo = (id: string, title?: string): VimeoSlot => ({
  kind: "vimeo",
  id,
  title,
});

const californiaHighwayPatrol: CaseStudy = {
  slug: "california-highway-patrol",
  pageTitle:
    "CHP Motorcycle Safety Campaign – Peter Buck | 71M+ Impressions, +33% Students Trained",
  description:
    "A bold ego-challenge turned lifesaver. 71.3M+ video impressions, 39.1% YouTube TV interaction rate vs 15–25% benchmark, and a 33% year-over-year increase in riders enrolled in safety training.",

  title: "CHP – Motorcycle Safety",

  sections: [
    {
      strategicInsight: `Motorcycle fatalities were rising. The CHP Motorcycle Safety Program existed to help — but riders weren't enrolling. The insight was simple and a little uncomfortable: riders don't respond to fear. They respond to pride. So we challenged them. Prove to us you have what it takes to ride safely. A bold ego-challenge became the most human brief I've worked on in years — and the most AI-produced. Every frame prompted, directed, and edited with AI. Not as a cost-cutting exercise. As a creative choice that proved the point: when AI is used in service of a human idea, it gets sharper, faster, and more powerful than ever.`,
      theResult: `71.3M+ video impressions. 7.8M+ video views. 472K+ clicks. 39.1% YouTube TV interaction rate versus a 15–25% benchmark. +33% year-over-year increase in riders enrolled in safety training. The highest lift statement: "I feel like CHP genuinely cares about keeping motorcyclists safe."`,
      theHumanTruth: `AI made it. Human insight made it matter. And 33% more riders made it home safely.`,
      credits:
        "Production: Layer8\nExecutive & Creative Lead: Ali Bach\nPrompted, directed and edited: AI or Die\nMusic: Sebastian Pille, Audio: AE West",
    },
  ],

  story: [
    { t: "slot", item: vimeo("1085178154") },
    {
      t: "slots2",
      left: img("b4fb50a9-5178-44b3-950a-500c11cf2064", "CHP8.png", { w: 960, h: 540 }),
      right: gif("b8e9e69f-3a00-4645-8677-dbcff05c10b7", "CHP_FacebooK.gif"),
    },
    {
      t: "slots2",
      left: gif("fdf3de3b-b069-478a-a850-41ed243b2b00", "CHP_AnimatedBanner.gif"),
      right: img("0b2690ee-ae1c-4cac-b2a5-6a03de45675b", "CHP10.png", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: img("7251336c-03c2-43b0-bcd1-0b80f6dc4f9e", "CHP11.png", { w: 960, h: 540 }),
      right: img("817c5cf5-04c5-44cb-be96-2dfdeb130124", "CHP9.png", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: gif("b8c51db7-57e1-4bec-8c87-9ce32684247b", "CMSP_screenrecorded_Interstitial+copy.gif"),
      right: img(
        "9f12fea0-1ecc-446c-951c-3629f6c3af28",
        "Screenshot+2025-05-28+at+4.42.50%E2%80%AFPM.png",
        { w: 960, h: 540 }
      ),
    },
  ],

  prev: { slug: "land-rover", label: "Land Rover" },
  next: { slug: "clean-elections", label: "Clean Elections" },
};

export default californiaHighwayPatrol;
