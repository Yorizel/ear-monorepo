import { validateInput } from "@api/shared/errors";
import { type Static, Type } from "@sinclair/typebox";

const EnvSchema = Type.Object({
  BETTER_AUTH_SECRET: Type.String(),
  BETTER_AUTH_TRUSTED_ORIGINS: Type.String(),
  DATABASE_URL: Type.String(),
});

function parseEnv(env: NodeJS.ProcessEnv): Static<typeof EnvSchema> {
  validateInput(EnvSchema, env);
  return env;
}

export const env = parseEnv(process.env);
