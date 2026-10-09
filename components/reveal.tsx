"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type State = "visible" | "pending" | "entered";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Scroll-reveal wrapper built on a plain IntersectionObserver.
 *
 * Content is rendered visible by default (good for no-JS and for SEO). It is
 * only hidden after hydration when we know an animation can actually run, and
 * reduced-motion users never get hidden content at all.
 */
export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<State>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setState("visible");
      return;
    }

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight - 40 && rect.bottom > 0;

    if (alreadyVisible) {
      setState("visible");
      return;
    }

    setState("pending");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("entered");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const entering = state === "entered";

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: state === "pending" ? 0 : 1,
        transform: state === "pending" ? `translate3d(0, ${y}px, 0)` : "none",
        transitionProperty: entering ? "opacity, transform" : "none",
        transitionDuration: entering ? "750ms" : "0ms",
        transitionDelay: entering ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: state === "pending" ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}
