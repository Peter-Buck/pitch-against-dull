import type { CaseStudy } from "./types";
import redbull from "./redbull";

const studies: Record<string, CaseStudy> = {
  redbull,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return studies[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(studies);
}
