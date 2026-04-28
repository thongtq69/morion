import Image from "next/image";
import { brandLogos } from "@/lib/site";

const BRAND_LOGOS = brandLogos.filter((l) =>
  /\/uploads\/2025\/05\/[^/]+\.(?:png|jpg|jpeg|webp)/i.test(l.image),
);

export function BrandsStrip() {
  const logos = BRAND_LOGOS.length ? BRAND_LOGOS : brandLogos.slice(0, 13);
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-10">
        {[...logos, ...logos].map((b, i) => (
          <span
            key={`${b.image}-${i}`}
            className="relative block h-14 w-32 shrink-0"
          >
            <Image
              src={b.image}
              alt={b.name || "Brand"}
              fill
              sizes="128px"
              className="object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandsMarquee({ compact = false }: { compact?: boolean }) {
  if (compact) return <BrandsStrip />;
  return (
    <section className="py-10">
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Đối tác thương hiệu
        </span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
          Phân phối chính hãng từ các thương hiệu hàng đầu
        </h2>
      </div>
      <BrandsStrip />
    </section>
  );
}
