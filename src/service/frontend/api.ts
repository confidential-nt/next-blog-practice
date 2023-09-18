export async function getPostsMetadataByFetching() {
  return fetch("/api/posts-metadata").then((res) => res.json());
}
