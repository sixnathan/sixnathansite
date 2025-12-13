interface Module {
  title: string;
  description: string;
  link: string;
  date: string;
}

const modules: Module[] = [
  {
    title: "features",
    description: "lstm implementation with forward and backward pass",
    link: "/prky/oneshotlstm/features",
    date: "2025-12-10",
  },
  {
    title: "main",
    description: "training loop",
    link: "/prky/oneshotlstm/main",
    date: "2025-12-10",
  },
];

export default function OneshotLSTM() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky" className="text-sm text-muted hover:text-accent">
          ← back to projects
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">oneshotlstm</h1>
        <p className="text-muted text-sm mb-4">
          called oneshot because i tried to make it in one night
        </p>
        <p className="text-sm">
          i tried making this in one night but fell asleep. pretty cool implementation of lstm without pytorch.
        </p>
      </section>

      <section className="space-y-6">
        {modules.map((module) => (
          <article
            key={module.title}
            className="p-4 border border-zinc-400 rounded-lg hover:border-zinc-300 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">
              <a
                href={module.link}
                className="hover:text-accent"
              >
                {module.title} →
              </a>
            </h2>
            <p className="text-muted text-sm mb-1">{module.description}</p>
            <time className="text-xs text-muted">{module.date}</time>
          </article>
        ))}
      </section>
    </div>
  );
}
