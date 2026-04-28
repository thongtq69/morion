import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ShoppingCart,
  CheckCircle2,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products, productCategories, site } from "@/lib/site";
import { formatVND } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.features.join(" — "),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const cat = productCategories.find((c) => c.slug === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const hasPrice = typeof product.price === "number";

  return (
    <>
      <PageHero
        title={product.name}
        breadcrumbs={[
          { label: "Sản phẩm", href: "/san-pham" },
          {
            label: cat?.title ?? "Sản phẩm",
            href: `/san-pham/${product.category}`,
          },
          { label: product.brand },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-brand">
              {product.brand} · {product.capacity}
            </span>
            <h1 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-baseline gap-3 rounded-xl bg-accent/5 px-5 py-4">
              {hasPrice ? (
                <>
                  <span className="text-3xl font-extrabold text-accent">
                    {formatVND(product.price as number)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatVND(product.oldPrice)}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-2xl font-extrabold text-accent">
                  Liên hệ báo giá
                </span>
              )}
            </div>

            <ul className="mt-5 space-y-2.5 text-sm">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark"
              >
                <ShoppingCart className="h-4 w-4" />
                Đặt mua ngay
              </button>
              <a
                href={`tel:${site.hotlineRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" />
                Gọi {site.hotline}
              </a>
            </div>

            <ul className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-3">
              {[
                [ShieldCheck, "Bảo hành chính hãng"],
                [Truck, "Giao miễn phí TP.HCM"],
                [CreditCard, "Trả góp 0% lãi suất"],
              ].map(([Icon, t]) => {
                const I = Icon as typeof ShieldCheck;
                return (
                  <li
                    key={t as string}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                  >
                    <I className="h-5 w-5 text-brand" />
                    {t as string}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <article className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <h2 className="mb-4 text-xl font-extrabold uppercase text-brand">
            Mô tả sản phẩm
          </h2>
          {product.description_html ? (
            <div
              className="prose prose-slate max-w-none prose-headings:text-brand-dark prose-img:rounded-lg [&_.spec-data-item]:flex [&_.spec-data-item]:items-center [&_.spec-data-item]:gap-2 [&_.spec-data-item]:border-b [&_.spec-data-item]:border-slate-100 [&_.spec-data-item]:py-1.5 [&_.spec-data-item_.context]:flex-1 [&_.spec-data-item_.value]:font-semibold [&_.title-column]:mt-6 [&_.icon]:hidden"
              dangerouslySetInnerHTML={{ __html: product.description_html }}
            />
          ) : (
            <p className="text-slate-700">{product.excerpt || product.name}</p>
          )}
        </article>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 text-xl font-extrabold uppercase tracking-tight">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-slate-500">
          Bạn cần tư vấn sâu hơn?{" "}
          <Link href="/lien-he" className="font-semibold text-brand">
            Gửi yêu cầu báo giá
          </Link>{" "}
          hoặc gọi hotline{" "}
          <a
            href={`tel:${site.hotlineRaw}`}
            className="font-semibold text-accent"
          >
            {site.hotline}
          </a>
          .
        </p>
      </section>
    </>
  );
}
