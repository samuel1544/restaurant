export type Category = "Entrées" | "Plats" | "Snacks" | "Boissons" | "Desserts";

export type Dish = {
  slug: string;
  name: string;
  category: Category;
  tag: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  featured?: boolean;
  specialty?: boolean;
};

export const categories: Category[] = [
  "Entrées",
  "Plats",
  "Snacks",
  "Boissons",
  "Desserts",
];

export const dishes: Dish[] = [
  {
    slug: "sembharachi-kodi-curry",
    name: "Sembharachi Kodi Curry",
    category: "Plats",
    tag: "Food",
    price: 13.5,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    rating: 4.3,
    reviews: 12,
    description:
      "Curry de poulet mijoté aux épices du sud, lait de coco et coriandre fraîche.",
    featured: true,
    specialty: true,
  },
  {
    slug: "fresh-orange-ice",
    name: "Fresh Orange Ice",
    category: "Boissons",
    tag: "Boisson",
    price: 4.9,
    image:
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80",
    rating: 4.8,
    reviews: 20,
    description:
      "Thé glacé à l'orange et fruits rouges, servi frais avec citron vert.",
    featured: true,
  },
  {
    slug: "poulet-grille-epices",
    name: "Poulet Grillé aux Épices",
    category: "Plats",
    tag: "Food",
    price: 15.9,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    rating: 4.6,
    reviews: 34,
    description:
      "Poulet fermier grillé, marinade maison et légumes de saison rôtis.",
    specialty: true,
  },
  {
    slug: "margherita-pizza-supreme",
    name: "Margherita Pizza Suprême",
    category: "Plats",
    tag: "Food",
    price: 12.9,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.5,
    reviews: 41,
    description:
      "Pâte fine, mozzarella di bufala, tomates San Marzano et basilic frais.",
  },
  {
    slug: "steak-grille-sauce-poivre",
    name: "Steak Grillé Sauce Poivre",
    category: "Plats",
    tag: "Food",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    rating: 4.7,
    reviews: 27,
    description:
      "Bavette grillée, sauce au poivre maison et pommes de terre fondantes.",
    specialty: true,
  },
  {
    slug: "pates-cremeuses-basilic",
    name: "Pâtes Crémeuses au Basilic",
    category: "Plats",
    tag: "Food",
    price: 11.9,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    rating: 4.2,
    reviews: 18,
    description: "Tagliatelles fraîches, crème légère, basilic et parmesan.",
  },
  {
    slug: "smoky-beef-burger",
    name: "Smoky Beef Burger",
    category: "Snacks",
    tag: "Snack",
    price: 10.5,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    rating: 4.4,
    reviews: 29,
    description:
      "Bœuf grillé, cheddar affiné, oignons caramélisés et sauce fumée.",
    featured: true,
  },
  {
    slug: "cheeseburger-maison",
    name: "Cheeseburger Maison",
    category: "Snacks",
    tag: "Snack",
    price: 9.9,
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800&q=80",
    rating: 4.1,
    reviews: 15,
    description: "Pain brioché, double cheddar, pickles et sauce burger maison.",
  },
  {
    slug: "buddha-bowl-frais",
    name: "Buddha Bowl Frais",
    category: "Entrées",
    tag: "Food",
    price: 9.5,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    rating: 4.6,
    reviews: 22,
    description:
      "Quinoa, avocat, légumes croquants et vinaigrette au citron vert.",
    specialty: true,
  },
  {
    slug: "bowl-petit-dejeuner-sain",
    name: "Bowl Petit-Déjeuner Sain",
    category: "Entrées",
    tag: "Food",
    price: 8.9,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    rating: 4.3,
    reviews: 16,
    description: "Yaourt grec, granola maison, fruits frais et miel.",
  },
  {
    slug: "plateau-sushi-signature",
    name: "Plateau Sushi Signature",
    category: "Entrées",
    tag: "Food",
    price: 17.9,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    rating: 4.9,
    reviews: 38,
    description:
      "Sélection de nigiri et makis, saumon, thon et légumes croquants.",
    featured: true,
    specialty: true,
  },
  {
    slug: "jus-orange-presse",
    name: "Jus d'Orange Pressé",
    category: "Boissons",
    tag: "Boisson",
    price: 4.2,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    rating: 4.5,
    reviews: 19,
    description: "Oranges pressées à la minute, 100% naturel, sans sucre ajouté.",
  },
  {
    slug: "smoothie-bowl-fruits-rouges",
    name: "Smoothie Bowl Fruits Rouges",
    category: "Desserts",
    tag: "Food",
    price: 7.9,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    rating: 4.4,
    reviews: 21,
    description: "Fruits rouges mixés, granola croustillant et noix de coco.",
  },
  {
    slug: "pancakes-miel-fruits",
    name: "Pancakes Miel & Fruits",
    category: "Desserts",
    tag: "Food",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    rating: 4.6,
    reviews: 25,
    description: "Pancakes moelleux, miel de fleurs, fruits de saison et beurre.",
  },
  {
    slug: "donuts-glaces-maison",
    name: "Donuts Glacés Maison",
    category: "Desserts",
    tag: "Food",
    price: 5.9,
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    rating: 4.7,
    reviews: 30,
    description: "Donuts moelleux faits maison, glaçage coloré et vermicelles.",
    specialty: true,
  },
];

export function getFeaturedDishes(): Dish[] {
  return dishes.filter((dish) => dish.featured);
}

export function getSpecialtyDishes(): Dish[] {
  return dishes.filter((dish) => dish.specialty);
}

export function getDishesByCategory(category: Category): Dish[] {
  return dishes.filter((dish) => dish.category === category);
}

export function getDishBySlug(slug: string): Dish | undefined {
  return dishes.find((dish) => dish.slug === slug);
}
