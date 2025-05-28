
<h1 align="center">✨ EAR stack monorepo ✨</h1>

<p align="center">
  <b>Modern fullstack monorepo powered by <a href="https://elysiajs.com/">Elysia</a>, <a href="https://bun.sh/">Bun</a>, <a href="https://astro.build/">Astro</a>, <a href="https://react.dev/">React</a>, <a href="https://turbo.build/repo">Turborepo</a>, and <a href="https://pnpm.io/">pnpm</a>.</b>
</p>

---

## 📦 Structure

This monorepo is organized into:

-   `apps/`: Core applications.
-   `packages/`: Shared code, libraries, and UI components.

### Applications

| Directory           | Technology                 | Description                                                           |
|---------------------|---------------------------|-----------------------------------------------------------------------|
| `apps/blog`         | Astro                     | Static, content-focused blog application                              |
| `apps/dashboard`    | TanStack React Start (SPA)| Dynamic React dashboard for managing project data and user interactions|
| `apps/docs`         | Astro Starlight           | Comprehensive documentation site                                      |
| `apps/landing-page` | Astro                     | Beautiful landing page for the project                                |
| `apps/server`       | Elysia (Bun) + Drizzle    | REST backend server and database API                                  |

### Packages

| Directory                      | Technology                | Description                                         |
|---------------------------------|--------------------------|-----------------------------------------------------|
| `packages/eden`                | Elysia + Eden            | Type-safe client library for the Elysia backend     |
| `packages/typescript-config`    | TypeScript               | Shared TypeScript configurations                    |
| `packages/ui`                  | React + Tailwind/Shadcn   | Shared UI component library                         |

---

## ⚡ Technologies

- **Monorepo:** Turborepo
- **Package Manager:** pnpm
- **Backend:** Elysia (Bun)
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **API Client:** Eden
- **Frontend:** Astro, React
- **React SPA:** TanStack React Start, TanStack Router, TanStack Query
- **Styling:** Tailwind CSS, Shadcn UI
- **Linting & Formatting:** Biome

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `^18.0.0` or `^20.0.0`
- **pnpm**: `^8.0.0` (enable with `corepack enable`)
- **Bun**: `^1.0.0` (for server and Bun tasks)

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
    ```bash
    cp apps/server/.env.example apps/server/.env
    # Edit apps/server/.env with your DATABASE_URL and auth secrets
    ```

4. **Run Database Migrations**
    ```bash
    cd apps/server
    pnpm run push
    cd ../..
    ```

5. **Start Development Servers**
    ```bash
    pnpm dev
    ```
    This spins up all dev servers using Turborepo. Access apps at:

    - Landing Page: [localhost:4321](http://localhost:4321)
    - Blog: [localhost:4322](http://localhost:4322)
    - Docs: [localhost:4323](http://localhost:4323)
    - Dashboard: [localhost:3000](http://localhost:3000)
    - Server: [localhost:9876](http://localhost:9876)

---

## 🛠️ Available Commands

- `pnpm build` &mdash; Build all apps and packages
- `pnpm dev` &mdash; Start all dev servers
- `pnpm lint` &mdash; Lint all code with Biome
- `pnpm format` &mdash; Format code with Biome

To run scripts for a specific app/package:
```bash
pnpm --filter <app-or-package-name> <command>
```

Examples:
- `pnpm --filter blog dev` &mdash; Start only the blog dev server
- `pnpm --filter @packages/ui build` &mdash; Build only the UI package

---

## 🚢 Deployment

_Deployment instructions coming soon!_  
(Will include guides for Vercel, Netlify, Docker, etc.)

---

## 🧹 Linting and Formatting

Uses [Biome](https://biomejs.dev/) for linting/formatting.  
Config in root `biome.json` (with possible per-app overrides).

- `pnpm format` &mdash; Format all code
- `pnpm lint` &mdash; Lint all code
- `pnpm check` &mdash; Run full checks (format & lint)

---

## 🤝 Contributing

Contributions are welcome!  
Please [open an issue](https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>/issues) for feature requests or bugs, or submit a PR.

- For major changes, open an issue to discuss your idea first.
- Make sure your code passes linting and formatting (`pnpm check`).

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/<YOUR_GITHUB_USERNAME>">@<YOUR_GITHUB_USERNAME></a></sub>
</p>
