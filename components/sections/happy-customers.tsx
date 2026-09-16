"use client";

import { useRef } from "react";
import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Rating } from "@/components/rating";

const testimonials = [
  {
    name: "Sweety",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600587815-b654d1405e83?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
  {
    name: "Santy",
    role: "Customer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1758600432948-5cec2a3fecb9?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
  {
    name: "Michael",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600588086-dc9d345fd01f?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
  {
    name: "Priya",
    role: "Customer",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1758600587811-e9a20851cf7d?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
  {
    name: "Julien",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600588038-fe270aac2d09?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
   {
    name: "Julien",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600588038-fe270aac2d09?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
   {
    name: "Julien",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600588038-fe270aac2d09?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
   {
    name: "Julin",
    role: "Customer",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1758600588038-fe270aac2d09?w=200&q=80",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla.",
  },
] as const;

export function HappyCustomers() {
  const autoplay = useRef(
    Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-fit rounded-xs bg-zinc-100 px-6 py-2.5 text-xs font-medium text-zinc-600">
            Client
          </span>
          <h2 className="font-heading text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Nos Clients Heureux
          </h2>
          <span
                className="h-1 w-12 rounded-full bg-primary"
                aria-hidden="true"
              />
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mt-10 overflow-visible"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={`${testimonial.name}-${index}`}
                className="basis-[85%] pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative flex h-full flex-col gap-4 rounded-md border border-border bg-white p-6">
                  <QuoteIcon
                    className="absolute top-2 right-6 size-9 rotate-180 text-zinc-200"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-3">
                    <div className="relative size-12 shrink-0 overflow-hidden rounded-full">
                      <div className=" bg-primary h-full w-full"></div>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover "
                      />
                      
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-base font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  <Rating value={testimonial.rating} />

                  <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                    {testimonial.quote}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
