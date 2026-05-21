import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return siteConfig.nav.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
