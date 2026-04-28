import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { FacebookIcon, YoutubeIcon, ZaloIcon } from "./BrandIcons";
import { site, mainNav, servicesNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#050a18] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(11,188,214,0.18), transparent 40%), radial-gradient(circle at 100% 100%, rgba(22,82,240,0.25), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-block rounded-2xl bg-white/95 px-4 py-3">
              <Logo width={140} height={36} />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-5 flex gap-3">
              {site.social?.facebook && (
                <a href={site.social.facebook} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Facebook">
                  <FacebookIcon className="h-4 w-4" />
                </a>
              )}
              {site.social?.youtube && (
                <a href={site.social.youtube} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="YouTube">
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              )}
              {site.social?.zalo && (
                <a href={site.social.zalo} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Zalo">
                  <ZaloIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Trang chính</h3>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-white/85 transition hover:text-hero-cyan">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Dịch vụ</h3>
            <ul className="space-y-2.5 text-sm">
              {servicesNav.slice(0, 8).map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-white/85 transition hover:text-hero-cyan">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/50">Hotline</span>
                <a href={`tel:${site.hotlineRaw}`} className="text-base font-bold text-white hover:text-hero-cyan">
                  {site.hotline}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/50">Email</span>
                <a href={`mailto:${site.email}`} className="hover:text-hero-cyan">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-white/50">Văn phòng</span>
                <span className="text-white/85">{site.address}</span>
              </li>
            </ul>
            <Link
              href="/lien-he"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Liên hệ ngay
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {site.relatedSites && Object.keys(site.relatedSites).length > 0 && (
          <div className="mt-12 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Hệ sinh thái HomeNest
            </h3>
            <div className="flex flex-wrap gap-3">
              {Object.entries(site.relatedSites).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/85 transition hover:bg-white/20"
                >
                  {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative border-t border-white/10 bg-[#020613]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{site.copyright || `© ${new Date().getFullYear()} ${site.company}. All rights reserved.`}</p>
          <div className="flex gap-5">
            <Link href="/wiki" className="hover:text-white">Wiki</Link>
            <Link href="/lien-he" className="hover:text-white">Liên hệ</Link>
            <Link href="/ve-chung-toi" className="hover:text-white">Về chúng tôi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
