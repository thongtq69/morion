"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { home } from "@/lib/site";

export function ServicesHome() {
  const s = home.servicesSection;
  const [tab, setTab] = useState(0);
  const activeTab = s.tabs[tab];
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm text-brand">
              <span className="text-lg leading-none">+</span>
              {s.label}
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-5xl">
              {s.headline[0]}{" "}
              <span className="font-script text-brand">{s.headline[1]}</span>{" "}
              {s.headline[2]}
            </h2>
          </div>
          <Link
            href={s.ctaHref}
            className="group inline-flex items-center gap-2 rounded-full border border-brand bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-brand hover:text-white"
          >
            {s.ctaLabel}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <ul className="space-y-2">
            {s.tabs.map((t: any, i: number) => (
              <li key={t.title}>
                <button
                  type="button"
                  onClick={() => setTab(i)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-bold transition ${
                    tab === i
                      ? "bg-brand text-white shadow-md shadow-brand/30"
                      : "text-slate-700 hover:bg-white"
                  }`}
                >
                  {t.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-slate-200 sm:grid-cols-2">
            {activeTab.items.map((it: any) => (
              <Link
                key={it.title}
                href={it.href}
                className="group flex items-start gap-4 bg-white p-5 transition hover:bg-brand-light"
              >
                <span className="flex h-10 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-500 group-hover:border-brand group-hover:text-brand">
                  {it.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-brand-dark transition group-hover:text-brand">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{it.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
