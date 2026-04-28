import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <span className="text-7xl font-black text-brand-light">404</span>
      <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
        Không tìm thấy trang
      </h1>
      <p className="max-w-xl text-sm text-slate-600 md:text-base">
        Trang bạn tìm kiếm có thể đã bị di chuyển hoặc không còn tồn tại. Vui
        lòng quay lại trang chủ hoặc gọi hotline để được hỗ trợ.
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 hover:bg-brand-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Về trang chủ
        </Link>
        <a
          href={`tel:${site.hotlineRaw}`}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold hover:border-accent hover:text-accent"
        >
          <Phone className="h-4 w-4" />
          {site.hotline}
        </a>
      </div>
    </section>
  );
}
