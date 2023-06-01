import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import image from "@astrojs/image";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://artisozolins.turn.lv/",
  integrations: [
    astroI18next(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    preact(),
  ],
});
