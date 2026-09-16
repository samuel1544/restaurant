import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading text-xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      <span className="text-primary">Uni</span> Resto
    </Link>
  );
}
