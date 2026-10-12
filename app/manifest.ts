import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { asset } from "@/lib/base-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.authorName,
    description: siteConfig.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: asset("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: asset("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "developer"],
    lang: "en",
    dir: "ltr",
    scope: asset("/"),
  };
}
