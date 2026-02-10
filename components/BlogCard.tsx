import Link from "next/link";
import type { PostFrontmatter } from "@/lib/blog";

interface BlogCardProps {
  slug: string;
  frontmatter: PostFrontmatter;
}

export default function BlogCard({ slug, frontmatter }: BlogCardProps) {
  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="h-full rounded-2xl border border-white/10 bg-vettr-card p-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-vettr-accent/40 group-hover:shadow-lg group-hover:shadow-vettr-accent/10">
        <div className="mb-4 flex items-center gap-3 text-sm text-gray-400">
          <time dateTime={frontmatter.date}>{formattedDate}</time>
          <span className="text-gray-600">|</span>
          <span>{frontmatter.author}</span>
        </div>

        <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-vettr-accent">
          {frontmatter.title}
        </h2>

        <p className="mb-5 text-sm leading-relaxed text-gray-300">
          {frontmatter.excerpt}
        </p>

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
      </article>
    </Link>
  );
}
