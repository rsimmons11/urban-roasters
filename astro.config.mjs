import { defineConfig } from "astro/config";

 import icon from "astro-icon";

export default defineConfig({
  integrations: [icon({
    include: {
      mdi: ['*'], // Loads entire Material Design Icon set
      tabler: ['*'], // Loads entire Tabler Icon set
      'flat-color-icons': ['*'], // Loads entire Flat Color Icon set
      'icon-park': ['*'], // Loads entire Icon Park Icon set
      ri: ['*'], // Loads entire Remix Icon set
    },
  }),],
});