import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, ThumbsUp, MapPinned } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BrandsMarquee } from "@/components/BrandsMarquee";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: `Câu chuyện và sứ mệnh của ${site.name}.`,
};

const stats = [
  { icon: Users, value: "12+", label: "Năm kinh nghiệm" },
  { icon: ThumbsUp, value: "1.500+", label: "Công trình hoàn thành" },
  { icon: Award, value: "30+", label: "Thương hiệu phân phối" },
  { icon: MapPinned, value: "24/7", label: "Tư vấn — Hỗ trợ" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Về Wintek"
        description="Wintek — Nhà phân phối sỉ lẻ hệ thống điều hoà không khí chính hãng cho công trình dân dụng, khách sạn, cửa hàng, nhà xưởng và đại lý phân phối tỉnh."
        breadcrumbs={[{ label: "Giới thiệu" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Câu chuyện của chúng tôi
            </span>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">
              Mang không khí mát lành — chính hãng — bền bỉ đến từng gia đình Việt
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 md:text-base">
              <p>
                Thành lập từ năm 2013, {site.name} bắt đầu từ một cửa hàng nhỏ tại
                Quận Tân Phú với niềm tin rằng máy lạnh không chỉ là thiết bị, mà
                là một phần của tổ ấm. Hơn một thập kỷ qua, chúng tôi đã đồng hành
                cùng hàng ngàn khách hàng từ hộ gia đình, cao ốc, đến showroom,
                nhà máy.
              </p>
              <p>
                Chúng tôi là đại lý uỷ quyền của Daikin, Panasonic, LG, Samsung,
                Toshiba, Mitsubishi, Casper, Midea… cam kết hàng chính hãng 100%
                và bảo hành đầy đủ theo nhà sản xuất. Đội ngũ kỹ thuật được đào
                tạo bài bản, có chứng chỉ, làm việc với phương châm{" "}
                <strong>“Đến đúng giờ — Làm đúng việc — Trả đúng giá”</strong>.
              </p>
              <p>
                Sứ mệnh của chúng tôi: Mang đến trải nghiệm điện lạnh chuyên
                nghiệp, minh bạch và bền bỉ — để mỗi gia đình, mỗi doanh nghiệp
                Việt đều xứng đáng được phục vụ tận tâm nhất.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?auto=format&fit=crop&w=900&q=80"
              alt="Đội ngũ kỹ thuật"
              fill
              sizes="(max-width:1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-3xl font-extrabold text-slate-900">{value}</p>
              <p className="mt-0.5 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tầm nhìn",
              desc: "Trở thành thương hiệu điện lạnh được tin yêu nhất khu vực phía Nam, tiên phong về chất lượng dịch vụ và độ minh bạch.",
            },
            {
              title: "Sứ mệnh",
              desc: "Mỗi sản phẩm bán ra phải đi kèm trải nghiệm dịch vụ tốt nhất — tư vấn đúng nhu cầu, lắp đặt chuẩn kỹ thuật, bảo hành tận nơi.",
            },
            {
              title: "Giá trị cốt lõi",
              desc: "Tận tâm — Trung thực — Đúng giờ. Khách hàng không chỉ trả tiền cho một sản phẩm, họ trả tiền cho sự yên tâm.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-brand">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-12">
        <CtaBanner />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <BrandsMarquee />
      </div>
    </>
  );
}
