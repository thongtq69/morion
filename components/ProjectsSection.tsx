import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  const items = projects.slice(0, 3);
  return (
    <section className="py-6">
      <SectionHeader title="Dự án" href="/du-an" />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/du-an/${p.slug}`}
            className="group relative block overflow-hidden rounded-md bg-slate-900"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="line-clamp-2 text-sm font-bold uppercase leading-snug drop-shadow">
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
