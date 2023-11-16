// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/Blog-App/",
    head: {
      title: "My Blog",
      meta: [
        {
          name: "description",
          content:
            "Intresting information in the world, design, technology, culture, heath, style, travel, science and business",
        },
      ],
      link: [{ rel: "icon", type: "image/ico", href: "/Blog-App/favicon.ico" }],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  css: ["bootstrap/scss/bootstrap.scss"],
});
