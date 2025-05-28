import { useEffect } from "react";
import { Button } from "@packages/ui/components/button";
import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "@/api";
async function getNames() {
  const data = authClient.signUp.email({
    email: "yorizel@gmail.com",
    password: "12345678",
    name: "yorizel",
  });
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
      <Button className="bg-blue-500 text-white">Hello</Button>
    </div>
  );
}
