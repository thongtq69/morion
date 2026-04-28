import { Mail, Phone } from "lucide-react";
import { ZaloIcon } from "./BrandIcons";
import { site } from "@/lib/site";

export function FloatingButtons() {
  return (
    <div className="fixed left-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      <a
        href={`mailto:${site.email}`}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1e88ff] text-white shadow-lg shadow-blue-500/40 hover:opacity-90"
        aria-label={`Email ${site.email}`}
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href={`https://zalo.me/${site.zalo}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg shadow-blue-500/30 hover:opacity-90"
        aria-label="Chat Zalo"
      >
        <ZaloIcon className="h-5 w-5" />
      </a>
      <a
        href={`tel:${site.hotlineRaw}`}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e63946] text-white shadow-lg shadow-red-500/40 hover:opacity-90"
        aria-label={`Gọi ${site.hotline}`}
      >
        <Phone className="h-5 w-5 animate-shake" />
      </a>
    </div>
  );
}
