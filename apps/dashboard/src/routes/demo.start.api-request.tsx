import { useEffect } from "react";

import { edenAdapter } from "@packages/eden";
import { createFileRoute } from "@tanstack/react-router";
async function getNames() {
  const data = await edenAdapter.api.auth["sign-up"].post({
    email: "yorizel@gmail.com",
    name: "yorizel",
    password: "12345678",
  });
  console.log(data);
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
