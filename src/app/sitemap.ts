// app/sitemap.ts
import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES } from "@/lib/blog-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prettytips.lk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.filter(
    (c) => c.id !== "all"
  ).map((c) => ({
    url: `${BASE_URL}/blog/category/${c.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => {
    const d = new Date(p.date); // prefer ISO in your data
    const lastMod = isNaN(d.getTime()) ? now : d;
    return {
      url: `${BASE_URL}/blog/${p.id}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.9,
    };
  });

  return [...staticPages, ...categoryPages, ...postPages];
}
