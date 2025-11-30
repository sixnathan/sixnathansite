import Link from "next/link";
import { getAllBlogItems } from "@/lib/posts";

export default function Blog() {
  const items = getAllBlogItems();

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted">
          random thoughts & things i&apos;m reading
        </p>
      </section>

      <section className="space-y-6">
        {items.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon!</p>
        ) : (
          items.map((item) => {
            if (item.type === "reading") {
              return (
                <article key={item.slug} className="group">
                  <time className="text-sm text-muted">{item.date}</time>
                  <div className="flex items-start gap-2 mt-1">
                    <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        {item.title}
                        <span className="text-sm">↗</span>
                      </a>
                    </h2>
                  </div>
                  <p className="text-muted text-sm mt-2">{item.comment}</p>
                </article>
              );
            } else {
              return (
                <article key={item.slug} className="group">
                  <Link href={`/raj/${item.slug}`} className="block">
                    <time className="text-sm text-muted">{item.date}</time>
                    <h2 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-muted text-sm mt-2">{item.description}</p>
                  </Link>
                </article>
              );
            }
          })
        )}
      </section>
    </div>
  );
}
