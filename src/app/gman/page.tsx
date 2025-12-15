import Mindmap from "@/components/Mindmap";
import { clusters, papers } from "@/data/interests";

export default function Interests() {
  const sortedPapers = [...papers].sort(
    (a, b) => new Date(b.added).getTime() - new Date(a.added).getTime()
  );

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-sm text-muted mb-10">what i'm interested in</h1>
        <Mindmap clusters={clusters} />
      </section>

      {sortedPapers.length > 0 && (
        <section className="pt-8 border-t border-muted">
          <h2 className="text-xs font-bold mb-4">papers</h2>
          <ul className="space-y-2">
            {sortedPapers.map((paper, index) => (
              <li key={index} className="text-[11px] text-muted flex justify-between items-baseline gap-4">
                <span>
                  <span className="text-foreground mr-2">—</span>
                  {paper.title}
                </span>
                <span className="text-[10px] text-accent shrink-0">
                  {paper.read ? "read" : "will read"}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
