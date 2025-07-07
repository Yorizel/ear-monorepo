# AGENTS.md

## Build, Lint, and Test Commands

- **Install dependencies:** `bun install`
- **Build all apps/packages:** `bun run build`
- **Lint all code (Biome):** `bun run check` (auto-fixes)
- **Format code:** `bun run format`
- **Typecheck:** `bun run typecheck`
- **Run all dev servers:** `bun run dev:all`
- **Run a single app/package script:** `bun run --filter <workspace> <script>`
- **Run dashboard tests:** `bun run --filter dashboard test` (uses Vitest)
- **Run dashboard single test:** `bun run --filter dashboard test -- <test-file>`

## Code Style Guidelines

- **Formatting:** Enforced by Biome (2-space indent, 80-char lines, LF endings, double quotes)
- **Imports:** Auto-organized and sorted by Biome
- **Types:** TypeScript everywhere, strict type safety, use explicit types for exports
- **Naming:** camelCase for variables/functions, PascalCase for types/components
- **Error Handling:** Prefer explicit error types, avoid silent failures
- **Commits:** Use Conventional Commits (validated by commitlint)
- **Pre-commit:** Husky auto-formats staged files
- **Astro/React:** Use .astro/.tsx as appropriate, follow project structure
- **Security/Performance:** Biome enforces recommended rules

> See README.md for more details. No Cursor or Copilot rules detected.
