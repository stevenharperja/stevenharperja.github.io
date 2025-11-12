import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: [
          "en",
          "en-US",
          "ja", 
          "ja-JP"
        ]
    },
    site: 'https://stevenharperja.github.io',
    // base: 'stevenharperja.github.io/',
});
