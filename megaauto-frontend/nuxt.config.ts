// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-splide",
  ],
  splide: {
    theme: "default",
  },
  runtimeConfig:{
    public:{
      baseUrl: process.env.NUXT_API_URL || 'http://localhost:3002'
    }
  },
  plugins:[
    '~/plugins/axios.js',
    '~/plugins/dayjs.js', 
  ],
});
