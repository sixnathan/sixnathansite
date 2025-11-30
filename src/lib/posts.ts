import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");
const readingDirectory = path.join(process.cwd(), "content/reading");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  type: "post";
}

export interface Post extends PostMeta {
  content: string;
}

export interface ReadingMeta {
  slug: string;
  title: string;
  link: string;
  date: string;
  comment: string;
  type: "reading";
}

export type BlogItem = PostMeta | ReadingMeta;

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        type: "post" as const,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    type: "post" as const,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

export function getAllReading(): ReadingMeta[] {
  if (!fs.existsSync(readingDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(readingDirectory);
  const reading = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(readingDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        link: data.link || "",
        date: data.date || "",
        comment: data.comment || "",
        type: "reading" as const,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return reading;
}

export function getAllBlogItems(): BlogItem[] {
  const posts = getAllPosts();
  const reading = getAllReading();

  const allItems = [...posts, ...reading];
  allItems.sort((a, b) => (a.date > b.date ? -1 : 1));

  return allItems;
}
