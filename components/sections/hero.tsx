import Link from "next/link";
import { PlayIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { HeroImageRotator } from "@/components/sections/hero-image-rotator";
import { getDishBySlug } from "@/lib/data/menu";

const heroImages = [
  "sembharachi-kodi-curry",
  "buddha-bowl-frais",
  "plateau-sushi-signature",
]
  .map((slug) => getDishBySlug(slug))
  .filter((dish) => dish !== undefined)
  .map((dish) => ({ src: dish.image, alt: dish.name }));

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-heading max-w-xl text-4xl leading-[1.1] font-bold text-balance text-foreground sm:text-5xl">
            De bons plats et de bonnes boissons pour une vie saine
          </h1>
          <p className="max-w-lg text-base text-pretty text-muted-foreground sm:text-lg">
            Uni Resto sélectionne chaque jour des ingrédients frais et de
            saison pour composer une cuisine généreuse, saine et pleine de
            saveurs — à savourer sur place ou à emporter.
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              href="/menu"
              className={buttonVariants({
                size: "lg",
                className: "sm:rounded-[3px] px-6 h-15",
              })}
            >
              Commander maintenant
            </Link>
            <Link
              href="#notre-histoire"
              className="group flex items-center gap-3 text-sm font-semibold text-foreground"
            >
              Voir notre histoire
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <PlayIcon className="size-4 translate-x-0.5" fill="currentColor" />
              </span>
            </Link>
          </div>
        </div>

        <HeroImageRotator images={heroImages} />
      </div>
    </section>
  );
}
