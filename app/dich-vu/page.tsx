import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Khám phá hệ sinh thái dịch vụ phát triển phần mềm, AI, IoT và DevOps của HomeNest Việt Nam.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        title="Dịch vụ phát triển công nghệ toàn diện"
        description="Từ thiết kế website, app, AI đến DevOps & Blockchain — HomeNest đồng hành cùng doanh nghiệp ở mọi giai đoạn chuyển đổi số."
        breadcrumbs={[{ label: "Dịch vụ" }]}
        variant="dark"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/dich-vu/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              {s.ogImage || s.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={s.ogImage || s.image || ""}
                    alt={s.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-brand to-brand-sky" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-dark transition group-hover:text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {s.metaDescription}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-bold text-brand">
                  Tìm hiểu thêm
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
