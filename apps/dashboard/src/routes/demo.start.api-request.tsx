import { useCallback, useEffect, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import { edenAdapter } from "@packages/eden";
async function getNames() {
  const data = await edenAdapter.api.auth["sign-up"].post();
  return data;
}

export const Route = createFileRoute("/demo/start/api-request")({
  component: Home,
});
function Home() {
  useEffect(() => {
    getNames().then();
  }, []);

  return (
    <div className="p-4">
      <div>Hello</div>
    </div>
  );
}
