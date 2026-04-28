import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function PageHero({
  title,
  description,
  breadcrumbs = [],
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark py-14 text-white">
      <span className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
      <span className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-7xl px-4">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs text-white/85"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 opacity-50" />
              {b.href ? (
                <Link href={b.href} className="hover:text-white">
                  {b.label}
                </Link>
              ) : (
                <span className="text-white">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-white/85 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
