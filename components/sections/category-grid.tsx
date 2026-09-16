import Link from "next/link";
import {
  CupSodaIcon,
  IceCreamBowlIcon,
  SaladIcon,
  SoupIcon,
  UtensilsIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import type { Category } from "@/lib/data/menu";

const categoryMeta: Record<Category, { Icon: typeof SoupIcon }> = {
  Entrées: { Icon: SaladIcon },
  Plats: { Icon: UtensilsIcon },
  Snacks: { Icon: SoupIcon },
  Boissons: { Icon: CupSodaIcon },
  Desserts: { Icon: IceCreamBowlIcon },
};

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Explorez"
        title="Le menu par catégorie"
        description="Entrées, plats, snacks, boissons ou desserts : trouvez rapidement ce qui vous fait envie."
        align="center"
        className="mx-auto"
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => {
          const { Icon } = categoryMeta[category];
          return (
            <Link
              key={category}
              href={`/menu?category=${encodeURIComponent(category)}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-colors hover:border-primary"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="font-heading text-sm font-semibold text-foreground">
                {category}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
