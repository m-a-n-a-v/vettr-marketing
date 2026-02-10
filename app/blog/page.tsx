import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | VETTR",
  description:
    "Insights on mining stocks, due diligence, and market analysis from the VETTR team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Insights on mining stocks, due diligence, and market analysis
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
            />
          ))}
        </div>
      )}
    </section>
  );
}
