# Abhijit Singh – AI Engineer Portfolio

A personal portfolio and resume site for Abhijit Singh, a final-year B.Tech Computer Science student and aspiring AI Engineer. The site showcases projects, work experience, education, and a technical blog.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | [Content Collections](https://www.content-collections.dev/) (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | [Netlify](https://netlify.com) |

## Pages

- `/` – Hero landing page with skills overview
- `/resume` – Full resume with work experience, education, and leadership
- `/projects` – Project cards with tags and links
- `/blog/` – Blog post listing
- `/blog/$slug` – Individual blog post
- `/contact` – Netlify Forms contact form

## Running Locally

```bash
# Install dependencies
npm install

# Start development server (with Netlify features)
netlify dev

# Or with npm directly
npm run dev

# Production build
npm run build
```

The dev server runs on port 8888 (Netlify CLI) or port 3000 (direct Vite).

## Content

All content lives in the `content/` directory as Markdown files with YAML frontmatter:

- `content/jobs/` – Work experience entries
- `content/education/` – Education entries
- `content/projects/` – Project entries
- `content/blog/` – Blog posts

Schemas are defined in `content-collections.ts` using Zod.

## Environment Variables

No environment variables are required for the base portfolio. If the AI assistant feature is added, set one of:

- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
