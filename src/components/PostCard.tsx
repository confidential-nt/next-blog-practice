import React from "react";
import Link from "next/link";
import { PostMetadata } from "@/service/posts";
import Image from "next/image";
import CategoryBadge from "./CategoryBadge";

type Props = {
  post: PostMetadata;
};

export default function PostCard({ post: { metadata, filename } }: Props) {
  return (
    <li className="shadow-md rounded-md overflow-hidden">
      <Link href={`/posts/${filename}`}>
        <Image
          src={`/images/posts_thumbnails/${metadata.thumbnail}`}
          alt={metadata.title}
          width={400}
          height={200}
          className="w-full"
        />
        <div className="flex flex-col items-center justify-center relative py-6">
          <h3 className="font-bold">{metadata.title}</h3>
          <p className="text-gray-600 mb-1">{metadata.description}</p>
          <span className="absolute right-3 top-2 text-gray-600 text-sm">
            {metadata.date}
          </span>
          <CategoryBadge text={metadata.category} />
        </div>
      </Link>
    </li>
  );
}
