import Image from "next/image";
import Link from "next/link";
import {
  Clock3Icon,
  MartiniIcon,
  SparklesIcon,
  WineIcon,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features: { Icon: LucideIcon; label: string }[] = [
  { Icon: MartiniIcon, label: "Cocktails signature" },
  { Icon: WineIcon, label: "Vins et spiritueux choisis" },
  { Icon: Clock3Icon, label: "Happy hour 18h – 20h" },
  { Icon: SparklesIcon, label: "Créations sur mesure" },
];

export function BarSection() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="flex flex-col items-start gap-5">
              <SectionHeading
                eyebrow="Notre bar"
                title="L'art de la mixologie, sous vos yeux"
                description="Notre équipe de bartenders imagine des cocktails signature et revisite les classiques avec des produits frais et des gestes précis, au comptoir comme en salle."
              />

              <div className="mt-2 grid grid-cols-2 gap-4">
                {features.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm text-foreground/80">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#carte-signature"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-4 rounded-full px-8"
                )}
              >
                Découvrir nos créations
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1632987794996-183d64e58f16?w=1000&q=80"
                  alt="Bartender préparant un cocktail signature au comptoir"
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1739799120521-c5f44a9335a3?w=600&q=80"
                  alt="Ambiance chaleureuse du comptoir du bar"
                  fill
                  sizes="(min-width: 1024px) 270px, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1747354210233-3844175cd45b?w=600&q=80"
                  alt="Étagère colorée de bouteilles et spiritueux"
                  fill
                  sizes="(min-width: 1024px) 270px, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
