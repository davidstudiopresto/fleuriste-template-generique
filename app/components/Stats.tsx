"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, suffix = "", duration = 2 }: { from?: number; to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("fr-FR"));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 15, suffix: "", label: "Années d'atelier" },
  { value: 3000, suffix: "+", label: "Compositions signées" },
  { value: 5, suffix: ",0", label: "Note Google" },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-[var(--white)] border-y border-[var(--border)]/40">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-[family-name:var(--font-serif)] italic font-light text-[var(--ink)] text-[64px] md:text-[88px] leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-[var(--olive)]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
