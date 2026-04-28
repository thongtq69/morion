import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Plus } from "lucide-react";
import type { Product } from "@/lib/site";
import { formatVND } from "@/lib/utils";

const FALLBACK_IMAGE =
  "https://wintek.com.vn/wp-content/uploads/woocommerce-placeholder-300x300.png";

export function ProductCard({ product }: { product: Product }) {
  const hasPrice = typeof product.price === "number";

  return (
    <article className="group flex flex-col bg-white">
      <Link
        href={`/san-pham/chi-tiet/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-white"
      >
        <Image
          src={product.image || FALLBACK_IMAGE}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="px-3 pt-1">
        <button
          type="button"
          aria-label="Thêm vào danh sách"
          className="relative inline-flex h-7 w-7 items-center justify-center text-brand transition hover:text-accent"
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />
          <Plus
            className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-white text-brand"
            strokeWidth={3}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center gap-1 px-3 pb-4 text-center">
        <Link
          href={`/san-pham/chi-tiet/${product.slug}`}
          className="line-clamp-2 min-h-[2.5rem] text-[12px] font-bold uppercase leading-snug text-slate-700 transition hover:text-accent"
        >
          {product.name}
        </Link>
        <div className="mt-1">
          {hasPrice ? (
            <span className="text-sm font-bold text-accent">
              {formatVND(product.price as number)}
            </span>
          ) : (
            <span className="text-sm font-bold text-accent">Liên Hệ</span>
          )}
        </div>
      </div>
    </article>
  );
}
