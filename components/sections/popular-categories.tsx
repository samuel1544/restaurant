import Link from "next/link";
import {
  CakeSliceIcon,
  CoffeeIcon,
  CupSodaIcon,
  IceCreamConeIcon,
  PizzaIcon,
  PopcornIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const categories = [
  { name: "Café", Icon: CoffeeIcon, count: 10, price: "4 €" },
  { name: "Repas", Icon: PizzaIcon, count: 12, price: "12 €" },
  { name: "Snack", Icon: PopcornIcon, count: 14, price: "8 €", active: true },
  { name: "Boissons", Icon: CupSodaIcon, count: 13, price: "3 €" },
  { name: "Gâteaux", Icon: CakeSliceIcon, count: 15, price: "7 €" },
  { name: "Glaces", Icon: IceCreamConeIcon, count: 16, price: "6 €" },
];

export function PopularCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-xs py-2.5 bg-zinc-100 px-10 text-xs font-medium text-zinc-600">
            Catégorie
          </span>
          <h2 className="font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Catégories populaires
          </h2>
          <span className="h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {categories.map(({ name, Icon, count, price, active }) => (
            <Link
              key={name}
              href="/menu"
              className={cn(
                "flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-6 h-44 text-center transition-transform sm:h-50",
                active
                  ? "bg-primary shadow-xl shadow-primary/30"
                  : "bg-zinc-100 hover:-translate-y-0.5"
              )}
            >
              <span className="relative flex size-14 items-center justify-center rounded-full bg-white ">
                <Icon className="size-6 text-foreground" />
                <span
                  className={cn(
                    "absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-[10px] font-semibold",
                    active
                      ? "bg-white text-primary"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {count}
                </span>
              </span>

              <div className="flex flex-col gap-0.5 ">
                <span
                  className={cn(
                    "font-heading text-sm font-semibold",
                    active ? "text-primary-foreground" : "text-foreground"
                  )}
                >
                  {name}
                </span>
                <span
                  className={cn(
                    "text-xs",
                    active
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  Dès {price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
