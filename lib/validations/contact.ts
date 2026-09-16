import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom complet."),
  email: z.string().trim().email("Adresse e-mail invalide."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^[0-9+()\s.-]{6,}$/.test(value), {
      message: "Numéro de téléphone invalide.",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Votre message doit contenir au moins 10 caractères."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof ContactFormValues, string>>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
