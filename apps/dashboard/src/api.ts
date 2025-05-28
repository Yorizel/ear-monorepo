import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from "@tanstack/react-start/api";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:9876",
});
export default createStartAPIHandler(defaultAPIFileRouteHandler);
