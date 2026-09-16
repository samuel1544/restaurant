import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { PopularCategories } from "@/components/sections/popular-categories";
import { CustomerGallery } from "@/components/sections/customer-gallery";
import { PopularMenu } from "@/components/sections/popular-menu";
import { HappyCustomers } from "@/components/sections/happy-customers";
import { Activities } from "@/components/menu/activities";
import { FeaturesStrip } from "@/components/sections/features-strip";
// import { SpecialtiesTeaser } from "@/components/sections/specialties-teaser";
// import { CategoryGrid } from "@/components/sections/category-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
// import { categories } from "@/lib/data/menu";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PopularCategories />
      <CustomerGallery />
      <PopularMenu />
      <HappyCustomers />
      {/* <Activities /> */}
      <FeaturesStrip />
      {/* <SpecialtiesTeaser /> */}
      {/* <CategoryGrid categories={categories} /> */}
      <CtaBanner />
    </>
  );
}
