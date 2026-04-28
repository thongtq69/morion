import Link from "next/link";
import { home } from "@/lib/site";

export function IndustriesGrid() {
  const i = home.industries;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mb-12">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#05080c]">
            <span className="text-base leading-none text-brand">+</span>
            {i.label}
          </span>
          <h2 className="mt-3 text-[45px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0d1321]">
            {i.headline}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {i.items.map((it: any) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex h-[50px] items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-center text-[14px] font-medium text-[#0c1e5b] transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20"
            >
              {it.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
