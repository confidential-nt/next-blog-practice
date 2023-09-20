import MarkDownPost from "@/components/MarkDownPost";
import OtherPosts from "@/components/OtherPosts";
import {
  getPostsByFilename as getPostByFilename,
  getPostsMetadataByFilename as getPostMetadataByFilename,
  getPosts,
  getPostsMetadata,
} from "@/service/backend/posts";
import Image from "next/image";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string; // slug -> 경로의 키워드가 slug이기 때문에 slug로 설정된거임. item으로 설정해놨으면 item으로 받아야함.
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const postsMetadata = await getPostMetadataByFilename(slug);
  return {
    title: {
      absolute: `${postsMetadata?.filename}`,
    },
  };
}

export async function generateStaticParams() {
  const postsMetadata = await getPostsMetadata();
  return postsMetadata.map((p) => ({
    slug: p.filename,
  }));
}

export default async function PostsPage({ params: { slug } }: Props) {
  const post = await getPostByFilename(slug);
  const postMetadata = await getPostMetadataByFilename(slug);

  return (
    <>
      {post && postMetadata && (
        <>
          <Image
            src={
              `/images/posts_thumbnails/${postMetadata.metadata.thumbnail}` ||
              ""
            }
            alt={post?.filename || ""}
            width={400}
            height={400}
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="bg-gray-100 py-4 px-4">
            <div className="flex justify-end items-center w-full text-sky-500">
              <AiTwotoneCalendar className="mr-1" />
              <span className="block font-bold text-xs">
                {postMetadata.metadata.date}
              </span>
            </div>
            <h2 className="text-3xl font-bold">
              {postMetadata.metadata.title}
            </h2>
            <p className="font-semibold relative pb-4 mb-4 after:block after:absolute after:w-28 after:h-1 after:bg-sky-500 after:bottom-0 after:left-0">
              {postMetadata.metadata.description}
            </p>
            <MarkDownPost content={post.content} />
          </div>
          <OtherPosts filename={slug} />
        </>
      )}
    </>
  );
}
