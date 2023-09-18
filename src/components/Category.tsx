"use client";
import React from "react";
import "./Category.css";

type Props = {
  categories: string[];
  onClick: (category: string) => void;
  filter: string;
};

export default function Category({ categories, onClick, filter }: Props) {
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    if (e.target.tagName !== "LI") return;

    const {
      dataset: { category },
    } = e.target;

    onClick(category);
  };

  return (
    <>
      <h2 className="text-center font-bold border-b-2 border-b-sky-500 mb-2">
        Category
      </h2>
      <ul
        className="categories flex flex-col items-center"
        onClick={handleClick}
      >
        {categories.map((c, idx) => (
          <li
            key={idx}
            data-category={c}
            className={`cursor-pointer ${filter === c && "active"}`}
          >
            {c}
          </li>
        ))}
      </ul>
    </>
  );
}
