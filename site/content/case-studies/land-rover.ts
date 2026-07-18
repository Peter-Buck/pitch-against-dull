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

const landRover: CaseStudy = {
  slug: "land-rover",
  pageTitle:
    "Land Rover Well Storied CRM – Peter Buck | Emotional Owner Loyalty Program",
  description:
    "A multi-touch CRM program built on the storytelling DNA of Land Rover and its owners. Inspirational vehicle and owner stories that deepen emotional brand loyalty and drive repeat purchase.",

  title: "Land Rover",

  sections: [
    {
      strategicInsight: `The best loyalty program isn't a points system. It's a story you can't stop telling. Land Rover vehicles and Land Rover owners share the same DNA — they both go places and come back changed.\n\nWell Storied was built on that truth. A multi-touch CRM program featuring inspirational stories and histories from both the vehicles and the people who drive them. The aim wasn't retention in the traditional sense.\n\nIt was to deepen an emotional connection so strong that the idea of driving anything else becomes genuinely unthinkable.`,
      theResult: `The most successful loyalty CRM program in Land Rover's history. A system built not on points and rewards, but on stories — proving that emotional connection outlasts any incentive program.`,
      theHumanTruth: `The most powerful loyalty strategy isn't a reward. It's a reminder of who you are.`,
      credits: "Director/DOP/Photographer: Michael Bernard\nProduction: The Bigger Picture",
      clientQuote: {
        text: `"It's nice when you can leave a legacy behind that you're proud of years later. Peter and his team helped me do just that."`,
        attribution: `Joe Torpey, Former Director, Marketing Communications, JLR`,
      },
    },
  ],

  story: [
    { t: "slot", item: vimeo("278771825") },
    { t: "slot", item: vimeo("278772198") },
    { t: "slot", item: vimeo("282805553") },
    { t: "slot", item: vimeo("321605663") },
    {
      t: "slot",
      item: img("239a72af-b519-4d5b-981a-ef2f11d7ce48", "LR2.webp", { w: 1140, h: 641 }),
    },
  ],

  prev: { slug: "atomic-waste", label: "Atomic Waste" },
  next: { slug: "california-highway-patrol", label: "California Highway Patrol" },
};

export default landRover;
