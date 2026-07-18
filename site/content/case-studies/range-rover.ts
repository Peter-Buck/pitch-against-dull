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

const rangeRover: CaseStudy = {
  slug: "range-rover",
  pageTitle:
    "Range Rover Evoque Global Campaign – Peter Buck | The Power of Distraction",
  description:
    "A car so beautifully designed it triggers curiosity from every angle and every walk of life. Global launch campaign for the Range Rover Evoque. Director: Joe Connor.",

  title: "RANGE ROVER EVOQUE",

  strategicInsight: `What does a beautifully designed object actually do to the people around it? Not to the driver. To everyone else. The Power of Distraction was built on a simple sociological truth: genuine beauty interrupts. It stops conversations, turns heads mid-stride, pulls focus from apartment windows and street corners. The Evoque didn't need to claim desirability. It just needed to show what desirability looks like from the outside.`,

  theResult: `A global launch that reframed the category conversation from performance specs to human response.`,

  theHumanTruth: `Beauty interrupts everything. The conversation, the commute, the noise. We can't explain it. We can't help it.`,

  clientQuote: {
    text: "Director: Joe Connor",
    attribution: "Production: You Are Here",
  },

  story: [
    { t: "slot", item: vimeo("334673349", "Range Rover Evoque — The Power of Distraction") },
    { t: "slot", item: vimeo("334674453") },
    {
      t: "slots2",
      left: img("a37f3fd1-3534-4d63-a51e-2ee73a6d49a4", "RRE4.png", { w: 960, h: 540 }),
      right: img("3e5dd13b-eb80-488d-ba71-18c52a555fe5", "RRE5.png", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: img("f9506149-f1fe-4a7c-b9fc-e9f747da37ef", "RRE2.png", { w: 960, h: 540 }),
      right: img("0267f4dc-6751-4319-a166-0d7c2785915c", "RRE3.png", { w: 960, h: 540 }),
    },
    { t: "h2", text: "RANGE ROVER VELAR" },
    {
      t: "body",
      paras: [
        "Some stand back out of fear. Some stand back out of respect. Others, out of admiration. Introducing the new Range Rover Velar.",
        "Director: Chris Palmer",
        "Production: Gorgeous",
      ],
    },
    { t: "slot", item: vimeo("206482221", "Range Rover Velar") },
    { t: "slot", item: vimeo("243398406") },
  ],

  prev: { slug: "redbull", label: "Red Bull" },
  next: { slug: "honorhealth", label: "HonorHealth" },
};

export default rangeRover;
