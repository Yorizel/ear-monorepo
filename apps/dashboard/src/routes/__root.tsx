import { config } from "@packages/config";
import type { EdenClientType } from "@packages/eden";
import appCss from "@packages/ui/globals.css?url";
import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TamaguiProvider } from "tamagui";
import { QueryProvider } from "@/integrations/tanstack-query";

interface MyRouterContext {
  eden: EdenClientType;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <RootDocument>
      <QueryProvider>
        <TamaguiProvider config={config}>
          <Outlet />
        </TamaguiProvider>
      </QueryProvider>
    </RootDocument>
  ),
  head: () => ({
    links: [
      {
        href: appCss,
        rel: "stylesheet",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
