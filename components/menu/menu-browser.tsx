"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { DishCard } from "@/components/dish-card";
import { cn } from "@/lib/utils";
import type { Category, Dish } from "@/lib/data/menu";

const ALL = "Tout" as const;
const MOBILE_PAGE_SIZE = 2;
const DEFAULT_PAGE_SIZE = 6;
const MOBILE_BREAKPOINT = "(max-width: 639px)";

function useMobilePageSize() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return isMobile ? MOBILE_PAGE_SIZE : DEFAULT_PAGE_SIZE;
}

const tabTriggerClassName =
  "h-auto flex-none rounded-md border-none bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-600 shadow-none transition-colors hover:bg-zinc-200 hover:text-foreground data-active:bg-foreground data-active:text-white data-active:shadow-none";

function chunk<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function MenuCarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Page précédente"
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
        aria-label="Page suivante"
        className={cn(
          "flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md shadow-primary/30 transition-all duration-300 ease-out",
          "hover:bg-primary/90 hover:translate-x-0.5 hover:shadow-lg hover:shadow-primary/40",
          "disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-x-0"
        )}
      >
        <ChevronRightIcon className="size-5" />
      </button>
    </div>
  );
}

export function MenuBrowser({
  dishes,
  categories,
}: {
  dishes: Dish[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as Category | null;
  const initialQuery = searchParams.get("q") ?? "";

  const [activeCategory, setActiveCategory] = useState<Category | typeof ALL>(
    initialCategory && categories.includes(initialCategory)
      ? initialCategory
      : ALL
  );
  const [query, setQuery] = useState(initialQuery);
  const pageSize = useMobilePageSize();

  const filteredDishes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === ALL || dish.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        dish.name.toLowerCase().includes(normalizedQuery) ||
        dish.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [dishes, activeCategory, query]);

  const pages = useMemo(
    () => chunk(filteredDishes, pageSize),
    [filteredDishes, pageSize]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-4">
        <Tabs
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as Category)}
        >
          <TabsList className="h-auto! flex-wrap items-center gap-2.5 bg-transparent p-0">
            <TabsTrigger value={ALL} className={tabTriggerClassName}>
              {ALL}
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={tabTriggerClassName}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex w-full items-center gap-2 rounded-sm border border-border bg-card px-4 py-2.5 sm:w-72">
          <SearchIcon className="size-4 text-muted-foreground" />
          <label htmlFor="menu-search" className="sr-only">
            Rechercher un plat
          </label>
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un plat..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {pages.length > 0 ? (
        <Carousel
          key={`${activeCategory}-${query}-${pageSize}`}
          opts={{ align: "start", loop: false }}
          autoHeight
        >
          <CarouselContent>
            {pages.map((page, pageIndex) => (
              <CarouselItem key={pageIndex} className="basis-full">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {page.map((dish) => (
                    <DishCard key={dish.slug} dish={dish} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {pages.length > 1 && <MenuCarouselControls />}
        </Carousel>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="font-heading text-lg font-semibold text-foreground">
            Aucun plat trouvé
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Essayez une autre recherche ou sélectionnez une autre catégorie.
          </p>
        </div>
      )}
    </div>
  );
}
