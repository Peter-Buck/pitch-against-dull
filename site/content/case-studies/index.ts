import type { CaseStudy } from "./types";
import redbull from "./redbull";
import eosFitness from "./eos-fitness";
import riester from "./riester";
import rangeRover from "./range-rover";
import honorHealth from "./honorhealth";
import cleanElections from "./clean-elections";
import landRover from "./land-rover";
import californiaHighwayPatrol from "./california-highway-patrol";
import archerAviation from "./archer-aviation";
import atomicWaste from "./atomic-waste";
import meClub from "./meclub";

const studies: Record<string, CaseStudy> = {
  redbull,
  "eos-fitness": eosFitness,
  riester,
  "range-rover": rangeRover,
  honorhealth: honorHealth,
  "clean-elections": cleanElections,
  "land-rover": landRover,
  "california-highway-patrol": californiaHighwayPatrol,
  "archer-aviation": archerAviation,
  "atomic-waste": atomicWaste,
  meclub: meClub,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return studies[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(studies);
}
