---
name: responsive-display
description: >
  Gère l'affichage conditionnel mobile/desktop ($isMobile/$isTouch/$isDesktop) sans
  casser une des deux versions. À lire avant tout v-if basé sur ces flags.
---

# Affichage responsive ($isMobile / $isTouch / $isDesktop)

## Contexte

`plugins/breakPoints.ts` fournit trois booléens réactifs via `useNuxtApp()`, basés sur
le breakpoint Tailwind `md` (768px, voir `tailwind.config.js` > `theme.screens`) :

```ts
const { $isMobile, $isTouch, $isDesktop } = useNuxtApp()
// $isMobile  = breakpoints.smaller('md')
// $isTouch   = breakpoints.between('sm', 'lg')
// $isDesktop = breakpoints.greater('md')
```

Utilisés dans `app.vue`, `TheHeader.vue`, `ActivitySection.vue`, `Activities.vue`,
`History.vue`.

## Incident de référence

`Map.vue` avait `<div v-if="$isMobile"><img .../></div>` puis
`<div v-else><!-- <MapboxMap .../> --></div>` : le composant desktop était commenté
(token Mapbox jamais configuré), donc **les visiteurs desktop voyaient un bloc vide**.
Corrigé (issue #11) en supprimant le `v-if`/`v-else` et en affichant l'image partout.

## Règle

- **Ne jamais** faire un `v-if="$isMobile"` / `v-else` où l'une des deux branches est
  un composant non fini, commenté, ou dépendant d'une config absente (clé API, etc.).
  Si le doute existe, grep le composant de la branche `v-else` pour vérifier qu'il
  rend vraiment quelque chose.
- Préférer les classes Tailwind responsives (`hidden md:flex`, `md:grid-cols-3`...)
  quand seul le *layout* change, pas le contenu — c'est le pattern majoritaire dans
  ce repo (voir `ActivitySection.vue`).
- Réserver `$isMobile`/`$isDesktop` en JS/template aux cas où le contenu ou le
  comportement diffère réellement (ex: cacher toute une nav, pas juste un style).
- Après modif, tester les deux tailles dans `pnpm dev` (resize autour de 768px), pas
  seulement lire le code.
