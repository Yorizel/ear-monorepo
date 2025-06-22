
<div align="center">
  <h1 align="center">✨ EAR Stack Monorepo ✨</h1>
  <p align="center">
    An opinionated, full-stack monorepo built for performance, type-safety, and an unparalleled developer experience.
    <br />
    Powered by <strong>E</strong>lysia, <strong>A</strong>stro, and <strong>R</strong>eact.
  </p>
  <p align="center">
    <a href="https://github.com/Yorizel/ear-monorepo/actions/workflows/check.yml"><img src="https://img.shields.io/github/actions/workflow/status/Yorizel/ear-monorepo/check.yml?branch=main&label=Biome&style=for-the-badge&logo=biome" alt="Biome Check Status"></a>
    <a href="https://github.com/Yorizel/ear-monorepo/actions/workflows/typecheck.yml"><img src="https://img.shields.io/github/actions/workflow/status/Yorizel/ear-monorepo/typecheck.yml?branch=main&label=TypeScript&style=for-the-badge&logo=typescript" alt="TypeScript Check Status"></a>
    <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge" alt="Conventional Commits"></a>
    <a href="https://github.com/Yorizel/ear-monorepo/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/Yorizel/ear-monorepo?style=for-the-badge&color=orange" alt="License"></a>
  </p>
</div>

---

## 🎯 Core Philosophy

The **EAR Stack** is more than just a template; it's a foundation for building robust, modern web applications without compromising on performance or developer sanity. It was born from the desire to integrate best-in-class tools into a cohesive, scalable, and delightful-to-use monorepo.

-   ✅ **End-to-End Type Safety**: We believe type safety is non-negotiable. By leveraging TypeScript across the entire stack and using [Elysia's Eden](https://elysiajs.com/plugins/eden.html) client, you get auto-completion and compile-time checks from your database schema all the way to your React components.

-   ⚡ **Performance by Default**: This stack is built for speed. [Bun](https://bun.sh/) provides a lightning-fast runtime and toolkit. [Elysia](https://elysiajs.com/) is one of the fastest backend frameworks available. And [Astro](https://astro.build/) ships zero JavaScript by default, ensuring optimal load times for your content-driven sites.

-   📦 **Seamless Scalability**: The monorepo is managed with [Nx](https://nx.dev), which provides an extensible build system, intelligent caching, and a clear structure that grows with your project. Shared packages ensure code is reusable and consistent across all applications.

-   🎨 **Universal Component-Driven UI**: The shared `packages/ui` library is being ported to [Tamagui](https://tamagui.dev), enabling you to write components once and run them on both web and native platforms. This, combined with Tailwind CSS, provides a powerful and consistent design system.

-   🔧 **Exceptional Developer Experience**: From the moment you clone the repository, you're set up for success. Pre-configured tooling for linting, formatting, git hooks, and CI/CD means you can focus on building features, not on boilerplate.

## 🛠️ Technology Stack

This project harmonizes a suite of cutting-edge technologies. Each was chosen for its specific strengths and ability to integrate seamlessly into the stack.

| Technology                                                 | Role                                                      | Location              |
| ---------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| [**Bun**](https://bun.sh/)                                 | JavaScript Runtime, Bundler, Package Manager              | Root                  |
| [**Nx**](https://nx.dev/)                                  | Monorepo Management & Build System                        | Root                  |
| [**Elysia**](https://elysiajs.com/)                        | High-performance, Type-Safe Backend Framework             | `apps/server`         |
| [**Drizzle ORM**](https://orm.drizzle.team/)               | TypeScript ORM for SQL Databases                          | `apps/server`         |
| [**Astro**](https://astro.build/)                          | Content-Driven Web Framework for UI                       | `apps/*`              |
| [**React**](https://react.dev/)                            | UI Library for Dynamic Interfaces                         | `apps/*`              |
| [**TanStack Start**](https://tanstack.com/start/latest)    | Full-stack React Framework (Router, Query)                | `apps/dashboard`      |
| [**Expo**](https://expo.dev/)                              | Framework for Universal React Native Apps                 | `apps/native`         |
| [**TypeScript**](https://www.typescriptlang.org/)          | End-to-End Type Safety                                    | Entire Repo           |
| [**Tailwind CSS**](https://tailwindcss.com/)               | Utility-First CSS Framework                               | `packages/ui`         |
| [**Tamagui**](https://tamagui.dev/)                        | Universal UI Kit for React Native & Web (**WIP**)         | `packages/ui`, `config` |
| [**Biome**](https://biomejs.dev/)                          | High-performance Linter & Formatter                       | Entire Repo           |
| [**Husky**](https://typicode.github.io/husky/)             | Git Hooks for Code Quality                                | `.husky/`             |
| [**GitHub Actions**](https://github.com/features/actions)  | Continuous Integration (CI)                               | `.github/workflows`   |

## 🏛️ Monorepo Architecture

The repository is organized into `apps` and `packages`, a standard and effective monorepo strategy. This structure promotes code sharing and clear separation of concerns.

```
.
├── apps/
│   ├── blog/             # 📝 Astro-powered blog. Consumes `packages/ui`.
│   ├── dashboard/        # 📊 Dynamic React dashboard. Consumes `packages/ui` & `packages/eden`.
│   ├── docs/             # 📚 Documentation site with Astro Starlight. Consumes `packages/ui`.
│   ├── landing-page/     # 🌐 Marketing page built with Astro. Consumes `packages/ui`.
│   ├── native/           # 📱 Expo (React Native) app. Will consume `packages/ui` (Tamagui).
│   ├── server/           # ⚙️ Elysia backend. Exposes a type-safe API for other apps.
│   └── storybook/        # 🎨 (WIP) Component development environment for `packages/ui`.
│
├── packages/
│   ├── brand/            # 🎨 Shared branding assets and design tokens.
│   ├── config/           # ⚙️ (WIP) Shared configuration for Tamagui.
│   ├── eden/             # 🔗 Type-safe Eden client generated from the `server`'s API.
│   └── ui/               # 🧩 (WIP) Shared UI library, being ported to Tamagui.
│
└── tooling/
    └── typescript/       # 🛠️ Centralized TypeScript configurations (base, react, astro, etc.).
```

## 🎬 Getting Started

Follow these steps to get your local development environment up and running.

### 1. Prerequisites

-   [Node.js](https://nodejs.org/en) (v20+ is recommended for compatibility with some ecosystem tools).
-   [Bun](https://bun.sh/) (v1.0 or higher). Bun will be used as the package manager and runtime.

### 2. Clone the Repository

```bash
git clone https://github.com/Yorizel/ear-monorepo.git
cd ear-monorepo
```

### 3. Install Dependencies

This project uses **Bun Workspaces**. The `bun install` command will install dependencies for all apps and packages in the monorepo.

```bash
bun install
```

### 4. Configure Environment Variables

You need to set up environment variables for the applications that require them.

-   **Backend Server (`apps/server`):**
    ```bash
    cp apps/server/.env.example apps/server/.env
    ```
-   **Dashboard (`apps/dashboard`):**
    ```bash
    cp apps/dashboard/.env.example apps/dashboard/.env
    ```

After copying, edit the `.env` files and provide the necessary values. You will need:
-   A **PostgreSQL `DATABASE_URL`**. A free tier from [Neon](https://neon.tech/) is a great option.
-   A secret string for `BETTER_AUTH_SECRET`. You can generate one with `openssl rand -hex 32`.

### 5. Set Up the Database

Push the Drizzle ORM schema to your PostgreSQL database. This command reads your schema files and applies the necessary changes to your database.

```bash
bun run --filter server db:push
```

### 6. Run the Development Servers

Start all applications concurrently using the root `dev:all` script.

```bash
bun run dev:all
```

This command leverages Nx to run the `dev` script for each application in parallel. You can access them at their respective default ports:

-   **Landing Page**: `http://localhost:4321`
-   **Dashboard**: `http://localhost:3000`
-   **Blog**: `http://localhost:4322`
-   **Docs**: `http://localhost:4323`
-   **Server**: `http://localhost:9876`

## 📜 Available Scripts

Key scripts are defined in the root `package.json` and can be run with `bun run <script-name>`.

### Root-Level Scripts

| Script             | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `build`            | Build all applications and packages for production using Nx.                |
| `check`            | Run Biome linter across all projects.                                       |
| `format`           | Format all code in the repository using Biome.                              |
| `typecheck`        | Run TypeScript compiler checks across all projects.                         |
| `dev:all`          | Start all applications in development mode.                                 |
| `dev:dashboard`    | Start only the `server`, `dashboard`, and `native` apps.                    |
| `dev:content-apps` | Start only the `docs`, `blog`, and `landing-page` apps for content editing. |

### Workspace-Specific Scripts

To run scripts for a specific app or package, use the `bun run --filter <workspace> <script>` command.

| Command                               | Description                                                      |
| ------------------------------------- | ---------------------------------------------------------------- |
| `bun run --filter server db:generate` | Generate a new Drizzle database migration file based on schema changes. |
| `bun run --filter server db:push`     | Push the current schema to the database (ideal for development). |
| `bun run --filter server auth:generate`| Generate the auth schema based on the auth config.               |

## ⚙️ Development Workflow

### Code Quality & Formatting

This project uses [**Biome**](https://biomejs.dev/) as an all-in-one tool for linting and formatting, which ensures code quality and a consistent style. A pre-commit hook is configured with **Husky** to automatically format your staged files, so you never have to worry about style inconsistencies.

### Commit Conventions

We enforce [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) using `commitlint`. This standard creates a clean, readable, and automated git history, which is crucial for changelog generation and versioning. When you commit, your message will be validated.

### Continuous Integration (CI)

The repository is equipped with GitHub Actions workflows found in `.github/workflows`. On every pull request, these workflows automatically:
-   **`check.yml`**: Run `bun run check` to ensure all code passes Biome's linter.
-   **`typecheck.yml`**: Run `bun run typecheck` to verify the project is free of TypeScript errors.

## 🤝 Contributing

We welcome contributions! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.

When contributing, please ensure your code adheres to the project's formatting and commit conventions.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
