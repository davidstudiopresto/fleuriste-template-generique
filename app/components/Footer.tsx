export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--olive)] text-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-bold uppercase text-[14px] tracking-[0.22em] mb-7">
            Contact
          </h3>
          <ul className="space-y-3 text-[15px]">
            <li>
              <a href="mailto:#" className="hover:opacity-70 transition-opacity">
                [EMAIL]
              </a>
            </li>
            <li>
              <a href="tel:#" className="hover:opacity-70 transition-opacity">
                [TÉLÉPHONE]
              </a>
            </li>
            <li className="text-white/80">[ADRESSE — VILLE]</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/50 hover:bg-white hover:text-[var(--olive)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold uppercase text-[14px] tracking-[0.22em] mb-7">
            [NOM DU FLEURISTE]
          </h3>
          <ul className="space-y-3 text-[15px]">
            <li><a href="#a-propos" className="hover:opacity-70 transition-opacity">À propos de l'atelier</a></li>
            <li><a href="#creations" className="hover:opacity-70 transition-opacity">Nos créations</a></li>
            <li><a href="#galerie" className="hover:opacity-70 transition-opacity">Galerie</a></li>
            <li><a href="#avis" className="hover:opacity-70 transition-opacity">Avis clients</a></li>
            <li><a href="#visiter" className="hover:opacity-70 transition-opacity">Visiter la boutique</a></li>
          </ul>
        </div>

      </div>

      <div className="bg-[var(--olive-deep)] py-5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex flex-wrap justify-between gap-4 text-[12px] text-white/85">
          <span>© {year}, [NOM DU FLEURISTE]</span>
          <span>Fleuriste artisan</span>
        </div>
      </div>
    </footer>
  );
}
