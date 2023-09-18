"use client";

import { PostMetadata } from "@/service/backend/posts";
import { getPostsMetadataByFetching } from "@/service/frontend/api";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import Category from "./Category";

export default function Posts() {
  const [postsMetadata, setPostsMetadata] = useState<PostMetadata[]>([]);
  const [filter, setFilter] = useState<string>("All Posts");

  useEffect(() => {
    getPostsMetadataByFetching().then(({ postsMetadata }) =>
      setPostsMetadata(postsMetadata)
    );
  }, []);

  const onClick = (category: string) => {
    setFilter(category);
  };

  return (
    <section className="flex flex-wrap m-6 md:flex-nowrap">
      <h1 className="hidden">Posts 페이지</h1>
      <ul className="grid grid-cols-1  gap-4 basis-full md:grid-cols-2 md:basis-3/4 lg:grid-cols-3">
        {postsMetadata.length === 0
          ? ""
          : postsMetadata
              .filter(
                (data) =>
                  filter === "All Posts" || filter === data.metadata.category
              )
              .map((data, idx) => <PostCard post={data} key={idx} />)}
      </ul>
      <div className="basis-full md:basis-28 md:ml-36">
        {postsMetadata.length === 0 ? (
          ""
        ) : (
          <Category
            onClick={onClick}
            categories={getCategories(postsMetadata)}
            filter={filter}
          />
        )}
      </div>
    </section>
  );
}

function getCategories(postsMetadata: PostMetadata[]) {
  return Array.from(
    new Set(postsMetadata.map((p) => p.metadata.category))
  ).toSpliced(0, 0, "All Posts") as string[];
}
