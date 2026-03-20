import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plastic-Free Pregnancy | The Guide",
  description: "50+ researched plastic-free product picks from pregnancy through baby's first year. One best-in-class pick per category with curated alternatives.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
