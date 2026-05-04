import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/lib/data/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.metaDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={svc.title}
        description={svc.metaDescription}
        breadcrumbs={[{ label: "Dịch vụ", href: "/dich-vu" }, { label: svc.title }]}
        variant="dark"
      />
      {(svc.image || svc.ogImage) && (
        <div className="mx-auto max-w-[1200px] px-6 -mt-10">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl ring-1 ring-slate-200">
            <Image
              src={svc.ogImage || svc.image || ""}
              alt={svc.title}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>
      )}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <article
          className="hn-content"
          dangerouslySetInnerHTML={{ __html: svc.contentHtml || `<p>${svc.contentText || ""}</p>` }}
        />
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-brand-dark">Dịch vụ liên quan</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} href={`/dich-vu/${s.slug}`} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-6">
                    <h3 className="text-base font-bold text-brand-dark group-hover:text-brand">{s.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{s.metaDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand">
                      Xem thêm
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBanner />
    </>
  );
}
