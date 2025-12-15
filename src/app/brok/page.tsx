interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "email",
    href: "mailto:dev@sixnathan.com",
  },
  {
    label: "github",
    href: "https://github.com/sixnathan",
  },
  {
    label: "twitter",
    href: "https://twitter.com/sixnathen",
  },
];

export default function Contact() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">contact</h1>
        <p className="text-muted">
          talk to me.
        </p>
      </section>

      <section className="space-y-4">
        <ul className="space-y-3">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
