import React from "react";

type Props = {
  text: string;
};

export default function CategoryBadge({ text }: Props) {
  return (
    <span className="text-gray-600 text-xs bg-green-100 px-2 rounded-md">
      {text}
    </span>
  );
}
