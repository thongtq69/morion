import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dự án đã thi công",
  description: "Wintek đã thi công nhiều công trình điều hoà không khí tại TP.HCM và các tỉnh.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Dự án đã thi công"
        description="Tuyển chọn các công trình tiêu biểu của Wintek — từ trung tâm hành chính, nhà máy đến văn phòng, showroom và phân xưởng."
        breadcrumbs={[{ label: "Dự án" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/du-an/${p.slug}`}
              className="group relative block overflow-hidden rounded-2xl bg-slate-900"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:1024px) 50vw, 33vw"
                  className="object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="inline-block rounded-full bg-accent/90 px-2.5 py-0.5 text-[11px] font-bold">
                  {p.year}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-tight drop-shadow">
                  {p.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-white/85">
                  {p.summary}
                </p>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-accent">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
