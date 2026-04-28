import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/ServicesSection";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description:
    "Lắp đặt — Vệ sinh — Bảo trì — Sửa chữa — Di dời máy lạnh tận nơi tại TP.HCM.",
};

const process = [
  {
    step: "01",
    title: "Tiếp nhận yêu cầu",
    desc: "Tư vấn qua hotline, Zalo hoặc Facebook 24/7. Khảo sát tận nơi nếu cần.",
  },
  {
    step: "02",
    title: "Báo giá rõ ràng",
    desc: "Gửi báo giá chi tiết bằng văn bản. Không phát sinh chi phí ẩn sau khi đã chốt.",
  },
  {
    step: "03",
    title: "Thi công chuẩn kỹ thuật",
    desc: "Đi đường ống đồng inox, hút chân không, kiểm tra rò gas trước khi bàn giao.",
  },
  {
    step: "04",
    title: "Bảo hành & Hỗ trợ",
    desc: "Bảo hành thi công 24 tháng. Hỗ trợ kỹ thuật trọn đời máy.",
  },
];

const guarantees = [
  "Bảo hành chính hãng 12 – 24 tháng theo từng dòng máy.",
  "Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng các ngân hàng lớn.",
  "Giao hàng miễn phí nội thành TP.HCM, các quận trung tâm trong vòng 4 giờ.",
  "Đổi trả trong 7 ngày nếu lỗi do nhà sản xuất.",
  "Có hợp đồng và xuất hoá đơn VAT đầy đủ.",
  "Đội ngũ kỹ thuật đồng phục, có thẻ — đến đúng giờ.",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Dịch vụ chuyên nghiệp"
        description="Toàn bộ chuỗi dịch vụ điện lạnh — từ tư vấn ban đầu đến bảo hành sau bán hàng — được chúng tôi tự thực hiện, không qua trung gian."
        breadcrumbs={[{ label: "Dịch vụ" }]}
      />

      <div className="mx-auto max-w-7xl px-4">
        <ServicesSection />

        <section className="py-12">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Quy trình 4 bước
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
              Quy trình thi công minh bạch
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-5xl font-black text-brand-light">
                  {p.step}
                </span>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="grid gap-8 rounded-3xl bg-slate-50 p-8 md:grid-cols-2 md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                Cam kết của chúng tôi
              </span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                6 cam kết — Vì sự yên tâm của bạn
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Mỗi đơn hàng đều được theo dõi đến tận khi máy lạnh vận hành ổn
                định trong nhà bạn. Chúng tôi xem dịch vụ sau bán hàng quan trọng
                không kém chất lượng sản phẩm.
              </p>
            </div>
            <ul className="grid gap-3">
              {guarantees.map((g) => (
                <li key={g} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="pb-12">
          <CtaBanner />
        </div>
      </div>
    </>
  );
}
