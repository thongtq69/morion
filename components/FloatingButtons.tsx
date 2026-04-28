import { Phone } from "lucide-react";
import { ZaloIcon, WhatsappIcon } from "./BrandIcons";
import { site } from "@/lib/site";

export function FloatingButtons() {
  const wa = site.social?.whatsapp || `https://wa.me/${site.hotlineRaw}`;
  const zalo = site.social?.zalo || `https://zalo.me/${site.hotlineRaw}`;
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/40 transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsappIcon className="h-6 w-6" />
      </a>
      <a
        href={zalo}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg shadow-blue-500/40 transition hover:scale-110"
        aria-label="Zalo"
      >
        <ZaloIcon className="h-6 w-6" />
      </a>
      <a
        href={`tel:${site.hotlineRaw}`}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b35] text-white shadow-lg shadow-orange-500/40 transition hover:scale-110"
        aria-label={`Gọi ${site.hotline}`}
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#ff6b35]/40" />
        <Phone className="h-5 w-5 animate-shake" />
      </a>
    </div>
  );
}
