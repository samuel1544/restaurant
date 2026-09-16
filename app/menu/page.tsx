import { Suspense } from "react";
import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { MenuBrowser } from "@/components/menu/menu-browser";
import { categories, dishes } from "@/lib/data/menu";
import { Activities } from "@/components/menu/activities";
import { EventBooking } from "@/components/menu/event-booking";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Découvrez le menu complet d'Uni Resto : entrées, plats, snacks, boissons et desserts préparés avec des produits frais.",
};

export default function MenuPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Notre menu"
          title="Un menu pensé pour tous les appétits"
          description="Filtrez par catégorie ou recherchez un plat pour composer votre commande en quelques secondes."
        />

        <div className="mt-10">
          <Suspense fallback={<MenuBrowserFallback />}>
            <MenuBrowser dishes={dishes} categories={categories} />
          </Suspense>
          <Activities />
        </div>
      </div>
      <EventBooking />
    </section>
  );
}

function MenuBrowserFallback() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="aspect-[1.1] animate-pulse rounded-sm bg-muted"
        />
      ))}
    </div>
  );
}
