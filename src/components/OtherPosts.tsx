import { getOtherPostsMetadata } from "@/service/backend/posts";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./OtherPosts.css";

type Props = {
  filename: string;
};

export default async function OtherPosts({ filename }: Props) {
  const { prev, next } = await getOtherPostsMetadata(filename);

  return (
    <div className="other-posts flex mb-6 rounded-b-xl overflow-hidden">
      {prev ? (
        <Link
          href={`/posts/${prev.filename}`}
          className={`w-full flex items-center py-12 pl-5 ${prev.metadata.thumbnail.replace(
            ".png",
            ""
          )} bg-no-repeat bg-cover bg-center`}
        >
          <AiOutlineArrowLeft className="text-3xl text-yellow-300" />
          <div className="left flex flex-col items-center flex-grow  text-white">
            <h3 className="text-xl font-bold ">{prev.metadata.title}</h3>
            <p className="font-bold">{prev.metadata.description}</p>
          </div>
        </Link>
      ) : (
        <BlankPost />
      )}
      {next ? (
        <Link
          href={`/posts/${next.filename}`}
          className={`w-full flex items-center py-12 pr-5 ${next.metadata.thumbnail.replace(
            ".png",
            ""
          )} bg-no-repeat bg-cover bg-center`}
        >
          <AiOutlineArrowRight className="order-1 text-3xl text-yellow-300" />
          <div className="right flex flex-col items-center flex-grow  text-white">
            <h3 className="text-xl font-bold">{next.metadata.title}</h3>
            <p className="font-bold">{next.metadata.description}</p>
          </div>
        </Link>
      ) : (
        <BlankPost />
      )}
    </div>
  );
}

function BlankPost() {
  return <div className="w-full py-12 pl-5 bg-slate-300"></div>;
}
