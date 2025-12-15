import Mindmap from "@/components/Mindmap";
import { clusters, papers } from "@/data/interests";

export default function Interests() {
  const sortedPapers = [...papers].sort(
    (a, b) => new Date(b.added).getTime() - new Date(a.added).getTime()
  );

  return (
    <div className="space-y-8">
      <section>
        <Mindmap clusters={clusters} />
      </section>

      {sortedPapers.length > 0 && (
        <section className="pt-8 border-t border-muted">
          <h2 className="text-xs font-bold mb-4">papers</h2>
          <ul className="space-y-2">
            {sortedPapers.map((paper, index) => (
              <li
                key={index}
                className={
                  paper.favorite
                    ? "text-[12px] text-foreground font-semibold flex justify-between items-baseline gap-4"
                    : "text-[11px] text-muted flex justify-between items-baseline gap-4"
                }
              >
                <span>
                  <span className={paper.favorite ? "mr-2" : "text-foreground mr-2"}>—</span>
                  {paper.title}
                </span>
                <span className="text-[10px] text-accent shrink-0 font-normal">
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
