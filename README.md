<h1 align="center">✨ EAR stack monorepo ✨</h1>

<p align="center">
  <b>Modern fullstack monorepo powered by <a href="https://elysiajs.com/">Elysia</a>, <a href="https://bun.sh/">Bun</a>, <a href="https://astro.build/">Astro</a>, <a href="https://react.dev/">React</a>, <a href="https://turbo.build/repo">Turborepo</a>, and <a href="https://pnpm.io/">pnpm</a>.</b>
</p>

---

## 📦 Structure

This monorepo is organized into:

-   `apps/`: Core applications.
-   `packages/`: Shared code, libraries, and UI components.
-   `tooling/`: Shared tooling configurations (e.g., TypeScript).

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
| `packages/eden`                | Elysia + Eden            | Type-safe client library for the Elysia backend     |
| `packages/ui`                  | React + Tailwind/Shadcn   | Shared UI component library (will migrate to Tamagui)|
| *(planned)* `packages/expo`    | Expo + Tamagui           | Native mobile app package (planned)                 |

### Tooling

| Directory                      | Technology                | Description                                         |
|--------------------------------|---------------------------|-----------------------------------------------------|
| `tooling/typescript`           | TypeScript                | Shared TypeScript configurations (`tsconfig`s)      |

---

## ⚡ Technologies

- **Monorepo:** Turborepo
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

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
    cd <YOUR_REPO_NAME>
    ```

2. **Install dependencies**
    ```bash
    pnpm install
    ```
    Installs all dependencies using pnpm workspaces.

3. **Setup Environment Variables**
    Copy the example environment file for the server:
    ```bash
    cp apps/server/.env.example apps/server/.env
    ```
    Then, edit `apps/server/.env` with your `DATABASE_URL` (e.g., from Neon) and `BETTER_AUTH_SECRET`.

4. **Run Database Migrations**
    Navigate to the server directory and run the Drizzle Kit push command:
    ```bash
    cd apps/server
    pnpm run push # This executes 'bunx drizzle-kit push'
    cd ../..
    ```

5. **Start Development Servers**
    ```bash
    pnpm dev
    ```
    This command uses Turborepo to spin up all development servers concurrently. Access the applications at their respective ports:

    - Landing Page (Astro): [http://localhost:4321](http://localhost:4321)
    - Blog (Astro): [http://localhost:4322](http://localhost:4322)
    - Docs (Astro Starlight): [http://localhost:4323](http://localhost:4323)
    - Dashboard (TanStack Start Fullstack): [http://localhost:3000](http://localhost:3000)
    - Server (Elysia): [http://localhost:9876](http://localhost:9876)

---

## 🛠️ Available Commands

These commands are run from the root of the monorepo:

- `pnpm build` — Build all applications and packages using Turborepo.
- `pnpm dev` — Start all development servers concurrently using Turborepo.
- `pnpm lint` — Lint all code across apps and packages using Turborepo (triggers Biome in each package).
- `pnpm format` — Format all code in the monorepo using Biome (`biome format --write .`).

To run scripts for a specific application or package, use the `pnpm --filter` flag. Example:

```bash
pnpm --filter <app-or-package-name> <command>
```

Examples:

```bash
pnpm --filter blog dev
# Starts only the development server for the blog application.

pnpm --filter @packages/ui check
# Runs the check script (Biome) for the @packages/ui library.

pnpm --filter elysia-server push
# Runs database migrations for the elysia-server application.
```

---

## 🚢 Deployment

Deployment instructions coming soon!
Guides will cover deployment strategies for platforms like Vercel, Netlify, and potentially Docker setups.

---

## 🧹 Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for fast and comprehensive linting and formatting.

- Configuration is managed by a root `biome.json` file, with potential overrides in individual `biome.json` files within each app or package.

### Format all code

```bash
pnpm format
```

### Lint all code

```bash
pnpm lint
```

This uses `turbo lint` which in turn executes the `lint` or `check` script (usually `biome check` or `biome lint`) defined in each package's package.json.

### Run comprehensive checks (lint & format)

The README previously mentioned `pnpm check`. If you wish to have a global check command, consider adding a script to your root `package.json`:

Add the following to your root `package.json`:

```json
{
  "scripts": {
    "check": "biome check ."
  }
}
```

You can then run:

```bash
pnpm check
```

`biome check .` will verify both linting and formatting rules. For auto-applying fixes, you can use `biome check . --apply` (or `--write` in newer Biome versions).

---

## TODO

Here are the upcoming tasks:

- Further explore and integrate Bun's capabilities with Turborepo for task running.
- Migrate UI library from Shadcn UI to Tamagui UI for better cross-platform support.
- Add a dedicated Expo package for native/mobile development.
- Update to Biome 2.0 when stable and beneficial.
- Add comprehensive deployment guides. **(Deployment guide coming soon!)**

---

## 🤝 Contributing

Contributions are highly welcome! Whether it's a feature request, bug report, or a pull request, please feel free to contribute.

- For significant changes or new features, please open an issue first to discuss your ideas.
- Ensure your code adheres to the linting and formatting standards by running `pnpm lint` and `pnpm format` (or `pnpm check` if you've set it up) before submitting a pull request.
- Write clear and concise commit messages.

<p align="center">
<sub>Made with ❤️ by <a href="https://github.com/<YOUR_GITHUB_USERNAME>">@Yorizel</a></sub>
</p>
