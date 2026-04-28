import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/lib/site";

export function CtaBanner() {
  const c = home.ctaBanner;
  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-sky to-hero-cyan p-10 text-white md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10"
          />
          <div className="relative grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {c.label}
              </span>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl">
                {c.headline}
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">{c.description}</p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href={c.ctaHref}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-dark shadow-xl transition hover:bg-brand-dark hover:text-white"
              >
                {c.ctaLabel}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white transition group-hover:bg-white group-hover:text-brand">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
