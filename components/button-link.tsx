import Link from "next/link";
import { cn } from "@/lib/utils";

export const baseButton =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonSizes = {
  sm: "h-10 px-5",
  md: "h-12 px-7",
  lg: "h-14 px-9",
} as const;

export const buttonTones = {
  forest:
    "bg-forest text-ivory hover:bg-forest-mid active:translate-y-px shadow-[0_14px_30px_-18px_rgba(24,61,53,0.9)]",
  ivory:
    "bg-ivory text-forest hover:bg-white active:translate-y-px shadow-[0_14px_30px_-18px_rgba(24,61,53,0.6)]",
  outline:
    "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5 active:translate-y-px",
  "outline-light":
    "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/10 active:translate-y-px",
  ghost: "text-forest hover:bg-forest/5",
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: keyof typeof buttonTones;
  size?: keyof typeof buttonSizes;
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  tone = "forest",
  size = "md",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(
    baseButton,
    buttonSizes[size],
    buttonTones[tone],
    className,
  );

  const external = href.startsWith("http") || href.startsWith("mailto:");

  if (external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
