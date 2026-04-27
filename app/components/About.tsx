import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="a-propos" className="bg-white">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-10">
        <FadeIn className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden rounded-2xl bg-[#e8e0d0] flex items-center justify-center">
          {/* PLACEHOLDER PHOTO ARTISAN — remplacer par : <Image src="/gallery/about.jpg" alt="..." fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /> */}
          <span className="text-[10px] uppercase tracking-[0.32em] text-[#a8997f] px-6 text-center">
            [PHOTO ARTISAN — portrait du gérant]
          </span>
        </FadeIn>
        <FadeIn delay={0.15} className="md:pr-6 lg:pr-14 py-20 md:py-32 flex flex-col justify-center">
          <span className="font-[family-name:var(--font-serif)] italic text-[var(--olive)] text-[18px] md:text-[20px] mb-3 tracking-[0.01em]">
            — l'artisan
          </span>
          <h2 className="font-[family-name:var(--font-serif)] italic font-light text-[var(--ink)] text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.01em]">
            L'atelier de [PRÉNOM GÉRANT]
          </h2>
          <span className="block w-12 h-0.5 bg-[var(--ink)] mt-8" />
          <p className="mt-8 text-[var(--ink)] text-[17px] leading-[1.8]">
            [PARAGRAPHE 1 — histoire de l'artisan, sa démarche, sa philosophie. 3-4 lignes.]
          </p>
          <p className="mt-6 text-[var(--ink)] text-[17px] leading-[1.8]">
            [PARAGRAPHE 2 — informations pratiques : horaires d'ouverture, type de
            rendez-vous, adresse de l'atelier.]
          </p>
          <a
            href="#visiter"
            className="link-arrow group inline-flex items-center gap-3 mt-12 self-start text-[12px] uppercase tracking-[0.26em] text-[var(--ink)] border-b border-[var(--ink)] pb-1 transition-colors hover:text-[var(--olive)] hover:border-[var(--olive)]"
          >
            En savoir plus
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
