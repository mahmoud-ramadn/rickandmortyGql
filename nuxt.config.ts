import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      GQL_HOST: "https://rickandmortyapi.com/graphql",
    },
  },
  imports: {
    dirs: ["graphql"], // Enable auto-imports for the graphql directory
  },
});
