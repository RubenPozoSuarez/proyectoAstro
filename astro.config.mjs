import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  // TIPOS DE SALIDA (hybrid | static | server) 
  // hybrid: Genera un sitio híbrido que se puede servir desde un servidor o como un sitio estático.
  // static: Genera un sitio estático que se puede servir desde un servidor o un CDN.
  // server: Genera un servidor de Astro que se puede ejecutar en un entorno Node.js.
  output: 'hybrid',
  adapter: netlify(),
});