import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { news } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function NewsSection() {
  const [first, ...rest] = news;
  return (
    <section className="py-10">
      <SectionHeader
        eyebrow="Tin tức & Mẹo hay"
        title="Bài viết mới nhất"
        description="Cập nhật mẹo sử dụng, sửa chữa, lựa chọn máy lạnh phù hợp gia đình bạn."
        href="/tin-tuc"
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Link
          href={`/tin-tuc/${first.slug}`}
          className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={first.image}
              alt={first.title}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-white">
              {first.category}
            </span>
          </div>
          <div className="p-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(first.date).toLocaleDateString("vi-VN")}
            </span>
            <h3 className="mt-2 line-clamp-2 text-xl font-bold text-slate-900 group-hover:text-brand">
              {first.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">
              {first.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              Đọc tiếp
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <ul className="grid gap-4">
          {rest.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/tin-tuc/${n.slug}`}
                className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-brand hover:shadow-md"
              >
                <span className="relative block h-24 w-32 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    {n.category}
                  </span>
                  <h4 className="mt-1 line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-brand">
                    {n.title}
                  </h4>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(n.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
