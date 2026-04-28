"use client";

import Filigrane from "./Filigrane";

const reviews = [
  {
    name: "[NOM CLIENT 1]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
  {
    name: "[NOM CLIENT 2]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
  {
    name: "[NOM CLIENT 3]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
  {
    name: "[NOM CLIENT 4]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
  {
    name: "[NOM CLIENT 5]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
  {
    name: "[NOM CLIENT 6]",
    rating: 5,
    date: "[MOIS ANNÉE]",
    text: "[Avis client à compléter — texte de l'avis Google laissé par le client.]",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} étoiles sur 5`} className="inline-flex gap-0.5 text-[var(--olive)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section id="avis" className="py-20 md:py-28 bg-[var(--white)] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <Filigrane size={70} flip className="hidden md:block shrink-0" />
            <h2 className="font-bold uppercase text-[var(--ink)] text-[28px] md:text-[40px] tracking-[0.04em] leading-[1.15] text-center">
              Ce qu&apos;ils en disent
            </h2>
            <Filigrane size={70} className="hidden md:block shrink-0" />
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-4">
              <span className="text-[56px] md:text-[68px] leading-none font-bold text-[var(--ink)]">
                [X,X]
              </span>
              <div className="flex flex-col items-start gap-2">
                <Stars n={5} />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                  [N] avis · Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex items-center gap-6 marquee-track">
          {doubled.map((r, i) => (
            <div key={i} className="flex items-center gap-6 shrink-0">
              <article className="shrink-0 w-[320px] md:w-[400px] bg-white border border-[var(--border)] rounded-2xl p-8 md:p-10 flex flex-col">
                <Stars n={r.rating} />
                <p className="mt-6 text-[var(--ink)] leading-[1.7] text-[16px] flex-1 font-light">
                  « {r.text} »
                </p>
                <footer className="mt-8 pt-6 border-t border-[var(--border)] flex items-baseline justify-between">
                  <span className="text-[var(--ink)] text-[15px]">{r.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                    {r.date}
                  </span>
                </footer>
              </article>
              <span aria-hidden="true" className="text-[var(--olive)] text-[28px] font-[family-name:var(--font-serif)] italic shrink-0 select-none">
                ✻
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
