# Uni Resto

Site vitrine pour **Uni Resto**, un restaurant proposant de bons plats et de bonnes boissons pour une vie plus saine. Le site présente le restaurant, son menu, ses spécialités et permet aux visiteurs de le contacter.

Développé avec [Next.js](https://nextjs.org) (App Router) et [Tailwind CSS](https://tailwindcss.com), avec des composants [shadcn/ui](https://ui.shadcn.com).

## Pages

- **Accueil** (`/`) — hero, présentation du restaurant, catégories populaires, galerie clients, plats populaires, avis clients et bandeau d'appel à l'action.
- **Menu** (`/menu`) — menu complet filtrable par catégorie avec recherche, activités et module de réservation d'événements.
- **Notre restaurant** (`/specialites`) — présentation des espaces (salle principale, tables familiales, salon privé, cuisine ouverte), du bar signature, de la carte et de l'équipe.
- **Contact** (`/contact`) — coordonnées (adresse, téléphone, e-mail, horaires) et formulaire de contact avec validation et envoi via server action.

## Stack technique

- [Next.js 16](https://nextjs.org) / React 19 / TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (composants Radix/Base UI)
- [Zod](https://zod.dev) pour la validation des formulaires
- [Embla Carousel](https://www.embla-carousel.com) pour les carrousels
- [Sonner](https://sonner.emilkowal.ski) pour les notifications
- [Lucide](https://lucide.dev) pour les icônes

## Démarrer le projet

Installer les dépendances puis lancer le serveur de développement :

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Scripts disponibles

- `npm run dev` — lance le serveur de développement
- `npm run build` — build de production
- `npm run start` — démarre le serveur en mode production
- `npm run lint` — vérifie le code avec ESLint

## Structure du projet

```
app/                Routes (App Router) : accueil, menu, specialites, contact
components/
  layout/           Header, footer, navigation
  sections/         Sections de la page d'accueil
  restaurant/        Sections de la page "Notre restaurant"
  menu/             Navigateur de menu, activités, réservation d'événements
  contact/          Formulaire de contact
  ui/               Composants shadcn/ui
lib/
  data/             Données du menu (catégories, plats)
  validations/      Schémas de validation Zod
```
