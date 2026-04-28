import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { home } from "@/lib/site";

const HERO_VIDEO = "https://image.homenest.com.vn/wp-content/uploads/2026/04/Video-banner-HomeNest-Viet-Nam.mp4";
const PLATFORM_IMG = "https://image.homenest.com.vn/wp-content/uploads/2026/04/Khoi-banner-trang-chu-HomeNest-Viet-Nam.png";
const PILLAR_IMG = "https://image.homenest.com.vn/wp-content/uploads/2026/04/Cot-banner-trang-chu-HomeNest-Viet-Nam.png";

// 5 pillar positions matching homenest hero layout (relative to viewport-width container)
const PILLARS = [
  { left: "47%", platformTop: 446, pillarTop: 511 },
  { left: "55.5%", platformTop: 286, pillarTop: 352 },
  { left: "65.5%", platformTop: 533, pillarTop: 598 },
  { left: "76%", platformTop: 286, pillarTop: 352 },
  { left: "85.5%", platformTop: 446, pillarTop: 511 },
];

export function Hero() {
  const h = home.hero;
  return (
    <section className="relative isolate h-screen min-h-[680px] w-full overflow-hidden bg-black text-white">
      {/* background video */}
      <div className="absolute inset-0">
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/80" />

      {/* 3D pillar stacks (right side) */}
      <div className="pointer-events-none absolute inset-0">
        {PILLARS.map((p, i) => (
          <div key={i}>
            <Image
              src={PILLAR_IMG}
              alt=""
              width={115}
              height={330}
              className="absolute"
              style={{ left: p.left, top: p.pillarTop, transform: "translateX(-50%)", animation: `float 4s ease-in-out ${i * 0.3}s infinite` }}
              priority={i < 2}
            />
            <Image
              src={PLATFORM_IMG}
              alt=""
              width={150}
              height={136}
              className="absolute"
              style={{ left: p.left, top: p.platformTop, transform: "translateX(-50%)", animation: `float 4s ease-in-out ${i * 0.3}s infinite` }}
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* Hero text content overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-12">
        <div className="max-w-[600px] animate-fade-up">
          <h1 className="text-[64px] font-extrabold leading-[1] tracking-[-0.02em] text-white">
            {h.title}
          </h1>
          <p className="mt-6 text-[18px] leading-[1.5] text-white/95">{h.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={h.ctaPrimary.href}
              className="hn-btn-primary inline-flex items-center gap-2 rounded-full px-[26px] py-[11px] text-[15px] font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              <span>{h.ctaPrimary.label}</span>
            </Link>
            <Link
              href={h.ctaSecondary.href}
              className="hn-btn-secondary inline-flex items-center gap-2 rounded-full bg-white px-[26px] py-[11px] text-[15px] font-semibold text-[#1a3b91]"
            >
              <span>{h.ctaSecondary.label}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
