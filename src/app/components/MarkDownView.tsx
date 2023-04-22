"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
interface IMarkDownView {
  content: string;
}

function MarkDownView({ content }: IMarkDownView) {
  return (
    <ReactMarkdown
      className="prose dark:prose-invert max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={oneDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="w-full max-h-[300px] rounded-md"
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={500}
          />
        ),
        pre({ children }) {
          return <pre className="bg-slate-7 00">{children}</pre>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkDownView;
