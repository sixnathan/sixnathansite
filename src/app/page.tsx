import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">sixnathan</h1>
        <p className="text-muted text-lg">
          <Link href="/gman" className="hover:text-accent transition-colors">
            why not you
          </Link>
        </p>
      </section>
    </div>
  );
}
