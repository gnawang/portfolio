# Personal Portfolio Website - Development Context
This repository is governed by the following architectural standards and 
protocols. You must prioritize these project-specific patterns, naming 
conventions, and technical constraints over general defaults. Internalize 
this specification before initiating any tasks to ensure all contributions 
remain consistent with the existing codebase and system integrity. The only 
portion of this document that can be modified is the Project State portion
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

## Project State
<!-- Audomatically incrementally update this section as development proceeds -->

## Application Architecture

### Directory Structure
```
root/
├── AGENTS.md/             # Project schema, AI instructions, and standards
├── public/                # Static assets (favicons, robots.txt)
├── src/
│   ├── components/        # Shared UI primitives (Button, Input, Card)
│   ├── features/          # Domain-specific modules
│   │   └── [feature-name]/
│   │       ├── index.ts   # Barrel export for single point imports
│   │       ├── api.ts     # Feature-specific data fetching (example name)
│   │       ├── ui.tsx     # Domain-specific components (example name)
│   │       ├── types.ts   # Local interfaces (example name)
│   │       ├── style.css  # Local styles (example name)
│   │       └── test.ts    # Colocated unit/integration tests (example name)
│   ├── lib/               # Shared logic and configuration
│   │   ├── hooks/         # Shared stateful logic
│   │   └── utils/         # Pure helper functions
│   ├── routes/            # SPA entry points and URL mapping
│   │   └── [route-name]/
│   │       ├── page.tsx   # Orchestrates features for a specific view
│   │       └── layout.tsx # Route-specific UI wrappers
│   ├── types/             # Global/Shared TypeScript definitions
│   ├── styles/            # Global themes and CSS variables
│   └── main.tsx           # SPA bootstrap and Provider setup
└── tests/                 # Global E2E and orchestration tests
```

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