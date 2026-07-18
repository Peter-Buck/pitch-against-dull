import type { CaseStudy, ImgSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

const img = (uuid: string, file: string, opts?: Partial<ImgSlot>): ImgSlot => ({
  kind: "img",
  src: `${CDN}/${uuid}/${file}`,
  alt: "",
  ...opts,
});

const meClub: CaseStudy = {
  slug: "meclub",
  pageTitle: "MeClub — Peter Buck | Co-Founder, Human Connection Platform",
  description:
    "Co-founding MeClub — a mobile-first platform built on the conviction that human connection was the thing brands were about to lose. A thousand activity clubs in one.",

  title: "MeClub",

  sections: [
    {
      strategicInsight: `In 2018, the industry was moving toward more digital, more automated, more frictionless. We went the other direction. Co-founding MeClub was a bet that the thing people were about to lose — genuine human connection, IRL storytelling, community built around shared experience — was actually the most valuable thing they had. MeClub was an online platform with one goal: to get you offline. A club with millions of clubs inside — every community, interest, and tribe with its own home, connected by a simple conviction: that people don't want to be reached. They want to belong.`,
      theResult: `MeClub was a mobile-first engagement platform that connects people with common interests through activities — like having a thousand activity clubs in one. Built from the ground up with a user experience based on simplicity and elements of gamification. With only three clicks you could find an activity you like, get all the information needed — who, where, when, what level — and join in.`,
      theHumanTruth: `People don't want more screen time. They want more time with people who matter.`,
    },
  ],

  story: [
    {
      t: "slot",
      item: img("e5249280-38be-479e-93b4-0cc6b7718981", "WEBSITE.jpg", { w: 1382, h: 742 }),
    },
    {
      t: "slot",
      item: img("59046ee6-0617-479b-8e39-57acb50541d5", "MeClub.webp", { w: 1244, h: 723 }),
    },
  ],

  prev: { slug: "archer-aviation", label: "Archer Aviation" },
  next: { slug: "atomic-waste", label: "Atomic Waste" },
};

export default meClub;
