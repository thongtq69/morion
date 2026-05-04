import core from "./data/core.json";

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

type Core = {
  site: SiteInfo;
  mainNav: NavItem[];
  servicesNav: NavItem[];
  home: any;
};

const c = core as unknown as Core;

export const site = c.site;
export const mainNav = c.mainNav;
export const servicesNav = c.servicesNav;
export const home = c.home;
