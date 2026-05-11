# AGENTS.md

Project architecture reference for AI agents and developers.

## Project Overview

Personal portfolio site for Abhijit Singh (AI Engineer). Built on TanStack Start (SSR React) deployed to Netlify. Content is managed as Markdown files via Content Collections.

## Directory Structure

```
content/                  # Markdown content (source of truth for all portfolio data)
  jobs/                   # Work experience — one file per role
  education/              # Education entries
  projects/               # Project cards
  blog/                   # Blog posts
src/
  components/
    Header.tsx            # Sticky nav bar with links and Download CV button
    ui/                   # Radix UI + Tailwind primitives (badge, card, etc.)
  lib/
    utils.ts              # cn() class merging helper
  routes/
    __root.tsx            # Root layout: HTML shell + Header + Outlet
    index.tsx             # Home page (hero, skills grid, section links)
    resume.tsx            # Full resume view
    projects.tsx          # Projects grid
    contact.tsx           # Netlify Forms contact form
    blog/
      index.tsx           # Blog post listing at /blog/
      $slug.tsx           # Individual blog post at /blog/$slug
public/
  headshot-on-white.jpg   # Profile photo
  resume.pdf              # Downloadable PDF resume
content-collections.ts    # Zod schemas for jobs, education, blog, projects
```

## Key Patterns

### File-Based Routing (TanStack Router)
- Files in `src/routes/` map directly to URL paths.
- `__root.tsx` defines the HTML shell (`shellComponent`) and the page layout (`component`) with `<Header>` + `<Outlet>`.
- `blog/index.tsx` → `/blog/`, `blog/$slug.tsx` → `/blog/:slug`.

### Content Collections
- Frontmatter is validated at build time via Zod schemas in `content-collections.ts`.
- Imported as `allJobs`, `allEducations`, `allBlogs`, `allProjects` from `'content-collections'`.
- The `content` field in each schema is auto-populated from the Markdown body.

### Styling
- Tailwind CSS 4 utility classes throughout.
- `cn()` from `@/lib/utils` for conditional class merging.
- CSS variables for theme tokens defined in `src/styles.css`.

### TypeScript
- Strict mode; `@/` alias resolves to `src/`.
- Type-only imports with `import type`.

## Adding Content

**New job:** add a file to `content/jobs/` with frontmatter: `jobTitle`, `company`, `location`, `startDate`, `endDate` (optional), `summary`, `tags` (array).

**New project:** add a file to `content/projects/` with frontmatter: `title`, `description`, `tags`, `github` (optional), `liveUrl` (optional).

**New blog post:** add a file to `content/blog/` with frontmatter: `title`, `date`, `summary`, `tags`, `author`.

**New education entry:** add a file to `content/education/` with frontmatter: `school`, `summary`, `startDate`, `endDate` (optional), `tags`.

## Conventions

- Components: PascalCase files, named exports.
- Routes: kebab-case files.
- No comments unless the *why* is non-obvious.
- Keep all personal/contact data in content files or route components — not in environment variables.

## Deployment

Deployed on Netlify. `netlify.toml` configures:
- Build command: `vite build`
- Publish directory: `dist/client`
- Dev server port: 8888 (proxying Vite on 3000)
