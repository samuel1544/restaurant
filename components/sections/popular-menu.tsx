"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Rating } from "@/components/rating";
import { cn } from "@/lib/utils";

const dishes = [
  {
    name: "Oishi Caramel Popcorn",
    tag: "Snack",
    rating: 4,
    reviews: 36,
    image:
      "https://images.unsplash.com/photo-1766728904776-3e87fec45658?w=600&q=80",
  },
  {
    name: "Oishi Caramel Popcorn",
    tag: "Snack",
    rating: 4,
    reviews: 36,
    image:
      "https://images.unsplash.com/photo-1766728904776-3e87fec45658?w=600&q=80",
  },
  {
    name: "Ball Ice Cream",
    tag: "Glace",
    rating: 4,
    reviews: 24,
    image:
      "https://images.unsplash.com/photo-1646318754907-dc7c0d236a97?w=600&q=80",
  },
  {
    name: "Fresh Orange Ice",
    tag: "Boisson",
    rating: 4,
    reviews: 80,
    image:
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=600&q=80",
  },
  {
    name: "Oishi Caramel Popcorn",
    tag: "Snack",
    rating: 4,
    reviews: 36,
    image:
      "https://images.unsplash.com/photo-1766728904776-3e87fec45658?w=600&q=80",
  },
  {
    name: "Sembharachi Kodi Curry",
    tag: "Food",
    rating: 4,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    name: "Oishi Caramel Popcorn",
    tag: "Snack",
    rating: 4,
    reviews: 36,
    image:
      "https://images.unsplash.com/photo-1766728904776-3e87fec45658?w=600&q=80",
  },
] as const;

function CarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Plat précédent"
        className={cn(
          "flex size-11 items-center justify-center rounded-md border border-border bg-white text-muted-foreground transition-all duration-300 ease-out",
          "hover:border-primary hover:text-primary hover:-translate-x-0.5 hover:shadow-md hover:shadow-primary/10",
          "disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-x-0"
        )}
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Plat suivant"
        className={cn(
          "flex size-12 items-center justify-center rounded-md border border-border  bg-white text-muted-foreground  transition-all duration-300 ease-out",
          "hover:border-primary hover:text-primary hover:translate-x-0.5 hover:shadow-md hover:shadow-primary/10 ",
          "disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-x-0"
        )}
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  );
}

export function PopularMenu() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Carousel opts={{ align: "start", loop: false }}>
          <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
            <CarouselControls />

            <div className="flex flex-col items-center gap-3 sm:items-end">
              <span className="w-fit rounded-xs bg-zinc-100 px-6 py-2.5 text-xs font-medium text-zinc-600">
                Catégorie
              </span>
              <h2 className="font-heading text-center text-3xl font-bold text-balance text-foreground sm:text-right sm:text-4xl">
                Menu Populaire
              </h2>
              <span
                className="h-1 w-12 rounded-full bg-primary"
                aria-hidden="true"
              />
            </div>
          </div>

          <CarouselContent className="-ml-6 mt-10">
            {dishes.map((dish) => (
              <CarouselItem
                key={dish.name}
                className="basis-full pl-6 sm:basis-1/2 lg:basis-1/4"
              >
                <div className="rounded-sm bg-white p-3 ring-1 ring-foreground/10">
                  <div className="relative aspect-[1.1] w-full overflow-hidden rounded-sm">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 pt-3">
                    <h3 className="font-heading text-base leading-snug font-semibold text-balance text-foreground">
                      {dish.name}
                    </h3>
                    <span className="w-fit rounded-xs bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                      {dish.tag}
                    </span>
                    <div className="mt-5 flex items-center justify-between gap-2">
                      <Rating value={dish.rating} />
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                        {dish.reviews} avis
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <span
          className="mt-10 block h-1 w-28 rounded-full bg-primary/50"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
