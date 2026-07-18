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

const atomicWaste: CaseStudy = {
  slug: "atomic-waste",
  pageTitle:
    "Atomic Waste Experiential PR – Peter Buck | Germany's Most Talked-About PR Stunt",
  description:
    "To raise awareness of Germany's nuclear waste laws, Peter invented the DGEAA and mailed 4.5g of atomic waste per person in a sealed stainless steel box — the first-ever Nuclear Home Storage.",

  title: "Atomic Waste",

  sections: [
    {
      strategicInsight: `A change in German law meant an additional 370 tons of atomic waste would be produced in 2011 alone. Nobody was paying attention. The brief was awareness. The idea was audacity. We invented the DGEAA — the German Association of Ultimate Waste Disposal — a completely fabricated government agency with real authority, real letterhead, and a real proposition: your personal share of Germany's nuclear waste, 4.5 grams, sealed in a stainless steel box, mailed directly to your home. The first-ever Nuclear Home Storage. When the idea is the story, you don't need media spend.`,
      theResult: `Germany's most talked-about PR stunt of the year. A fabricated agency that felt more real than the real ones. A public that suddenly understood exactly what 370 tons of atomic waste actually meant — because 4.5 grams of it was sitting on their kitchen table.`,
      theHumanTruth: `Make people feel it and they'll never forget it.`,
    },
  ],

  story: [
    { t: "slot", item: vimeo("69803397") },
    {
      t: "slots2",
      left: img("b168c3f7-1879-4a12-afa8-8c4ea2123143", "Nabu01.jpg", { w: 960, h: 540 }),
      right: img("f10a68d2-c5db-4df8-b39d-0f0ed57c60c4", "nabu02.jpg", { w: 960, h: 540 }),
    },
  ],

  prev: { slug: "meclub", label: "MeClub" },
  next: { slug: "land-rover", label: "Land Rover" },
};

export default atomicWaste;
