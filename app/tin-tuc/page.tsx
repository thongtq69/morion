import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { news } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Mẹo dùng máy lạnh, hướng dẫn sửa chữa, tư vấn chọn mua.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="Tin tức & Mẹo hay"
        description="Cập nhật mẹo sử dụng, sửa chữa, lựa chọn máy lạnh phù hợp gia đình bạn."
        breadcrumbs={[{ label: "Tin tức" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <Link
              key={n.slug}
              href={`/tin-tuc/${n.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                  {n.category}
                </span>
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(n.date).toLocaleDateString("vi-VN")}
                </span>
                <h3 className="mt-2 line-clamp-2 text-base font-bold text-slate-900 group-hover:text-brand">
                  {n.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                  {n.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Đọc tiếp
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
