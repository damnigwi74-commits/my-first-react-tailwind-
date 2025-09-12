// src/components/PostsList.tsx
import { useEffect, useState } from "react";
import apiService from "../services/apiService";
import type { PostModel } from "../models/PostModel";

export default function PostPage() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getAll<PostModel>("posts")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts.slice(0, 10).map(post => (
          <li key={post.id} className="p-3 border rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
