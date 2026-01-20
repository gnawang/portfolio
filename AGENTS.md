# Personal Portfolio Website - Development Context
This repository is governed by the following architectural standards and 
protocols. You must prioritize these project-specific patterns, naming 
conventions, and technical constraints over general defaults. Internalize 
this specification before initiating any tasks to ensure all contributions 
remain consistent with the existing codebase and system integrity. The only 
portion of this document that can be modified is the Project Log portion
marked with a comment: <!-- -->. Otherwise, do NOT modify any other part of
this document.

## Project Overview
**Repository:** portfolio
**Objective:** Production-quality portfolio site featuring blog, photography gallery, and project showcase. Demonstrates technical capability while serving as personal brand presence.
**Development Constraints:** 1-hour daily sessions

## Technology Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage (images, assets)
- **Auth:** Supabase Auth (future admin functionality)
- **Hosting:** Vercel
- **Code Quality:** Prettier (default config), ESLint (default config)
- **Version control**: Git with GitHub remote
- **CI/CD**: Vercel GitHub integration (automatic deployments on push)
- Environment variables managed via Vercel dashboard and local .env.local

## Project Log
<!-- Audomatically incrementally update this section as development proceeds -->
- **2026-01-17**: Verified ShadCN installation, integrated Supabase with browser/server clients, and created `/photography` route with PolaroidPhoto component. Linked repository to Vercel (`gnawangs-projects/photography`) and synchronized Supabase environment variables across all environments.
- **2026-01-18**: Redesigned the frontpage with a custom "window" UI, integrated local fonts (RodinBokutoh and Seurat), and implemented navigation to the `/photography` route. Updated the site-wide color palette with a custom earthy/green theme (background-primary, text-main, text-highlight, background-green) and applied it to the Home and Photography pages.
- **2026-01-19**: Created a new `/projects` route with a responsive grid-based layout. Implemented a reusable `ProjectCard` component featuring a trading card aesthetic. Established a static project data structure and updated the home page navigation to include the "projects" section.
- **2026-01-19**: Implemented a centralized Animated Content Portal System using the independent `motion` library (formerly `framer-motion`) and React Context. Refactored the root layout and all routes (Home, Photography, Projects) to render within a shared, smoothly-transitioning "Window" container that responds to route-specific dimension configurations.

## Application Architecture

### Directory Structure
```
root/
├── AGENTS.md              # Project schema, AI instructions, and standards
├── public/                # Static assets (favicons, robots.txt, images)
├── src/
│   ├── app/               # Next.js App Router (file-system based routing)
│   │   ├── layout.tsx     # Root layout (required) - must contain <html> and <body>
│   │   ├── page.tsx       # Home page (/)
│   │   ├── globals.css    # Global styles
│   │   ├── [route-name]/  # Route segments
│   │   │   ├── page.tsx   # Route UI
│   │   │   ├── layout.tsx # Route-specific layout (optional)
│   │   │   ├── loading.tsx# Loading UI (optional)
│   │   │   ├── error.tsx  # Error boundary (optional, must be Client Component)
│   │   │   └── not-found.tsx # 404 UI (optional)
│   │   └── api/           # API route handlers
│   │       └── [endpoint]/route.ts
│   ├── components/        # Shared UI primitives (Button, Input, Card)
│   ├── features/          # Domain-specific modules
│   │   └── [feature-name]/
│   │       ├── index.ts   # Barrel export for single point imports
│   │       ├── api.ts     # Feature-specific data fetching for this feature
│   │       ├── [featureComponentName].tsx     # Domain-specific components (example name)
│   │       ├── [featureComponentName].test.tsx    # Colocated unit/integration tests (example name)
│   │       ├── types.ts   # Local interfaces for this feature
│   │       └── style.css  # Local styles for this feature
│   ├── lib/               # Shared logic and configuration
│   │   ├── hooks/         # Shared stateful logic (Client Components only)
│   │   └── utils/         # Pure helper functions
│   └── types/             # Global/Shared TypeScript definitions
└── tests/                 # Global E2E and orchestration tests
```

### Next.js App Router Conventions

#### Reserved File Names
| File | Purpose | Notes |
|------|---------|-------|
| `page.tsx` | Route UI | Required to make route accessible |
| `layout.tsx` | Shared layout | Wraps page and child layouts |
| `loading.tsx` | Loading state | Uses React Suspense |
| `error.tsx` | Error boundary | **Must be Client Component** |
| `not-found.tsx` | 404 UI | Segment-specific not found |
| `route.ts` | API endpoint | Cannot coexist with page.tsx |
| `template.tsx` | Re-mounting layout | Remounts on navigation |
| `default.tsx` | Parallel route fallback | For @folder routes |
| `middleware.ts` | Request middleware | Must be at project root |

#### Route Segment Patterns
| Pattern | Example | URL |
|---------|---------|-----|
| Static | `app/blog/page.tsx` | `/blog` |
| Dynamic | `app/blog/[slug]/page.tsx` | `/blog/:slug` |
| Catch-all | `app/docs/[...slug]/page.tsx` | `/docs/*` |
| Optional catch-all | `app/docs/[[...slug]]/page.tsx` | `/docs` or `/docs/*` |
| Route Groups | `app/(marketing)/page.tsx` | Groups without URL impact |
| Private folders | `app/_components/` | Excluded from routing |
| Parallel Routes | `app/@modal/page.tsx` | Simultaneous rendering |

#### Component Types
- **Server Components (Default)**: No directive needed. Cannot use:
  - React hooks (`useState`, `useEffect`, `useContext`, etc.)
  - Browser APIs (`window`, `document`, `localStorage`)
  - Event handlers (`onClick`, `onChange`, etc.)
  - Class components
- **Client Components**: Add `'use client'` directive at file top. Required for:
  - Interactivity and event listeners
  - React hooks usage
  - Browser-only APIs
  - Third-party libraries needing browser context

#### Data Fetching
- Use `async/await` directly in Server Components
- `fetch()` is extended with caching: `fetch(url, { cache: 'force-cache' | 'no-store' })`
- Revalidation: `fetch(url, { next: { revalidate: 60 } })` or `export const revalidate = 60`
- Server Actions: Functions marked with `'use server'` for mutations
- `generateStaticParams()`: Pre-render dynamic routes at build time
- `generateMetadata()`: Dynamic metadata per route

#### Optimized Components
| Component | Import | Usage |
|-----------|--------|-------|
| `Image` | `next/image` | Always use for images - auto-optimization, lazy loading |
| `Link` | `next/link` | Client-side navigation, prefetching |
| `Font` | `next/font/google` or `next/font/local` | Zero layout shift, self-hosted |
| `Script` | `next/script` | Optimized third-party script loading |

## Development Standards

### Code Quality
- **Formatting:** Prettier with default configuration (no custom overrides)
- **Linting:** ESLint with Next.js defaults
- **Type Safety:** Strict TypeScript, no implicit any
- **Imports:** Organize by external, internal, types; use path aliases (@/)
- Utility files follow kebab case naming: kebab-case.ts
- Component files follow pascal case naming: PascalCase.tsx 
- CSS classnames follow camel case naming: .camelCaseClass
- Server Components by default
- Client Components only when requiring interactivity (forms, event handlers, browser APIs)
- Collocate related components in feature directories when not reused elsewhere
- Avoid all circular dependencies. Features should only import from lib, types, components, types. Nothing should import from routes except for the root. 

### Performance Budget
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Cumulative Layout Shift: < 0.1
- Main bundle: < 200KB gzipped

### Styling Conventions
- Tailwind utility-first approach
- Mobile-first responsive design
- Leverage shadcn/ui components, extend as needed
- Consistent spacing: scale of 4 (4, 8, 12, 16, 24, 32, 48, 64)
- Color palette from Tailwind defaults unless custom branding required

### Error Handling
- Try-catch blocks for all async operations
- Graceful degradation with fallback UI
- Error boundaries for component tree errors
- User-facing error messages, technical details logged
- No silent failures

### Testing Strategy (Future)
- Unit tests for utility functions
- Integration tests for API routes
- E2E tests for critical user paths
- Visual regression testing for UI components

## Session Protocol

### Pre-Session
- Review this spec for full understanding of project and guildelines
- Focus solely on the given task for the session

### During Session
- Write production-ready, fully-implemented code
- Include comprehensive error handling
- Define TypeScript types/interfaces
- Ensure responsive behavior
- Add JSDoc comments for complex logic
- Keep track of any concerns, loose-ends, bug, etc. discovered

#### Code Review Checklist
- TypeScript compiles without errors or warnings
- All imports resolve correctly
- No unused variables or imports
- Responsive across breakpoints (mobile, tablet, desktop)
- Keyboard navigation functional
- ARIA labels where appropriate
- Loading states implemented
- Error states implemented
- No console statements in committed code
- Prettier formatting applied
- ESLint passes without warnings

#### Decision Points
- Server vs. client component determination
- Data fetching strategy (server-side, client-side, hybrid)
- State management approach (local, context, external)
- Caching strategy for database queries
- Image optimization approach (dimensions, formats, lazy loading)

### Post-Session
- Summary of completed work
- Document technical decisions and rationale
- Identify logical next step
- Note any open questions or required clarifications
- Bring up concerns, loose-ends, bugs previously recorded