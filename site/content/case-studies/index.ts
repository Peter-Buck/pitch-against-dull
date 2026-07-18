import type { CaseStudy } from "./types";
import redbull from "./redbull";
import eosFitness from "./eos-fitness";
import riester from "./riester";
import rangeRover from "./range-rover";
import honorHealth from "./honorhealth";

const studies: Record<string, CaseStudy> = {
  redbull,
  "eos-fitness": eosFitness,
  riester,
  "range-rover": rangeRover,
  honorhealth: honorHealth,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return studies[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(studies);
}
