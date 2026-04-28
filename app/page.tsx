import { HeroSlider, HeroFeaturedSidebar } from "@/components/HeroSlider";
import { ProductsByCategory } from "@/components/ProductsByCategory";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BrandsStrip } from "@/components/BrandsMarquee";
import { productCategories } from "@/lib/site";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-3 py-5">
          <section className="grid gap-4 lg:grid-cols-[7fr_3fr]">
            <HeroSlider />
            <HeroFeaturedSidebar />
          </section>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-3 py-4">
          <BrandsStrip />
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-3">
        {productCategories.map((c) => (
          <ProductsByCategory
            key={c.slug}
            category={c.slug}
            title={c.title}
            href={`/san-pham/${c.slug}`}
          />
        ))}

        <ProjectsSection />
      </div>
    </>
  );
}
