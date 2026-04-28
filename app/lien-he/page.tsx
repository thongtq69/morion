import type { Metadata } from "next";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ HomeNest Việt Nam để nhận tư vấn giải pháp công nghệ cho doanh nghiệp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Khởi tạo dự án công nghệ của doanh nghiệp"
        description="Chúng tôi tin rằng những bước tiến lớn luôn bắt đầu từ một cuộc trò chuyện. Hãy cho chúng tôi biết bạn đang tìm kiếm điều gì."
        breadcrumbs={[{ label: "Liên hệ" }]}
        variant="dark"
      />
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <InfoCard icon={<Phone className="h-5 w-5" />} label="Hotline">
              <a href={`tel:${site.hotlineRaw}`} className="text-lg font-bold text-brand">
                {site.hotline}
              </a>
            </InfoCard>
            <InfoCard icon={<Mail className="h-5 w-5" />} label="Email">
              <a href={`mailto:${site.email}`} className="text-base font-semibold">
                {site.email}
              </a>
            </InfoCard>
            <InfoCard icon={<MapPin className="h-5 w-5" />} label="Văn phòng">
              <p className="text-sm font-medium text-slate-700">{site.address}</p>
            </InfoCard>
            <div className="overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Bản đồ"
                src="https://www.google.com/maps?q=The+Sun+Avenue+28+Mai+Chi+Tho+Binh+Trung+Ho+Chi+Minh&output=embed"
                className="h-[300px] w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
            <h2 className="text-2xl font-extrabold text-brand-dark">Gửi yêu cầu của bạn</h2>
            <p className="mt-1 text-sm text-slate-600">
              Đội ngũ HomeNest sẽ phản hồi bạn trong vòng 24 giờ làm việc.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field label="Họ và tên *" placeholder="Nguyễn Văn A" />
              <Field label="Số điện thoại *" placeholder="0xxx xxx xxx" type="tel" />
              <Field label="Email *" placeholder="email@congty.vn" type="email" className="md:col-span-2" />
              <Field label="Công ty / Tổ chức" placeholder="Tên doanh nghiệp" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Mô tả nhu cầu
                </label>
                <textarea
                  rows={5}
                  placeholder="Bạn đang tìm kiếm giải pháp gì? Quy mô dự án dự kiến?"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:bg-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-sky px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30"
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

function InfoCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
        {icon}
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text", className = "" }: {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand focus:bg-white"
      />
    </div>
  );
}
