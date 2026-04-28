import Image from "next/image";
import { home } from "@/lib/site";

export function AboutSection() {
  const a = home.about;
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mb-12">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#05080c]">
            <span className="text-base leading-none text-brand">+</span>
            {a.label}
          </span>
          <h2 className="mt-3 text-[45px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0d1321]">
            {a.headline}
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-5 text-[16px] leading-[1.6] text-[#0d1321]/85">
            {a.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-slate-50">
            <Image
              src={a.image}
              alt="Thị trường HomeNest Việt Nam phục vụ"
              fill
              sizes="(max-width:1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
