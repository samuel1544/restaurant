"use server";

import { contactSchema, type ContactFormState } from "@/lib/validations/contact";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!result.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in errors)) {
        errors[field as keyof typeof errors] = issue.message;
      }
    }
    return {
      status: "error",
      errors,
      message: "Veuillez corriger les champs indiqués.",
    };
  }

  // Placeholder for the real integration (email provider, CRM, database...).
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: "success",
    message: `Merci ${result.data.name.split(" ")[0]}, votre message a bien été envoyé. Nous vous répondrons rapidement.`,
  };
}
