import Image from "next/image";

import { Rating } from "@/components/rating";
import { cn } from "@/lib/utils";
import type { Dish } from "@/lib/data/menu";

type DishCardProps = {
  dish: Dish;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function DishCard({
  dish,
  priority = false,
  sizes = "(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw",
  className,
}: DishCardProps) {
  return (
    <div
      className={cn(
        "group rounded-sm bg-white p-3 ring-1 ring-foreground/10",
        className
      )}
    >
      <div className="relative aspect-[1.1] w-full overflow-hidden rounded-sm">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2.5 pt-3">
        <span className="w-fit rounded-xs bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
          {dish.tag}
        </span>
        <h3 className="font-heading text-base leading-snug font-semibold text-balance text-foreground">
          {dish.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <Rating value={dish.rating} reviews={dish.reviews} />
          <span className="shrink-0 text-sm font-semibold text-foreground">
            {dish.price.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>
    </div>
  );
}
