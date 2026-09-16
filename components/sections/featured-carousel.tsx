"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { DishCard } from "@/components/dish-card";
import { cn } from "@/lib/utils";
import type { Dish } from "@/lib/data/menu";

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
          "flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors",
          "hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
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
          "flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors",
          "hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-40"
        )}
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  );
}

export function FeaturedCarousel({ dishes }: { dishes: Dish[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: false }}
      className="flex flex-col gap-6"
    >
      <CarouselContent>
        {dishes.map((dish, index) => (
          <CarouselItem
            key={dish.slug}
            className="basis-[78%] sm:basis-1/2 lg:basis-1/2 xl:basis-[45%]"
          >
            <DishCard dish={dish} priority={index === 0} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-end">
        <CarouselControls />
      </div>
    </Carousel>
  );
}
