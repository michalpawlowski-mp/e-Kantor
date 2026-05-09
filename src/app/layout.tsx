import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "e-Kantor",
  description:
    "Aktualne kursy walut NBP i szybki kalkulator walut. Sprawdź kursy USD, EUR, GBP, CHF oraz innych walut.",
  keywords: [
    "e-kantor",
    "kantor online",
    "kursy walut",
    "NBP",
    "USD",
    "EUR",
    "GBP",
    "CHF",
    "PLN",
    "kalkulator walut",
    "przelicznik walut",
  ],
  authors: [
    {
      name: "Michał Pawłowski",
    },
  ],
  creator: "Michał Pawłowski",
  openGraph: {
    title: "e-Kantor - Kursy Walut NBP",
    description: "Sprawdź aktualne kursy walut NBP i przelicz wartości w kilka sekund.",
    siteName: "e-Kantor",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/ekantor64.png",
        width: 64,
        height: 64,
        alt: "Logo e-Kantor",
      },
    ],
  },
  icons: {
    icon: "/ekantor64.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
