// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Coi&Co",
      meta: [
        {
          name: "description",
          content: "Coi&Co is a multi-page entertainment web app.",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
