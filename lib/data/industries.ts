import "server-only";
import data from "./industries.json";
import type { ContentPage } from "../site";

export const industries = data as unknown as ContentPage[];
