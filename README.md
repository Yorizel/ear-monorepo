# ✨ Modern Monorepo Template

A comprehensive monorepo template built with cutting-edge technologies for building robust and scalable web applications. This template provides a strong foundation for both frontend and backend development, leveraging the power of **pnpm**, **Turbo**, and **Biome** for an efficient developer experience.

## 🚀 Features

This template comes packed with the following key technologies and features:

**Monorepo & DX:**

*   📦 **pnpm:** Fast, disk space efficient package manager.
*   ⚡ **Turbo:** High-performance build system for monorepos.
*   💅 **Biome:** Integrated formatter and linter for consistent code style.
*   💖 **TypeScript:** Strongly typed code for better maintainability.

**Frontend:**

*   ⚛️ **React:** A declarative, component-based JavaScript library for building user interfaces.
*   🚀 **TanStack Suite:**
    *   **Router:** Type-safe routing library with file-based routing.
    *   **Query:** Powerful data fetching and caching library.
    *   **Start:** React meta-framework for SSR, Server Functions, and API routes.
*   ✨ **Astro:** The web framework for content-driven websites, used here for a static landing page example.
*   🎨 **Tailwind CSS:** A utility-first CSS framework for rapid styling.
*   🎨 **shadcn/ui:** Reusable components built with Radix UI and Tailwind CSS.

**Backend:**

*   🦊 **Elysia:** Fast and friendly Bun web framework.
*   🐻 **Bun:** All-in-one JavaScript runtime (used for the backend app).
*   🌿 **Drizzle ORM:** TypeScript ORM for databases (PostgreSQL/Neon example).
*   🔒 **Better Auth:** Flexible authentication library integrated with Elysia and Drizzle.
*   🤝 **Eden:** Elysia client for type-safe API interactions.
*   🐘 **Neon:** Serverless PostgreSQL database (used via Drizzle/Neon driver).

## 📂 Monorepo Structure

The template is structured into `apps` and `packages` directories:

```
.
├── apps/             # Contains the main applications
│   ├── dashboard/    # React app with TanStack Router, Query, Start, Tailwind, shadcn/ui
│   ├── landing-page/ # Astro app with React, Tailwind, shadcn/ui
│   └── server/       # Elysia (Bun) backend API with Drizzle, Better Auth
└── packages/         # Contains shared packages
    ├── eden/         # Shared Elysia client using Eden
    ├── typescript-config/ # Shared TypeScript configurations
    └── ui/           # Shared UI library with shadcn/ui components and Tailwind setup
```

## 💡 Getting Started

**Prerequisites:**

*   **Node.js:** v20 or higher
*   **pnpm:** v8 or higher (`npm install -g pnpm`)
*   **Bun:** Latest version (`curl -fsSL https://bun.sh/install | bash`)

**Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    Turbo will automatically bootstrap the workspace dependencies.
3.  **Environment Variables:**
    Create a `.env` file in the `apps/server` directory based on `apps/server/.env.example` and fill in your database connection URL and Better Auth secret.
    ```bash
    cp apps/server/.env.example apps/server/.env
    # Edit apps/server/.env with your credentials
    ```
4.  **Database Setup:**
    Ensure your PostgreSQL database is running and accessible via the `DATABASE_URL`.
    Run Drizzle migrations:
    ```bash
    pnpm --filter=server generate # Generates migrations if needed
    pnpm --filter=server push     # Applies migrations to the database
    ```

## 💻 Development

To start all applications and packages in development mode:

```bash
pnpm dev
```

This command uses Turbo to concurrently run the `dev` script in all configured apps and packages.

*   The **Dashboard** app will be available at `http://localhost:3000`.
*   The **Landing Page** app will be available at `http://localhost:4321`.
*   The **Server** app will be available at `http://localhost:9876`.

You can also run individual app/package dev scripts using Turbo:

*   `pnpm dev --filter=dashboard`
*   `pnpm dev --filter=server`
*   `pnpm dev --filter=landing-page`
*   etc.

## 📦 Building for Production

To build all applications and packages for production:

```bash
pnpm build
```

This command uses Turbo to build all dependencies in the correct order.

## ✨ Linting and Formatting

This template uses **Biome** for code formatting and linting to ensure a consistent code style across the monorepo.

*   Check for lint errors and formatting issues:
    ```bash
    pnpm check
    ```
*   Fix formatting issues automatically:
    ```bash
    pnpm format
    ```
*   Check for lint errors and attempt to fix them:
    ```bash
    pnpm lint
    ```

It's highly recommended to install the Biome VS Code extension or configure your editor to automatically format and lint using Biome on save.

## 🎨 Using shadcn/ui

The `packages/ui` directory contains the shared shadcn/ui components and the Tailwind CSS setup.

To add new components from `shadcn/ui` to the shared `packages/ui`:

```bash
pnpm dlx shadcn-ui@latest add <component-name> --cwd packages/ui
```

This will add the component files to `packages/ui/src/components`.

To use the components in your applications (e.g., in `apps/dashboard` or `apps/landing-page`), import them from the shared package:

```tsx
import { Button } from "@packages/ui/components/button";
// ... usage ...
<Button>Click me</Button>
```

The Tailwind configuration and global styles (`packages/ui/src/styles/globals.css`) are set up to be consumed by the applications.

## Learn More

*   [pnpm Documentation](https://pnpm.io/documentation)
*   [Turbo Documentation](https://turbo.build/repo/docs)
*   [Biome Documentation](https://biomejs.dev/docs/)
*   [React Documentation](https://reactjs.org/)
*   [TanStack Documentation](https://tanstack.com/)
    *   [TanStack Router](https://tanstack.com/router/latest)
    *   [TanStack Query](https://tanstack.com/query/latest)
    *   [TanStack Start](https://tanstack.com/start/latest)
*   [Astro Documentation](https://docs.astro.build/)
*   [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
*   [shadcn/ui Documentation](https://ui.shadcn.com/)
*   [Elysia Documentation](https://elysiajs.com/introduction.html)
*   [Bun Documentation](https://bun.sh/docs/)
*   [Drizzle ORM Documentation](https://orm.drizzle.team/docs/)
*   [Better Auth Documentation](https://auth.bettertyped.com/)
*   [Neon Documentation](https://neon.tech/docs/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
