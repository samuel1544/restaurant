import Image from "next/image";
import {
  ArrowUpRightIcon,
  DramaIcon,
  GuitarIcon,
  MicIcon,
  PalmtreeIcon,
  PuzzleIcon,
  ArrowUpFromDot,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Activity = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  featured?: boolean;
};

const activities: Activity[] = [
  {
    title: "Soirée Karaoké",
    description:
      "Chantez vos titres préférés sur scène, entre amis, dans une ambiance électrique.",
    image:
      "https://images.unsplash.com/photo-1786376461576-bc24acdd9a24?w=900&q=80",
    Icon: MicIcon,
    featured: true,
  },
  {
    title: "Soirée Costumée",
    description:
      "Enfilez votre plus beau déguisement pour une soirée haute en couleur et pleine de surprises.",
    image:
      "https://images.unsplash.com/photo-1779551612327-630b0cb55cd6?w=700&q=80",
    Icon: DramaIcon,
  },
  {
    title: "Soirée Tropicale",
    description:
      "Cocktails exotiques et rythmes ensoleillés pour une évasion sans quitter la ville.",
    image:
      "https://images.unsplash.com/photo-1749802916017-2fd88590133a?w=700&q=80",
    Icon: PalmtreeIcon,
  },
  {
    title: "Quiz Night",
    description:
      "Formez votre équipe et tentez de remporter de nombreux lots lors de notre grand quiz.",
    image:
      "https://images.unsplash.com/photo-1710871131994-b309b3d871a6?w=700&q=80",
    Icon: PuzzleIcon,
  },
  {
    title: "Brunch Musical",
    description:
      "Un moment convivial rythmé par nos artistes locaux, entre bonne musique et bons plats.",
    image:
      "https://images.unsplash.com/photo-1779080415622-7b77ccf7794c?w=700&q=80",
    Icon: GuitarIcon,
  },
];

function ActivityCard({
  activity,
  className,
}: {
  activity: Activity;
  className?: string;
}) {
  const { title, description, image, Icon } = activity;

  return (
    <div
      className={cn(
        "group relative h-56 overflow-hidden rounded-2xl sm:h-64 lg:h-auto",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/90" />

      <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 -translate-x-1 translate-y-1">
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

export function Activities() {
  const [featured, ...rest] = activities;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-xs bg-zinc-100 px-6 py-2.5 text-xs font-medium text-zinc-600">
            Animation
          </span>
          <h2 className="font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Nos Différentes Activités
          </h2>
           <span className="h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
          <p className="max-w-xl text-base text-pretty text-muted-foreground">
            Chaque semaine, Uni Resto se transforme pour vous offrir des
            soirées uniques : ambiance, musique et bonne humeur au
            rendez-vous.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
          <ActivityCard
            activity={featured}
            className="h-72 sm:col-span-2 sm:h-80 lg:col-span-2 lg:row-span-2 lg:h-auto"
          />
          {rest.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
