import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e-Kantor",
  description:
    "Aktualne kursy walut NBP • Błyskawiczny kalkulator • USD, EUR, GBP, CHF i inne",
  keywords: [
    "kantor",
    "kursy walut",
    "nbp",
    "kalkulator walut",
    "usd",
    "eur",
    "gbp",
    "pln",
  ],
  authors: [{ name: "Michał Pawłowski" }],
  openGraph: {
    title: "e-Kantor - Kursy Walut NBP",
    description: "Sprawdź aktualne kursy walut i przelicz złotówki",
    images: [{ url: "./ekantor64.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
