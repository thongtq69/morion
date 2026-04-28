import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center bg-[#050a18] px-4 text-center text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(11,188,214,0.25), transparent 60%)",
        }}
      />
      <div className="relative">
        <h1 className="text-7xl font-black tracking-tight md:text-8xl">404</h1>
        <p className="mt-3 text-base text-white/85 md:text-lg">
          Trang bạn tìm có thể đã được di chuyển hoặc không còn tồn tại.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-sky px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30"
        >
          Về trang chủ
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
