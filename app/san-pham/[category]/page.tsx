import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { CtaBanner } from "@/components/CtaBanner";
import { productCategories, products } from "@/lib/site";

type Params = { category: string };

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = productCategories.find((x) => x.slug === category);
  if (!c) return {};
  return {
    title: c.title,
    description: c.desc,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const items = products.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        title={cat.title}
        description={cat.desc}
        breadcrumbs={[
          { label: "Sản phẩm", href: "/san-pham" },
          { label: cat.title },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            Đang cập nhật sản phẩm cho danh mục này. Vui lòng liên hệ hotline.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="mt-12">
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
