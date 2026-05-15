import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type MarkdownHeadingProps = ComponentPropsWithoutRef<"h1">;
type MarkdownParagraphProps = ComponentPropsWithoutRef<"p">;
type MarkdownListProps = ComponentPropsWithoutRef<"ul">;
type MarkdownOrderedListProps = ComponentPropsWithoutRef<"ol">;
type MarkdownListItemProps = ComponentPropsWithoutRef<"li">;
type MarkdownBlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type MarkdownCodeProps = ComponentPropsWithoutRef<"code">;
type MarkdownAnchorProps = ComponentPropsWithoutRef<"a">;

function formatDate(date: string) {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
}

function getPostOrNotFound(slug: string) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return post;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostOrNotFound(slug);

  return {
    title: `${post.title} | Blog with Rafi`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostOrNotFound(slug);
  const hasTags = post.tags.length > 0;

  return (
    <main className="px-6 py-16 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-blue-700 transition-colors hover:text-blue-800"
          >
            ← Back to all posts
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {post.description}
          </p>

          {hasTags ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="border-t border-slate-200 pt-10">
          <div className="markdown-content text-base leading-7 text-slate-700">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h2
                    className="mt-10 mb-4 text-3xl font-bold tracking-tight text-slate-900"
                    {...props}
                  >
                    {children}
                  </h2>
                ),
                h2: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h2
                    className="mt-10 mb-4 text-3xl font-bold tracking-tight text-slate-900"
                    {...props}
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h3
                    className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-slate-900"
                    {...props}
                  >
                    {children}
                  </h3>
                ),
                p: ({ children, ...props }: MarkdownParagraphProps) => (
                  <p className="mb-5 text-slate-700" {...props}>
                    {children}
                  </p>
                ),
                ul: ({ children, ...props }: MarkdownListProps) => (
                  <ul className="mb-6 ml-6 list-disc space-y-2" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }: MarkdownOrderedListProps) => (
                  <ol className="mb-6 ml-6 list-decimal space-y-2" {...props}>
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }: MarkdownListItemProps) => (
                  <li className="pl-1" {...props}>
                    {children}
                  </li>
                ),
                blockquote: ({
                  children,
                  ...props
                }: MarkdownBlockquoteProps) => (
                  <blockquote
                    className="mb-6 border-l-4 border-blue-200 bg-blue-50 px-5 py-4 text-slate-700"
                    {...props}
                  >
                    {children}
                  </blockquote>
                ),
                a: ({ children, href, ...props }: MarkdownAnchorProps) => (
                  <a
                    className="font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-800 hover:decoration-blue-400"
                    href={href}
                    {...props}
                  >
                    {children}
                  </a>
                ),
                code: ({
                  children,
                  className,
                  ...props
                }: MarkdownCodeProps) => {
                  const isInline = !className;

                  if (isInline) {
                    return (
                      <code
                        className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-900"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code
                      className="block overflow-x-auto rounded-2xl bg-slate-950 px-5 py-4 font-mono text-sm leading-7 text-slate-100"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children, ...props }) => (
                  <pre
                    className="mb-6 overflow-x-auto rounded-2xl bg-slate-950 p-0"
                    {...props}
                  >
                    {children}
                  </pre>
                ),
                hr: (props) => (
                  <hr className="my-10 border-slate-200" {...props} />
                ),
                img: () => null,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}
