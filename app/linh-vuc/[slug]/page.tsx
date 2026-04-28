import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { industries } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = industries.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.metaDescription };
}

export default async function IndustryDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  const related = industries.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={ind.title}
        description={ind.metaDescription}
        breadcrumbs={[{ label: "Lĩnh vực", href: "/linh-vuc" }, { label: ind.title }]}
        variant="dark"
      />
      {(ind.image || ind.ogImage) && (
        <div className="mx-auto max-w-[1200px] px-6 -mt-10">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl ring-1 ring-slate-200">
            <Image src={ind.ogImage || ind.image || ""} alt={ind.title} fill priority sizes="(max-width:1024px) 100vw, 1200px" className="object-cover" />
          </div>
        </div>
      )}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <article className="hn-content" dangerouslySetInnerHTML={{ __html: ind.contentHtml || `<p>${ind.contentText || ""}</p>` }} />
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-brand-dark">Lĩnh vực khác</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/linh-vuc/${r.slug}`} className="group block rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-base font-bold text-brand-dark group-hover:text-brand">{r.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
                  Khám phá
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
