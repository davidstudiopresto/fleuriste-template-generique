# 🌿 Fleuriste — Template Générique

Template Next.js prêt à customiser pour créer rapidement un site vitrine de fleuriste artisan.

Style éditorial / herbier : palette crème + olive + encre, fond papier texturé, typographie Mona Sans + Cormorant Garamond italique, ornements végétaux (branches d'olivier, lettrines, astérisque ✻).

---

## ✨ Stack technique

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Motion** (framer-motion v12) — animations fade-in au scroll, parallax hero, word-reveal
- **Mona Sans** (sans-serif bold) + **Cormorant Garamond** (serif italic)

## 🚀 Lancer en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🌐 Déployer sur Vercel

```bash
npx vercel --prod
```

---

## 📝 PLACEHOLDERS À REMPLACER

Tous les éléments à customiser pour un nouveau fleuriste sont marqués avec des crochets `[...]`. Astuce de recherche :

```bash
grep -rn "\[" app/ | grep -v node_modules
```

### 1. Textes (par section)

#### `app/layout.tsx` — Metadata SEO
| Placeholder | Description |
|---|---|
| `[NOM DU FLEURISTE]` | Nom de la boutique |
| `[VILLE]` | Ville où se trouve l'atelier |
| `[PRÉNOM GÉRANT]` | Prénom de l'artisan |

#### `app/components/Navigation.tsx` — En-tête
| Placeholder | Description |
|---|---|
| `[NOM DU FLEURISTE]` | Logo/nom dans le header (apparaît 1×) |
| `[TÉLÉPHONE]` | Téléphone affiché en haut à droite (desktop) et dans le menu mobile |
| `href="#"` (Instagram, Maps) | Liens sociaux à remplacer |

#### `app/components/Hero.tsx` — Section d'accueil
- Le slogan principal `Fleurs locales et de saison` est hardcodé (à modifier directement si besoin)
- Image de fond : `public/gallery/hero.jpg`

#### `app/components/Intro.tsx` — Phrase d'introduction
- Texte fixe `Bouquets de saison, plantes choisies avec soin...` à modifier directement

#### `app/components/Creations.tsx` — 3 services
3 cards avec titre + description (modifier directement les `items[]`).

#### `app/components/About.tsx` — L'artisan
- Image : `public/gallery/about.jpg`
- Texte fixe `100% LOCAL, 100% DE SAISON` + 2 paragraphes (modifier directement)

#### `app/components/Gallery.tsx` — Galerie photos
- 6 images : `public/gallery/fleur-1.jpg` à `fleur-6.jpg`
- Lien `Voir plus sur Instagram` : remplacer le `href="#"`

#### `app/components/Reviews.tsx` — Avis Google
| Placeholder | Description |
|---|---|
| `[NOM CLIENT 1]` à `[NOM CLIENT 6]` | Noms (6 cards) |
| `[MOIS ANNÉE]` | Date de l'avis (6 fois) |
| Texte de l'avis | À remplacer dans `reviews[]` |
| `[X,X]` | Note moyenne (ex : 5,0) |
| `[N] avis · Google` | Nombre total d'avis |

#### `app/components/Visit.tsx` — Adresse + horaires
| Placeholder | Description |
|---|---|
| `[NOM DU FLEURISTE]` | Nom (1×) |
| `[ADRESSE — VILLE]` | Adresse complète |
| `[TÉLÉPHONE]` | Téléphone |
| `[EMAIL]` | Email |
| `[@INSTAGRAM]` | Handle Instagram |
| Horaires (`schedule[]`) | 7 jours à éditer si différents du standard |
| `href="#"` (Maps, Instagram, etc.) | Liens à remplacer |

#### `app/components/Footer.tsx` — Pied de page
| Placeholder | Description |
|---|---|
| `[EMAIL]` | Email |
| `[TÉLÉPHONE]` | Téléphone |
| `[ADRESSE — VILLE]` | Adresse |
| `[NOM DU FLEURISTE]` | Nom (apparaît 2× : titre col + copyright) |
| `href="#"` Instagram | Lien social |

#### `app/components/InstagramFab.tsx` — Bouton flottant
| Placeholder | Description |
|---|---|
| `href="#"` | Lien Instagram |

---

### 2. Photos — FIXES (à conserver telles quelles)

⚠️ **Les 8 photos du template sont fixes et ne doivent pas être remplacées.** Elles font partie de l'identité visuelle commune à tous les sites générés depuis ce template.

Photos présentes dans `public/gallery/` :

| Fichier | Usage |
|---|---|
| `hero.jpg` | Photo de fond du hero (slogan principal) |
| `about.jpg` | Photo de l'artisan / atelier |
| `fleur-1.jpg` à `fleur-6.jpg` | Galerie (6 photos) |

> Ces photos restent identiques entre tous les déploiements — ne pas les modifier.

---

### 3. Liens externes à remplacer

Les `href="#"`, `href="tel:#"` et `href="mailto:#"` sont à compléter avec les vraies URL :

- Instagram (Navigation, Gallery, Visit, Footer, InstagramFab) → `https://www.instagram.com/<handle>`
- Téléphone → `tel:+33XXXXXXXXX`
- Email → `mailto:adresse@exemple.com`
- Google Maps → `https://maps.google.com/?q=<adresse>`

---

## 🎨 Personnalisation du design

### Palette (dans `app/globals.css`)

```css
:root {
  --white: #faf8f3;       /* fond blanc cassé */
  --grey-light: #f2f2f2;  /* fond galerie */
  --ink: #192425;         /* texte principal */
  --ink-soft: #4a5556;    /* texte secondaire */
  --olive: #868557;       /* accent (titres italiques, branches) */
  --olive-deep: #77764d;  /* accent foncé */
  --cream: #ffffe5;       /* crème très clair */
}
```

### Texture papier
Réglable via `body::before` dans `globals.css` (`opacity` actuelle : `0.18`, augmenter pour grain plus marqué, baisser pour lisser).

### Branches d'olivier (composant `Filigrane`)
Présentes dans Intro, Galerie, Reviews, Visit + un grand filigrane séparateur entre Créations/About et Galerie/Reviews dans `page.tsx`.

---

## 📁 Structure

```
fleuriste_template_générique/
├── app/
│   ├── layout.tsx              # Fonts + metadata SEO
│   ├── page.tsx                # Composition des sections + filigranes séparateurs
│   ├── globals.css             # Palette, animations, texture papier, marquee avis
│   ├── lib/
│   │   └── season.ts           # Helper saison auto (non utilisé actuellement)
│   └── components/
│       ├── Navigation.tsx      # Header sticky
│       ├── Hero.tsx            # Hero avec parallax + word-reveal
│       ├── Intro.tsx           # Phrase d'intro encadrée par 2 branches
│       ├── Creations.tsx       # 3 services
│       ├── About.tsx           # Photo artisan + lettrines
│       ├── Gallery.tsx         # Grille 6 photos
│       ├── Reviews.tsx         # Carousel avis Google + ✻ entre cards
│       ├── Visit.tsx           # Adresse + horaires
│       ├── Footer.tsx          # Pied de page olive
│       ├── InstagramFab.tsx    # Bouton flottant
│       ├── Filigrane.tsx       # Branche d'olivier SVG
│       ├── Ornament.tsx        # Séparateur ✿
│       ├── SectionDivider.tsx  # Ligne fine animée
│       └── FadeIn.tsx          # Wrapper motion fade-in scroll
├── public/
│   └── gallery/                # Toutes les photos
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

---

## 🛠 Workflow recommandé pour un nouveau fleuriste

1. **Cloner** le repo (ou dupliquer le dossier)
2. **Find & Replace** des placeholders `[...]` dans VS Code (Cmd+Shift+H) — textes uniquement
3. **Lancer en local** : `npm install && npm run dev`
4. **Vérifier** que tous les `[...]` ont été remplacés : `grep -rn "\[" app/ | grep -v node_modules`
5. **Déployer** : `npx vercel --prod --name <nom-du-fleuriste>`

> Les photos dans `public/gallery/` ne sont pas à modifier — elles font partie de l'identité commune du template.
