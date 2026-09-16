import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { InstagramIcon } from "@/components/social-icons";
import { Reveal } from "@/components/reveal";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Julien Moreau",
    role: "Chef Exécutif",
    bio: "18 ans d'expérience, une cuisine généreuse et précise.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&q=80",
  },
  {
    name: "Camille Dubois",
    role: "Cheffe Pâtissière",
    bio: "Des desserts délicats, entre tradition et créativité.",
    image:
      "https://images.unsplash.com/photo-1731576089290-e6230a18dcb4?w=500&q=80",
  },
  {
    name: "Antoine Ricci",
    role: "Chef Barman",
    bio: "Créateur de cocktails signature, passionné de mixologie.",
    image:
      "https://images.unsplash.com/photo-1632987794996-183d64e58f16?w=500&q=80",
  },
  {
    name: "Léa Fontaine",
    role: "Responsable de Salle",
    bio: "Le sourire et l'attention qui font toute la différence.",
    image:
      "https://images.unsplash.com/photo-1758519289791-ffce8889ca8c?w=500&q=80",
  },
];

export function TeamSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Notre équipe"
            title="Les visages d'Uni Resto"
            description="Passionnés, précis et attentionnés : découvrez quelques-uns des talents qui donnent vie à votre expérience, en cuisine comme en salle."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 100}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <span className="absolute top-4 right-4 flex size-9 -translate-x-1 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <InstagramIcon className="size-4" />
              </span>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
                <span className="w-fit rounded-xs bg-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-white uppercase ring-1 ring-white/20 backdrop-blur-sm">
                  {member.role}
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="line-clamp-2 text-sm text-pretty text-white/75">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
