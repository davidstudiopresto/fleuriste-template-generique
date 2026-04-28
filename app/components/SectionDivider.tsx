"use client";

import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <div className="py-10 flex justify-center">
      <motion.span
        className="section-divider"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
