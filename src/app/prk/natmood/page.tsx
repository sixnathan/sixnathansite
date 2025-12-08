interface Module {
  title: string;
  description: string;
  link: string;
  date: string;
}

const modules: Module[] = [
  {
    title: "main",
    description: "complete pipeline orchestrator tying all modules together",
    link: "/prk/natmood/main",
    date: "2025-12-08",
  },
  {
    title: "preprocessing",
    description: "bandpass filtering and windowing for eeg signals",
    link: "/prk/natmood/preprocessing",
    date: "2025-12-08",
  },
  {
    title: "features",
    description: "band powers, hjorth parameters, and shannon entropy extraction",
    link: "/prk/natmood/features",
    date: "2025-12-08",
  },
  {
    title: "dataloader",
    description: "dreamer dataset loader for eeg valence classification",
    link: "/prk/natmood/dataloader",
    date: "2025-12-08",
  },
  {
    title: "classifier",
    description: "random forest training and feature selection",
    link: "/prk/natmood/classifier",
    date: "2025-12-08",
  },
];

export default function Natmood() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prk" className="text-sm text-muted hover:text-accent">
          ← back to projects
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">natmood</h1>
        <p className="text-muted text-sm mb-4">
          binary valence classifier using randomforest validated on dreamer and adaptable to muse 4
        </p>
        <p className="text-sm">
          primary neurological marker for positive/neutral/negative emotion. extracts 9 features per channel while trained on four channels.
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
