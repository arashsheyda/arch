import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  alias: {
    '~arch': resolve('./'),
  },

  css: [
    resolve('./assets/scss/style.scss'),
  ],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  components: [
    {
      global: true,
      prefix: 'arch',
      path: resolve('./components/arch'),
    },
  ],

  modules: [
    'nuxt-icon',
    'pinceau/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    'nuxt-config-schema',
  ],

  pinceau: {
    preflight: false,
    configFileName: 'tokens.config',
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'one-dark-pro',
      },
    },
    navigation: {
      fields: ['title', 'icon', '_path'],
    },
  },

  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
