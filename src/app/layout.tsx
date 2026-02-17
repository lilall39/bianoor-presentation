import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIONOOR - Bio Halal Premium",
  description: "Acteur historique du bio halal en France, BIONOOR a construit une communauté fidèle et des filières solides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
