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

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "data", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
      filename,
      content: fileContents,
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
