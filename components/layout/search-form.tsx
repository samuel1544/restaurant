"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function SearchForm({ className }: { className?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/menu${params.size ? `?${params.toString()}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn(
        "flex justify-between gap-2 rounded-[10px] border border-border bg-card px-3.5 py-2",
        className
      )}
    >
      <label htmlFor="site-search" className="sr-only">
        Rechercher un plat
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Rechercher..."
        className="w-32 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none lg:w-44"
      />
      <button
        type="submit"
        className="text-muted-foreground transition-colors hover:text-primary"
        aria-label="Lancer la recherche"
      >
        <SearchIcon className="size-4" />
      </button>
    </form>
  );
}
