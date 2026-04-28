import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tất cả sản phẩm",
  description: "Toàn bộ catalog máy lạnh chính hãng — Daikin, Panasonic, LG…",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Tất cả sản phẩm"
        description="Hơn 200 mã máy lạnh từ các thương hiệu chính hãng — đầy đủ công suất, kiểu lắp đặt và phân khúc giá."
        breadcrumbs={[{ label: "Sản phẩm" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-5 text-xl font-extrabold uppercase tracking-tight text-slate-900">
          Danh mục
        </h2>
        <CategoryGrid />

        <h2 className="mb-5 mt-12 text-xl font-extrabold uppercase tracking-tight text-slate-900">
          Tất cả sản phẩm
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
