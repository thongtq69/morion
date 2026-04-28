import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function PageHero({
  title,
  description,
  breadcrumbs = [],
  variant = "light",
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <section
      className={`relative isolate overflow-hidden pt-32 pb-14 ${
        dark ? "bg-[#050a18] text-white" : "bg-gradient-to-b from-brand-light to-white text-brand-dark"
      }`}
    >
      {dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, rgba(11,188,214,0.3) 0%, rgba(5,10,24,0) 50%), radial-gradient(circle at 30% 80%, rgba(22,82,240,0.3) 0%, rgba(5,10,24,0) 50%)",
          }}
        />
      )}
      <div className="relative mx-auto max-w-[1200px] px-6">
        <nav
          aria-label="Breadcrumb"
          className={`flex flex-wrap items-center gap-1.5 text-xs ${dark ? "text-white/75" : "text-slate-600"}`}
        >
          <Link href="/" className="inline-flex items-center gap-1.5 hover:opacity-80">
            <Home className="h-3.5 w-3.5" />
            Trang chủ
          </Link>
          {breadcrumbs.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 opacity-50" />
              {b.href ? (
                <Link href={b.href} className="hover:opacity-80">{b.label}</Link>
              ) : (
                <span className={dark ? "text-white" : "text-brand-dark"}>{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className={`mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl ${dark ? "" : "gradient-blue-text"}`}>
          {title}
        </h1>
        {description && (
          <p className={`mt-3 max-w-3xl text-base ${dark ? "text-white/80" : "text-slate-600"}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
