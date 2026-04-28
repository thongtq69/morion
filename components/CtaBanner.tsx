import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-brand-dark py-12 px-6 text-white shadow-xl md:px-12">
      <span className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <span className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" />
      <span className="absolute right-12 top-8 h-3 w-3 rounded-full bg-accent" />
      <div className="relative grid items-center gap-6 md:grid-cols-[2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Tư vấn miễn phí 24/7
          </span>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
            Cần tư vấn chọn máy lạnh phù hợp với phòng và ngân sách?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
            Đội ngũ kỹ thuật {site.shortName} sẵn sàng khảo sát tận nơi, báo giá rõ ràng,
            không phát sinh chi phí ẩn.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 md:items-end">
          <a
            href={`tel:${site.hotlineRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold shadow-lg shadow-black/20 transition hover:bg-accent-dark"
          >
            <Phone className="h-4 w-4 animate-shake" />
            Gọi ngay {site.hotline}
          </a>
          <a
            href={`https://zalo.me/${site.zalo}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Zalo ngay
          </a>
        </div>
      </div>
    </section>
  );
}
