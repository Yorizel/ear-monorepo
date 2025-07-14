import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    // Add sendResetPassword, requireEmailVerification, etc. here
  },
  // Add other config options as needed
});
