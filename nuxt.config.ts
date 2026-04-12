// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: (process.env.NODE_ENV === 'production' ? '/portfolio/portfolio_favicon_simple.svg' : '/portfolio_favicon_simple.svg')
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
      baseURL: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
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