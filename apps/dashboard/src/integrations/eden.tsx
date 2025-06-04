import { env } from "@/config/env";
import { createEdenAdapter } from "@packages/eden";
export const getContext = () => {
  const edenAdapter = createEdenAdapter(env.VITE_SERVER_URL);
  return {
    eden: edenAdapter,
  };
};
