import FadeIn from "./FadeIn";

const items = [
  {
    title: "Bouquet du jour",
    desc: "Composition de saison",
  },
  {
    title: "Bouquet sur mesure",
    desc: "Pour les jours qui comptent",
  },
  {
    title: "Plantes & arrangements",
    desc: "Pour la maison ou pour offrir",
  },
];

export default function Creations() {
  return (
    <section id="creations" className="pb-20 md:pb-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <article className="text-center md:text-left">
                <h3 className="font-bold uppercase tracking-[0.05em] text-[var(--ink)] text-[16px]">
                  {item.title}
                </h3>
                <span className="block w-12 h-0.5 bg-[var(--ink)] mt-4 mx-auto md:mx-0" />
                <p className="mt-4 text-[var(--ink-soft)] text-[15px]">
                  {item.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
