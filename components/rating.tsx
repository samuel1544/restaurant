import { StarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  reviews?: number;
  className?: string;
};

export function Rating({ value, reviews, className }: RatingProps) {
  const rounded = Math.round(value);

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className={cn(
              "size-3.5",
              index < rounded
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>
      <span className="sr-only">{value.toFixed(1)} sur 5</span>
      {typeof reviews === "number" && (
        <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
          {reviews} avis
        </span>
      )}
    </div>
  );
}
