import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&q=80",
    alt: "Coin cosy avec une plante sur une table en bois",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=700&q=80",
    alt: "Plat de pâtes crémeuses servi à table",
    aspect: "aspect-[0.8]",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Cafés avec art latte servis sur une table en bois",
    aspect: "aspect-[4.3/2.6]",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    alt: "Desserts aux fraises servis dans des verrines",
    aspect: "aspect-[1.39]",
  },
] as const;

export function CustomerGallery() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="font-heading max-w-md text-3xl leading-tight font-bold text-balance text-foreground sm:text-4xl">
                Les plus belles photos de nos clients
              </h2>
              <span
                className="h-1 w-12 rounded-full bg-primary"
                aria-hidden="true"
              />
            </div>

            <p className="max-w-lg text-base text-pretty text-muted-foreground mt-3">
              Chaque semaine, nos clients partagent leurs plus beaux moments
              chez Uni Resto. Des plats savourés en bonne compagnie aux
              boissons capturées à la perfection, découvrez notre restaurant
              à travers leurs objectifs.
            </p>

            <Link
              href="/menu"
              className={buttonVariants({
                size: "lg",
                className: "w-fit rounded-xs px-10 py-6 mt-8",
              })}
            >
              Voir tout
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 overflow-hidden">
            <div className="flex flex-col gap-4 justify-end">
              <div
                className={`relative ${galleryImages[0].aspect} overflow-hidden rounded-sm`}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`relative ${galleryImages[2].aspect} overflow-hidden rounded-sm`}
              >
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4  justify-end">
              <div
                className={`relative ${galleryImages[1].aspect} overflow-hidden rounded-sm`}
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`relative ${galleryImages[3].aspect} overflow-hidden rounded-sm`}
              >
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  sizes="(min-width: 1024px) 240px, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
