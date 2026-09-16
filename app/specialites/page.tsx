import type { Metadata } from "next";

import { RestaurantHero } from "@/components/restaurant/hero";
import { SpacesShowcase } from "@/components/restaurant/spaces-showcase";
import { BarSection } from "@/components/restaurant/bar-section";
import { SignatureMenu } from "@/components/restaurant/signature-menu";
import { TeamSection } from "@/components/restaurant/team-section";
import { VisitCta } from "@/components/restaurant/visit-cta";

export const metadata: Metadata = {
  title: "Notre Restaurant",
  description:
    "Découvrez Uni Resto : nos espaces (salle principale, tables familiales, salon privé, cuisine ouverte), notre bar signature, notre carte et notre équipe.",
};

export default function NotreRestaurantPage() {
  return (
    <>
      <RestaurantHero />
      <SpacesShowcase />
      <BarSection />
      <SignatureMenu />
      <TeamSection />
      <VisitCta />
    </>
  );
}
