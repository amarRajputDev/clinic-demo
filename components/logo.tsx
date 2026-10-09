import { cn } from "@/lib/utils";

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={cn("h-8 w-8", className)}
      fill="none"
    >
      <path
        d="M16 5.4c-4.3 0-9.2 2-9.2 6.6 0 3.5 1.3 5.8 2.1 8.9.6 2.6.6 5.3 1.3 7.3.5 1.4 1.2 2.3 2.3 2.3 1.5 0 2.1-1.8 2.5-3.9.4-2.1.6-4.3 1-4.3s.6 2.2 1 4.3c.4 2.1 1 3.9 2.5 3.9 1.1 0 1.8-.9 2.3-2.3.7-2 .7-4.7 1.3-7.3.8-3.1 2.1-5.4 2.1-8.9 0-4.6-4.9-6.6-9.2-6.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.6 13.6c1.4 1.5 3 2.2 5.4 2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  compact = false,
}: {
  className?: string;
  markClassName?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-forest",
        className,
      )}
    >
      <ToothMark className={cn("shrink-0", markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] leading-none tracking-[0.02em] sm:text-[1.3rem]">
          AUREL
          <span className="opacity-55"> DENTAL</span>
        </span>
        {!compact && (
          <span className="mt-1 hidden text-[0.5rem] font-semibold uppercase tracking-[0.34em] opacity-60 sm:block">
            Noida · Dental &amp; Cosmetic
          </span>
        )}
      </span>
    </span>
  );
}
