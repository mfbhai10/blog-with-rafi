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

  return new Intl.DateTimeFormat("bn-BD", {
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
    <main className="px-4 py-16 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-4xl border border-border bg-linear-to-br from-surface via-surface-soft/80 to-background p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 -z-10 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -z-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors duration-300 hover:text-primary"
          >
            ← সব পোস্টে ফিরে যান
          </Link>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 font-medium text-accent">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <p className="mt-5 max-w-2xl text-[17px] leading-8 text-muted sm:text-lg">
              {post.description}
            </p>

            {hasTags ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-primary transition-colors duration-300 hover:border-primary/40 hover:bg-accent-soft hover:text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-4xl border border-border bg-surface p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="blog-article text-[17px] leading-8 text-primary sm:text-lg sm:leading-9">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h2
                    className="mt-12 mb-5 font-heading text-3xl font-bold tracking-tight text-primary"
                    {...props}
                  >
                    {children}
                  </h2>
                ),
                h2: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h2
                    className="mt-12 mb-5 font-heading text-3xl font-bold tracking-tight text-primary"
                    {...props}
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }: MarkdownHeadingProps) => (
                  <h3
                    className="mt-10 mb-4 font-heading text-2xl font-semibold tracking-tight text-primary"
                    {...props}
                  >
                    {children}
                  </h3>
                ),
                p: ({ children, ...props }: MarkdownParagraphProps) => (
                  <p
                    className="mb-6 text-[17px] leading-8 text-primary/90 sm:text-lg"
                    {...props}
                  >
                    {children}
                  </p>
                ),
                ul: ({ children, ...props }: MarkdownListProps) => (
                  <ul
                    className="mb-6 ml-6 list-disc space-y-2 text-[17px] leading-8 text-primary/90 sm:text-lg"
                    {...props}
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }: MarkdownOrderedListProps) => (
                  <ol
                    className="mb-6 ml-6 list-decimal space-y-2 text-[17px] leading-8 text-primary/90 sm:text-lg"
                    {...props}
                  >
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
                    className="my-8 rounded-3xl border border-border bg-surface-soft px-5 py-5 text-primary/90 shadow-sm sm:px-6"
                    {...props}
                  >
                    <div className="border-l-4 border-accent pl-4 italic text-[17px] leading-8 text-primary/90 sm:text-lg">
                      {children}
                    </div>
                  </blockquote>
                ),
                a: ({ children, href, ...props }: MarkdownAnchorProps) => (
                  <a
                    className="font-medium text-primary underline decoration-accent/30 decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
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
                        className="rounded-md border border-border bg-code-bg px-1.5 py-0.5 font-mono text-[0.9em] text-primary"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code
                      className="block overflow-x-auto rounded-3xl bg-code-bg px-5 py-4 font-mono text-sm leading-7 text-primary"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children, ...props }) => (
                  <pre
                    className="my-6 overflow-x-auto rounded-3xl border border-border bg-code-bg p-0"
                    {...props}
                  >
                    {children}
                  </pre>
                ),
                hr: (props) => (
                  <hr className="my-10 border-border" {...props} />
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
