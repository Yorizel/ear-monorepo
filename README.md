<div align="center">

<!-- Example Badges (replace with actual ones) -->
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT">
<!-- Add more badges like build status, pnpm version, etc. -->
<!-- e.g. <img src="https://img.shields.io/github/workflow/status/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>/CI?label=build" alt="Build Status"> -->
<!-- <img src="https://img.shields.io/badge/pnpm-%3E%3D8.0-orange.svg" alt="pnpm version"> -->
<!-- <img src="https://img.shields.io/badge/bun-%3E%3D1.0-yellow.svg" alt="Bun version"> -->

</div>

# Elysiajs Monorepo

Welcome to the monorepo for my project! This repository contains several interconnected applications and packages, managed using pnpm workspaces and Turborepo.

## Structure

This monorepo is structured into two main directories:

-   `apps/`: Contains the core applications.
-   `packages/`: Contains shared code, libraries, and UI components used across the applications.

### Applications (`apps/`)

| Directory        | Technology                 | Description                                  |
| :--------------- | :------------------------- | :------------------------------------------- |
| `apps/blog`      | Astro                      | A static, content-focused blog application.  |
| `apps/dashboard` | TanStack React Start (SPA) | A dynamic React-based dashboard for managing project data or user interactions. |
| `apps/docs`      | Astro Starlight            | Comprehensive documentation site for the project. |
| `apps/landing-page` | Astro                      | A simple, attractive landing page for the project. |
| `apps/server`    | Elysia (Bun) + Drizzle     | Backend server providing a REST API and handling database interactions.   |

### Packages (`packages/`)

| Directory                 | Technology           | Description                                            |
| :------------------------ | :------------------- | :----------------------------------------------------- |
| `packages/eden`           | Elysia + Eden        | Type-safe client library for interacting with the Elysia backend. |
| `packages/typescript-config` | TypeScript           | Shared TypeScript configurations.                      |
| `packages/ui`             | React + Tailwind/Shadcn | Shared UI component library.                           |

## Technologies

This monorepo utilizes a variety of modern technologies:

-   **Package Manager:** pnpm
-   **Monorepo Tool:** Turborepo
-   **Backend:** Elysia (Bun)
-   **Database:** PostgreSQL (Neon)
-   **ORM:** Drizzle ORM
-   **API Client:** Eden
-   **Frontend Frameworks:** Astro, React
-   **React Framework:** TanStack React Start (for `apps/dashboard`)
-   **Routing:** TanStack Router
-   **Data Fetching:** TanStack Query
-   **Styling:** Tailwind CSS, Shadcn UI
-   **Linting & Formatting:** Biome

## Getting Started

To get the monorepo up and running locally, follow these steps:

### Prerequisites

Before you begin, ensure you have the following installed:
-   **Node.js**: `^18.0.0` or `^20.0.0` (Check your project's `package.json` engines or your preference)
-   **pnpm**: `^8.0.0` or latest (Enable corepack with `corepack enable`)
-   **Bun**: `^1.0.0` or latest (for `apps/server` and potentially other Bun-related tasks)

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```
    This will install dependencies for all applications and packages in the monorepo using pnpm workspaces.

3.  **Set up Environment Variables:**
    Navigate to `apps/server` and create a `.env` file based on the `.env.example`. You will need a PostgreSQL database URL.
    ```bash
    cp apps/server/.env.example apps/server/.env
    # Edit apps/server/.env with your database URL and Better Auth secret
    ```

4.  **Run Database Migrations:**
    Ensure your database is configured in `apps/server/.env`.
    ```bash
    cd apps/server
    pnpm run push
    cd ../.. # Go back to the monorepo root
    ```

5.  **Start the development servers:**

    ```bash
    pnpm dev
    ```
    This command uses Turborepo to concurrently start the development servers for all defined `dev` scripts in the `package.json` files of the apps and packages.

    The applications should be available at:
    -   Landing Page: `http://localhost:4321` (or as specified by Astro)
    -   Blog: `http://localhost:4322` (or as specified by Astro)
    -   Docs: `http://localhost:4323` (or as specified by Astro)
    -   Dashboard: `http://localhost:3000` (or as specified by Vinxi/TanStack Start)
    -   Server: `http://localhost:9876` (or as specified by Elysia)

## Available Commands

You can run scripts defined in the root `package.json` or within individual app/package `package.json` files. Turborepo is configured to optimize running these commands across the monorepo.

-   `pnpm build`: Build all applications and packages for production.
-   `pnpm dev`: Start development servers for all applications and packages.
-   `pnpm lint`: Run linters across all applications and packages.
-   `pnpm format`: Format code using Biome across the entire monorepo.

You can also run commands for specific apps/packages using the format `pnpm --filter <app-or-package-name> <command>`. For example:

-   `pnpm --filter blog dev`: Start only the blog development server.
-   `pnpm --filter @packages/ui build`: Build only the UI package.

## Deployment

(Details on how to deploy the applications will be added here. This might include instructions for platforms like Vercel, Netlify, Docker, etc., depending on the application type.)

## Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for code linting and formatting. Configuration is managed at the root `biome.json` with overrides in specific app/package directories.

-   `pnpm format`: Formats all code in the monorepo.
-   `pnpm lint`: Checks for linting issues.
-   `pnpm check`: Runs format and lint checks.

## Contributing

Contributions are welcome! We value your input and effort to improve this project. Please feel free to:
-   Report a bug
-   Suggest a feature
-   Submit a pull request

For major changes, please open an issue first to discuss what you would like to change. Ensure your code adheres to the linting and formatting guidelines (`pnpm check`).

---
