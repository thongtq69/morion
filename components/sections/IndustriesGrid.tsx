import Link from "next/link";
import { home } from "@/lib/site";

export function IndustriesGrid() {
  const i = home.industries;
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm text-brand">
            <span className="text-lg leading-none">+</span>
            {i.label}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl">
            {i.headline}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {i.items.map((it: any) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-[13px] font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20"
            >
              {it.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
