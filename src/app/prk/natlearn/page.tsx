interface Algorithm {
  title: string;
  description: string;
  link: string;
  date: string;
}

const algorithms: Algorithm[] = [
  {
    title: "logreg",
    description: "forgot to clip sigmoid but oh well",
    link: "/prk/natlearn/logreg",
    date: "2025-12-04",
  },
  {
    title: "linreg",
    description: "its just a guessing game",
    link: "/prk/natlearn/linreg",
    date: "2025-12-02",
  },
];

export default function Natlearn() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">natlearn</h1>
        <p className="text-muted text-sm mb-4">
          a machine learning library built from scratch
        </p>
        <p className="text-sm">
          its unlikely that ill ever be a hardcore machine learning/deep learning engineer, but i feel its pretty important to understand how systems work in order to better make use of them.
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
            <p className="text-muted text-sm mb-1">{algorithm.description}</p>
            <time className="text-xs text-muted">{algorithm.date}</time>
          </article>
        ))}
      </section>
    </div>
  );
}
