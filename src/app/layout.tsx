import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY, PHONE_DISPLAY, PHONE_RAW, ZONES } from "@/lib/constants";

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

const SITE_URL = "https://carlosroquepinturas.pt";

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — Pintor profissional em Alcochete, Montijo e Setúbal`,
    template: `%s · ${COMPANY.name}`,
  },
  description:
    "Pintura interior e exterior em Alcochete, Montijo, Setúbal e Lisboa. Mais de 15 anos a pintar casas, apartamentos e fachadas. Orçamento em 48h, tintas CIN/Robbialac/Sotinco, sistema airless, garantia escrita até 5 anos.",
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  keywords: [
    "pintor Alcochete",
    "pintor Montijo",
    "pinturas Setúbal",
    "pintor Lisboa",
    "Carlos Roque Pinturas",
    "pintura interior Alcochete",
    "pintura exterior moradias",
    "pintar fachada Setúbal",
    "pintor profissional Margem Sul",
    "pintura com airless",
    "lacagem de portas Lisboa",
    "pintar apartamento Montijo",
    "pintar moradia Palmela",
    "pintura comercial lojas",
    "pintor prédios novos",
    "orçamento pintura grátis Alcochete",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Pinturas que duram`,
    description:
      "Pintura interior e exterior em Alcochete, Margem Sul e Lisboa. 15+ anos, 312 obras, garantia escrita até 5 anos. Orçamento grátis em 48h.",
    images: [
      {
        url: "/portfolio/hero-cozinha.jpeg",
        width: 1200,
        height: 800,
        alt: "Cozinha pintada pela Carlos Roque Pinturas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Pinturas que duram`,
    description: "Pintura interior e exterior em Alcochete, Margem Sul e Lisboa.",
    images: ["/portfolio/hero-cozinha.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/carlosroque.png", type: "image/png" },
    ],
    apple: "/carlosroque.png",
  },
  category: "Construção · Pintura",
  formatDetection: { telephone: true, address: true, email: true },
  verification: {
    // Adicionar quando reclamar o Google Search Console:
    // google: "xxxxxxxxxxxxxxxxxxxxxxxx",
  },
};

// JSON-LD structured data for LocalBusiness (Google rich results)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PaintingService",
  "@id": `${SITE_URL}/#business`,
  name: COMPANY.name,
  alternateName: COMPANY.short,
  description:
    "Empresa de pintura interior e exterior em Alcochete, Margem Sul e Lisboa. Especialista em pintura de moradias, apartamentos, fachadas, lojas e prédios novos com sistema airless.",
  url: SITE_URL,
  logo: `${SITE_URL}/carlosroque.png`,
  image: [
    `${SITE_URL}/portfolio/hero-cozinha.jpeg`,
    `${SITE_URL}/portfolio/sandro-lisboa-1.jpg`,
    `${SITE_URL}/portfolio/predios-completo.jpg`,
  ],
  telephone: PHONE_DISPLAY,
  email: COMPANY.email,
  priceRange: "€€",
  foundingDate: String(COMPANY.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. do MFA",
    postalCode: "2890-100",
    addressLocality: "Alcochete",
    addressRegion: "Setúbal",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7556,
    longitude: -8.9628,
  },
  areaServed: ZONES.map((z) => ({ "@type": "City", name: z })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${PHONE_RAW}`,
    contactType: "customer service",
    areaServed: "PT",
    availableLanguage: ["pt-PT"],
  },
  sameAs: [
    `https://wa.me/${PHONE_RAW}`,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Pintura",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura interior" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura exterior" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparações para pintar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lacagem de portas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cores técnicas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura com sistema airless" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
