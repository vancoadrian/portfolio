# Adrián Vančo Portfolio

Personal portfolio built with Nuxt, Vue, Tailwind CSS, Nuxt UI, and i18n support for Slovak and English content.

The site presents my CV and selected projects across web development, enterprise systems, automation, electronics, and IT administration.

## Live Site

https://vancoadrian.github.io/portfolio/

## Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nuxt UI
- Nuxt Image
- Nuxt Icon
- Nuxt i18n

## Features

- Bilingual SK/EN content
- CV page with education, experience, skills, certificates, and links
- Projects page with filtering, search, featured projects, and image previews
- SEO metadata, canonical URLs, and an auto-generated sitemap (`@nuxtjs/sitemap`)
- WebP gallery images
- PWA manifest and install icons
- GitHub Pages deployment workflow with lint and typecheck gates

## Project Structure

```text
app/
  assets/css/       Global styles
  components/       Page header and language switcher
  composables/      SEO and image-lightbox composables
  data/             Project and CV data
  layouts/          Shared layout
  pages/            Home, CV, and projects pages
i18n/locales/       SK and EN translations
public/             Images, favicon, PWA icons, and static assets
```

## Setup

Requires Node.js 22 or newer. New image assets under `public/` are tracked
with [Git LFS](https://git-lfs.com), so install it before committing images.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Lint and typecheck:

```bash
npm run lint
npm run typecheck
```

Build for production:

```bash
npm run build
```

Generate static output:

```bash
npm run generate
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

Deployment runs on pushes to the `deploy_githubpages` branch: the workflow
installs dependencies with `npm ci`, runs lint and typecheck, builds with the
`github_pages` preset, and publishes the generated site to GitHub Pages.

## PWA Assets

The PWA icon set is generated from `public/icon.png`:

- `public/apple-touch-icon.png`
- `public/pwa-192x192.png`
- `public/pwa-512x512.png`
- `public/maskable-icon-192x192.png`
- `public/maskable-icon-512x512.png`
- `public/manifest.webmanifest`
