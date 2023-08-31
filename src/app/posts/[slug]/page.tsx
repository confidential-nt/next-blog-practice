import React from "react";

type Props = {
  params: {
    slug: string; // slug -> 경로의 키워드가 slug이기 때문에 slug로 설정된거임. item으로 설정해놨으면 item으로 받아야함.
  };
};

export default function PostsPage({ params: { slug } }: Props) {
  return <div>여기는 {slug} 페이지</div>;
}
