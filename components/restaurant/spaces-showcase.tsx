import Image from "next/image";
import {
  ArmchairIcon,
  ArrowUpFromDot,
  ChefHatIcon,
  KeyRoundIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Space = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  featured?: boolean;
};

const spaces: Space[] = [
  {
    title: "Salle Principale",
    description:
      "Une salle lumineuse et conviviale, pensée pour vos déjeuners entre collègues comme vos dîners entre amis.",
    image:
      "https://images.unsplash.com/photo-1759038086841-506aae3e1545?w=900&q=80",
    Icon: ArmchairIcon,
    featured: true,
  },
  {
    title: "Tables Familiales",
    description:
      "De grandes tablées pensées pour partager, rire et se retrouver autour de plats généreux.",
    image:
      "https://images.unsplash.com/photo-1694967336926-464982371527?w=700&q=80",
    Icon: UsersRoundIcon,
  },
  {
    title: "Espace Privé",
    description:
      "Un salon feutré, à l'écart, pour vos dîners d'affaires ou célébrations en toute intimité.",
    image:
      "https://images.unsplash.com/photo-1767041140131-b6cb2c40c00e?w=700&q=80",
    Icon: KeyRoundIcon,
  },
  {
    title: "La Cuisine",
    description:
      "Notre brigade s'active derrière la vitre, entre gestes précis et produits frais sélectionnés chaque jour.",
    image:
      "https://images.unsplash.com/photo-1726992117805-6b3c5a8ebd3f?w=700&q=80",
    Icon: ChefHatIcon,
  },
];

function SpaceCard({ space, className }: { space: Space; className?: string }) {
  const { title, description, image, Icon } = space;

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/90" />

      <span className="absolute top-4 right-4 flex size-9 -translate-x-1 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpFromDot className="size-4 rotate-45" />
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <span className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
          <Icon className="size-5" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-balance text-white sm:text-xl">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-pretty text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}

export function SpacesShowcase() {
  const [featured, ...rest] = spaces;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nos espaces"
            title="Un cadre pensé pour chaque moment"
            description="Repas entre amis, dîner en famille, réunion privée ou coulisses gourmandes : chaque coin d'Uni Resto a sa propre identité."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          <Reveal className="h-80 sm:col-span-2 sm:h-96 lg:col-span-2 lg:row-span-2 lg:h-auto">
            <SpaceCard space={featured} />
          </Reveal>
          {rest.map((space, index) => (
            <Reveal
              key={space.title}
              delay={(index + 1) * 100}
              className="h-64 sm:h-72 lg:h-auto"
            >
              <SpaceCard space={space} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
