"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const ROTATION_INTERVAL_MS = 7000;

type RotatorImage = {
  src: string;
  alt: string;
};

export function HeroImageRotator({ images }: { images: RotatorImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-0 rounded-full bg-primary"
        aria-hidden="true"
      />
      <span
        className="absolute top-2 right-8 size-3.5 rounded-full bg-primary/40"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-6 -left-3 size-6 rounded-full border-2 border-primary/40"
        aria-hidden="true"
      />

      <div className="absolute inset-[5%] overflow-hidden rounded-full shadow-2xl shadow-primary/30">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 420px, 80vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-[1200ms] ease-in-out",
              index === activeIndex
                ? "scale-100 opacity-100"
                : "scale-110 opacity-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}
