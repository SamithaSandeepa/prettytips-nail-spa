import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/blog-data";

type RouteParams = { slug: string };

// --- SSG params ---
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.id }));
}

// --- Metadata (await params) ---
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) return { title: "Post not found | Pretty Tips" };

  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prettytips.lk";
  return {
    title: `${post.title} | Pretty Tips`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.id}`,
      type: "article",
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// --- Page component (await params) ---
export default async function PostPage(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) return notFound();

  return (
    <article className="prose lg:prose-lg max-w-3xl mx-auto py-16">
      <h1>{post.title}</h1>
      <p className="text-gray-500">
        {post.date} · {post.readTime} · By {post.author}
      </p>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            description: post.excerpt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://prettytips.lk/blog/${post.id}`,
            },
          }),
        }}
      />
    </article>
  );
}
