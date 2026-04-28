import FadeIn from "./FadeIn";
import Filigrane from "./Filigrane";

export default function Intro() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--white)] overflow-hidden">
      <FadeIn className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="relative inline-flex items-center justify-center gap-8 md:gap-14 w-full">
          <Filigrane size={90} flip className="hidden md:block shrink-0" />
          <p className="flex-1 text-[var(--ink)] text-[17px] md:text-[20px] leading-relaxed">
            Bouquets de saison, plantes choisies avec soin, créations sur mesure
            pour vos cérémonies — composés à la main, avec ce qu&apos;il faut
            d&apos;émotion.
          </p>
          <Filigrane size={90} className="hidden md:block shrink-0" />
        </div>
      </FadeIn>
    </section>
  );
}
