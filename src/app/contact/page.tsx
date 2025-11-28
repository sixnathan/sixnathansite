interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:dev@sixnathan.com",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sixnathen/",
  },
];

export default function Contact() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted">
          talk to me.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="text-muted leading-relaxed">
          email me NOW.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Links</h2>
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
