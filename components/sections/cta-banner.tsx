import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center sm:px-16">
        <h2 className="font-heading max-w-xl text-3xl leading-tight font-bold text-balance text-primary-foreground sm:text-4xl">
          Envie de bons plats dès aujourd&apos;hui ?
        </h2>
        <p className="max-w-md text-base text-pretty text-primary-foreground/85">
          Parcourez notre menu complet et commandez en quelques clics, pour
          une livraison rapide ou à emporter.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-background px-6 text-foreground hover:bg-background/90"
            )}
          >
            Voir le menu
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            )}
          >
            Réserver une table
          </Link>
        </div>
      </div>
    </section>
  );
}
