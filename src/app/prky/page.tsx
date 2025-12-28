interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "oneshotlstm",
    description: "done in (almost) one night",
    link: "/prky/oneshotlstm",
  },
  {
    title: "natmood",
    description: "a binary valence mood classifier built using numpy",
    link: "/prky/natmood",
  },
  {
    title: "natlearn",
    description: "a machine learning library built using numpy",
    link: "/prky/natlearn",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">projects</h1>
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
                  className="hover:text-accent"
                >
                  {project.title} →
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="text-muted text-sm mb-3">{project.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
