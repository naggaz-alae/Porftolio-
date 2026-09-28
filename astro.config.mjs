import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hébergement gratuit GitHub Pages : https://naggaz-alae.github.io/Portfolio/
// Si tu passes un jour sur un domaine perso (ex. alae-naggaz.dev) :
//   site: 'https://alae-naggaz.dev' et supprime la ligne `base`.
export default defineConfig({
  site: 'https://naggaz-alae.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
