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
    <section className="bg-[rgba(250,250,250,0.9)] py-24">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#05080c]">
              <span className="text-base leading-none text-brand">+</span>
              {s.label}
            </span>
            <h2 className="mt-3 text-[60px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0d1321]">
              {s.headline[0]}{" "}
              <span className="font-script font-medium text-brand">{s.headline[1]}</span>{" "}
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
          <ul className="space-y-1">
            {s.tabs.map((t: any, i: number) => (
              <li key={t.title}>
                <button
                  type="button"
                  onClick={() => setTab(i)}
                  className={`block w-full rounded-lg px-4 py-2.5 text-left text-[18px] font-medium transition ${
                    tab === i
                      ? "bg-[#e9f0fd] text-[#1a3b91]"
                      : "text-[#0d1321]/70 hover:bg-white"
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
