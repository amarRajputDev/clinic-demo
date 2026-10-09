import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "start",
  tone = "dark",
  className,
  id,
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto flex flex-col items-center",
        )}
      >
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow",
              light ? "text-champagne/80" : "text-forest/65",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "mt-5 text-[2rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3.15rem]",
            light ? "text-ivory" : "text-forest",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.98rem] leading-relaxed sm:text-base",
              light ? "text-ivory/70" : "text-charcoal-soft",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
