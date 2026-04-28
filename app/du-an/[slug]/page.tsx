import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { projects } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: "Dự án", href: "/du-an" },
          { label: project.title },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-brand" />
            Năm {project.year}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-brand" />
            TP. Hồ Chí Minh
          </span>
        </div>

        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 70vw"
            className="object-cover"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>Tổng quan dự án</h2>
          <p>{project.summary}</p>
          <h2>Hạng mục thi công</h2>
          <ul>
            <li>Khảo sát hiện trạng và tư vấn phương án tối ưu.</li>
            <li>Cung cấp thiết bị máy lạnh chính hãng theo yêu cầu.</li>
            <li>
              Đi đường ống đồng inox, bọc bảo ôn dày, ốp nẹp thẩm mỹ phù hợp với
              thiết kế nội thất.
            </li>
            <li>Đấu nối điện, hút chân không và kiểm tra rò gas.</li>
            <li>Bàn giao, hướng dẫn sử dụng và bảo trì định kỳ.</li>
          </ul>
          <h2>Cam kết chất lượng</h2>
          <p>
            Dự án được bảo hành thi công 24 tháng. Đội ngũ kỹ thuật cam kết hỗ
            trợ tận nơi trong vòng 60 phút khi có sự cố.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/du-an"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Xem các dự án khác
          </Link>
        </div>
      </article>

      <div className="mx-auto max-w-7xl px-4 pb-12">
        <CtaBanner />
      </div>
    </>
  );
}
