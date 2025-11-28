import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted">
          random thoughts
        </p>
      </section>

      <section className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon!</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/raj/${post.slug}`} className="block">
                <time className="text-sm text-muted">{post.date}</time>
                <h2 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm mt-2">{post.description}</p>
              </Link>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
