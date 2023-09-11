"use client";

import { PostMetadata } from "@/service/posts";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./YouMayLike.css";
import PostCard from "./PostCard";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

export default function YouMayLike() {
  const [postsMetadata, setPostsMetadata] = useState<PostMetadata[]>([]);

  useEffect(() => {
    fetch("/api/posts-metadata")
      .then((res) => res.json())
      .then(({ postsMetadata }) => setPostsMetadata(postsMetadata));
  }, []);

  return (
    <section>
      <h2 className="capitalize font-bold mb-1">you may like</h2>
      {postsMetadata.length && (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          sliderClass="carousel-slider"
          itemClass="carousel-item"
        >
          {postsMetadata.slice(5).map((data, idx) => (
            <PostCard post={data} key={idx} />
          ))}
        </Carousel>
      )}
    </section>
  );
}
