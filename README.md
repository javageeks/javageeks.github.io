# Enterprise Brand Portal

A modern, single-page engineering portfolio for an Enterprise Technical Lead — covering
Enterprise Java, distributed systems, cloud architecture, and AI-enabled software engineering.

Built with React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deploys to GitHub Pages
via GitHub Actions.

## Tech stack

- **React 19** + **TypeScript** — component architecture and type safety
- **Vite** — build tooling and dev server
- **Tailwind CSS** — design system and styling
- **Framer Motion** — scroll reveals, hover interactions, animated counters
- **React Router** — client-side routing
- **React Icons** — iconography
- **GitHub Actions** + **GitHub Pages** — CI/CD and hosting

## Project structure

```
enterprise-brand-portal/
├── .github/workflows/deploy.yml   # CI/CD pipeline for GitHub Pages
├── public/                        # Static assets (favicon, robots.txt, sitemap.xml, resume.pdf)
├── src/
│   ├── assets/                    # Images and static media used by components
│   ├── components/
│   │   ├── layout/                # Navbar, Footer
│   │   ├── sections/               # Hero, About, Experience, Skills, Architecture,
│   │   │                           # AIEngineering, Projects, Certifications, Contact
│   │   └── ui/                    # Reusable primitives: Button, Card, Badge, Section, StatCounter
│   ├── data/                      # All page copy and content lives here — no hardcoded UI strings
│   ├── hooks/                     # useActiveSection, useScrollDirection, useCountUp
│   ├── layouts/                   # MainLayout (Navbar + Outlet + Footer)
│   ├── pages/                     # Home
│   ├── styles/                    # globals.css (Tailwind layers + design tokens)
│   ├── types/                     # Shared TypeScript interfaces
│   ├── utils/                     # Framer Motion animation variants
│   ├── App.tsx
│   └── main.tsx
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
| `src/data/navigation.ts` | Nav links and social/contact links |
| `src/data/about.ts` | About paragraphs, stats, focus areas |
| `src/data/experience.ts` | Work history entries |
| `src/data/skills.ts` | Skill categories and proficiency levels |
| `src/data/architecture.ts` | Architecture principles |
| `src/data/ai-engineering.ts` | AI engineering capabilities |
| `src/data/projects.ts` | Featured projects |
| `src/data/certifications.ts` | Certifications list |

Update `href` values in `navigation.ts` with your real GitHub, LinkedIn, and email, and replace
`public/resume.pdf` with your actual resume.

## Installation

Requires Node.js 20+.

```bash
npm install
```

## Local development

```bash
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Type-checks the project and produces a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for a final check.

## Linting

```bash
npm run lint
```

## Deployment (GitHub Pages)

This repository is configured to deploy automatically via **GitHub Actions**
(`.github/workflows/deploy.yml`) on every push to `main`.

1. Push this repository to GitHub under the name `enterprise-brand-portal` (or update
   `base` in `vite.config.ts` and `basename` in `src/main.tsx` if you use a different name).
2. In the repository settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and deploys it to GitHub Pages automatically.
4. Your site will be available at `https://<your-username>.github.io/enterprise-brand-portal/`.

### Manual deployment (alternative)

You can also deploy manually using `gh-pages`:

```bash
npm run build
npm run deploy
```

## SEO & accessibility

- Meta tags, Open Graph, and Twitter Card tags are set in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` are included — update the domain to match your
  deployed URL.
- Semantic landmarks (`header`, `main`, `footer`, `nav`, `section`) and ARIA labels are used
  throughout.
- All interactive elements have visible focus states; `prefers-reduced-motion` is respected.

## License

This project is provided as a personal portfolio template. Replace all placeholder content
(names, links, resume, project URLs) with your own before publishing.
