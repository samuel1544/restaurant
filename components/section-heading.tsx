import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading max-w-xl text-3xl leading-tight font-bold text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-lg text-base text-pretty text-muted-foreground",
            align === "center" && "max-w-md"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
