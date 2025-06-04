<!-- README.md -->
<h1 align="center">✨ EAR stack monorepo ✨</h1>

<p align="center">
  <b>Modern fullstack monorepo powered by <a href="https://elysiajs.com/">Elysia</a>, <a href="https://bun.sh/">Bun</a>, <a href="https://astro.build/">Astro</a>, <a href="https://react.dev/">React</a>, <a href="https://nx.dev/">Nx</a>, and <a href="https://pnpm.io/">pnpm</a>.</b>
</p>

<p align="center">
  <a href="https://ear-monorepo-landing-page.vercel.app/" style="text-decoration:none;">
    <img alt="Landing Page" src="https://img.shields.io/badge/Landing%20Page-Visit-blue?style=for-the-badge">
  </a>
  <a href="https://ear-monorepo-blog.vercel.app/" style="text-decoration:none;">
    <img alt="Blog" src="https://img.shields.io/badge/Blog-Visit-green?style=for-the-badge">
  </a>
  <a href="https://ear-monorepo-docs.vercel.app/" style="text-decoration:none;">
    <img alt="Docs" src="https://img.shields.io/badge/Docs-Visit-orange?style=for-the-badge">
  </a>
  <a href="https://ear-monorepo-dashboard.vercel.app/" style="text-decoration:none;">
    <img alt="Dashboard" src="https://img.shields.io/badge/Dashboard-Visit-red?style=for-the-badge">
  </a>
</p>

---

## 📦 Structure

This monorepo is organized into:

-   `apps/`: Core applications.
-   `packages/`: Shared code, libraries, and UI components.
-   `tooling/`: Shared tooling configurations (e.g., TypeScript).

The monorepo is managed using [Nx](https://nx.dev/). Key configuration files include `nx.json` at the root and individual project configurations.

### Applications

| Directory           | Technology                 | Description                                                           |
|---------------------|---------------------------|-----------------------------------------------------------------------|
| `apps/blog`         | Astro                     | Static, content-focused blog application                              |
| `apps/dashboard`    | TanStack Start (Fullstack)| Fullstack TanStack Start app for dynamic dashboards and APIs          |
| `apps/docs`         | Astro Starlight           | Comprehensive documentation site                                      |
| `apps/landing-page` | Astro                     | Beautiful landing page for the project                                |
| `apps/server`       | Elysia (Bun) + Drizzle    | REST backend server and database API with authentication              |

### Packages

| Directory                      | Technology                | Description                                         |
|---------------------------------|--------------------------|-----------------------------------------------------|
| `packages/brand`               | JSON                      | Shared brand assets and information (e.g., project name) |
| `packages/eden`                | Elysia + Eden            | Type-safe client library for the Elysia backend     |
| `packages/ui`                  | React + Tailwind/Shadcn   | Shared UI component library (will migrate to Tamagui)|
| *(planned)* `packages/expo`    | Expo + Tamagui           | Native mobile app package (planned)                 |

### Tooling

| Directory                      | Technology                | Description                                         |
|--------------------------------|---------------------------|-----------------------------------------------------|
| `tooling/typescript`           | TypeScript                | Shared TypeScript configurations (`tsconfig`s)      |

---

## ⚡ Technologies

- **Monorepo:** Nx
- **Package Manager:** pnpm
- **Runtime (Backend/Tasks):** Bun
- **Backend Framework:** Elysia
- **Authentication (Backend):** Better Auth
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **API Client:** Eden (for Elysia)
- **Frontend Frameworks:** Astro, React
- **React SPA/Fullstack:** TanStack Start (powered by Vite), TanStack Router, TanStack Query, TanStack Form
- **Styling:** Tailwind CSS, Shadcn UI (migrating to Tamagui UI)
- **Mobile:** (Planned) Expo + Tamagui for mobile app development
- **Linting & Formatting:** Biome

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `^20.0.0`
- **pnpm**: `^10.0.0` (enable with `corepack enable`)
- **Bun**: `^1.0.0` (for `apps/server` and various Bun-specific tasks)

### Setup Environment Variables

This project requires environment variables for some of its applications to run correctly. Copy the example environment files and populate them with your actual values.

1.  **Server (`apps/server`)**:
    ```bash
    cp apps/server/.env.example apps/server/.env
    ```
    Then, edit `apps/server/.env` with your:
    *   `DATABASE_URL`: Your PostgreSQL connection string (e.g., from Neon).
    *   `BETTER_AUTH_SECRET`: A long, random string for session encryption.
    *   `BETTER_AUTH_TRUSTED_ORIGINS`: Comma-separated list of frontend URLs that can interact with the auth service (e.g., `http://localhost:3000,http://localhost:4321`).

2.  **Dashboard (`apps/dashboard`)**:
    ```bash
    cp apps/dashboard/.env.example apps/dashboard/.env
    ```
    Then, edit `apps/dashboard/.env` with your:
    *   `VITE_SERVER_URL`: The URL of your running backend server (e.g., `http://localhost:9876` for local development).

### Installation and Setup Steps

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Yorizel/ear-monorepo.git
    cd ear-monorepo
    ```

2.  **Install dependencies**
    ```bash
    pnpm install
    ```
    This installs all dependencies using pnpm workspaces.

3.  **Ensure Environment Variables are Set Up**
    Follow the "Setup Environment Variables" section above before proceeding.

4.  **Run Database Migrations**
    Navigate to the server directory and run the Drizzle Kit push command:
    ```bash
    cd apps/server
    pnpm run push # This executes 'bunx drizzle-kit push'
    cd ../..
    ```
    Alternatively, from the root: `pnpm --filter elysia-server push`

5.  **Start Development Servers**
    ```bash
    pnpm dev
    ```
    This command uses Nx (`nx run-many -t dev`) to spin up all development servers concurrently. Access the applications at their respective ports:

    - Landing Page (Astro): [http://localhost:4321](http://localhost:4321)
    - Blog (Astro): [http://localhost:4322](http://localhost:4322)
    - Docs (Astro Starlight): [http://localhost:4323](http://localhost:4323)
    - Dashboard (TanStack Start Fullstack): [http://localhost:3000](http://localhost:3000)
    - Server (Elysia): [http://localhost:9876](http://localhost:9876)

---

## 🛠️ Available Commands

These commands are run from the root of the monorepo and utilize Nx:

- `pnpm build` — Build all applications and packages using Nx (`nx build`).
- `pnpm dev` — Start all development servers concurrently using Nx (`nx run-many -t dev`).
- `pnpm lint` — Lint all code across apps and packages using Nx (`nx lint`, which triggers Biome in each package).
- `pnpm format` — Format all code in the monorepo using Biome (`biome format --write .`).

