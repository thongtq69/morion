import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#1f5fc0] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block rounded bg-white p-3">
            <Logo />
          </span>
          <h3 className="mt-4 text-base font-bold uppercase">{site.company}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li>
              <span className="font-semibold">Địa chỉ : </span>
              {site.address}
            </li>
            <li>
              <span className="font-semibold">Số điện thoại: </span>
              {site.hotlineRaw}
            </li>
            <li>
              <span className="font-semibold">Email : </span>
              {site.email}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold uppercase">VỀ CHÚNG TÔI</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Giới Thiệu", "/gioi-thieu"],
              ["Liên Hệ", "/lien-he"],
              ["Tin Tức", "/tin-tuc"],
              ["Dự Án", "/du-an"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/90 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-bold uppercase">SẢN PHẨM</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Phương Thức Thanh Toán", "/chinh-sach/thanh-toan"],
              ["Quy Định Bảo Hành", "/chinh-sach/bao-hanh"],
              ["Vận chuyển - Giao nhận", "/chinh-sach/van-chuyen"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-white/90 hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base font-bold uppercase">Đăng ký nhận tin</h3>
          <p className="text-sm text-white/85">
            Để lại thông tin để nhận tin tức mới nhất từ chúng tôi
          </p>
          <form className="mt-4 flex overflow-hidden rounded bg-white">
            <input
              type="email"
              placeholder="Nhập Email ngay"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="bg-[#0c3f8a] px-4 text-sm font-bold uppercase text-white hover:bg-[#062c66]"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#1854a8]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-4 text-xs text-white/85 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              Copyright © {new Date().getFullYear()} {site.company}
            </p>
            <p className="mt-1">
              Tổng Truy Cập: <strong className="text-white">89.984</strong> |
              Đang Online: <strong className="text-white">20</strong>
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-2 text-slate-800 shadow">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-brand">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </span>
            <span className="text-[12px] leading-snug">
              <span className="block font-bold uppercase">
                Giấy phép kinh doanh số : 0318858103
              </span>
              <span className="block text-slate-600">
                Cấp ngày 04/03/2025 bởi Sở Kế Hoạch và Đầu Tư TP.HCM
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
