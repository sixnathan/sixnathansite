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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="max-w-2xl mx-auto px-6 py-12 flex-1 w-full">
          <header className="mb-16">
            <Navigation />
          </header>
          <main>{children}</main>
        </div>
        <footer className="w-full border-t border-zinc-500">
          <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-muted">
            <p>sixnathan</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
