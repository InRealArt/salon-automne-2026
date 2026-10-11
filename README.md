# Salon d’Automne 2026 — InRealArt

Landing page du jeu-concours « Gagnez vos invitations » (Salon d’Automne, 28 oct. — 1ᵉʳ nov. 2026).

- **Rendu** (couleurs, mises en page, composants) : identique à `templates/landing.html`
- **Polices** : celles de `docs/DIRECTION_ARTISTIQUE.md` — Cormorant Garamond (titres, à la place de Bodoni Moda)
  et Montserrat (texte, à la place de Hanken Grotesk)
- **Animations** : GSAP, sans modifier le rendu final

## Stack

Next.js 16.4 (App Router, Turbopack, React Compiler) · React 19.3 · TypeScript 7 (`tsc` natif) · Tailwind CSS 4.3 · GSAP 3.15 (SplitText, ScrollTrigger) · Brevo (SDK v6) · zod 4

## Démarrage

```bash
pnpm install
cp .env.example .env.local   # renseigner les variables Brevo
pnpm dev                     # http://localhost:3000
```

| Script | Rôle |
|---|---|
| `pnpm dev` | serveur de développement |
| `pnpm build` / `pnpm start` | build et serveur de production |
| `pnpm typecheck` | vérification TypeScript 7 (`tsc --noEmit`) |
| `pnpm lint` | ESLint (`eslint-config-next`) |

> **TypeScript 6 / 7 côte à côte** : `typescript` est un alias vers `@typescript/typescript6`
> (API JS requise par typescript-eslint), et `@typescript/native` fournit le `tsc` de TS 7.
> Configuration recommandée par Microsoft tant que typescript-eslint ne supporte pas TS 7.

## Jeu-concours et Brevo

Le formulaire (`components/sections/contest-form.tsx`) appelle la Server Action
`app/actions/contest.ts` : validation zod, pot de miel anti-robots, puis création ou mise à jour
du contact Brevo dans la liste du jeu (et dans la liste newsletter si la case est cochée).

À créer dans Brevo (Contacts → Paramètres → Attributs) : `JOUR_VISITE` (texte),
`TELEPHONE` (texte), `OPTIN_NEWSLETTER` (booléen). `PRENOM` et `NOM` existent par défaut.

Sans variables `BREVO_*` : en développement la participation est simulée (log console) ;
en production le formulaire affiche une erreur au lieu de perdre silencieusement les participations.

## Médias

Toutes les images sont en **WebP**, rangées par composant dans `public/images/<composant>/` et
référencées dans `lib/content.ts` (`IMAGES`, `VIDEO_SRC`) :

| Fichier | Utilisation |
|---|---|
| `hero/hero_main.webp` | grand visuel du hero, fond du CTA final, vignette « Les pavillons », image de partage |
| `hero/hero_secondary.webp` | vignette inclinée du hero, étape 1 du parcours |
| `edition/edition.webp` | affiche 2026 (section Édition), étape 5 du parcours |
| `videoTriptych/videoTriptych1.webp` | photo gauche du triptyque, étape 2 du parcours |
| `videoTriptych/videoTriptych2.webp` | photo droite du triptyque, étape 3 du parcours |
| `videoTriptych/video.mp4` + `video-poster.webp` | vidéo centrale (poster extrait de la vidéo) |
| `artists/Stefan Beiu.webp` | Stefan Beiu en pied devant ses toiles : étape 4 du parcours |
| `artists/Stefan Beiu2.webp` | Stefan Beiu en gros plan : médaillon de la section Rencontre, vignette du parcours |
| `contest/contest.webp` | photo de la section jeu-concours |
| `artists/<slug>-portrait.webp` | portraits ronds de la section Artistes (480×480, recadrés sur le visage à partir des photos de profil inrealart.com) |

Contenus à compléter (entre crochets dans `lib/content.ts` et les sections) : nombre
d’invitations, date du tirage, date de la rencontre, disciplines manquantes, nom de la section,
citation de Stefan Beiu.

## Organisation

```
app/            layout (polices), page, globals.css (palette du template), actions/
components/
  sections/     une section = un composant (serveur, sauf tour et contest-form)
  ui/           vidéo d’ambiance
  motion/       GSAP : PageMotion (orchestration par attributs data-*), Magnetic
lib/            content.ts (contenu éditorial), brevo.ts, gsap.ts
```

## Animations GSAP

`components/motion/page-motion.tsx` anime la page via des attributs posés dans les sections :

| Attribut | Effet |
|---|---|
| `data-intro` | entrée du hero : badge, titre ligne par ligne (SplitText), texte, boutons, visuel révélé par masque, vignette, légende, chiffres |
| `data-count` | compteurs des chiffres clés |
| `data-split` | titres de section révélés ligne par ligne au scroll |
| `data-reveal` / `data-stagger` | apparitions au scroll (élément seul / enfants en cascade) |
| `data-parallax` | parallax des photos du triptyque vidéo (desktop) |
| `data-zoom` | dézoom de la photo de fond du CTA final |

S’y ajoutent les boutons « magnétiques » (`Magnetic`) et la transition entre étapes du parcours.
Tout est désactivé avec `prefers-reduced-motion` ; sans JavaScript, la page s’affiche normalement.
