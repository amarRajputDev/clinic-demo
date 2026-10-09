"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check, Sparkles } from "lucide-react";
import { buttonSizes, buttonTones, baseButton } from "@/components/button-link";
import { cn } from "@/lib/utils";

const trustRow = [
  "Personalized plans",
  "Modern technology",
  "Unhurried visits",
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 -top-40 h-[42rem] w-[42rem] rounded-full border border-forest/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 h-[30rem] w-[30rem] rounded-full border border-forest/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-sage/60 blur-3xl"
      />

      <div className="shell relative grid gap-12 pb-20 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center lg:col-span-5 lg:pr-6"
        >
          <motion.p variants={item} className="eyebrow text-forest/70">
            Modern dentistry, thoughtfully personalized
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-7 text-[2.6rem] leading-[1.02] text-forest sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.4rem]"
          >
            A healthier smile.
            <span className="block italic text-forest-mid">
              A more confident you.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-charcoal-soft sm:text-[1.075rem]"
          >
            Personalized dental care and cosmetic treatments in a calm Noida
            clinic — where every plan starts with a conversation, not a
            sales pitch.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#book"
              className={cn(baseButton, buttonSizes.lg, buttonTones.forest, "group")}
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/treatments"
              className={cn(baseButton, buttonSizes.lg, buttonTones.outline, "group")}
            >
              Explore Treatments
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6"
          >
            {trustRow.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-charcoal-soft"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-7"
        >
          <div className="relative mx-auto max-w-xl lg:mr-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full rounded-[2.5rem] rounded-tr-[9rem] border border-forest/25 sm:-right-5 sm:-top-5"
            />

            <div className="img-zoom relative overflow-hidden rounded-[2.5rem] rounded-tr-[9rem] bg-sage shadow-lift">
              <Image
                src="/images/hero-patient.jpg"
                alt="A smiling patient seated in a bright, modern dental clinic while a dentist holds a shade guide"
                width={1500}
                height={1000}
                priority
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 52vw"
                className="h-[24rem] w-full object-cover object-center sm:h-[30rem] lg:h-[36rem] xl:h-[38rem]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-4 h-28 w-28 border-b border-l border-forest/30 sm:-left-8 sm:h-40 sm:w-40"
            />

            <div className="absolute -bottom-8 left-3 w-[15.5rem] rounded-2xl border border-line bg-ivory p-4 shadow-lift sm:left-6 sm:w-[17.5rem] sm:p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-ivory">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
                    Consultation slots
                  </p>
                  <p className="truncate font-display text-[1.05rem] leading-tight text-forest">
                    Same-week availability
                  </p>
                </div>
              </div>
              <Link
                href="/#book"
                className="mt-3.5 flex items-center justify-between rounded-full bg-sage px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-sage-deep"
              >
                Reserve a time
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="mt-2 text-center text-[0.6rem] text-charcoal-soft/70">
                Demo booking widget
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
