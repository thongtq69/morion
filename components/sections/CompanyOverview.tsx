import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/lib/site";

export function CompanyOverview() {
  const c = home.companyOverview;
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#05080c]">
            <span className="text-base leading-none text-brand">+</span>
            {c.label}
          </span>
          <h2 className="mt-3 text-[60px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0d1321]">
            {c.headline[0]}{" "}
            <span className="font-script font-medium text-brand">{c.headline[1]}</span>{" "}
            {c.headline[2]}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white">
            <div className="relative h-[420px]">
              <Image
                src={c.founder.image}
                alt={c.founder.name}
                fill
                sizes="(max-width:1024px) 100vw, 30vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-sm leading-relaxed text-white/90">"{c.founder.quote}"</p>
              <div className="mt-4">
                <p className="text-base font-bold">{c.founder.name}</p>
                <p className="text-xs text-white/70">{c.founder.role}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-brand-dark">{c.vision.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{c.vision.text}</p>
            <Link
              href={c.vision.ctaHref}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              {c.vision.ctaLabel}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-bold text-brand-dark">{c.values.title}</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-slate-700">
              {c.values.items.map((v: string) => (
                <li key={v} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {c.stats.map((s: any) => (
            <div
              key={s.label}
              className={`rounded-3xl p-6 ${
                s.highlight
                  ? "bg-gradient-to-br from-brand to-brand-dark text-white"
                  : "bg-white text-slate-900 ring-1 ring-slate-200"
              }`}
            >
              <p className={`text-sm ${s.highlight ? "text-white/85" : "text-slate-500"}`}>{s.label}</p>
              <div className="mt-12 flex items-end gap-4">
                <p className={`text-5xl font-extrabold leading-none ${s.highlight ? "text-white" : "text-brand-dark"}`}>
                  {s.value}
                </p>
                <p className={`max-w-[10rem] text-sm leading-snug ${s.highlight ? "text-white/85" : "text-slate-500"}`}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
