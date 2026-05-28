import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.name,
    short_name: COMPANY.short,
    description: "Pintura interior e exterior em Alcochete, Margem Sul e Lisboa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0E10",
    theme_color: "#0E0E10",
    lang: "pt-PT",
    icons: [
      { src: "/carlosroque.png", sizes: "320x213", type: "image/png" },
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
