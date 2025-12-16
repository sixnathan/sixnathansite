"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "home" },
  { href: "/prky", label: "projects" },
  { href: "/savL", label: "gallery" },
  { href: "/raja", label: "thoughts" },
  { href: "/brok", label: "contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors hover:text-accent ${
            pathname === item.href
              ? "text-foreground"
              : "text-muted"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
