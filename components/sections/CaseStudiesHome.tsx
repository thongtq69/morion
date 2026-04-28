import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { home } from "@/lib/site";

export function CaseStudiesHome() {
  const c = home.caseStudiesSection;
  const items = c.items.slice(0, 6);
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex flex-col items-end justify-between gap-4 lg:flex-row">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm text-brand">
              <span className="text-lg leading-none">+</span>
              {c.label}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
              {c.headline[0]}{" "}
              <span className="font-script text-brand">{c.headline[1]}</span>
            </h2>
          </div>
          <Link
            href={c.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full border border-brand bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-white"
          >
            {c.ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p: any) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                  Case Study
                </span>
                <h3 className="mt-2 line-clamp-2 text-lg font-bold text-brand-dark transition group-hover:text-brand">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
