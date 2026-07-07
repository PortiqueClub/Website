---
name: new-section
description: >
  Ajoute une nouvelle section de contenu à la landing page one-page (composant Vue,
  ancre, entrée de menu, i18n fr+en). Ex: /new-section testimonials
---

# Nouvelle section : $ARGUMENTS

Le site est une landing page unique (`app.vue`) composée de sections empilées
(`ActivitySection`, `Activities`, `Schedule`, `Needs`, `Pricings`, `History`, `Map`...).
Lis un composant existant (ex: `components/Map.vue`) avant d'en créer un nouveau.

## Les 4 étapes

**1. Composant — `components/<NomSection>.vue`**

- `<section id="<ancre>" class="py-48 ...">` — l'id doit correspondre à l'ancre du menu
- Titre : `<h2 class="... font-heading">{{ $t('club.<clé>.title') }}</h2>`
- Zéro texte en dur — tout via `$t('...')` (voir [[add-translation]])
- Images statiques : `<img src="/static/xxx.webp">` (fichiers dans `public/static/`)
- Si le contenu diffère vraiment entre mobile et desktop, voir [[responsive-display]]
  avant d'utiliser `$isMobile`/`v-if`/`v-else`

**2. i18n — `i18n.config.ts`**

- Ajouter les clés dans **les deux blocs** `en` et `fr` (jamais un sans l'autre)
- Suivre la structure imbriquée existante sous `club.*`

**3. Menu — `helpers/constants.ts`**

- Ajouter une entrée dans `MENU_ITEMS` si la section doit apparaître dans la nav :
  `{ trad: 'Libellé', path: '#<ancre>' }`
- Note : `trad` est en dur en français ici (pas de `$t`), c'est l'existant — rester cohérent

**4. Intégration — `app.vue`**

- Importer/placer le composant dans l'ordre logique de `<main>` (composants auto-importés
  par Nuxt, pas d'import explicite nécessaire)

## Checklist

- [ ] `pnpm lint` OK (config `@antfu`, 2 espaces, un attribut par ligne en multiline)
- [ ] `pnpm type:check` OK
- [ ] Clés i18n présentes en `fr` ET `en`
- [ ] Testé en mobile ET desktop (`pnpm dev`, resize navigateur autour de 768px = `md`)
- [ ] Commit au format gitmoji (`✨ Add ...`, voir historique `git log --oneline`)
