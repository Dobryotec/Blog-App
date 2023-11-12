// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image"],

  css: ["bootstrap/scss/bootstrap.scss"],
});
