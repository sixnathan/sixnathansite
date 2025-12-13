import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <header>
        <Link
          href="/raja"
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
        <time className="text-sm text-muted">{post.date}</time>
      </header>

      <div className="prose-custom">
        <Content content={post.content} />
      </div>
    </article>
  );
}

function Content({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeLanguage = "";

  lines.forEach((line, index) => {
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeContent = [];
      } else {
        elements.push(
          <pre
            key={`code-${index}`}
            className="border border-zinc-400 rounded-lg p-4 overflow-x-auto my-4"
          >
            <code className="text-sm font-mono text-zinc-300">
              {codeContent.join("\n")}
            </code>
          </pre>
        );
        inCodeBlock = false;
        codeContent = [];
      }
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={index} className="text-xl font-semibold mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={index} className="text-lg font-semibold mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={index} className="text-muted ml-4">
          {formatInlineStyles(line.slice(2))}
        </li>
      );
    } else if (line.trim() === "") {
      // Skip empty lines
    } else {
      elements.push(
        <p key={index} className="text-muted leading-relaxed my-4">
          {formatInlineStyles(line)}
        </p>
      );
    }
  });

  return <>{elements}</>;
}

function formatInlineStyles(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    const boldIdx = boldMatch?.index ?? Infinity;
    const codeIdx = codeMatch?.index ?? Infinity;

    if (boldIdx === Infinity && codeIdx === Infinity) {
      parts.push(remaining);
      break;
    }

    if (boldIdx <= codeIdx && boldMatch) {
      if (boldIdx > 0) {
        parts.push(remaining.slice(0, boldIdx));
      }
      parts.push(
        <strong key={`bold-${keyIndex++}`} className="font-semibold text-foreground">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldIdx + boldMatch[0].length);
    } else if (codeMatch) {
      if (codeIdx > 0) {
        parts.push(remaining.slice(0, codeIdx));
      }
      parts.push(
        <code key={`code-${keyIndex++}`} className="px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-400">
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.slice(codeIdx + codeMatch[0].length);
    }
  }

  return parts;
}
