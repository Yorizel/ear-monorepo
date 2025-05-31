<h1 align="center">✨ EAR Stack Monorepo ✨</h1>

<p align="center">
  <b>Modern fullstack monorepo powered by <a href="https://elysiajs.com/">Elysia</a>, <a href="https://bun.sh/">Bun</a>, <a href="https://astro.build/">Astro</a>, <a href="https://react.dev/">React</a>, <a href="https://turbo.build/repo">Turborepo</a>, and <a href="https://pnpm.io/">pnpm</a>.</b>
</p>

---

## 📦 Structure

This monorepo is organized into:

- `apps/`: Core applications
- `packages/`: Shared code, libraries, and UI components
- `tooling/`: Shared tooling configurations (e.g., TypeScript)

### Applications

| Directory              | Technology                    | Description                                                           |
|-----------------------|-------------------------------|-----------------------------------------------------------------------|
| `apps/blog`           | Astro                         | Static, content-focused blog application                              |
| `apps/dashboard`      | TanStack React Start (SPA)    | Dynamic React dashboard for managing project data and user interactions|
| `apps/docs`           | Astro Starlight               | Comprehensive documentation site                                      |
| `apps/landing-page`   | Astro                         | Beautiful landing page for the project                                |
| `apps/server`         | Elysia (Bun) + Drizzle        | REST backend server and database API with authentication              |

### Packages

| Directory                  | Technology                  | Description                                         |
|----------------------------|-----------------------------|-----------------------------------------------------|
| `packages/eden`            | Elysia + Eden               | Type-safe client library for the Elysia backend     |
| `packages/ui`              | React + Tailwind/Shadcn     | Shared UI component library                         |
| `tooling/typescript`       | TypeScript                  | Shared TypeScript configurations (`tsconfig`s)       |

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
- **React SPA Stack:** TanStack React Start (Vite), TanStack Router, TanStack Query, TanStack Form
- **Styling:** Tailwind CSS, Shadcn UI
- **Linting & Formatting:** Biome

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `^20.0.0`
- **pnpm**: `^10.0.0` (enable with `corepack enable`)
- **Bun**: `^1.0.0` (for `apps/server` and Bun-specific tasks)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yorizel/ear-monorepo.git
   cd ear-monorepo
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
   Edit `apps/server/.env` with your `DATABASE_URL` (e.g., from Neon) and `BETTER_AUTH_SECRET`.

4. **Run Database Migrations**

   Navigate to the server directory and run the Drizzle Kit push command:
   ```bash
   cd apps/server
   pnpm run push # Executes 'bunx drizzle-kit push'
   cd ../..
   ```

5. **Start Development Servers**

   ```bash
   pnpm dev
   ```
   This command uses Turborepo to spin up all development servers concurrently. Applications are available at:

   - Landing Page (Astro): [http://localhost:4321](http://localhost:4321)
   - Blog (Astro): [http://localhost:4322](http://localhost:4322)
   - Docs (Astro Starlight): [http://localhost:4323](http://localhost:4323)
   - Dashboard (TanStack React Start): [http://localhost:3000](http://localhost:3000)
   - Server (Elysia): [http://localhost:9876](http://localhost:9876)

---

## 🛠️ Available Commands

Run these commands from the root of the monorepo:

- `pnpm build` — Build all applications and packages
- `pnpm dev` — Start all development servers concurrently
- `pnpm lint` — Lint all code across apps and packages
- `pnpm format` — Format all code in the monorepo

To run scripts for a specific application or package, use the `pnpm --filter` flag:

```bash
pnpm --filter <app-or-package-name> <command>
```

**Examples:**

```bash
pnpm --filter blog dev                 # Start the blog application only
pnpm --filter @packages/ui check       # Run the check script (Biome) for @packages/ui
pnpm --filter elysia-server push       # Run database migrations for elysia-server
```

---

## 🚢 Deployment

Deployment instructions coming soon!
Guides will cover deployment strategies for platforms like Vercel, Netlify, and Docker.

---

## 🧹 Linting and Formatting

This project uses **Biome** for fast, comprehensive linting and formatting.

- Configuration is managed by a root `biome.json` file, with possible overrides in each app or package.

### Format all code

```bash
pnpm format
```

### Lint all code

```bash
pnpm lint
```

This uses Turborepo's lint task, which triggers the lint or check script (usually `biome check` or `biome lint`) in each package's `package.json`.

### Run comprehensive checks (lint & format)

If you want a global check command, add this to your root `package.json`:

```json
// package.json (root)
{
  // ...
  "scripts": {
    // ...
    "check": "biome check ."
  }
}
```

Then run:

```bash
pnpm check
```

`biome check .` will verify both linting and formatting rules. To auto-apply fixes, use `biome check . --apply` (or `--write` in newer Biome versions).

---

## TODO

- Further explore and integrate Bun's capabilities with Turborepo for task running
- Update to Biome 2.0 when stable
- Add comprehensive deployment guides

---

## 🤝 Contributing

Contributions are highly welcome! Whether it's a feature request, bug report, or pull request, please contribute!

- For significant changes or new features, please open an issue first to discuss your idea.
- Ensure code adheres to linting and formatting standards by running `pnpm lint` and `pnpm format` (or `pnpm check` if set up) before submitting a pull request.
- Write clear, concise commit messages.

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/Yorizel">@<Yorizel></a></sub>
</p>
