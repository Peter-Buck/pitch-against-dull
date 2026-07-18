import type { CaseStudy, ImgSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

const img = (uuid: string, file: string, opts?: Partial<ImgSlot>): ImgSlot => ({
  kind: "img",
  src: `${CDN}/${uuid}/${file}`,
  alt: "",
  ...opts,
});

const gif = (uuid: string, file: string, w?: number, h?: number): ImgSlot =>
  img(uuid, file, { gif: true, w, h });

const riester: CaseStudy = {
  slug: "riester",
  pageTitle:
    "Riester Agency Rebrand – Peter Buck | Graphis Design Award Platinum & Gold",
  description:
    "Repositioning Riester as a creativity-at-every-step agency under the Everything Creative framework. New identity won the Graphis Design Award: Platinum for video content and Gold for the entire rebrand.",

  title: "Riester Advertising",

  sections: [
    {
      strategicInsight: `When AI arrived in the industry, most agencies panicked and led with capability. We went the opposite direction. Creativity first. AI as the engine, not the headline. Repositioning Riester under the "Everything Creative" framework wasn't a rebrand, it was a statement of belief. That creativity applied at every step of the process — from planning and consulting to production, amplification, and measurement — is the only true differentiator an agency can own. In a region racing to automate, we made the argument that creativity can't be automated. Then we proved it by winning with it.`,
      theResult: `Graphis Design Award: Platinum for video content. Gold for the entire rebrand. Sharper pitches. Clearer differentiation in a crowded regional market.`,
      theHumanTruth: `Creativity first. AI-powered. An agency repositioned to cut through automation.`,
      credits: "Animation: Peter Sunna",
    },
  ],

  story: [
    {
      t: "slots2",
      left: gif("fe636500-21c1-4252-873e-3d738004f920", "syphere_logo_3_iteration_1.gif"),
      right: img("5dd274b0-f2f9-4640-8ada-8d5eb3a11d01", "unnamed.png", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: img("cfca046a-fbd0-4aac-b2b2-fae73165893b", "CS-Riester_LogoIDManual.jpg", { w: 960, h: 540 }),
      right: gif("5fca0280-1c85-4bbc-925c-cf0feba627c6", "Everything_Creative_iteration_4.gif"),
    },
    {
      t: "slots2",
      left: gif("304461ae-014c-452f-9d9b-b8d88df67856", "Planning_Creative_iteration_2.gif"),
      right: img("dc0657ed-66cd-4488-9276-17956e23d94c", "unnamed-2.jpg", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: img("d9049b33-d31b-42bc-9c24-4b3d5d22be2c", "CS-Riester_Stationery.jpg", { w: 960, h: 540 }),
      right: gif("4fccad7c-09c0-4be8-82d7-cfda29b30f36", "Consulting_Creative_iteration_2.gif"),
    },
    {
      t: "slots2",
      left: img("54635353-4d20-4d49-9428-88269bf8465f", "CS-Riester_Cards.jpg", { w: 960, h: 540 }),
      right: img("58d956af-0d2e-44bf-a773-e683ffbf8a19", "CS-Riester_Brochure_Mockup.jpg", { w: 960, h: 540 }),
    },
    {
      t: "slots2",
      left: gif("ad2ebc44-ae5a-48b6-b7f8-e531fae1f6f3", "Producing_Creative_iteration_2.gif"),
      right: img(
        "31f83144-94ef-4cfb-963b-a532302290a0",
        "Screenshot%2B2024-07-03%2Bat%2B6.18.46%E2%80%AFPM.png",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slots2",
      left: gif("c3a8b291-634c-4983-a2ff-19573ae40a02", "Amplifying_Creative_iteration_2.gif"),
      right: img(
        "4e93846b-3cf1-40bc-b359-196d92b2dab2",
        "Screenshot%2B2024-07-03%2Bat%2B6.17.39%E2%80%AFPM.png",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slots2",
      left: gif("ecba153f-9ca9-4613-899e-ab92cbb274fd", "Measuring_Creative_iteration_2.gif"),
      right: img("e204437f-86db-4e43-b82e-9d368abbe75a", "CS-Riester_Youtube_Mockup.jpg", { w: 960, h: 540 }),
    },
    {
      t: "slot",
      item: gif("adf53621-d8a1-4332-a5b7-431042eb8e6a", "Together_iteration_1.gif"),
    },
  ],

  prev: { slug: "eos-fitness", label: "EōS Fitness" },
  next: { slug: "archer-aviation", label: "Archer Aviation" },
};

export default riester;
