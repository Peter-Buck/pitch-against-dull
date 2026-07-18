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

const eosFitness: CaseStudy = {
  slug: "eos-fitness",
  pageTitle:
    "EōS Fitness Brand Campaign – Peter Buck | 90% YouTube Watch Rate, 21% Lower CPA",
  description:
    "Repositioned EōS Fitness from price messaging to willpower. Introducing Will — a character with the power to get the workout done.",

  title: "EōS Fitness",

  sections: [
    {
      strategicInsight: `EōS Fitness had been winning on price for years. Then the whole industry caught up. When everyone's cheap, cheap means nothing. The brief was to reposition — but repositioning a gym around quality felt like every other gym. We went deeper. We found willpower. Not as a category claim but as a human truth that EōS owners, staff, and members all shared. Will wasn't a mascot. Will was the argument that EōS stood for something people actually feel at 6am when the alarm goes off and the bed is warm.`,
      theResult: `90% YouTube watch rate. 99% of views from non-subscribers. 70% organic Instagram engagement. 21% lower cost per membership. 50%+ new users on landing page.`,
      theHumanTruth: `When you stop competing on price, you start competing on meaning. And meaning wins every time.`,
    },
  ],

  story: [
    { t: "slot", item: vimeo("1025562287") },
    { t: "slot", item: vimeo("1015891522") },
    {
      t: "slot",
      item: img("621ad4f9-e301-438c-8523-462534e20b64", "Will4.png", { w: 960, h: 540 }),
    },
    { t: "slot", item: vimeo("1015891069") },
    {
      t: "slot",
      item: img(
        "9b85b207-38cb-4e6c-8566-56d74778cd18",
        "Screenshot%2B2024-10-17%2Bat%2B11.08.40%E2%80%AFAM.png",
        { w: 960, h: 540 }
      ),
    },
    {
      t: "slots2",
      left: img("acdb8fd1-4010-4519-9d10-71acd0fd0e20", "Will10.png", { w: 960, h: 540 }),
      right: img("3a4b809c-8722-4c02-a701-7e01e2274fd0", "Will8.png", { w: 960, h: 540 }),
    },
    { t: "slot", item: vimeo("1015890226") },
    {
      t: "slots2",
      left: img("0ddfc42f-2dc7-4d7d-a31c-3182192aa3e1", "WillOOH1.png", { w: 960, h: 540 }),
      right: img("0562b363-a514-499c-9437-de28615e4a42", "EoSMobileapp.png", { w: 960, h: 540 }),
    },
    {
      t: "slot",
      item: img(
        "0939d50f-6d31-4399-8f31-861fb2f3e562",
        "Screenshot+2024-11-06+at+11.58.19%E2%80%AFAM.png",
        { w: 960, h: 540 }
      ),
    },
    { t: "body", paras: ["Production: Taylor James"] },
    {
      t: "slots2",
      left: img("396bd2c3-9eb6-4c70-bbf6-7c994cedbdc0", "will_phone.png", { w: 960, h: 540 }),
      right: img("a1e2ff0e-8a83-4d2b-b253-612df7bdaed7", "Will11.png", { w: 960, h: 540 }),
    },
  ],

  prev: { slug: "redbull", label: "Red Bull" },
  next: { slug: "riester", label: "Riester" },
};

export default eosFitness;
