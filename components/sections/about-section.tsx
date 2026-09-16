import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div
            className="absolute top-0 left-0 h-[88%] w-[88%] rounded-md bg-orange-100"
            aria-hidden="true"
          />
          <div className="absolute right-0 bottom-0 h-[88%] w-[88%] overflow-hidden rounded-md shadow-xl shadow-black/10">
            <Image
              src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800&q=80"
              alt="Boisson glacée servie sur une table en bois"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-xs h-10 py-2.5 bg-zinc-100 px-10  text-xs font-medium text-zinc-600">
            À propos
          </span>

          <div className="flex flex-col gap-3">
            <h2 className="font-heading max-w-md text-3xl leading-tight font-bold text-balance text-foreground sm:text-4xl">
              Le meilleur confort, toujours garanti
            </h2>
            <span className="h-1 w-12 rounded-full bg-primary" aria-hidden="true" />
          </div>

          <p className="max-w-md text-base text-pretty text-muted-foreground">
            Chez Uni Resto, chaque détail est pensé pour votre bien-être : une
            ambiance chaleureuse, un service attentionné et des recettes
            préparées avec soin, pour que chaque visite soit un moment de pur
            confort.
          </p>

          <Link
            href="/menu"
            className={buttonVariants({
              size: "lg",
              className: "w-fit rounded-sm px-8 py-7",
            })}
          >
            Commander
          </Link>
        </div>
      </div>
    </section>
  );
}
