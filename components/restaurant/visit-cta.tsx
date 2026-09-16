import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function VisitCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center sm:px-16">
        <h2 className="font-display max-w-xl text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
          Envie de vivre l&apos;expérience Uni Resto ?
        </h2>
        <p className="max-w-md text-base text-pretty text-primary-foreground/85">
          Réservez votre table dès aujourd&apos;hui et laissez-nous vous
          accueillir dans nos espaces, ou parcourez notre carte complète.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-background px-6 text-foreground hover:bg-background/90"
            )}
          >
            Réserver une table
          </Link>
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            )}
          >
            Voir le menu complet
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
