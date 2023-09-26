import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  app: {
    keepalive: true,
  },

  // experimental: {
  //   componentIslands: 'local',
  // },

  alias: {
    '~arch': resolve('./'),
  },

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

  extends: [
    'nuxt-seo-kit',
  ],

  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    'nuxt-config-schema',
    '@nuxtjs/color-mode',
  ],

  unocss: {
    configFile: resolve('./uno.config.ts'),
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
    },
    navigation: {
      fields: ['title', 'icon', '_path'],
    },
  },

  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
    classSuffix: '',
  },
})
