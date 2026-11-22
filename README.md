# javageeks.github.io

Personal engineering portfolio for **Shaik Khaja Hussain**, an Enterprise Technical Lead with
nearly 15 years across telecommunications, banking, financial services, and eCommerce —
covering Enterprise Java, distributed systems, cloud architecture, and AI-enabled software
engineering.

Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deploys to GitHub Pages
via GitHub Actions. The home page is **pre-rendered at build time** (see
`scripts/prerender.mjs`) so the published HTML already contains the visible content — important
for search engines, link previews, screenshot tools, and no-JS visitors.

**Live site:** https://javageeks.github.io/

A generic, reusable template version of this portfolio (for other people to clone and
customize) lives separately at https://github.com/javageeks/enterprise-brand-portal.

## Tech stack

- **React 19** + **TypeScript** — component architecture and type safety
- **Vite** — build tooling, dev server, and SSR pipeline (for pre-render)
- **Tailwind CSS** — design system and styling
- **Framer Motion** — scroll reveals, hover interactions, animated counters
- **React Router** — client-side routing
- **React Icons** — iconography
- **GitHub Actions** + **GitHub Pages** — CI/CD and hosting

## Project structure

```
javageeks.github.io/
├── .github/workflows/deploy.yml   # CI/CD pipeline for GitHub Pages
├── public/                        # Static assets (favicon, robots.txt, sitemap.xml, resume, og-image)
├── scripts/
│   └── prerender.mjs              # Post-build step: writes the pre-rendered HTML into dist/index.html
├── src/
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/              # Hero, About, Experience, Skills, Architecture,
│   │   │                          # AIEngineering, Projects, Certifications, Contact
│   │   └── ui/                    # Reusable primitives: Button, Card, Badge, Section, StatCounter
│   ├── data/                      # All page copy and content — no hardcoded UI strings
│   ├── hooks/                     # useActiveSection, useScrollDirection, useCountUp, useIsHydrated
│   ├── layouts/                   # MainLayout (Navbar + Outlet + Footer)
│   ├── pages/                     # Home
│   ├── services/                  # siteConfig
│   ├── styles/                    # globals.css (Tailwind layers + design tokens)
│   ├── types/                     # Shared TypeScript interfaces
│   ├── utils/                     # Framer Motion animation variants
│   ├── App.tsx
│   ├── entry-server.tsx           # SSR entry used by the pre-render step
│   └── main.tsx                   # Client entry — hydrates the pre-rendered HTML
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
└── eslint.config.js
```

## Editing content

All copy lives in `src/data/`, not inside components:

| File | Controls |
| --- | --- |
| `src/data/navigation.ts` | Nav links and social/contact links (GitHub, LinkedIn, Email, Resume) |
| `src/data/about.ts` | About paragraphs, stats, focus areas |
| `src/data/experience.ts` | Work history entries |
| `src/data/skills.ts` | Skill categories |
| `src/data/architecture.ts` | Architecture principles |
| `src/data/ai-engineering.ts` | AI engineering capabilities |
| `src/data/projects.ts` | Featured projects |
| `src/data/certifications.ts` | Certifications & courses |

### Content guardrails

- **Client platform work** is described at a client-neutral level — no internal application
  names, product codenames, or MVP names appear in `src/data/*.ts` or component text. Keep it
  that way when updating.
- **Project GitHub links** appear only on projects that have a public repository
  (AI Engineering Framework, A1 Paints). Client projects render a "source code not public"
  line instead of a link.
- The resume lives at `public/Shaik_Khaja_Hussain.pdf` — replace it with the current version
  when it changes.

## Installation

Requires Node.js 20+.

```bash
npm install
```

## Local development

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`. Pre-rendering is skipped in dev — the client
renders normally.

## Build

```bash
npm run build
```

Runs three steps: (1) `tsc -b` type-checks, (2) `vite build` produces the client bundle in
`dist/`, (3) `vite build --ssr src/entry-server.tsx` produces a short-lived SSR bundle in
`dist-ssr/` that `scripts/prerender.mjs` consumes and deletes, writing the pre-rendered HTML
into `dist/index.html`.

```bash
npm run preview
```

Serves the production build locally for a final check.

## Linting

```bash
npm run lint
```

## Deployment

Automatic via **GitHub Actions** (`.github/workflows/deploy.yml`) on every push to `main`:
the workflow installs, lints, builds (including pre-render), and deploys to
`https://javageeks.github.io/`.

In the repository settings, **Settings → Pages → Source** should be set to **GitHub Actions**.

## SEO & accessibility

- Meta tags, Open Graph, and Twitter Card tags are set in `index.html`; a real
  `public/og-image.png` (1200×630) is included for link previews.
- The home page is pre-rendered, so crawlers and screenshot tools see the real content without
  running JavaScript. A `<noscript>` safety net in `index.html` also forces Framer Motion's
  initial-hidden styles to resolve as visible for JS-disabled visitors.
- `public/robots.txt` and `public/sitemap.xml` point at the root URL.
- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`) and ARIA labels are used
  throughout. `prefers-reduced-motion` disables count-up animations.

## Contact

- GitHub: https://github.com/javageeks
- LinkedIn: https://www.linkedin.com/in/khajahussainshaik/
- Email: hussainshaik7913@gmail.com
- Location: Hyderabad, India

## License

Personal portfolio — content copyright Shaik Khaja Hussain.
