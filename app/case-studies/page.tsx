import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Khám phá các dự án website, mobile app và phần mềm tiêu biểu HomeNest đã triển khai.",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <PageHero
        title="Biến Ý Tưởng Đột Phá Thành Sản Phẩm Dẫn Đầu"
        description="Hơn 250 đối tác tin tưởng — mỗi case study là một câu chuyện chuyển đổi số thực tế HomeNest đồng hành."
        breadcrumbs={[{ label: "Case Studies" }]}
        variant="dark"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {(c.ogImage || c.image) && (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image src={c.ogImage || c.image || ""} alt={c.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">Case Study</span>
                <h3 className="mt-2 text-lg font-bold text-brand-dark transition group-hover:text-brand">{c.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{c.metaDescription}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                  Xem dự án
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
