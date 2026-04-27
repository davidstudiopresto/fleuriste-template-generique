import FadeIn from "./FadeIn";

export default function Intro() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <FadeIn className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-bold uppercase text-[var(--ink)] text-[24px] md:text-[34px] tracking-[0.05em] leading-[1.25]">
          [NOM DU FLEURISTE], atelier de [PRÉNOM GÉRANT]
        </h2>
        <p className="mt-6 text-[var(--ink)] text-[17px] md:text-[19px] leading-relaxed max-w-2xl mx-auto">
          [PHRASE D'ACCROCHE — décrire en 2 lignes les services principaux et la ville
          où se trouve l'atelier.]
        </p>
      </FadeIn>
    </section>
  );
}
