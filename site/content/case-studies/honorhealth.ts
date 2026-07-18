import type { CaseStudy, VimeoSlot } from "./types";

const vimeo = (id: string, title?: string): VimeoSlot => ({
  kind: "vimeo",
  id,
  title,
});

const honorHealth: CaseStudy = {
  slug: "honorhealth",
  pageTitle:
    "HonorHealth TV Campaign – Peter Buck | Live Healthy, Everyone",
  description:
    "A television campaign for Arizona's nonprofit health system HonorHealth, built around well-intended reminders for healthy living. Demonstrating that a healthcare brand can be genuinely warm and motivating.",

  title: "Honor Health",

  strategicInsight: `Most healthcare advertising sells fear. HonorHealth wanted to sell something harder — a genuine commitment to community wellbeing. The brief wasn't to drive appointments or push services.\n\nIt was to make people feel that HonorHealth actually cared whether they were healthy, whether they walked through the door or not. Every ad became a small, useful act of kindness. A reminder to drink more water. To sleep. To move. To breathe.\n\nNot brand advertising dressed up as wellness. Actual wellness, dressed up as brand advertising. In a category built on anxiety, radical usefulness turned out to be the most disruptive strategy available.`,

  theResult: `A campaign that didn't ask anything of the audience except to live a little better. Which, in healthcare, is the whole point.`,

  theHumanTruth: `The most trusted brands in healthcare aren't the ones that treat you. They're the ones that care whether you need to be treated at all.`,

  story: [
    { t: "slot", item: vimeo("969268014") },
    { t: "slot", item: vimeo("969265621") },
    { t: "slot", item: vimeo("1114081451") },
    { t: "body", paras: ["3D Animation: Carbon", "Music: California Music"] },
  ],

  prev: { slug: "range-rover", label: "Range Rover" },
};

export default honorHealth;
