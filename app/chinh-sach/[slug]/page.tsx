import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const policies = {
  "bao-hanh": {
    title: "Quy định bảo hành",
    description: "Chính sách bảo hành sản phẩm và bảo hành thi công.",
    sections: [
      {
        h: "1. Phạm vi bảo hành",
        p: "Tất cả sản phẩm máy lạnh do Wintek cung cấp đều được bảo hành chính hãng theo nhà sản xuất, thời hạn từ 12 đến 24 tháng tuỳ theo từng dòng máy.",
      },
      {
        h: "2. Bảo hành thi công",
        p: "Phần thi công lắp đặt được bảo hành 24 tháng kể từ ngày bàn giao. Bao gồm: rò rỉ tại điểm hàn, đường ống đồng, đầu rắc-co, các vị trí siết bu-lông cố định.",
      },
      {
        h: "3. Trường hợp không được bảo hành",
        p: "Sản phẩm bị ảnh hưởng bởi thiên tai, sét đánh, ngập nước, va đập mạnh; hoặc bị tự ý tháo lắp, sửa chữa bởi đơn vị khác sẽ không thuộc phạm vi bảo hành.",
      },
      {
        h: "4. Thời gian xử lý",
        p: "Cam kết phản hồi trong vòng 60 phút kể từ khi nhận yêu cầu. Có mặt khắc phục sự cố trong ngày đối với khu vực TP.HCM.",
      },
    ],
  },
  "van-chuyen": {
    title: "Vận chuyển — Lắp đặt",
    description: "Chính sách giao hàng và lắp đặt máy lạnh.",
    sections: [
      {
        h: "1. Khu vực miễn phí giao hàng",
        p: "Miễn phí giao hàng nội thành TP.HCM (các quận trung tâm). Phí ngoại thành và các tỉnh lân cận sẽ được báo cụ thể tại thời điểm đặt hàng.",
      },
      {
        h: "2. Thời gian giao hàng",
        p: "Trong vòng 4 giờ làm việc đối với đơn hàng đặt trước 15h. Đơn hàng đặt sau 17h sẽ được giao sáng hôm sau.",
      },
      {
        h: "3. Lắp đặt",
        p: "Đội ngũ kỹ thuật sẽ liên hệ hẹn lịch trong vòng 30 phút sau khi nhận đơn. Có thể lắp ngay trong ngày hoặc theo lịch hẹn của khách.",
      },
      {
        h: "4. Vật tư đi kèm",
        p: "Báo giá đã bao gồm: 3m ống đồng inox, dây điện 3 lõi, ống thoát nước, băng cách nhiệt, ốp nẹp nhựa cơ bản. Phát sinh sẽ được thoả thuận rõ trước khi thi công.",
      },
    ],
  },
  "thanh-toan": {
    title: "Phương thức thanh toán",
    description: "Các hình thức thanh toán được hỗ trợ.",
    sections: [
      {
        h: "1. Tiền mặt",
        p: "Thanh toán tiền mặt cho kỹ thuật viên sau khi máy lạnh đã được lắp đặt và vận hành ổn định.",
      },
      {
        h: "2. Chuyển khoản ngân hàng",
        p: "Chuyển khoản qua các ngân hàng Vietcombank, Techcombank, ACB, MB Bank. Cung cấp uỷ nhiệm chi và hoá đơn VAT đầy đủ.",
      },
      {
        h: "3. Trả góp 0% lãi suất",
        p: "Hỗ trợ trả góp qua thẻ tín dụng các ngân hàng: Sacombank, Techcombank, VPBank, Shinhan Bank, HSBC. Kỳ hạn 3, 6, 9, 12 tháng. Thủ tục đơn giản, duyệt nhanh.",
      },
      {
        h: "4. Ví điện tử",
        p: "Chấp nhận thanh toán qua MoMo, ZaloPay, VNPay cho các đơn hàng dưới 20 triệu đồng.",
      },
    ],
  },
  "bao-mat": {
    title: "Chính sách bảo mật",
    description: "Cam kết bảo mật thông tin khách hàng.",
    sections: [
      {
        h: "1. Mục đích thu thập",
        p: "Chúng tôi thu thập thông tin khách hàng (họ tên, số điện thoại, địa chỉ) chỉ nhằm mục đích phục vụ đơn hàng, lắp đặt và bảo hành.",
      },
      {
        h: "2. Phạm vi sử dụng",
        p: "Thông tin được sử dụng nội bộ trong công ty. Chúng tôi không chia sẻ với bên thứ ba ngoài đơn vị vận chuyển và đối tác bảo hành.",
      },
      {
        h: "3. Quyền của khách hàng",
        p: "Khách hàng có quyền yêu cầu chỉnh sửa, xoá thông tin cá nhân của mình bất kỳ lúc nào bằng cách liên hệ hotline hoặc email.",
      },
    ],
  },
  "dieu-khoan": {
    title: "Điều khoản sử dụng",
    description: "Điều khoản sử dụng website và dịch vụ.",
    sections: [
      {
        h: "1. Chấp nhận điều khoản",
        p: "Bằng việc truy cập website, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng dịch vụ.",
      },
      {
        h: "2. Quyền sở hữu trí tuệ",
        p: "Toàn bộ nội dung, hình ảnh trên website thuộc quyền sở hữu của Wintek. Cấm sao chép dưới mọi hình thức khi chưa có sự đồng ý.",
      },
      {
        h: "3. Trách nhiệm",
        p: "Chúng tôi cam kết cung cấp thông tin chính xác. Tuy nhiên, giá có thể thay đổi không báo trước; vui lòng xác nhận lại với hotline trước khi đặt.",
      },
    ],
  },
} as const;

type Slug = keyof typeof policies;

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = policies[slug as Slug];
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = policies[slug as Slug];
  if (!p) notFound();

  return (
    <>
      <PageHero
        title={p.title}
        description={p.description}
        breadcrumbs={[{ label: p.title }]}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-lg font-extrabold text-slate-900">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                {s.p}
              </p>
            </section>
          ))}
        </div>
      </article>
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <CtaBanner />
      </div>
    </>
  );
}
