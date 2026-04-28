import Image from "next/image";
import FadeIn from "./FadeIn";
import Filigrane from "./Filigrane";

const photos = [
  "/gallery/fleur-1.jpg",
  "/gallery/fleur-2.jpg",
  "/gallery/fleur-3.jpg",
  "/gallery/fleur-4.jpg",
  "/gallery/fleur-5.jpg",
  "/gallery/fleur-6.jpg",
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 md:py-28 bg-[var(--grey-light)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn className="mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <Filigrane size={70} flip className="hidden md:block shrink-0" />
            <div className="text-center">
              <h2 className="font-bold uppercase text-[var(--ink)] text-[28px] md:text-[40px] tracking-[0.04em] leading-[1.15]">
                Galerie
              </h2>
              <p className="mt-4 text-[var(--ink)] text-[17px]">
                Quelques créations récentes de l&apos;atelier
              </p>
            </div>
            <Filigrane size={70} className="hidden md:block shrink-0" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((src, i) => (
            <FadeIn key={src} delay={i * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-[1.03] transition-transform duration-[1200ms]"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            className="btn-arrow inline-flex items-center gap-6 bg-[var(--ink)] text-[var(--white)] px-8 py-5 text-[12px] uppercase tracking-[0.26em] hover:bg-[var(--olive)] transition-colors"
          >
            Voir plus sur Instagram
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
