---
name: add-translation
description: >
  Ajoute ou modifie un texte affiché sur le site via i18n.config.ts (fr et en),
  au lieu de texte en dur dans un composant.
---

# Ajouter/modifier une traduction

Toute chaîne visible dans un composant doit passer par `$t('...')`, pas de texte en dur
dans le `<template>` (exception connue : `MENU_ITEMS` dans `helpers/constants.ts`, qui
stocke le libellé français en dur dans la clé `trad` — ne pas reproduire ce pattern
ailleurs, c'est un raccourci existant, pas la convention à suivre).

## Où éditer

Un seul fichier : `i18n.config.ts`, avec deux blocs top-level `en` et `fr` qui doivent
rester en miroir (mêmes clés dans les deux, structure imbriquée identique, ex:
`club.history_title`, `menu.map`, `club_kit.title`...).

## Étapes

1. Repérer la clé existante la plus proche (grep la clé anglaise ou française dans
   `i18n.config.ts`) pour respecter la nomenclature du namespace (`club.*`, `menu.*`,
   `payment.*`, `footer.*`...)
2. Ajouter/modifier la clé dans **le bloc `fr`**
3. Ajouter/modifier la même clé dans **le bloc `en`** (jamais l'un sans l'autre, même si
   la traduction anglaise est approximative — un fallback manquant casse le rendu en
   locale `en`)
3. Utiliser `{{ $t('namespace.clé') }}` dans le composant (locale par défaut : `fr`,
   voir `locale: 'fr'` dans `i18n.config.ts`)

## Piège

- Les apostrophes dans les strings `fr` doivent être échappées (`\'`) — le fichier est
  un simple objet JS/TS, pas un fichier de traduction JSON séparé par locale.
- Ne pas confondre avec `MENU_ITEMS` (`helpers/constants.ts`) qui n'est pas relié à
  l'i18n actuellement.
