import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    console.log(queryClient);
    return queryClient.prefetchQuery({
      queryKey: ["works"],
      queryFn: context.eden.works.post,
    });
  },
});

function App() {
  const { eden } = useRouteContext({
    from: "/",
  });
  const { data } = useQuery({
    queryKey: ["works"],
    queryFn: eden.works.post,
  });
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        {data?.data?.message}
      </header>
    </div>
  );
}
