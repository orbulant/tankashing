import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tankashing.com',
  image: {
    // Example: Allow remote image optimization from a single domain
    domains: ['http://github-profile-summary-cards.vercel.app'],
  },
});
