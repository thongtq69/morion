import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/site";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {productCategories.map((c) => (
        <Link
          key={c.slug}
          href={`/san-pham/${c.slug}`}
          className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-lg font-bold drop-shadow">{c.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-white/85">{c.desc}</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-sm font-semibold text-brand">
              Xem sản phẩm
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
