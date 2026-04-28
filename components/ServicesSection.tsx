import {
  Wrench,
  Sparkles,
  ShieldCheck,
  Zap,
  RefreshCcw,
  Package,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  zap: Zap,
  "refresh-ccw": RefreshCcw,
  package: Package,
};

export function ServicesSection() {
  return (
    <section className="py-10">
      <SectionHeader
        eyebrow="Dịch vụ chuyên nghiệp"
        title="Chúng tôi giúp gì cho bạn?"
        description="Trọn gói từ tư vấn — lắp đặt — bảo trì — vệ sinh — sửa chữa — di dời máy lạnh. Đội ngũ kỹ thuật được đào tạo bài bản."
        href="/dich-vu"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Wrench;
          return (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-light transition-all group-hover:scale-150" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
