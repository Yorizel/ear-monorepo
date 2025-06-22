import { themes } from "@config/theme";
import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";
export const config = createTamagui({
  ...defaultConfig,
  themes,
});
type CustomConfig = typeof config;
declare module "tamagui" {
  interface TamaguiCustomConfig extends CustomConfig {}
}
