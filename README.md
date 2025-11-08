# e-commerce-ui — Client (Learning Project)

This project was created to learn how to structure a small e-commerce frontend and to gain hands-on experience with specific frontend tools and patterns. It’s a focused sandbox that lets you experiment with Next.js App Router, TypeScript, Tailwind CSS, and state + form libraries used in real projects.

Purpose

- Learn how to structure an e-commerce/admin UI (routes, layouts, components).
- Practice form handling and validation with react-hook-form + Zod.
- Explore client state management using Zustand (with Immer for immutable updates).
- Build UI primitives and layouts with Tailwind CSS and Next.js (App Router).
- Try small integrations: icons, toast notifications, charts, and mock data flows.

Primary learning goals

- Project structure for a maintainable e-commerce UI.
- Controlled forms and validation: react-hook-form + @hookform/resolvers + zod.
- Local UI state and global state patterns: zustand + immer.
- Type-safe components with TypeScript.
- Fast styling with Tailwind CSS and design-by-composition for UI primitives.
- Developer workflow: linting, HMR, builds, and debugging on Windows.
    
Tech stack & key dependencies (from package.json)

- next 15.4.5 — framework (App Router)
- react 19.1.0, react-dom 19.1.0 — UI library
- typescript — type safety
- tailwindcss, @tailwindcss/postcss — styling
- react-hook-form ^7.65.0, @hookform/resolvers ^5.2.2 — forms + validation connectors
- zod ^4.1.12 — schema validation
- zustand ^5.0.8 — lightweight global state
- immer ^10.1.3 — immutable state helpers
- react-toastify ^11.0.5 — toast notifications
- lucide-react ^0.546.0 — icon set

Dev / types

- eslint, eslint-config-next (matching Next version)
- typescript ^5, @types/node ^20, @types/react ^19, @types/react-dom ^19
- tailwindcss ^4, @tailwindcss/postcss ^4

Quick start (Windows)

```powershell
# install dependencies
npm install
# or
pnpm install

# run development server with Turbopack
npm run dev

# production build
npm run build
npm run start
```

Important scripts

- dev — start Next.js in development (turbopack)
- build — production build
- start — run production server
- lint — run ESLint

Project structure (high level)

- app/ — App Router routes and layouts (primary place to start)
- src/ or components/ — UI primitives, composed components, hooks
- public/ — static assets (images, sample JSON)
- styles/ — Tailwind and global CSS
- README.md — this file

Where to start exploring

1. app/layout.tsx — global layout, fonts, providers (Zustand, Toasts).
2. app/page.tsx — main dashboard / entry page composition.
3. src/components/ — Button, Card, Input, Form examples (see react-hook-form usage).
4. src/lib or src/hooks — shared utilities, form schemas (zod), and Zustand stores.

Small exercises to learn quickly

- Convert a form to use react-hook-form + zod and add client-side validation.
- Create a Zustand store for cart or UI state and persist a simple value.
- Add a product list that reads static JSON from /public and add pagination.
- Swap a Tailwind utility with a component prop and observe impact.

Conventions & tips

- Keep components small and focused; prefer composition (children/slots).
- Define explicit TypeScript interfaces for component props.
- Use zod schemas for form validation and sharable runtime checks.
- Extract repeated Tailwind patterns into components or utility classes.

Roadmap / suggested practice tasks

- Add authentication stub and protected routes.
- Implement product CRUD with mock API endpoints.
- Add unit tests for core components and stores.
- Integrate a simple analytics chart on the dashboard.

Resources

- Next.js App Router: https://nextjs.org/docs/app
- Tailwind CSS: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com/
- Zod: https://github.com/colinhacks/zod
- Zustand: https://github.com/pmndrs/zustand

License

- Personal learning project. Add a LICENSE if you plan to publish.

Notes

- Make small, focused commits and add notes about what you learned in each commit.
- Use branches for experiments to keep the main branch stable.

Happy learning — focus on one feature at a time, iterate quickly, and document what you discover.
