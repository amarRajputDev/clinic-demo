import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image?: { src: string; alt: string };
  tone?: "ivory" | "forest";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  tone = "ivory",
  className,
}: PageHeroProps) {
  const dark = tone === "forest";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark ? "on-dark border-transparent bg-forest" : "border-line bg-ivory-deep",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full border",
          dark ? "border-ivory/10" : "border-forest/10",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-10 -top-10 h-[20rem] w-[20rem] rounded-full border",
          dark ? "border-ivory/10" : "border-forest/10",
        )}
      />

      <div className="shell relative grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <div className="lg:col-span-7">
          <p
            className={cn(
              "eyebrow",
              dark ? "text-champagne/85" : "text-forest/70",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "mt-6 text-[2.3rem] leading-[1.04] sm:text-[3rem] lg:text-[3.6rem]",
              dark ? "text-ivory" : "text-forest",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-xl text-[1rem] leading-relaxed sm:text-[1.05rem]",
              dark ? "text-ivory/70" : "text-charcoal-soft",
            )}
          >
            {description}
          </p>
        </div>

        {image ? (
          <Reveal className="lg:col-span-5">
            <div
              className={cn(
                "img-zoom relative overflow-hidden rounded-[2rem]",
                dark ? "rounded-tr-[7rem] bg-forest-deep" : "rounded-tr-[7rem] bg-sage",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={933}
                priority
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="h-[15rem] w-full object-cover object-center sm:h-[19rem]"
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
