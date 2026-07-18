import type { CaseStudy, ImgSlot, VimeoSlot } from "./types";

const CDN = "https://images.squarespace-cdn.com/content/v1/671fc066e85fae213d2acc8a";

// Helpers — keeps the story array readable
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

const redbull: CaseStudy = {
  slug: "redbull",
  pageTitle:
    "Red Bull — Peter Buck | ECD, $20B Brand, 43% Global Market Share",
  description:
    "Peter Buck as ECD for Red Bull — from local skate events to global brand culture. How a worldview became a $20 billion brand with 43% global market share.",

  title: "Red Bull",

  strategicInsight: `The brief was never "make an ad." It was "make something worth showing up for." Leading Red Bull as agency ECD, I came to understand that the most powerful creative strategy isn't a campaign, it's a worldview.\n\nA brand that gives people a world they want to live in doesn't need to interrupt culture. It becomes culture. We didn't sell the drink. We sold the idea of the drink. And that idea — given wings to people and ideas — turned a beverage into a belief system that became the gold standard in experiential marketing.`,

  theResult: `From challenger brand to category creator. Red Bull became the No.1 energy drink in the US and commands 43% global market share — built almost entirely without conventional advertising. That's a $20 billion brand built on the conviction that people would rather experience something than watch an ad.`,

  theHumanTruth: `Give people a world worth showing up for and they'll bring everyone they know.`,

  clientQuote: {
    text: `"Peter embodies exactly what Red Bull stands for. His work is bursting with energy, and his mind is constantly brimming with new ideas."`,
    attribution: `— Stefan Kozak, Former CEO, Red Bull North America`,
  },

  story: [
    // ── Skate ────────────────────────────────────────────────────────────
    {
      t: "split-caption",
      img: gif("acbf369b-c08b-4044-b9f9-f73061a024a2", "rbskate.gif", 339, 191),
      heading: "We kick-flipped from one local skate event to the next.",
      imgLeft: true,
    },
    {
      t: "slot",
      item: img("d8bdbc40-58a7-40d3-a9c1-612c4e189834", "skate.png", { w: 960, h: 720 }),
    },

    // ── Board meetings ───────────────────────────────────────────────────
    {
      t: "h2",
      text: "We held board meetings on the water, in the mountains, and downtown.",
    },
    {
      t: "slots2",
      left: gif("08e14e46-8740-4271-9976-e8a733482b39", "snowboarding-red-bull.gif"),
      right: img("8c9bd815-4d52-461d-b4a2-3c36d42d6e99", "cdwo.jpg.webp"),
    },
    {
      t: "slots2",
      left: img("80101bb1-0bdc-4935-be6a-5d67ab64da72", "Culture.jpg-1.webp"),
      right: img("4df1e28a-e2b9-4a7e-b613-d462b9f5a10d", "Culture.jpg.webp"),
    },
    // three smallfire frames — same filename, different UUIDs
    {
      t: "slots3",
      a: img("627f88ae-f4b9-466b-a27b-9dbdd23ba41e", "smallfire2.030.jpg.webp"),
      b: img("9e730581-3f2c-41e6-81e8-c3d89993c3d8", "smallfire2.030.jpg.webp"),
      c: img("a6e1ff8e-e10d-4697-8b68-13ea006574b0", "smallfire2.030.jpg.webp"),
    },

    // ── Bombing hills ────────────────────────────────────────────────────
    { t: "h2", text: "We bombed every hill we could find." },
    {
      t: "slot",
      item: img("be8407d5-12ff-4856-996e-092f3473e334", "tumblr_o3tuiq6k4i1udh5n8o1_500.webp"),
    },

    // ── Cliff diving ─────────────────────────────────────────────────────
    { t: "h2", text: "We jumped from buildings and cliffs alike." },
    {
      t: "slots2",
      left: img("41630449-7436-4c44-9f0a-556a997fd79b", "CliffDiving_09.png.webp"),
      right: gif("90bc804f-ae93-4257-9ca4-942dbad6d0bd", "CliffDiving.gif"),
    },
    {
      t: "body",
      paras: [
        "The Red Bull Cliff Diving World Series made an event stop in Boston, and The Institute for Contemporary Art became 'The Cliffs of Boston.' Where the world's best divers compete with jaw-dropping performances.",
      ],
    },
    {
      t: "slots2",
      left: img("1c66edf8-ff2f-4720-b915-22566b906e05", "CliffDiving_01.jpg.webp"),
      right: img("0f41c632-25a8-46ad-a0fa-d41c284df513", "CliffDiving_Straight.png.webp"),
    },
    { t: "slot", item: vimeo("75411569", "Red Bull Cliff Diving 2013 Boston") },

    // ── Music / 150 bpm ──────────────────────────────────────────────────
    { t: "h2", text: "We played 150 bpm 24/7." },
    {
      t: "slot",
      item: img("ceac3a34-bd7e-4e9d-b9ae-a694c5a12c76", "culture.053.jpg.webp"),
    },
    {
      t: "body",
      paras: [
        "Red Bull has become a major force in music and live entertainment through Red Bull Music, supporting artists across all genres.",
        "Concerts, DJ competitions, workshops, and global music events helping connect artists and fans while promoting creative music culture.",
      ],
    },
    {
      t: "slots3",
      a: gif("e2ea6785-ff53-4c83-96b7-2a738b250e0c", "698bbd8595d3ab2ea6fb1c7b77150584.gif"),
      b: img("b8f01723-eb1f-43c1-bdeb-ee97be5d98b0", "RBSoundClash.jpg"),
      c: img(
        "84809946-57c8-446e-aeb1-22fb5c76bcbc",
        "Screenshot+2026-05-14+at+8.25.03%E2%80%AFPM.png"
      ),
    },
    {
      t: "slots2",
      left: img("009876d6-9d9c-429d-b684-ed061bdaa39f", "RBCreation_Social-Posts.webp"),
      right: img("ab03af79-8718-4326-af98-85cde2126cb2", "culture2.054.jpg.webp"),
    },

    // ── Hackers ──────────────────────────────────────────────────────────
    { t: "h2", text: "We turned hackers \ninto heroes." },
    {
      t: "slots2",
      left: img("cad7e0e0-4c84-49d4-9eb8-5f2caa889f5f", "RB_Creation_digital_main_0.webp"),
      right: img(
        "d2d8b7ed-ea4e-4787-bc26-d6d0291ced26",
        "red-bull-creation-maker-competition-in-brooklyn-nyc.jpg"
      ),
    },
    {
      t: "body",
      paras: [
        "Red Bull challenged top teams of hackers and DIY makers to construct functional, original inventions in just 72 hours. What started in New York as an underground event, turned into a nationwide online experience. The concept is a throwback to the early days of the computer, complete with pop-up windows, 8-bit SFX, command line navigation and easter eggs. The work was featured on WIRED, Popular Science and Reddit.",
      ],
    },
    {
      t: "slots2",
      left: img("75e571b9-e623-4c77-b72d-c932b1e727fe", "rb_creation.jpg"),
      right: vimeo("75404429", "Red Bull Creation 2012"),
    },
    {
      t: "slots2",
      left: img("35475bd5-698f-4974-ac69-eb52467e3ae7", "Creation10.webp"),
      right: img("ec8f94e9-2db6-40e6-b2dd-605c1ca910be", "RBAR_Impressions.webp"),
    },

    // ── Air Race ─────────────────────────────────────────────────────────
    {
      t: "body",
      paras: [
        "The Red Bull Air Race is an official World Championship, accredited by the FAI – The World Air Sports Federation.",
        "Since it was officially launched, it has become globally renowned as the fastest and most exhilarating motorsport on the planet.",
      ],
    },
    { t: "h2", text: "We raced faster than anyone else." },
    {
      t: "slot",
      item: gif("eb60f230-c185-4b7d-b16e-00d1ba9ae826", "giphy.gif"),
    },
    {
      t: "slots2",
      left: img("1fae87a8-eb77-4cac-b0a5-7d6a6e2cb78e", "LA-live-wall1.webp"),
      right: vimeo("109093405", "AirRaceOverview"),
    },
    {
      t: "slots2",
      left: img("5d3421eb-17b7-4c8c-9729-703b1577a8b1", "RBAR_Banner.webp"),
      right: img("4fc12bd2-16ce-4923-84bb-55e354fc4dd9", "airraace.webp"),
    },

    // ── Art of Can ───────────────────────────────────────────────────────
    {
      t: "body",
      paras: [
        "Is it art or is it trash? Red Bull Art of Can challenged people to turn simple Red Bull cans into pieces of art. Just goes to show that Red Bull can vitalize the mind. Exhibitions were held all over the world showcasing how creative people truly are.",
      ],
    },
    { t: "h2", text: "We made art with nothing but a can and our minds." },
    {
      t: "slots2",
      left: img("90932782-73a1-4fc1-baa1-7f2242bfe7ac", "face.png.webp"),
      right: vimeo("114621751", "ArtofCan"),
    },
    {
      t: "slot",
      item: gif("a9e6bc84-e0c4-45aa-a7e8-339eab84fd2c", "giphy-1.gif"),
    },
    {
      t: "slot",
      item: img(
        "6ff825ce-f043-4b93-8bde-88947418198c",
        "Screenshot%2B2023-03-24%2Bat%2B1.39.18%2BPM.png.webp"
      ),
    },
    {
      t: "slots2",
      left: img("bc0cdf7d-0e92-4637-89b9-28c7a5212079", "wingsplatform_T1A8772.jpg.webp"),
      right: img("932c4b89-294a-4552-a2c1-7fc310bf1730", "AOC_Social-Posts.jpg.webp"),
    },
    {
      t: "slots2",
      left: img("74dcb71f-fd12-4687-bb93-3a7322828fca", "ChicagoTimeout_001.jpg.webp"),
      right: img("ab64e2d6-578a-4068-a0d1-cfbff888d4ca", "_T1A9189.jpg.webp"),
    },

    // ── Avalanche ────────────────────────────────────────────────────────
    { t: "h2", text: "We had avalanches chasing us down the hill." },
    {
      t: "slots2",
      left: img("d2cadb27-c2cf-4b84-b9f0-da19f05f4101", "ColdRush"),
      right: vimeo("75408083"),
    },

    // ── Backflip ─────────────────────────────────────────────────────────
    { t: "h2", text: "We backflipped into the abyss." },
    {
      t: "slots2",
      left: vimeo("75406911"),
      right: img("881f9e2a-569a-41d9-811f-c287cc1c7495", "Red_Bull_Rampage_logo.png"),
    },

    // ── Gravity ──────────────────────────────────────────────────────────
    { t: "h2", text: "We humiliated gravity." },
    {
      t: "slots2",
      left: img("686b69ce-27b5-496e-86c5-a39e1f7d8304", "x-fighters.webp"),
      right: vimeo("75405764"),
    },

    // ── Closing ──────────────────────────────────────────────────────────
    { t: "h2", text: "This is what it means when you give wiiings to people and ideas. And yes, there were many more happening during my time leading the account.\n\nTheir social media channels and Red Bull TV blew up with millions of followers and viewers." },
    {
      t: "slot",
      item: img("367b0edf-8094-4372-b499-753e88c319ec", "FB.jpg"),
    },
    {
      t: "h2",
      text: "And one guy defied \njust about everything. \n\nThank you Felix.",
    },
  ],

  // Faithful reproduction of live site pagination — no Previous link on Red Bull page
  // (Red Bull is the first entry in the case study series)
  next: { slug: "eos-fitness", label: "EōS Fitness" },
};

export default redbull;
