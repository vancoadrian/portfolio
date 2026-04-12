/// <reference types="node" />
// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
const appBaseURL = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';

export default defineNuxtConfig({
  app: {
    baseURL: appBaseURL,
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `${appBaseURL}icon.png`
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${appBaseURL}portfolio_favicon_simple.svg`
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
  },

  runtimeConfig: {
    public: {
      baseURL: appBaseURL,
      siteURL: process.env.NUXT_PUBLIC_SITE_URL || 'https://vancoadrian.github.io',
    }
  },

  icon: {
    provider: 'none',
    clientBundle: {
      scan: true,
      // ...or other bundle options
    },
  }
})