interface SocialLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:your@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourusername",
  },
];

export default function Contact() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted">
          Feel free to reach out. I&apos;m always happy to connect.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="text-muted leading-relaxed">
          The best way to reach me is via email. I try to respond within a few
          days.
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
