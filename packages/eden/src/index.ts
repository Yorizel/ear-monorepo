import { treaty } from "@elysiajs/eden";
import type { App } from "@api";
export type EdenClientType = ReturnType<typeof treaty<App>>;
export function createEdenAdapter(url: string): EdenClientType {
  return treaty<App>(url);
}
