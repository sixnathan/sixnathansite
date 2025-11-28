interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of what this project is about and what technologies you used.",
    link: "https://github.com/yourusername/project",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Project Two",
    description:
      "Another project description. Explain what problem it solves or why you built it.",
    tags: ["Python", "Machine Learning"],
  },
  {
    title: "Project Three",
    description:
      "You can add as many projects as you want. Keep descriptions concise but informative.",
    link: "https://example.com",
    tags: ["Next.js", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-muted">
          A collection of things I&apos;ve built and worked on.
        </p>
      </section>

      <section className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-4 border border-zinc-400 rounded-lg hover:border-zinc-300 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {project.title} →
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="text-muted text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 border border-zinc-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
