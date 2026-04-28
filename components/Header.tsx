"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav, servicesNav } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-4">
        <div className="hn-header-pill pointer-events-auto flex h-[57px] w-full max-w-[420px] items-center justify-between gap-2 px-3">
          <Logo width={130} height={36} />
          <Link
            href="/lien-he"
            className="hn-btn-primary inline-flex h-9 items-center justify-center rounded-full px-4 text-[14px] font-medium text-white"
          >
            Liên hệ
          </Link>
          <button
            type="button"
            aria-label="Tìm kiếm"
            onClick={() => setSearchOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1e3a5f] ring-1 ring-[rgba(22,106,217,0.3)] transition hover:bg-brand-light hover:text-brand"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition hover:bg-brand-light hover:text-brand"
          >
            <GridIcon />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#050a18]/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">
            <Logo light width={130} height={36} />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Đóng menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 gap-10 overflow-y-auto px-6 py-6 md:grid-cols-2">
            <ul className="space-y-2">
              <li className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Trang chính</li>
              {mainNav.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-2xl font-bold tracking-tight text-white transition hover:text-hero-cyan md:text-3xl"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              <li className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Dịch vụ</li>
              {servicesNav.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 text-base font-medium text-white/85 transition hover:text-hero-cyan"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-3 pt-20 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-4 shadow-2xl">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3">
              <Search className="h-5 w-5 text-slate-500" />
              <input
                type="search"
                autoFocus
                placeholder="Bạn cần tìm gì hôm nay?"
                className="h-12 flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="rounded-full bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200"
                aria-label="Đóng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 px-3 text-xs text-slate-400">
              Gõ từ khóa rồi nhấn Enter để tìm bài viết, dịch vụ hoặc dự án
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden>
      {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => (
        <circle key={`${r}-${c}`} cx={2 + c * 6} cy={2 + r * 6} r="1.4" />
      )))}
    </svg>
  );
}
