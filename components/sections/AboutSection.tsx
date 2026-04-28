import Image from "next/image";
import { home } from "@/lib/site";

export function AboutSection() {
  const a = home.about;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 text-sm text-brand">
            <span className="text-lg leading-none">+</span>
            {a.label}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {a.headline}
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-700">
            {a.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-50">
            <Image
              src={a.image}
              alt="Thị trường HomeNest Việt Nam phục vụ"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
