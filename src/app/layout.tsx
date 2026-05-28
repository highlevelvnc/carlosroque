import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosroquepinturas.pt"),
  title: {
    default: `${COMPANY.name} — Pintores em Alcochete, Montijo e Setúbal`,
    template: `%s · ${COMPANY.name}`,
  },
  description:
    "Carlos Roque Pinturas — pintura interior e exterior em Alcochete, Montijo, Setúbal e Lisboa. Orçamento em 48h, garantia escrita. Mais de 15 anos a pintar casas com acabamento profissional.",
  keywords: [
    "pintor Alcochete", "pintor Montijo", "pinturas Setúbal",
    "pintura interior", "pintura exterior", "pintor moradias",
    "lacagem portas", "Carlos Roque",
  ],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Acabamentos que duram`,
    description: COMPANY.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
