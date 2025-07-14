// Helper to make requests to auth endpoints
export async function authFetch(path: string, options?: RequestInit) {
  return fetch(`/api/auth/${path}`, {
    credentials: "include",
    ...options,
  });
}
