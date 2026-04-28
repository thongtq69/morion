import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { news } from "@/lib/site";

export function RecentPosts({ limit = 5 }: { limit?: number }) {
  const items = news.slice(0, limit);
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <header className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-3">
        <span className="h-6 w-1.5 rounded-full bg-accent" />
        <h2 className="text-base font-extrabold uppercase tracking-tight text-slate-900">
          Bài viết gần đây
        </h2>
      </header>
      <ul className="divide-y divide-slate-100">
        {items.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/tin-tuc/${n.slug}`}
              className="group flex items-start gap-3 py-3"
            >
              <span className="relative block h-14 w-20 shrink-0 overflow-hidden rounded-md bg-slate-100">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-800 transition group-hover:text-brand">
                  {n.title}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-slate-400">
                  <MessageCircle className="h-3 w-3" />0 bình luận
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
