export type ImgSlot = {
  kind: "img";
  src: string;
  alt?: string;
  gif?: boolean;
  w?: number;
  h?: number;
};

export type VimeoSlot = {
  kind: "vimeo";
  id: string;
  title?: string;
};

export type MediaSlot = ImgSlot | VimeoSlot;

export type StoryRow =
  // standalone H2 caption (preScale on live site)
  | { t: "h2"; text: string }
  // body paragraph block (preFade on live site)
  | { t: "body"; paras: string[] }
  // single full-width media item
  | { t: "slot"; item: MediaSlot }
  // 2-column media grid
  | { t: "slots2"; left: MediaSlot; right: MediaSlot }
  // 3-column media grid
  | { t: "slots3"; a: MediaSlot; b: MediaSlot; c: MediaSlot }
  // split row: image left 40% + H2 heading right 60% (or reversed)
  | { t: "split-caption"; img: ImgSlot; heading: string; imgLeft: boolean };

export type CaseStudy = {
  slug: string;
  pageTitle: string;
  description: string;

  // Hero section (cream background)
  title: string;                    // large H2
  strategicInsight: string;
  theResult: string;
  theHumanTruth: string;
  clientQuote?: { text: string; attribution: string };

  // Dark-background story
  story: StoryRow[];

  // Case study navigation
  prev?: { slug: string; label: string };
  next?: { slug: string; label: string };
};
