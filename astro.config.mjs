import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://portfolio-dorian.s-t-m.fr',
  output: 'static',
  integrations: [tailwind()],
});
