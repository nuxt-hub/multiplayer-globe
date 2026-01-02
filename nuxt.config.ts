// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ['@nuxthub/core', '@nuxt/eslint', '@vueuse/nuxt', '@nuxt/fonts'],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  compatibilityDate: '2025-01-28',

  // https://nitro.build/config
  nitro: {
    experimental: {
      websocket: true,
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    workers: true,
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})
