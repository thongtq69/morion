import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { home } from "@/lib/site";

export function Hero() {
  const h = home.hero;
  return (
    <section className="relative isolate overflow-hidden bg-[#050a18] pb-20 pt-28 text-white md:pb-28 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(11,188,214,0.45) 0%, rgba(5,10,24,0) 55%), radial-gradient(circle at 20% 80%, rgba(22,82,240,0.35) 0%, rgba(5,10,24,0) 50%)",
        }}
      />
      <Stars />
      <div className="relative mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {h.title}
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">{h.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={h.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-sky px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:shadow-xl hover:shadow-brand/50"
            >
              {h.ctaPrimary.label}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href={h.ctaSecondary.href}
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              {h.ctaSecondary.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px]">
          <div className="absolute right-0 top-1/2 h-[440px] w-[260px] -translate-y-1/2 animate-float md:h-[560px] md:w-[320px]">
            <Image
              src={h.imageColumn}
              alt="Cột banner trang chủ"
              fill
              priority
              sizes="320px"
              className="object-contain"
            />
          </div>
          <div className="absolute left-0 top-1/2 h-[300px] w-[330px] -translate-y-1/2 animate-float md:h-[420px] md:w-[460px]" style={{ animationDelay: "1.2s" }}>
            <Image
              src={h.imageMain}
              alt="Khối banner trang chủ"
              fill
              priority
              sizes="460px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  // Render scattered subtle dots for tech background
  const dots = Array.from({ length: 60 }, (_, i) => ({
    top: (i * 137) % 100,
    left: (i * 71) % 100,
    s: 1 + (i % 3) * 0.5,
    o: 0.2 + ((i * 13) % 5) / 10,
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            opacity: d.o,
          }}
        />
      ))}
    </div>
  );
}
