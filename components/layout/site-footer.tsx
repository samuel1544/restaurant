import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/lib/data/menu";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/social-icons";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-pretty text-muted-foreground">
            De bons plats et de bonnes boissons pour une vie plus saine.
            Cuisine fraîche préparée chaque jour avec des produits de saison.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-primary">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/specialites" className="hover:text-primary">
                Notre Restaurant
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Catégories
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/menu?category=${encodeURIComponent(category)}`}
                  className="hover:text-primary"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>12 Rue de la Gastronomie, 75011 Paris</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              <a href="tel:+33123456789" className="hover:text-primary">
                +33 1 23 45 67 89
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="size-4 shrink-0 text-primary" />
              <a href="mailto:contact@uniresto.fr" className="hover:text-primary">
                contact@uniresto.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Uni Resto. Tous droits réservés.</p>
        <p>Fait avec soin à Paris.</p>
      </div>
    </footer>
  );
}
