import { treaty } from "@elysiajs/eden";
import type { App } from "@api";
export type EdenClientType = ReturnType<typeof treaty<App>>;
export function createEdenAdapter(url: string): EdenClientType {
  return treaty<App>(url);
}

export function createQueryKey(
  path: string,
  params?: Record<string, unknown>,
): unknown[] {
  // Split the path by dots to handle nested paths like "users.posts"
  const pathSegments = path.split(".");

  // Create base query key from path segments
  const baseKey = pathSegments;

  // Add parameters if provided
  if (params && Object.keys(params).length > 0) {
    return [...baseKey, params];
  }

  return baseKey;
}

/**
 * Query key variants for common patterns
 */
export const queryKeys = {
  /**
   * Generate query key for a list endpoint
   */
  list: (path: string, filters?: Record<string, unknown>) =>
    createQueryKey(path, filters),

  /**
   * Generate query key for a detail/single item endpoint
   */
  detail: (
    path: string,
    id: string | number,
    params?: Record<string, unknown>,
  ) => createQueryKey(path, { id, ...params }),

  /**
   * Generate query key for search endpoints
   */
  search: (path: string, query: string, filters?: Record<string, unknown>) =>
    createQueryKey(path, { search: query, ...filters }),

  /**
   * Generate query key for infinite/paginated queries
   */
  infinite: (path: string, params?: Record<string, unknown>) =>
    createQueryKey(`${path}.infinite`, params),
};
