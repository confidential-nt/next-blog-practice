import { Email } from "@/components/EmailSender";

export async function getPostsMetadataByFetching() {
  return fetch("/api/posts-metadata").then((res) => res.json());
}

export async function postEmailByFetching(email: Email) {
  return fetch("/contact/api/send", {
    method: "POST",
    body: JSON.stringify(email),
  }).then((res) => res.json());
}
