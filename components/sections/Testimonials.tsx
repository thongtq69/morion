"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { home } from "@/lib/site";

export function Testimonials() {
  const t = home.testimonials;
  const [active, setActive] = useState(0);
  const total = t.items.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);
  const cur = t.items[active];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1345px] px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-medium text-brand">+ {t.label}</span>
          <h2 className="mt-3 text-[60px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0d1321]">
            <span className="font-script font-medium text-brand">{t.headline.split(" ").slice(0, 2).join(" ")}</span>{" "}
            {t.headline.split(" ").slice(2).join(" ")}
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
          <Quote className="mx-auto h-10 w-10 text-brand opacity-50" />
          <p className="mt-6 text-lg leading-relaxed text-slate-700 md:text-xl">{cur.quote}</p>
          <div className="mt-8">
            <p className="text-base font-bold text-brand-dark">{cur.author}</p>
            <p className="text-sm text-slate-500">{cur.role}</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Trước"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {t.items.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-brand" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Sau"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
