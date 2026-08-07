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
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${appBaseURL}apple-touch-icon.png`
        },
        {
          rel: 'manifest',
          href: `${appBaseURL}manifest.webmanifest`
        }
      ],
      meta: [
        {
          name: 'theme-color',
          content: '#111729'
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
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
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
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://vancoadrian.github.io',
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

  site: {
    url: (process.env.NUXT_PUBLIC_SITE_URL || 'https://vancoadrian.github.io') + appBaseURL,
  },

  sitemap: {
    // Auto-discovered image URLs don't account for the /portfolio/ base path
    // and resolve incorrectly; og:image is already covered by usePortfolioSeo.
    discoverImages: false,
    // Route auto-discovery (crawling + page files) produces duplicate and
    // malformed entries for this app/i18n setup, so the page list is
    // declared explicitly instead — still auto-generates valid XML, the
    // sitemap index, and per-locale hreflang alternates.
    excludeAppSources: true,
    urls: () => [
      { loc: '/', priority: 1.0, changefreq: 'monthly', _i18nTransform: true },
      { loc: '/cv', priority: 0.8, changefreq: 'monthly', _i18nTransform: true },
      { loc: '/projects', priority: 0.9, changefreq: 'monthly', _i18nTransform: true },
    ],
  },

  icon: {
    provider: 'none',
    clientBundle: {
      scan: true,
      // ...or other bundle options
    },
  },

  eslint: {
    config: {
      stylistic: false,
    },
  },
})