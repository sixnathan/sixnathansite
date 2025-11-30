import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "sixnathan",
  description: "i am going to touch you",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/latex.css@1.11.0/style.min.css"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <div className="max-w-2xl mx-auto px-6 py-12 flex-1 w-full">
          <header className="mb-16">
            <Navigation />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
