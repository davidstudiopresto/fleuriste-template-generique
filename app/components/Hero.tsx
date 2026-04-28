"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TITLE = "Fleurs locales et de saison";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);

  return (
    <section ref={ref} id="top" className="relative w-full">
      <div className="relative w-full h-[78vh] md:h-[88vh] overflow-hidden bg-[var(--ink)]">
        <motion.div
          className="absolute inset-0"
          style={{ y: yImage, opacity }}
        >
          <Image
            src="/gallery/hero.jpg"
            alt="Composition florale signature"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-110"
          />
        </motion.div>

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 md:px-10">
            <div className="max-w-[560px] bg-[var(--white)] p-6 sm:p-10 md:p-14 shadow-sm">
              <h1 className="font-bold text-[var(--ink)] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.05] tracking-[-0.005em] uppercase">
                {TITLE.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <motion.span
                className="block w-12 h-0.5 bg-[var(--ink)] mt-6 sm:mt-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <motion.a
                href="#creations"
                className="btn-arrow inline-flex items-center justify-between gap-4 sm:gap-6 mt-8 sm:mt-10 bg-[var(--ink)] text-[var(--white)] px-5 sm:px-8 py-4 sm:py-5 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.26em] hover:bg-[var(--olive)] transition-colors w-full sm:min-w-[280px] sm:w-auto"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >
                Découvrir les créations
                <Chevron />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
