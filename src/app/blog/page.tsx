import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { CATEGORIES, POSTS } from "@/lib/blog-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nail Blog | Pretty Tips",
  description: "Trends, tutorials, and nail-care tips from Pretty Tips.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Nail Blog | Pretty Tips",
    description: "Trends, tutorials, and nail-care tips from Pretty Tips.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Blog | Pretty Tips",
    description: "Trends, tutorials, and nail-care tips from Pretty Tips.",
  },
};

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured);
  const regular = POSTS.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-brand-light">
        <div className="container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nail <span className="text-brand-pink">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tips, trends, tutorials, and behind-the-scenes stories from Pretty
            Tips.
          </p>
        </div>
      </section>

      {/* Category Links (crawlable) */}
      <section className="py-12 bg-gray-50 border-y">
        <nav
          className="container-padding flex flex-wrap justify-center gap-4"
          aria-label="Blog categories"
        >
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={c.id === "all" ? "/blog" : `/blog/category/${c.id}`}
              className="px-6 py-3 rounded-full bg-white text-brand-pink hover:bg-brand-pink-light border border-brand-pink transition-all"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-20 bg-white">
          <div className="container-padding">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Featured Post
            </h2>
            <div className="max-w-4xl mx-auto">
              <Link
                href={`/blog/${featured.id}`}
                className="block bg-gradient-brand-light rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="p-8 md:p-12 text-center">
                  <div className="text-8xl mb-4">
                    {featured.imageEmoji ?? "✨"}
                  </div>
                  <span className="bg-brand-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-6">
                    {featured.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featured.author}
                    </span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
              >
                <article className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">
                      {post.imageEmoji ?? "💅"}
                    </div>
                    <span className="bg-brand-pink-light text-brand-pink px-3 py-1 rounded-full text-xs font-semibold">
                      {CATEGORIES.find((c) => c.id === post.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD (Blog) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Pretty Tips Blog",
            url: "https://your-domain.com/blog",
            blogPost: POSTS.slice(0, 10).map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              datePublished: p.date,
              author: { "@type": "Person", name: p.author },
              url: `https://your-domain.com/blog/${p.id}`,
              description: p.excerpt,
            })),
          }),
        }}
      />
    </div>
  );
}
