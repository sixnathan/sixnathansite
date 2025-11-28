import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name",
  description: "Personal website and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <div className="max-w-2xl mx-auto px-6 py-12">
          <header className="mb-16">
            <Navigation />
          </header>
          <main>{children}</main>
          <footer className="mt-16 pt-8 border-t border-zinc-800 text-sm text-muted">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
