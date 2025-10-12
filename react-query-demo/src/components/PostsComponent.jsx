import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function PostsComponent() {
  const { data, isError, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts (React Query Demo)</h1>

      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-2 rounded shadow-sm">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-4">
        (Data is cached for 5 minutes — navigate away and back to see caching.)
      </p>
    </div>
  );
}
