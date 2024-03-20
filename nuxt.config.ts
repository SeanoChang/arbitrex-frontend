// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n", // https://i18n.nuxtjs.org/
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
    "@nuxtjs/google-fonts", // https://google-fonts.nuxtjs.org/getting-started/setup
    "@pinia/nuxt", // needed for pinia persiststate
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },
  colorMode: {
    classSuffix: "", // color mode class suffix for tailwindcss darkmode
    fallback: "dark", // fallback dark mode
  },
  image: {
    dir: "assets",
  },
});
