import Link from "next/link";
import type { ReactNode } from "react";

function AcIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="4" y="6" width="24" height="11" rx="2" stroke="white" strokeWidth="2" />
      <path d="M8 22h2M14 22v3M18 22v3M22 22v3" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SectionHeader({
  title,
  href,
  hrefLabel = "XEM TẤT CẢ",
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div
        className="relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-dark via-brand to-brand-sky px-6 py-2.5 text-white shadow-sm"
        style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%)" }}
      >
        <span className="flex h-7 w-7 items-center justify-center text-white">
          {icon ?? <AcIcon />}
        </span>
        <h2 className="pr-6 text-[15px] font-bold uppercase tracking-wide">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 pb-1 text-[13px] font-semibold uppercase text-brand hover:text-accent"
        >
          {hrefLabel}
        </Link>
      )}
    </div>
  );
}
