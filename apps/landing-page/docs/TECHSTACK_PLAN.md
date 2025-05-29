# TechStack Enhancement Plan

```mermaid
flowchart TD
  A[Review current TechStack.astro] --> B[Replace Lucide imports + icon mapping]
  B --> C[Define `getIconUrl(name: string)` util]
  C --> D[Update JSX: use `<img src={getIconUrl(icon)}…/>`]
  D --> E[Extend `technologies` array]
  E --> F[– Add BiomeJS entry  
– Ensure Turborepo & pnpm use correct keys]
  F --> G[Test layout & styling]
```

1. **Remove Lucide imports & mapping**
   - Delete lines 2–13, and the `icons` object at lines 15–26.

2. **Define slug list & URL mapping**
   ```ts
   const slugs = [
     "elysia", "astro", "react", "drizzle", "turborepo",
     "pnpm", "tanstack", "tailwindcss", "biome"
   ];
   const images = slugs.map(
     (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
   );
   ```

3. **Refactor rendering**
   ```jsx
   {technologies.map((tech, i) => {
     const url = images[i];
     return (
       <img
         src={url}
         alt={tech.name}
         class="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300"
       />
     );
   })}
   ```

4. **Update `technologies` array**
   - Change each `icon: "Server"` to the correct Simple Icon slug, e.g. `"elysia"`
   - Add:
     ```ts
     {
       icon: "biome",
       name: "BiomeJS",
       description: "All-in-one linter & formatter for TypeScript, JavaScript, JSON, Markdown, …",
     }
     ```

5. **Verify responsiveness & styling**
   - Ensure grid adapts to 9 items
   - Check hover effects remain intact