import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-brand-dark";
  const subColor = variant === "light" ? "text-white/80" : "text-slate-600";
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
      <span className="relative flex flex-col items-center justify-center">
        <span className="text-[10px] font-bold leading-none text-brand">°C</span>
        <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded border-2 border-brand bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-brand"
            aria-hidden
          >
            <path d="M12 2v6" />
            <path d="m4.93 10.93 4.24 4.24" />
            <path d="M2 18h6" />
            <path d="M12 22v-6" />
            <path d="M22 18h-6" />
            <path d="m19.07 10.93-4.24 4.24" />
            <circle cx="12" cy="14" r="3" />
          </svg>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[26px] font-black uppercase tracking-tight ${textColor}`}>
          {site.shortName}
        </span>
        <span className={`mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] ${subColor}`}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
