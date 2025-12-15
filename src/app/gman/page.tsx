import Mindmap from "@/components/Mindmap";
import { clusters, papers } from "@/data/interests";

export default function Interests() {
  const sortByDate = (a: typeof papers[0], b: typeof papers[0]) =>
    new Date(b.added).getTime() - new Date(a.added).getTime();

  const regularPapers = papers.filter((p) => !p.favorite).sort(sortByDate);
  const favoritePapers = papers.filter((p) => p.favorite).sort(sortByDate);

  return (
    <div className="space-y-8">
      <section>
        <Mindmap clusters={clusters} />
      </section>

      {papers.length > 0 && (
        <section className="pt-8 border-t border-muted">
          <h2 className="text-xs font-bold mb-4">papers</h2>
          <ul className="space-y-2">
            {regularPapers.map((paper, index) => (
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
            {favoritePapers.map((paper, index) => (
              <li key={`fav-${index}`} className="text-[11px] text-foreground font-bold flex justify-between items-baseline gap-4">
                <span>
                  <span className="mr-2">—</span>
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
