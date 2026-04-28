import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ với Wintek để được tư vấn báo giá hệ thống điều hoà không khí miễn phí.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Liên hệ với chúng tôi"
        description="Tư vấn miễn phí qua hotline, Zalo, Facebook hoặc form bên dưới. Phản hồi trong vòng 15 phút."
        breadcrumbs={[{ label: "Liên hệ" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-extrabold">Thông tin liên hệ</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Hotline
                    </p>
                    <a
                      href={`tel:${site.hotlineRaw}`}
                      className="text-base font-bold text-accent"
                    >
                      {site.hotline}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-base font-semibold"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Địa chỉ
                    </p>
                    <p className="text-sm font-semibold">{site.address}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Giờ làm việc
                    </p>
                    <p className="text-sm font-semibold">{site.workingHours}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Bản đồ"
                src="https://www.google.com/maps?q=3%2F11+Nguyen+Quy+Anh%2C+Tan+Son+Nhi%2C+Tan+Phu%2C+Ho+Chi+Minh&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-lg font-extrabold">Gửi yêu cầu báo giá</h2>
            <p className="mt-1 text-sm text-slate-600">
              Điền thông tin để nhận báo giá chi tiết trong 15 phút.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="Họ và tên *" placeholder="Nguyễn Văn A" />
              <Field label="Số điện thoại *" placeholder="0909 xxx xxx" type="tel" />
              <Field
                label="Email"
                placeholder="email@dichi.com"
                type="email"
                className="md:col-span-2"
              />
              <Field
                label="Khu vực / Địa chỉ lắp đặt"
                placeholder="Quận, phường…"
                className="md:col-span-2"
              />
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Nội dung yêu cầu
                </label>
                <textarea
                  rows={5}
                  placeholder="Mô tả nhu cầu của bạn — diện tích phòng, ngân sách, thương hiệu mong muốn…"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:bg-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-dark"
            >
              <Send className="h-4 w-4" />
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:bg-white"
      />
    </div>
  );
}
