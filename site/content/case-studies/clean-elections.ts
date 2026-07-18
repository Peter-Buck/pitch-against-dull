import type { CaseStudy, ImgSlot, VimeoSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

const img = (uuid: string, file: string, opts?: Partial<ImgSlot>): ImgSlot => ({
  kind: "img",
  src: `${CDN}/${uuid}/${file}`,
  alt: "",
  ...opts,
});

const vimeo = (id: string, title?: string): VimeoSlot => ({
  kind: "vimeo",
  id,
  title,
});

const cleanElections: CaseStudy = {
  slug: "clean-elections",
  pageTitle:
    "Arizona Clean Elections 2024 Campaign – Peter Buck | +234% Website Sessions",
  description:
    "Non-partisan voter education campaign. Website sessions up 234%, paid search up 499%, display and video up 654%, and a 95% video completion rate. Life's complicated. Make informed voting simple.",

  title: "Clean Elections",

  sections: [
    {
      label: "2024 — Life's Complicated. Voting Doesn't Have To Be.",
      strategicInsight: `Voters were frustrated. Not uninformed — frustrated. The standard civic campaign response is earnest, serious, and thoroughly ignored. We went the other direction.\n\nWit as a strategy. Not partisan, not satirical — just warm human recognition that democracy is a lot to ask of people with busy lives. Stories that made the Voter Education Guide feel less like homework and more like help.`,
      theResult: `Website sessions up 234%. Page views to 900.3K. Paid search up 499.2%. Display and video up 654%. 95% video completion rate.`,
      theHumanTruth: `Sometimes the most respectful thing you can do is make it easy.`,
      credits: "Production: Ladybug Films\nDirector: Josh Soskin",
      clientQuote: {
        text: `"The campaigns are funny, relatable, and successfully connect an important message. Year over year, Peter and his team continues to deliver exceptional results."`,
        attribution: `— Gina Roberts, Voter Education Director, Arizona Clean Elections Commission`,
      },
    },
    {
      label: "2026 — Make Your Vote Yours.",
      strategicInsight: `If 2024 made voting feel simpler, 2026 made it feel personal. Every story built around a big human moment — people who weren't given a choice in something that mattered. A reminder that the vote is one of the few things that's entirely, unconditionally yours.`,
      theResult: `Results pending.`,
      theHumanTruth: `The most powerful thing you can do is make it personal.`,
      credits: "Director: Ric Cantor\nProduction: Golden LA",
      clientQuote: {
        text: `“This is such good work. The casting, the script, the reduction in the script. My all-time favorite.”`,
        attribution: `— David Kovacs, Strategy Lead, Riester`,
      },
    },
  ],

  story: [
    // ── 2026 campaign ─────────────────────────────────────────────────────
    { t: "h2", text: "2026 Voter Education Campaign" },
    { t: "slot", item: vimeo("1145266327") },
    { t: "slot", item: vimeo("1144703975") },
    {
      t: "slots2",
      left: img("be359688-6d8f-4f1c-9741-fb6be6d13c5b", "CCEC_Posters.png", { w: 960, h: 540 }),
      right: img("24fb818c-98cb-4713-9867-cfce15d785de", "CCEC_phone.png", { w: 960, h: 540 }),
    },
    // ── 2024 campaign ─────────────────────────────────────────────────────
    { t: "h2", text: "2024 Voter Education Campaign" },
    { t: "slot", item: vimeo("904621079") },
    {
      t: "slot",
      item: img(
        "72f67f65-c8a7-4ecf-b798-a5d9dc68aa13",
        "Screenshot%2B2024-03-26%2Bat%2B10.02.40%E2%80%AFPM.png",
        { w: 960, h: 540 }
      ),
    },
    { t: "slot", item: vimeo("905272528") },
    {
      t: "slot",
      item: img(
        "e84d4751-b05b-4bb9-985e-bdcb6f141bad",
        "Screenshot%2B2024-03-26%2Bat%2B9.59.41%E2%80%AFPM.png",
        { w: 960, h: 540 }
      ),
    },
    { t: "slot", item: vimeo("905309335") },
  ],

  prev: { slug: "california-highway-patrol", label: "California Highway Patrol" },
  next: { slug: "redbull", label: "Red Bull" },
};

export default cleanElections;
