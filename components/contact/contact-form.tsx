"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";

import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success" && state.message) {
      toast.success(state.message);
      formRef.current?.reset();
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nom complet</Label>
          <Input
            id="name"
            name="name"
            placeholder="Jean Dupont"
            required
            aria-invalid={Boolean(state.errors?.name)}
          />
          {state.errors?.name && (
            <p className="text-sm text-destructive">{state.errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jean@exemple.fr"
            required
            aria-invalid={Boolean(state.errors?.email)}
          />
          {state.errors?.email && (
            <p className="text-sm text-destructive">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Téléphone (optionnel)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="06 12 34 56 78"
          aria-invalid={Boolean(state.errors?.phone)}
        />
        {state.errors?.phone && (
          <p className="text-sm text-destructive">{state.errors.phone}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Parlez-nous de votre demande, réservation ou question..."
          rows={5}
          required
          aria-invalid={Boolean(state.errors?.message)}
        />
        {state.errors?.message && (
          <p className="text-sm text-destructive">{state.errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="rounded-full"
        disabled={isPending}
      >
        {isPending ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
