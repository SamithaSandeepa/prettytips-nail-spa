// src/app/blog/category/[category]/page.tsx
import Link from "next/link";
import { Calendar } from "lucide-react";
import { CATEGORIES, POSTS } from "@/lib/blog-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type RouteParams = { category: string };

export function generateStaticParams() {
  return CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
    category: c.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.id === category);
  const name = cat ? cat.name : "Blog";
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prettytips.lk";

  return {
    title: `${name} | Pretty Tips`,
    description: `Articles in ${name} from Pretty Tips.`,
    alternates: { canonical: `/blog/category/${category}` },
    openGraph: {
      title: `${name} | Pretty Tips`,
      url: `${BASE_URL}/blog/category/${category}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { category } = await params;

  const cat = CATEGORIES.find((c) => c.id === category);
  if (!cat) return notFound();

  const posts = POSTS.filter((p) => p.category === category);

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-50 border-b">
        <div className="container-padding text-center">
          <h1 className="text-4xl font-bold text-gray-800">{cat.name}</h1>
          <p className="text-gray-600 mt-2">Browse posts in {cat.name}.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
            >
              <article className="p-6">
                <div className="text-center text-6xl mb-3">
                  {post.imageEmoji ?? "💅"}
                </div>
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500 inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </article>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No posts found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
