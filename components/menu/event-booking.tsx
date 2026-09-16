"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import {
  CalendarCheckIcon,
  MailIcon,
  PartyPopperIcon,
  PhoneIcon,
  UsersIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const perks = [
  { Icon: CalendarCheckIcon, label: "Réponse sous 24h" },
  { Icon: UsersIcon, label: "Jusqu'à 120 invités" },
  { Icon: UtensilsCrossedIcon, label: "Menu personnalisé" },
  { Icon: PartyPopperIcon, label: "Animation sur demande" },
];

const eventTypes = [
  "Anniversaire",
  "Mariage",
  "Séminaire d'entreprise",
  "Cocktail privé",
  "Autre",
];

export function EventBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Votre demande a bien été envoyée, notre équipe vous recontacte sous 24h."
      );
      form.reset();
    }, 900);
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl ring-1 ring-foreground/10 shadow-xl shadow-foreground/5 lg:grid-cols-2">
          <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-foreground p-8 sm:p-10 lg:p-12">
            <Image
              src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=900&q=80"
              alt="Table dressée pour un événement privé"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-primary/40" />

            <div className="relative z-10 flex flex-col gap-4">
              <span className="w-fit rounded-xs bg-white/10 px-6 py-2.5 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm">
                Événements
              </span>
              <h2 className="font-heading max-w-sm text-3xl font-bold text-balance text-white sm:text-4xl">
                Organisez votre événement chez nous
              </h2>
              <p className="max-w-sm text-pretty text-white/75">
                Anniversaire, mariage, séminaire ou soirée privée : notre
                équipe imagine avec vous un moment sur mesure, du menu à la
                décoration.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {perks.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm text-white/85">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6">
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <PhoneIcon className="size-4" />
                  +33 1 23 45 67 89
                </a>
                <a
                  href="mailto:evenements@uniresto.fr"
                  className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
                >
                  <MailIcon className="size-4" />
                  evenements@uniresto.fr
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-name">Nom complet</Label>
                  <Input
                    id="event-name"
                    name="name"
                    placeholder="Jean Dupont"
                    required
                    className="rounded-sm
"                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-email">E-mail</Label>
                  <Input
                    id="event-email"
                    name="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    required
                    className="rounded-sm
"                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-phone">Téléphone</Label>
                  <Input
                    id="event-phone"
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    required
                    className="rounded-sm
"                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-type">Type d&apos;événement</Label>
                  <Select name="eventType" defaultValue={eventTypes[0]}>
                    <SelectTrigger id="event-type" className="w-full rounded-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-date">Date souhaitée</Label>
                  <Input id="event-date" name="date" type="date" required className="rounded-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="event-guests">Nombre d&apos;invités</Label>
                  <Input
                    id="event-guests"
                    name="guests"
                    type="number"
                    min={1}
                    placeholder="20"
                    required
                    className="rounded-sm
"                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="event-message">Message (optionnel)</Label>
                <Textarea
                  id="event-message"
                  name="message"
                  placeholder="Parlez-nous de votre événement, vos envies, contraintes..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-2 rounded-xs px-10 py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
