"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, heroFeaturedLinks, news, services } from "@/lib/site";

const ARTICLE_ICONS = [
  "https://wintek.com.vn/wp-content/uploads/2025/06/dieu-hoa-am-tran-noi-ong-gio-daikin-300x300.jpg",
  "https://wintek.com.vn/wp-content/uploads/2025/06/may-lanh-casper-1-hp-sc-09fb36a-2-638845595963213896-700x467-1-300x300.jpg",
  "https://wintek.com.vn/wp-content/uploads/2025/06/may-lanh-casper-inverter-1-hp-gc-09ib36-g1-300x300.jpg",
  "https://wintek.com.vn/wp-content/uploads/2025/06/aqua-inverter-2-5-hp-aqa-rv24ta-1-638805945781974928-700x467-1-300x300.jpg",
  "https://wintek.com.vn/wp-content/uploads/2025/06/may-lanh-inverter-aqua-AQA-RV10ME-300x300.jpg",
];

const NEWS_SLUGS = new Set(news.map((n) => n.slug));
const SERVICE_SLUGS = new Set(services.map((s) => s.slug));

function localizeHref(href: string): string {
  try {
    const url = new URL(href);
    if (url.hostname === "wintek.com.vn") {
      const slug = url.pathname.replace(/^\/|\/$/g, "");
      if (NEWS_SLUGS.has(slug)) return `/tin-tuc/${slug}`;
      if (SERVICE_SLUGS.has(slug)) return "/dich-vu";
      return "/tin-tuc";
    }
  } catch {}
  return href;
}

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  if (total === 0) {
    return <div className="aspect-[810/420] w-full rounded-md bg-slate-200" />;
  }

  return (
    <div className="group relative isolate w-full overflow-hidden rounded-md bg-white shadow-sm">
      <div className="relative aspect-[810/420] w-full">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={s.image}
              alt={s.title || `Slide ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width:1024px) 100vw, 65vw"
              className="object-cover"
            />
          </div>
        ))}

        <button
          type="button"
          aria-label="Slide trước"
          onClick={prev}
          className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/55 md:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Slide kế"
          onClick={next}
          className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/55 md:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 w-2 rounded-full border border-white transition ${
                i === active ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroFeaturedSidebar() {
  const links = heroFeaturedLinks.slice(0, 5);
  return (
    <div className="grid h-full grid-rows-5 gap-2 rounded-md border border-slate-200 bg-white p-2">
      {links.map((l, i) => (
        <Link
          key={l.url}
          href={localizeHref(l.url)}
          className="group flex items-center gap-3 rounded border border-transparent px-2 py-1.5 transition hover:border-brand/30 hover:bg-brand/5"
        >
          <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded">
            <Image
              src={ARTICLE_ICONS[i % ARTICLE_ICONS.length]}
              alt=""
              fill
              sizes="48px"
              className="object-cover"
            />
          </span>
          <span className="line-clamp-2 text-[12px] font-bold uppercase leading-snug text-brand-dark transition group-hover:text-accent">
            {l.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
