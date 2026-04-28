"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  Headphones,
  Award,
  Tag,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { mainNav, site } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-white">
        <div className="mx-auto flex h-[100px] max-w-[1200px] items-center gap-6 px-3">
          <Logo />

          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            <USP
              icon={<Headphones className="h-7 w-7 text-brand" />}
              title="Hotline"
              value={site.hotlineRaw}
            />
            <USP
              icon={<Award className="h-7 w-7 text-brand" />}
              title="Dịch Vụ"
              value="Chuyên Nghiệp"
            />
            <USP
              icon={<Tag className="h-7 w-7 text-brand" />}
              title="Giá Cả"
              value="Cạnh Tranh"
            />
          </div>

          <div className="hidden lg:block">
            <form className="flex h-10 w-72 overflow-hidden rounded border border-slate-200 bg-white">
              <input
                type="search"
                placeholder="Nhập tên sản phẩm..."
                className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="flex w-12 items-center justify-center bg-brand text-white transition hover:bg-brand-dark"
                aria-label="Tìm kiếm"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 lg:hidden"
            aria-label="Mở menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav className="hidden h-[44px] bg-gradient-to-r from-brand-dark via-brand to-brand-sky text-white shadow-sm lg:block">
        <div className="mx-auto flex h-full max-w-[1200px] items-center px-3">
          <ul className="flex flex-1 items-center justify-center">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex h-[44px] items-center gap-1 px-5 text-[13px] font-bold uppercase tracking-wide transition hover:bg-white/10"
                >
                  {item.label === "Tin tức" ? "Thông tin" : item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-10 min-w-[260px] translate-y-1 rounded-b-md bg-white py-2 text-slate-800 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-medium hover:bg-brand-light hover:text-brand-dark"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/gio-hang"
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-white hover:text-brand"
          >
            Cart
            <ShoppingBag className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-b border-slate-100 bg-white lg:hidden">
          <ul className="divide-y divide-slate-100">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label === "Tin tức" ? "Thông tin" : item.label}
                  {item.children && <ChevronDown className="h-4 w-4 text-slate-400" />}
                </Link>
                {item.children && (
                  <ul className="bg-slate-50">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-8 py-2.5 text-sm text-slate-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          — {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-5 py-4">
              <a
                href={`tel:${site.hotlineRaw}`}
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Gọi {site.hotline}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function USP({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-11 w-11 items-center justify-center text-brand">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-bold text-brand">{title}</span>
        <span className="block text-[13px] font-medium text-slate-700">{value}</span>
      </span>
    </div>
  );
}
