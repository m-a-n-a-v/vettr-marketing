import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { frontmatter } = getPostBySlug(params.slug);
  return {
    title: `${frontmatter.title} | VETTR Blog`,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Custom MDX components styled for the dark VETTR theme              */
/* ------------------------------------------------------------------ */
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-3 text-2xl font-semibold text-white"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-2 text-xl font-semibold text-white"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed text-gray-300" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-vettr-accent underline underline-offset-2 hover:text-vettr-accent/80 transition-colors"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-gray-300" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-1 text-gray-300"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-4 border-l-4 border-vettr-accent/40 pl-4 italic text-gray-400"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-white/5 px-1.5 py-0.5 text-sm font-mono text-vettr-accent"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-vettr-dark p-4 text-sm leading-relaxed"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-white/10" />,
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full text-sm text-gray-300" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-white/10 px-4 py-2 text-left font-semibold text-white"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-white/5 px-4 py-2" {...props} />
  ),
};

export default function BlogPostPage({ params }: PageProps) {
  const { frontmatter, content } = getPostBySlug(params.slug);

  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-vettr-accent"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <time dateTime={frontmatter.date}>{formattedDate}</time>
          <span className="text-gray-600">|</span>
          <span>{frontmatter.author}</span>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-vettr-accent ring-1 ring-vettr-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* MDX Content */}
      <div className="mdx-content">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}
