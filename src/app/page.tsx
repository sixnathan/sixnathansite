export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Your Name</h1>
        <p className="text-muted text-lg">
          A brief tagline or description about yourself.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-muted leading-relaxed">
          Write a paragraph or two about yourself here. What do you do? What are
          you interested in? What drives you? This is your chance to introduce
          yourself to visitors.
        </p>
        <p className="text-muted leading-relaxed">
          You can add more paragraphs, include links to your work, or mention
          what you&apos;re currently focused on.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Currently</h2>
        <ul className="text-muted space-y-2">
          <li>• Working on something interesting</li>
          <li>• Learning something new</li>
          <li>• Building something cool</li>
        </ul>
      </section>
    </div>
  );
}
