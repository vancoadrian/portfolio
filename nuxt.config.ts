// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    baseURL: '/portfolio/', // baseURL: '/<repository>/'
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/ui',
  ],

  css: ['~/assets/css/main.css'],

  googleFonts:{
    families: {
      Rajdhani: [600,700],
      'Russo One': true,
      // Exo 2
      // Orbitron //futuristic
      //Teko, Antonio, Barlow Condensed
      // Roboto: true,
    },
  },

  i18n: {
    defaultLocale: 'sk',
    locales: [
      { code: 'en', name: 'EN', file: 'en.json' },
      { code: 'sk', name: 'SK', file: 'sk.json' }
    ]
  }
})