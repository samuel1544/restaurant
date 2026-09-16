import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { DishCard } from "@/components/dish-card";
import { buttonVariants } from "@/components/ui/button";
import { getSpecialtyDishes } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

export function SpecialtiesTeaser() {
  const specialties = getSpecialtyDishes().slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Nos favoris"
          title="Les spécialités du chef"
          description="Une sélection de plats signatures, plébiscités par nos clients semaine après semaine."
        />
        <Link
          href="/specialites"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "shrink-0 gap-1.5 rounded-full"
          )}
        >
          Toutes les spécialités
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specialties.map((dish) => (
          <DishCard key={dish.slug} dish={dish} />
        ))}
      </div>
    </section>
  );
}
