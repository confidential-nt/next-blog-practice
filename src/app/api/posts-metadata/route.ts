import { getPostsMetadata } from "@/service/backend/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const postsMetadata = await getPostsMetadata();
  return NextResponse.json({ postsMetadata });
}
