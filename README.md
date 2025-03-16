<div align="center">
  <h1>🚀 New Horizon Barber Shop Service</h1>
</div>

## ✨ Key Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [Shadcn/ui](https://ui.shadcn.com)
- **Development Tools**: ESLint, Prettier, Husky, Lint-staged

## 💡 Technical Implementation

### Search & Filter Implementation

- **Data Fetching & Caching:**

  - Implemented TanStack Query (React Query) for efficient data fetching and caching
  - Used Axios for HTTP requests
  - Optimized performance with automatic request deduplication

- **URL State Management:**

  - Leveraged `nuqs` for type-safe URL search params management
  - Maintained shareable URLs with search/filter state
  - Implemented seamless browser history integration

  - Applied debouncing for search inputs using `usehooks-ts`
  - Created custom hooks for separation of concerns (e.g., `useSearchQuery`, `useServicesFilter`)

- **UI/UX Components:**

  - Utilized Shadcn/ui components for consistent design system
  - Implemented responsive layouts with Tailwind CSS

## 📦 Getting Started

1. Clone & create your project:

```bash
git clone https://github.com/frshaad/nh-barbers.git my-project
cd my-project
pnpm install
```

2. Start development server:

```bash
pnpm dev
```

## 🛠 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build production application
pnpm start        # Start production server
pnpm lint         # Lint code with ESLint
pnpm format       # Format code with Prettier
```

## 📁 Project Structure

```
.
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn UI components
│   │   └── shared/      # Shared components
│   └── lib/             # Utility functions
│       ├── db/          # Database configuration
│       ├── env/         # Environment validation
│       └── utils/       # Helper functions
├── public/              # Static assets
└── types/              # TypeScript types
```
