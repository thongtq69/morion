import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { caseStudies } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = caseStudies.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.metaDescription };
}

export default async function CaseStudyDetail({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cs = caseStudies.find((x) => x.slug === slug);
  if (!cs) notFound();

  const related = caseStudies.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={cs.title}
        description={cs.metaDescription}
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]}
        variant="dark"
      />
      {(cs.image || cs.ogImage) && (
        <div className="mx-auto max-w-[1200px] px-6 -mt-10">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl ring-1 ring-slate-200">
            <Image src={cs.ogImage || cs.image || ""} alt={cs.title} fill priority sizes="(max-width:1024px) 100vw, 1200px" className="object-cover" />
          </div>
        </div>
      )}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <article className="hn-content" dangerouslySetInnerHTML={{ __html: cs.contentHtml || `<p>${cs.contentText || ""}</p>` }} />
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-brand-dark">Dự án khác</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                {(r.ogImage || r.image) && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image src={r.ogImage || r.image || ""} alt={r.title} fill sizes="33vw" className="object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="line-clamp-2 text-base font-bold text-brand-dark group-hover:text-brand">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand">
                    Xem
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
