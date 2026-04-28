"use client";

import Image from "next/image";
import { useState } from "react";
import { home } from "@/lib/site";

export function TechStack() {
  const t = home.techStack;
  const [tab, setTab] = useState("Tất cả");
  const items = (t.items as any[]).filter((it) => tab === "Tất cả" || it.tab === tab);
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm text-brand">+ {t.label}</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
            {t.headline[0]}{" "}
            <span className="font-script text-brand">{t.headline[1]}</span>{" "}
            {t.headline[2]}
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(t.tabs as string[]).map((tb) => (
            <button
              key={tb}
              onClick={() => setTab(tb)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === tb
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tb}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <span className="relative block h-10 w-10">
                <Image src={it.icon} alt={it.name} fill sizes="40px" className="object-contain" />
              </span>
              <span className="text-center text-[12px] font-semibold text-slate-700">{it.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
