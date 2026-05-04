import "server-only";
import data from "./wiki.json";
import type { ContentPage } from "../site";

export const wiki = data as unknown as ContentPage[];
