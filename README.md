# Adrian Vanco Portfolio

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
- SEO metadata and canonical URLs
- PWA manifest and install icons
- GitHub Pages deployment workflow

## Project Structure

```text
app/
  assets/css/       Global styles
  data/             Project data
  layouts/          Shared layout and language switcher
  pages/            Home, CV, and projects pages
i18n/locales/       SK and EN translations
public/             Images, favicon, PWA icons, and static assets
```

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
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

Deployment runs on pushes to the `deploy_githubpages` branch and publishes the generated site to GitHub Pages.

## PWA Assets

The PWA icon set is generated from `public/icon.png`:

- `public/apple-touch-icon.png`
- `public/pwa-192x192.png`
- `public/pwa-512x512.png`
- `public/maskable-icon-192x192.png`
- `public/maskable-icon-512x512.png`
- `public/manifest.webmanifest`
