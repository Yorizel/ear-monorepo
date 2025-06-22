<div align="center">
<br />
<p>
<img src="https://raw.githubusercontent.com/Yorizel/ear-monorepo/main/apps/landing-page/public/favicon.svg" width="100" alt="EAR Stack Logo" />
</p>
<h1 align="center">✨ EAR Stack Monorepo ✨</h1>
<p align="center">
A modern, type-safe, full-stack monorepo powered by <strong>E</strong>lysia, <strong>A</strong>stro, and <strong>R</strong>eact.
<br />
Built for developers who value performance, type safety, and an exceptional developer experience.
</p>
<p align="center">
<a href="https://github.com/Yorizel/ear-monorepo/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/Yorizel/ear-monorepo?style=for-the-badge&color=orange" alt="License"></a>
<a href="https://github.com/Yorizel/ear-monorepo/actions/workflows/check.yml"><img src="https://img.shields.io/github/actions/workflow/status/Yorizel/ear-monorepo/check.yml?branch=main&label=Biome&style=for-the-badge" alt="Biome Check Status"></a>
<a href="https://github.com/Yorizel/ear-monorepo/actions/workflows/typecheck.yml"><img src="https://img.shields.io/github/actions/workflow/status/Yorizel/ear-monorepo/typecheck.yml?branch=main&label=TypeScript&style=for-the-badge" alt="TypeScript Check Status"></a>
</p>
</div>
🚀 Why EAR Stack?

The EAR Stack is a thoughtfully architected template designed to provide a robust foundation for modern web applications. It combines the best of backend performance, static site generation, and dynamic client-side rendering, all within a scalable monorepo.

    ✅ End-to-End Type Safety: From your Drizzle database schema to your React frontend, enjoy autocompletion and error-checking everywhere, powered by TypeScript and Elysia's Eden client.

    ⚡ High Performance: Built on Bun, the all-in-one JavaScript toolkit. Benefit from a fast runtime, bundler, and package manager. Combined with Astro's island architecture and Elysia's speed, your app will be blazing fast.

    🎨 Stunning UIs: Leverage a shared component library built with React and Tailwind CSS. The ui package is currently being ported to Tamagui for universal native and web components.

    📦 Scalable Architecture: The monorepo, managed by Nx, allows for clean separation of concerns, shared packages, and independent application deployment.

    🔧 Exceptional DX: Get started instantly with pre-configured tooling, including Biome for formatting/linting, Husky for pre-commit hooks, and GitHub Actions for CI.

🛠️ Tech Stack

This project harmonizes a suite of cutting-edge technologies to deliver a seamless development experience.
Technology	Role	Location
Bun	JavaScript Runtime, Bundler, Package Manager	Root
Nx	Monorepo Management & Build System	Root
Elysia	High-performance, Type-Safe Backend Framework	apps/server
Drizzle ORM	TypeScript ORM for SQL Databases	apps/server
Astro	Content-Driven Web Framework for UI	apps/*
React	UI Library for Dynamic Interfaces	apps/*
TanStack Start	Full-stack React Framework (Router, Query)	apps/dashboard
Expo	Framework for Universal React Native Apps	apps/native
TypeScript	End-to-End Type Safety	Entire Repo
Tailwind CSS	Utility-First CSS Framework	packages/ui
Shadcn/UI	Re-usable Components (being replaced by Tamagui)	packages/ui
Biome	Linter, Formatter, and more	Entire Repo
Husky & commitlint	Git Hooks for Code Quality & Conventional Commits	Root
GitHub Actions	Continuous Integration (CI)	.github
🏛️ Monorepo Structure

The repository is organized into apps and packages to maintain a clean and scalable architecture.
Generated code

      
.
├── apps
│   ├── blog/             # 📝 Astro-powered blog with MDX support
│   ├── dashboard/        # 📊 Dynamic React dashboard with TanStack Start
│   ├── docs/             # 📚 Documentation site with Astro Starlight
│   ├── landing-page/     # 🌐 Stunning marketing page built with Astro & React
│   ├── native/           # 📱 Expo (React Native) application
│   ├── server/           # ⚙️ Elysia backend server with Drizzle ORM
│   └── storybook/        # 🎨 (WIP) Component development environment
│
├── packages
│   ├── brand/            # 🎨 Shared branding assets and tokens
│   ├── config/           # ⚙️ (WIP) Shared Tamagui configuration
│   ├── eden/             # 🔗 Type-safe API client for the Elysia server
│   └── ui/               # 🧩 (WIP) Shared UI library, porting to Tamagui
│
└── tooling
    └── typescript/       # 🛠️ Shared TypeScript configurations (tsconfig.json)

    

IGNORE_WHEN_COPYING_START
Use code with caution.
IGNORE_WHEN_COPYING_END
🎬 Getting Started

Get your local development environment up and running in a few simple steps.
1. Prerequisites

    Node.js (v20+ is recommended for compatibility with some ecosystem tools)

    Bun (v1.0 or higher)

2. Clone the Repository
Generated bash

      
git clone https://github.com/Yorizel/ear-monorepo.git
cd ear-monorepo

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END
3. Install Dependencies

This project uses bun's built-in workspace support to manage dependencies.
Generated bash

      
bun install

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END
4. Configure Environment Variables

Copy the example environment files and fill in the required values.

    For the backend server:
    Generated bash

          
    cp apps/server/.env.example apps/server/.env

        

    IGNORE_WHEN_COPYING_START

Use code with caution. Bash
IGNORE_WHEN_COPYING_END

For the dashboard:
Generated bash

      
cp apps/dashboard/.env.example apps/dashboard/.env

    

IGNORE_WHEN_COPYING_START

    Use code with caution. Bash
    IGNORE_WHEN_COPYING_END

You will need to provide a DATABASE_URL for a PostgreSQL database (e.g., from Neon) and a BETTER_AUTH_SECRET.
5. Set Up the Database

Push the Drizzle schema to your database by running the db:push script from the server workspace.
Generated bash

      
bun run --filter server db:push

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END
6. Run the Development Servers

Start all applications concurrently using Nx.
Generated bash

      
bun run dev:all

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END

This command will launch all applications. You can access them at their respective ports:

    Landing Page: http://localhost:4321

    Dashboard: http://localhost:3000

    Blog: http://localhost:4322

    Docs: http://localhost:4323

    Server: http://localhost:9876

📜 Available Scripts

Key scripts are defined in the root package.json and can be run with bun run <script-name>.
Root Scripts
Script	Description
build	Build all applications and packages for production.
check	Run Biome linter across all projects.
format	Format all code in the repository using Biome.
typecheck	Run TypeScript checks across all projects.
dev:all	Start all applications in development mode.
dev:dashboard	Start the server, dashboard, and native apps.
dev:content-apps	Start the docs, blog, and landing-page apps.
Workspace-Specific Scripts

Run these with bun run --filter <workspace> <script>. For example: bun run --filter server db:push.
Script (apps/server)	Description
db:generate	Generate a new database migration file.
db:push	Push the current schema to the database (for development).
auth:generate	Generate the auth schema based on the auth config.
⚙️ Development Workflow
Code Quality & Formatting

This project uses Biome for linting and formatting. A pre-commit hook is configured with Husky to automatically format your staged files, ensuring consistent code style across the repository.
Commit Conventions

We use Conventional Commits. This is enforced by commitlint to maintain a clean and descriptive git history.
Continuous Integration

The repository is equipped with GitHub Actions workflows that run on every pull request:

    check.yml: Runs bun run check to ensure code passes Biome's linter.

    typecheck.yml: Runs bun run typecheck to verify TypeScript types.

🤝 Contributing

Contributions are welcome! If you have suggestions or find a bug, please open an issue or submit a pull request. Ensure your code adheres to the formatting and commit conventions.
📄 License

This project is licensed under the MIT License. See the LICENSE.md file for details.
