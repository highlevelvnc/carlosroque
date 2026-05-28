import type { MetadataRoute } from "next";

const SITE_URL = "https://carlosroquepinturas.pt";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Páginas internas de proposta — não indexar
        disallow: ["/escolha", "/v2", "/v3"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
