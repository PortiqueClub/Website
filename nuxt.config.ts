import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-07',

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  site: {
    url: 'https://leportiqueclub.fr/',
    name: 'Le Portique club',
    description: 'Le Portique Club , depuis 1932, anime des activités et propose des cours de natation dans une piscine chauffée sur la plage pour les enfants pendant la période estivale. Il accueille vos enfants de 3 à 13 ans, du Dimanche au Vendredi (fermeture le Samedi) de 10h à 13h et de 15h30 à 18h30, de début Juillet à fin Août. L’inscription sur la plage est simple et rapide : à la journée, à la demi-journée ou à la semaine. Nous acceptons les chèques vacances. Le club se situe sur la Plage centrale de la Tranche-sur-Mer, à proximité du centre-ville.',
    defaultLocale: 'fr-FR',
  },

  modules: [
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        language: 'en-US',
      },
      {
        code: 'fr',
        language: 'fr-FR',
      },
    ],
  },

  typescript: {
    strict: true,
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Le Portique club',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Le Portique Club , depuis 1932, anime des activités et propose des cours de natation dans une piscine chauffée sur la plage pour les enfants pendant la période estivale. Il accueille vos enfants de 3 à 13 ans, du Dimanche au Vendredi (fermeture le Samedi) de 10h à 13h et de 15h30 à 18h30, de début Juillet à fin Août. L’inscription sur la plage est simple et rapide : à la journée, à la demi-journée ou à la semaine. Nous acceptons les chèques vacances. Le club se situe sur la Plage centrale de la Tranche-sur-Mer, à proximité du centre-ville.' },
        { name: 'keywords', content: 'animation, enfants, piscine, activités, cours de natation, tranche sur mer, club mickey' },
      ],
    },
    layoutTransition: {
      mode: 'out-in',
      name: 'layout',
    },
  },

  plugins: ['~/plugins/breakPoints.ts'],
})
