import { config } from "@packages/config";
import type { ReactNode } from "react";
import { TamaguiProvider as BaseTamaguiProvider } from "tamagui";

export const TamaguiProvider = ({ children }: { children: ReactNode }) => (
  <BaseTamaguiProvider config={config}>{children}</BaseTamaguiProvider>
);
export * from "tamagui";
