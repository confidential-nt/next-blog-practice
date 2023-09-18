import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type PostMetadata = {
  filename: string;
  metadata: {
    title: string;
    description: string;
    date: string;
    category: string;
    thumbnail: string;
  };
};

export type Post = {
  filename: string;
  content: string;
};

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "data", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileContents);

    return {
      filename: filename.replace(/\.md$/, ""),
      content: parsed.content,
    };
  });

  return posts;
}

export async function getPostsMetadata(): Promise<PostMetadata[]> {
  const postsDirectory = path.join(process.cwd(), "data", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const postsMetadata = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const parsed = matter(fileContents);

    return {
      filename: filename.replace(/\.md$/, ""),
      metadata: parsed.data,
    };
  });

  return postsMetadata as PostMetadata[];
}

export async function getPostsByFilename(filename: string) {
  const posts = await getPosts();
  return posts.find((p) => p.filename === filename);
}

export async function getPostsMetadataByFilename(filename: string) {
  const postsMetadata = await getPostsMetadata();
  return postsMetadata.find((p) => p.filename === filename);
}

export async function getOtherPostsMetadata(filename: string) {
  const posts = await getPostsMetadata();
  const index = posts.findIndex((p) => p.filename === filename);
  const prev = posts[index - 1];
  const next = posts[index + 1];
  return {
    prev: prev || null,
    next: next || null,
  };
}
