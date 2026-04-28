import data from "./data/site-data.json";

export type NavItem = { label: string; href: string };

export type ContentPage = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  image?: string;
  ogImage?: string;
  url?: string;
  contentText?: string;
  contentHtml: string;
};

export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  company: string;
  parent: string;
  hotline: string;
  hotlineRaw: string;
  phones: string[];
  phonesDisplay: string[];
  email: string;
  address: string;
  social: Record<string, string>;
  relatedSites: Record<string, string>;
  copyright: string;
  url: string;
  title: string;
  domain: string;
};

type DataShape = {
  site: SiteInfo;
  mainNav: NavItem[];
  servicesNav: NavItem[];
  services: ContentPage[];
  industries: ContentPage[];
  caseStudies: ContentPage[];
  wiki: ContentPage[];
  about: { title: string; metaDescription?: string; image?: string; contentText?: string; contentHtml: string };
  contact: { title: string; metaDescription?: string; contentText?: string; contentHtml: string };
  home: any;
};

const d = data as unknown as DataShape;

export const site = d.site;
export const mainNav = d.mainNav;
export const servicesNav = d.servicesNav;
export const services = d.services;
export const industries = d.industries;
export const caseStudies = d.caseStudies;
export const wiki = d.wiki;
export const aboutPage = d.about;
export const contactPage = d.contact;
export const home = d.home;
