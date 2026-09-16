"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const ROTATION_INTERVAL_MS = 6500;

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1779405210258-8b995ece3591?w=1800&q=80",
    alt: "Coin lumineux et coloré baigné de soleil, ambiance chaleureuse",
  },
  {
    src: "https://images.unsplash.com/photo-1759038086841-506aae3e1545?w=1800&q=80",
    alt: "Salle principale aux banquettes rondes et luminaires suspendus",
  },
  {
    src: "https://images.unsplash.com/photo-1767041140131-b6cb2c40c00e?w=1800&q=80",
    alt: "Salon d'accueil coloré avec sol graphique et entrée vitrée",
  },
];

export function RestaurantHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % heroImages.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[100svh] max-h-[880px] min-h-[600px] w-full items-center justify-center overflow-hidden bg-foreground">
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-[opacity,transform] duration-[2500ms] ease-out",
            index === active ? "scale-105 opacity-100" : "scale-100 opacity-0"
          )}
        />
      ))}

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Reveal>
          <span className="w-fit rounded-xs bg-white/15 px-6 py-2.5 text-xs font-medium tracking-wide text-white uppercase ring-1 ring-white/25 backdrop-blur-sm">
            Uni Resto — L&apos;expérience
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display max-w-2xl text-4xl leading-[1.1] font-semibold text-balance text-white sm:text-5xl lg:text-6xl">
            L&apos;art de recevoir, à chaque table
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="max-w-xl text-base text-pretty text-white/90 sm:text-lg">
            De l&apos;accueil chaleureux à notre bar signature, découvrez les
            espaces qui font d&apos;Uni Resto bien plus qu&apos;un restaurant.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "h-13 rounded-full px-8",
              })}
            >
              Réserver une table
            </Link>
            <Link
              href="#carte-signature"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-13 rounded-full border-white/50 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              Découvrir la carte
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2" aria-hidden="true">
          {heroImages.map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index === active ? "w-8 bg-white" : "w-1.5 bg-white/40"
              )}
            />
          ))}
        </div>
        <ChevronDownIcon
          className="size-5 animate-bounce text-white/70"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
