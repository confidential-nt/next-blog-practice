import Category from "@/components/Category";
import PostCard from "@/components/PostCard";
import Posts from "@/components/Posts";
import { getPostsMetadata } from "@/service/backend/posts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Posts",
};

export default async function PostsPage() {
  return (
    <>
      <Posts />
    </>
  );
}
