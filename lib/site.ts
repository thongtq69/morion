import data from "./data/site-data.json";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  count: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  capacity: string;
  price: number | "contact";
  oldPrice?: number;
  image: string;
  badge?: string;
  features: string[];
  description_html?: string;
  excerpt?: string;
  date?: string;
  link?: string;
};

export type ProductCategorySlug = string;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  year: string;
  url?: string;
};

export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaHref?: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  image: string;
  content_html: string;
  date?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content_html: string;
};

export type BrandLogo = {
  name: string;
  image: string;
  alt?: string;
};

export type FeaturedLink = { title: string; url: string };

export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  company: string;
  hotline: string;
  hotlineRaw: string;
  zalo: string;
  email: string;
  facebook: string;
  address: string;
  workingHours: string;
  license: string;
  domain: string;
};

export const site = data.site as SiteInfo;
export const mainNav = data.mainNav as NavItem[];
export const productCategories = data.productCategories as ProductCategory[];
export const products = data.products as Product[];
export const brands = data.brands as string[];
export const brandLogos = data.brandLogos as BrandLogo[];
export const projects = data.projects as Project[];
export const heroSlides = data.heroSlides as HeroSlide[];
export const heroFeaturedLinks = data.heroFeaturedLinks as FeaturedLink[];
export const services = data.services as Service[];
export const news = data.news as NewsItem[];
