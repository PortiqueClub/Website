# Le Portique Club

Site web du [Portique Club](https://leportiqueclub.fr/), club d'animation et d'école de natation sur la plage de La Tranche-sur-Mer depuis 1932. Le site présente les activités, horaires, tarifs et informations pratiques du club.

## Stack technique

- [Nuxt 3](https://nuxt.com/) (Vue 3, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) via `@nuxtjs/tailwindcss`, avec purge via `nuxt-purgecss`
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) pour l'internationalisation (français / anglais, messages définis dans `i18n.config.ts`)
- [nuxt-seo-kit](https://github.com/harlan-zw/nuxt-seo-kit) pour le SEO
- ESLint (config `@antfu/eslint-config`) pour le lint
- pnpm comme gestionnaire de paquets, Node `20.x` (voir `.nvmrc`)

## Prérequis

- Node.js 20.x (voir `.nvmrc`)
- [pnpm](https://pnpm.io/) 8.x

## Installation

```bash
pnpm install
```

## Variables d'environnement

Le projet n'a actuellement aucune variable d'environnement requise pour le build ou le dev.

## Développement

Lance le serveur de développement sur `http://localhost:3000` :

```bash
pnpm dev
```

## Qualité de code

```bash
# Lint
pnpm lint
pnpm lint:fix

# Vérification des types
pnpm type:check

# Tests
pnpm test
```

Ces vérifications (lint, type-check, tests, build) sont exécutées automatiquement en CI sur chaque pull request et sur `main` (voir `.github/workflows/test.yml`).

## Build & déploiement

```bash
# Build de production
pnpm build

# Prévisualisation locale du build de production
pnpm preview

# Génération d'un site statique
pnpm generate
```

Voir la [documentation de déploiement Nuxt](https://nuxt.com/docs/getting-started/deployment) pour les options d'hébergement.

## Structure du projet

- `app.vue` — point d'entrée de l'application
- `components/` — composants Vue (header, footer, sections de la page : activités, tarifs, historique, plan d'accès, etc.)
- `helpers/` — constantes et fonctions utilitaires partagées
- `plugins/` — plugins Nuxt (ex. détection des breakpoints)
- `i18n.config.ts` — traductions français / anglais
- `nuxt.config.ts` — configuration Nuxt (modules, SEO, méta, i18n)
- `tailwind.config.js` / `colors.js` — configuration du thème Tailwind
- `public/` — assets statiques
