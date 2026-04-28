import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { home } from "@/lib/site";

export function WikiHome() {
  const w = home.wikiSection;
  if (!w.items?.length) return null;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
            <span className="text-brand">+ </span>
            {w.label}
          </h2>
          <Link
            href={w.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full border border-brand bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-white"
          >
            {w.ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {w.items.map((it: any) => (
            <Link
              key={it.slug}
              href={`/wiki/${it.slug}`}
              className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                {it.image && (
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">{it.category}</span>
                <h3 className="mt-2 line-clamp-2 text-base font-bold text-brand-dark transition group-hover:text-brand">
                  {it.title}
                </h3>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  HomeNest Wiki
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
