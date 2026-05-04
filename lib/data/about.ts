import "server-only";
import data from "./about.json";

export type AboutPage = {
  title: string;
  metaDescription?: string;
  image?: string;
  contentText?: string;
  contentHtml: string;
};

export const aboutPage = data as unknown as AboutPage;
