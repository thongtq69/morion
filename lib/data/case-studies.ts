import "server-only";
import data from "./case-studies.json";
import type { ContentPage } from "../site";

export const caseStudies = data as unknown as ContentPage[];
