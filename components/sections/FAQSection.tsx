"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { home } from "@/lib/site";

export function FAQSection() {
  const f = home.faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <span className="text-sm text-brand">+ {f.label}</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl lg:text-5xl">
              <span className="font-script text-brand">Giải Đáp</span>{" "}
              Mọi Thắc Mắc
            </h2>
          </div>
          <div className="space-y-3">
            {f.items.map((q: any, i: number) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border bg-white p-5 transition ${
                    isOpen ? "border-brand shadow-md shadow-brand/10" : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 text-left text-base font-bold text-brand-dark"
                  >
                    {q.q}
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-brand text-white" : "bg-slate-100 text-slate-700"
                    }`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{q.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
