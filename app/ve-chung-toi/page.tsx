import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { aboutPage } from "@/lib/data/about";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.metaDescription,
};

export default function VeChungToiPage() {
  return (
    <>
      <PageHero
        title="Về HomeNest Việt Nam"
        description={aboutPage.metaDescription}
        breadcrumbs={[{ label: "Về chúng tôi" }]}
        variant="dark"
      />
      <CompanyOverview />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <article
            className="hn-content"
            dangerouslySetInnerHTML={{ __html: aboutPage.contentHtml || `<p>${aboutPage.contentText || ""}</p>` }}
          />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
