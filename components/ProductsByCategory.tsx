import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./SectionHeader";
import { products, type ProductCategorySlug } from "@/lib/site";

export function ProductsByCategory({
  category,
  title,
  href,
  limit = 4,
}: {
  category: ProductCategorySlug;
  title: string;
  href: string;
  limit?: number;
  accent?: string;
}) {
  const items = products.filter((p) => p.category === category).slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section className="pt-5 pb-2">
      <SectionHeader title={title} href={href} />
      <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-slate-200 border border-slate-200 bg-white md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
