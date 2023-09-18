"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import "./MarkDownPost.css";

type Props = {
  content: string;
};

export default function MarkDownPost({ content }: Props) {
  return (
    <div className="markdown-post-container">
      <ReactMarkdown
        className="prose md:prose-lg lg:prose-xl prose-headings:font-bold"
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw as any, rehypeSanitize]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                {...props}
                style={atomDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      />
    </div>
  );
}
