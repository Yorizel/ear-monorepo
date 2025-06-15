import { createQueryKey } from "@packages/eden";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { eden } = useRouteContext({
    from: "/",
  });
  const { data } = useSuspenseQuery({
    queryKey: createQueryKey("eden.works.get"),
    queryFn: async () => {
      const data = await eden.works.get();
      return data;
    },
  });
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        {data?.data?.message}
      </header>
    </div>
  );
}
