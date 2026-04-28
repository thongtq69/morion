import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lĩnh vực hoạt động",
  description: "HomeNest cung cấp giải pháp công nghệ cho 19+ lĩnh vực: tài chính, y tế, giáo dục, bán lẻ, logistics, BĐS, ngân hàng, blockchain…",
};

export default function IndustriesIndex() {
  return (
    <>
      <PageHero
        title="Lĩnh vực HomeNest phục vụ"
        description="Chúng tôi xây dựng giải pháp công nghệ chuyên biệt cho từng ngành, từ tài chính – y tế – giáo dục đến bán lẻ – logistics – bất động sản."
        breadcrumbs={[{ label: "Lĩnh vực" }]}
        variant="dark"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((s) => (
            <Link
              key={s.slug}
              href={`/linh-vuc/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {(s.ogImage || s.image) && (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={s.ogImage || s.image || ""}
                    alt={s.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-dark transition group-hover:text-brand">{s.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{s.metaDescription}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                  Xem chi tiết
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
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
