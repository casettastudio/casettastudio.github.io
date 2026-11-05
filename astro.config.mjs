// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import process from 'node:process';

const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubPagesRootSite = repositoryName === `${repositoryOwner}.github.io`;
const site = repositoryOwner
  ? `https://${repositoryOwner.toLowerCase()}.github.io`
  : 'https://example.com';
const base = repositoryName && !isGitHubPagesRootSite ? `/${repositoryName}/` : '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Road Rage",
      cssVariable: "--font-grunge",
      fallbacks: ["system-ui"]
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      weights: [400, 500, 600, 700, 800],
    }],
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  integrations: [sitemap()],
});