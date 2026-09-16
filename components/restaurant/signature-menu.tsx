"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CakeSliceIcon,
  GemIcon,
  MartiniIcon,
  SaladIcon,
  UtensilsCrossedIcon,
  type LucideIcon,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDishesByCategory } from "@/lib/data/menu";
import { cn } from "@/lib/utils";

type MenuLine = {
  name: string;
  description: string;
  price: number;
};

const cocktails: MenuLine[] = [
  {
    name: "Le Jardin Doré",
    description: "Gin, thé vert infusé, citron, fleur de sureau",
    price: 12,
  },
  {
    name: "Braise & Miel",
    description: "Bourbon, miel de fleurs, orange brûlée, angostura",
    price: 13,
  },
  {
    name: "Velours Rouge",
    description: "Vodka, hibiscus, gingembre frais, citron vert",
    price: 11,
  },
  {
    name: "Fraîcheur d'Agrumes",
    description: "Pamplemousse, romarin, tonic — sans alcool",
    price: 7,
  },
];

const menuTabs: {
  value: string;
  label: string;
  Icon: LucideIcon;
  items: MenuLine[];
}[] = [
  {
    value: "entrees",
    label: "Entrées",
    Icon: SaladIcon,
    items: getDishesByCategory("Entrées").slice(0, 4),
  },
  {
    value: "plats",
    label: "Plats Signature",
    Icon: UtensilsCrossedIcon,
    items: getDishesByCategory("Plats").slice(0, 4),
  },
  {
    value: "cocktails",
    label: "Cocktails du Bar",
    Icon: MartiniIcon,
    items: cocktails,
  },
  {
    value: "desserts",
    label: "Desserts",
    Icon: CakeSliceIcon,
    items: getDishesByCategory("Desserts").slice(0, 4),
  },
];

const tabTriggerClassName =
  "h-auto flex-none gap-1.5 rounded-full border-none bg-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground shadow-none transition-colors hover:text-foreground data-active:bg-white data-active:text-foreground data-active:shadow-sm";

export function SignatureMenu() {
  return (
    <section id="carte-signature" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Notre carte
          </span>
          <h2 className="font-display text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            La Carte Signature
          </h2>
          <div className="flex items-center gap-3 pt-1" aria-hidden="true">
            <span className="h-px w-10 bg-border" />
            <GemIcon className="size-4 text-primary" />
            <span className="h-px w-10 bg-border" />
          </div>
          <p className="max-w-md text-base text-pretty text-muted-foreground">
            Une sélection signée par notre chef et notre bar, pensée pour
            célébrer des produits frais et des saveurs franches.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 rounded-sm bg-secondary/40 p-6 ring-1 ring-foreground/10 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-14">
            <Tabs defaultValue="entrees" className="gap-8">
              <TabsList className="mx-auto h-auto! w-fit flex-wrap items-center justify-center gap-1.5 rounded-sm bg-white p-1.5 ring-1 ring-border">
                {menuTabs.map(({ value, label, Icon }) => (
                  <TabsTrigger key={value} value={value} className={tabTriggerClassName}>
                    <Icon className="size-4" />
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuTabs.map(({ value, items }) => (
                <TabsContent key={value} value={value}>
                  <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
                    {items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col gap-1.5 border-b border-border pb-4"
                      >
                        <div className="flex items-baseline gap-3">
                          <h3 className="font-display text-lg font-medium text-foreground">
                            {item.name}
                          </h3>
                          <span
                            className="h-px flex-1 -translate-y-1 border-b border-dotted border-border"
                            aria-hidden="true"
                          />
                          <span className="shrink-0 font-heading text-base font-semibold text-primary">
                            {item.price.toFixed(2).replace(".", ",")} €
                          </span>
                        </div>
                        <p className="text-sm text-pretty text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="hidden flex-col gap-4 self-start rounded-sm bg-white p-6 ring-1 ring-foreground/10 lg:flex lg:sticky lg:top-24">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80"
                  alt="Steak Grillé Sauce Poivre"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <Badge className="w-fit">Coup de cœur du chef</Badge>
              <h3 className="font-display text-xl font-medium text-foreground">
                Steak Grillé Sauce Poivre
              </h3>
              <p className="text-sm text-pretty text-muted-foreground">
                Bavette grillée, sauce au poivre maison et pommes de terre
                fondantes.
              </p>
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "gap-1.5 rounded-sm"
                )}
              >
                Voir tout le menu
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
