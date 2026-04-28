import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { ServicesHome } from "@/components/sections/ServicesHome";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CaseStudiesHome } from "@/components/sections/CaseStudiesHome";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { FAQSection } from "@/components/sections/FAQSection";
import { WikiHome } from "@/components/sections/WikiHome";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CompanyOverview />
      <ServicesHome />
      <IndustriesGrid />
      <CtaBanner />
      <CaseStudiesHome />
      <WhyChooseUs />
      <PartnersMarquee />
      <Testimonials />
      <TechStack />
      <FAQSection />
      <WikiHome />
    </>
  );
}
