import { puzzles } from "@/data/puzzles";

export default function Puzzles() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-xl font-bold mb-6">games & puzzles</h1>
        {puzzles.length > 0 ? (
          <ul className="space-y-2">
            {puzzles.map((item, index) => (
              <li
                key={index}
                className="text-[12px] text-muted flex items-baseline gap-2"
              >
                <span className="text-foreground">—</span>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted text-sm">nothing here yet</p>
        )}
      </section>
    </div>
  );
}
