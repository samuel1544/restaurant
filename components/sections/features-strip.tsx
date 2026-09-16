import { ChefHatIcon, LeafIcon, TruckIcon } from "lucide-react";

const features = [
  {
    Icon: LeafIcon,
    title: "Ingrédients frais",
    description:
      "Des produits de saison sélectionnés chaque matin auprès de producteurs locaux.",
  },
  {
    Icon: ChefHatIcon,
    title: "Fait maison",
    description:
      "Chaque plat est préparé sur place par notre équipe, sans compromis sur le goût.",
  },
  {
    Icon: TruckIcon,
    title: "Livraison rapide",
    description:
      "Commandez en ligne et recevez votre repas chaud en moins de 30 minutes.",
  },
];

export function FeaturesStrip() {
  return (
    <section
      id="notre-histoire"
      className="border-y border-border/70 bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm text-pretty text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
