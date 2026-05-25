# damnluck.github.io

Public landing page for [Damn Luck](https://damnluck.github.io) — real-time sports market intelligence platform.

## Stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Formspree](https://formspree.io) — waitlist form
- GitHub Pages — hosting

## i18n

Two locales, both prefixed:

| Locale | URL |
|--------|-----|
| Spanish (default) | `/es/` |
| English | `/en/` |

Translation files live in `src/i18n/`.

## Development

```bash
pnpm install
pnpm dev
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions to GitHub Pages.

Requires **GitHub Pages source set to GitHub Actions** in the repo settings.
