import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ light = false, width = 130, height = 36 }: { light?: boolean; width?: number; height?: number }) {
  const src = "https://image.homenest.com.vn/wp-content/uploads/2026/04/Logo-HomeNest-Viet-Nam.png";
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label={site.name}>
      <Image
        src={src}
        alt={`Logo ${site.shortName}`}
        title={`Logo ${site.shortName}`}
        width={width}
        height={height}
        priority
        className={light ? "brightness-0 invert" : ""}
      />
    </Link>
  );
}
