import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { wiki } from "@/lib/data/wiki";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Kiến thức công nghệ, lộ trình nghề nghiệp và phương pháp phát triển phần mềm từ HomeNest.",
};

export default function WikiIndex() {
  return (
    <>
      <PageHero
        title="HomeNest Wiki — Kiến thức công nghệ"
        description="Thư viện bài viết về phương pháp phát triển phần mềm, lộ trình kỹ sư và xu hướng công nghệ mới nhất."
        breadcrumbs={[{ label: "Wiki" }]}
        variant="dark"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {wiki.map((w) => (
            <Link
              key={w.slug}
              href={`/wiki/${w.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {(w.ogImage || w.image) && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image src={w.ogImage || w.image || ""} alt={w.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">HomeNest Wiki</span>
                <h3 className="mt-2 line-clamp-2 text-base font-bold text-brand-dark transition group-hover:text-brand">{w.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{w.metaDescription}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  HomeNest Việt Nam
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
