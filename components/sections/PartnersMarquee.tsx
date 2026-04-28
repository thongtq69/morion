import Image from "next/image";

const PARTNER_LOGOS = [
  "https://image.homenest.software/wp-content/uploads/2026/04/Onehouse-Partner-logo-HomeNest.Software.png",
  "https://image.homenest.software/wp-content/uploads/2026/04/Lovers-Lawn-Partner-logo-HomeNest.Software.png",
  "https://image.homenest.software/wp-content/uploads/2026/04/Hang-Kenh-Partner-logo-HomeNest.Software.png",
  "https://image.homenest.software/wp-content/uploads/2026/04/Viet-Plus-Partner-logo-HomeNest.Software.png",
];

export function PartnersMarquee() {
  const items = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-[1345px] px-10 text-center">
        <h3 className="text-3xl font-extrabold text-[#0d1321] md:text-4xl">
          <span className="text-brand">250+</span> Đối tác đồng hành
        </h3>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {items.map((src, i) => (
            <span key={`${src}-${i}`} className="relative block h-16 w-40 shrink-0">
              <Image src={src} alt="Partner" fill sizes="160px" className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
