import "server-only";
import data from "./services.json";
import type { ContentPage } from "../site";

export const services = data as unknown as ContentPage[];
