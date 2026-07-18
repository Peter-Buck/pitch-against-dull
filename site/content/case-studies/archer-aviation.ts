import type { CaseStudy, ImgSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

const img = (uuid: string, file: string, opts?: Partial<ImgSlot>): ImgSlot => ({
  kind: "img",
  src: `${CDN}/${uuid}/${file}`,
  alt: "",
  ...opts,
});

const archerAviation: CaseStudy = {
  slug: "archer-aviation",
  pageTitle:
    "Archer Aviation Brand Development – Peter Buck | eVTOL Brand Strategy & Identity",
  description:
    "Defined Archer Aviation's brand purpose, named product entities, mapped the full customer journey as an infinite loop, and developed the UI/UX experience for app, in-flight, and vertiport environments.",

  title: "Archer Aviation",

  sections: [
    {
      strategicInsight: `Before a single aircraft will fly commercially, we built the entire emotional infrastructure of the company — brand purpose, audience characterization, a code of conduct to navigate product and brand through its development phases, a naming strategy for all current and future entities, and the full customer journey mapped as an infinite loop from first to last mile and back.\n\nThen the UI/UX experience for the app, in-flight, and vertiport environments. This is what it means to build a brand from the inside out, before the world ever sees it.`,
      theResult: `A complete brand architecture for a category that didn't exist yet. Every touchpoint — digital, physical, environmental — built on a single human conviction: that flying should feel as natural as calling a cab.`,
      theHumanTruth: `Technology moves fast. Trust moves slow. You have to build it before you need it.`,
      credits: "Photography: MPCurtet\nDesign: Craig Ward",
    },
  ],

  story: [
    {
      t: "slot",
      item: img(
        "2c4bb654-134a-4597-8a5c-34da35e9b1df",
        "Screen%2BShot%2B2021-08-25%2Bat%2B2.26.41%2BPM.webp",
        { w: 1266, h: 518 }
      ),
    },
    {
      t: "slots2",
      left: img("7f1939a1-3d68-4598-89a1-44dde37dfe03", "Archer_MicroExploration_Shot006.webp", { w: 960, h: 540 }),
      right: img(
        "de4de68e-399d-4c67-ac46-83b61cb72293",
        "Screen%2BShot%2B2022-06-20%2Bat%2B12.47.46%2BPM.webp",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slots2",
      left: img("5b71a08b-34f9-4532-8ff8-88b24b0e4186", "archer-vertiport.webp", { w: 960, h: 540 }),
      right: img(
        "49245a41-7f15-47c2-b2ab-cf4f064b2b80",
        "Screen%2BShot%2B2022-06-20%2Bat%2B12.48.14%2BPM.webp",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slots2",
      left: img(
        "1e759b41-be0c-4c28-afdb-da7bbf2d9d98",
        "Screen%2BShot%2B2022-06-20%2Bat%2B12.44.08%2BPM.webp",
        { w: 960, h: 540 }
      ),
      right: img(
        "cf2387b2-15e9-4303-bea3-0f536c347ce0",
        "Screen%2BShot%2B2022-06-20%2Bat%2B12.42.10%2BPM.webp",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slot",
      item: img(
        "34c22ad7-c820-4e7a-8054-5fb98d95209c",
        "Screen%2BShot%2B2022-06-20%2Bat%2B12.41.46%2BPM.webp",
        { w: 1140, h: 540 }
      ),
    },
  ],

  prev: { slug: "riester", label: "Riester" },
  next: { slug: "meclub", label: "MeClub" },
};

export default archerAviation;
