import { getPostsMetadata } from "@/service/posts";
import React from "react";
import PostCard from "./PostCard";

export default async function FeaturedPosts() {
  const postsMetadata = await getPostsMetadata();

  return (
    <section className="mb-6">
      <h2 className="capitalize font-bold mb-1">featured posts</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsMetadata.slice(0, 5).map((data, idx) => (
          <PostCard key={idx} post={data} />
        ))}
      </ul>
    </section>
  );
}
