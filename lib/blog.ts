import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

export interface PostWithContent extends Post {
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostWithContent {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => filename.replace(/\.mdx$/, ""));
}
