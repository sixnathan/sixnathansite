interface Algorithm {
  title: string;
  description: string;
  link: string;
}

const algorithms: Algorithm[] = [
  {
    title: "linreg",
    description: "its just a guessing game",
    link: "/prk/natlearn/linreg",
  },
  {
    title: "logreg",
    description: "forgot to clip sigmoid but oh well",
    link: "/prk/natlearn/logreg",
  },
];

export default function Natlearn() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">natlearn</h1>
        <p className="text-muted text-sm">
          a machine learning library built from scratch
        </p>
      </section>

      <section className="space-y-6">
        {algorithms.map((algorithm) => (
          <article
            key={algorithm.title}
            className="p-4 border border-zinc-400 rounded-lg hover:border-zinc-300 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">
              <a
                href={algorithm.link}
                className="hover:text-accent"
              >
                {algorithm.title} →
              </a>
            </h2>
            <p className="text-muted text-sm mb-3">{algorithm.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
