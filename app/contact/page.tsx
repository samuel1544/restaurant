import type { Metadata } from "next";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Uni Resto pour une réservation, une question sur le menu ou toute autre demande. Notre équipe vous répond rapidement.",
};

const infoItems = [
  {
    Icon: MapPinIcon,
    title: "Adresse",
    lines: ["12 Rue de la Gastronomie", "75011 Paris, France"],
  },
  {
    Icon: PhoneIcon,
    title: "Téléphone",
    lines: ["+33 1 23 45 67 89"],
  },
  {
    Icon: MailIcon,
    title: "E-mail",
    lines: ["contact@uniresto.fr"],
  },
  {
    Icon: ClockIcon,
    title: "Horaires",
    lines: ["Lun – Ven : 11h00 – 22h30", "Sam – Dim : 10h00 – 23h00"],
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Parlons de votre prochaine visite"
        description="Une question, une réservation ou un événement à organiser ? Écrivez-nous, notre équipe vous répond sous 24h."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {infoItems.map(({ Icon, title, lines }) => (
            <Card key={title} className="py-0">
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground">
                  {lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="py-0">
          <div className="p-6 sm:p-8">
            <ContactForm />
          </div>
        </Card>
      </div>
    </section>
  );
}
