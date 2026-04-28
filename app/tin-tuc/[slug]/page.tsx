import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { news } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = news.find((x) => x.slug === slug);
  if (!n) return {};
  return { title: n.title, description: n.excerpt };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = news.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = news.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Tin tức", href: "/tin-tuc" },
          { label: post.category },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand" />
            {new Date(post.date).toLocaleDateString("vi-VN")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Tag className="h-4 w-4 text-brand" />
            {post.category}
          </span>
        </div>

        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 70vw"
            className="object-cover"
          />
        </div>

        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-xl prose-h3:text-lg prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content_html || `<p>${post.excerpt}</p>` }}
        />

        <div className="mt-10">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Xem các bài viết khác
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <h2 className="mb-5 text-xl font-extrabold uppercase tracking-tight">
          Bài viết liên quan
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((n) => (
            <Link
              key={n.slug}
              href={`/tin-tuc/${n.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="(max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-bold text-brand">
                  {n.category}
                </span>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold group-hover:text-brand">
                  {n.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
