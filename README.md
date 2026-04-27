# 🌸 Fleuriste — Template Générique

Template Next.js prêt à customiser pour créer rapidement un site vitrine de fleuriste artisan.

Basé sur la version produite pour [L'Empreinte Florale](https://empreinte-florale-v2.vercel.app/), avec tous les contenus remplacés par des placeholders.

## ✨ Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Motion** (framer-motion v12) pour les animations fade-in au scroll
- Fonts : **Mona Sans** (sans-serif bold) + **Cormorant Garamond** (serif italic, accents éditoriaux)

## 🎨 Design

- Palette : crème (`#ffffe5`) · encre (`#192425`) · olive (`#868557`)
- Style éditorial / herbier vivant
- Animations fade-in au scroll sur chaque section
- Carousel d'avis en marquee (vitesse 13s)
- Responsive : mobile, tablette, desktop

## 📋 Sections

1. **Navigation** sticky avec logo + menu + contact
2. **Hero** (photo plein écran + carte blanche avec slogan + CTA)
3. **Intro** (présentation courte de l'artisan)
4. **Créations** (3 services en grid)
5. **About** (photo artisan + texte serif italique)
6. **Galerie** (6 photos en grid)
7. **Reviews** (avis Google en carousel marquee)
8. **Visit** (adresse + horaires)
9. **Footer** (contact + nav)
10. **InstagramFab** (bouton flottant)

## 🚀 Customiser pour un nouveau fleuriste

### 1. Find & Replace (textes)

Dans tout le projet, remplacer ces placeholders :

| Placeholder | Exemple |
|---|---|
| `[NOM DU FLEURISTE]` | L'Empreinte Florale |
| `[PRÉNOM GÉRANT]` | Jérémy |
| `[VILLE]` | Port-Vendres |
| `[ADRESSE — VILLE]` | 4 av. Vauban — 66660 Port-Vendres |
| `[TÉLÉPHONE]` | 06 18 98 71 32 |
| `[EMAIL]` | exemple@gmail.com |
| `[@INSTAGRAM]` | @lempreinte_florale |
| `[SLOGAN PRINCIPAL]` | Herbier vivant, fleurs de saison |
| `[SERVICE 1/2/3]` | Bouquet sur-mesure / Mariages / Hommages |
| `[NOM CLIENT 1-6]` + `[MOIS ANNÉE]` + texte | Avis Google |
| `[X,X]` + `[N] avis` | 5,0 / 22 avis |
| `[HORAIRES]` | 09:00 — 12:30 · 15:00 — 19:00 |
| `[PHRASE D'ACCROCHE]` / `[PARAGRAPHE 1/2]` | textes longs |

Astuce : `grep -rn "\[NOM\|\[VILLE\|\[TÉLÉPHONE\|\[ADRESSE\|\[@\|\[X,X" app/`

### 2. Photos

Remplacer les fichiers dans `public/gallery/` :

| Fichier | Usage |
|---|---|
| `hero.jpg` | Photo hero plein écran (à créer — actuellement placeholder beige dans le code) |
| `about.jpg` | Photo de l'artisan (à créer — actuellement placeholder beige dans le code) |
| `fleur-1.jpg` à `fleur-4.jpg` | 4 photos de la galerie (déjà fournies — à remplacer si besoin) |
| `fleur-5.jpg`, `fleur-6.jpg` | Photos 5-6 de la galerie (à ajouter — actuellement placeholders beiges) |

Pour activer une photo dans le code (Hero / About) :
- Ouvrir `app/components/Hero.tsx` ou `app/components/About.tsx`
- Décommenter le bloc `<Image>` indiqué dans le commentaire `{/* PLACEHOLDER PHOTO ... */}`
- Supprimer le `<div>` du placeholder beige

Pour ajouter `fleur-5.jpg` et `fleur-6.jpg` à la galerie :
- Déposer les fichiers dans `public/gallery/`
- Dans `app/components/Gallery.tsx`, ajouter les paths au tableau `photos`
- Supprimer le bloc `Array.from({ length: 2 })` qui rend les placeholders

### 3. Liens externes

Remplacer les `href="#"` et `href="tel:#"` / `href="mailto:#"` par les vraies URL.

### 4. Metadata SEO

Dans `app/layout.tsx`, mettre à jour `title` et `description`.

## 🛠️ Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🚀 Déploiement Vercel

```bash
npx vercel --prod
```

Ou connecter le repo GitHub depuis le dashboard Vercel pour les déploiements automatiques.

## 📁 Structure du projet

```
fleuriste_template_générique/
├── app/
│   ├── layout.tsx              # Fonts + metadata
│   ├── page.tsx                # Composition des sections
│   ├── globals.css             # Tokens (palette, animations marquee)
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── Intro.tsx
│       ├── Creations.tsx
│       ├── About.tsx
│       ├── Gallery.tsx
│       ├── Reviews.tsx
│       ├── Visit.tsx
│       ├── Footer.tsx
│       ├── InstagramFab.tsx
│       └── FadeIn.tsx          # Wrapper motion réutilisable
├── public/
│   └── gallery/                # Photos (jpg/avif)
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```
