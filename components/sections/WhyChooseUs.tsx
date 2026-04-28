import Image from "next/image";
import { home } from "@/lib/site";

export function WhyChooseUs() {
  const w = home.whyChooseUs;
  return (
    <section className="relative overflow-hidden bg-[#050a18] py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(11,188,214,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(22,82,240,0.3), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-sm text-hero-cyan">+ {w.label}</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {w.headline[0]}{" "}
            <span className="font-script text-hero-cyan">{w.headline[1]}</span>{" "}
            {w.headline[2]}
          </h2>
          <p className="mt-3 text-base text-white/70">{w.subhead}</p>
        </div>

        <p className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-white/50">{w.intro}</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {w.items.map((it: any, i: number) => (
            <div
              key={it.title}
              className={`group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-hero-cyan/40 hover:bg-white/10 ${
                i === 1 ? "lg:translate-y-4" : i === 3 ? "lg:translate-y-4" : ""
              }`}
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-sky">
                {it.icon ? (
                  <Image src={it.icon} alt="" width={28} height={28} className="brightness-0 invert" />
                ) : (
                  <span className="h-7 w-7 rounded bg-white/30" />
                )}
              </span>
              <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
