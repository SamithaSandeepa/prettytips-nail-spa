import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const featuredPosts = [
    {
      id: "spring-2025-nail-trends",
      title: "Spring 2025 Nail Color Trends You Need to Try",
      excerpt:
        "Discover the hottest nail colors and designs that are taking over this spring season.",
      date: "March 15, 2025",
      image: "🌸",
      category: "Trends",
    },
    {
      id: "manicure-last-longer",
      title: "7 Pro Tips to Make Your Manicure Last 2+ Weeks",
      excerpt:
        "Learn the secrets that nail technicians use to extend the life of your manicure.",
      date: "March 10, 2025",
      image: "💅",
      category: "Care Tips",
    },
    {
      id: "nail-art-basics",
      title: "Nail Art for Beginners: Simple Designs You Can Do at Home",
      excerpt:
        "Start your nail art journey with these easy-to-follow designs and techniques.",
      date: "March 5, 2025",
      image: "🎨",
      category: "Tutorials",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Latest from Our <span className="text-pink-600">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest nail trends, care tips, and tutorials
            from our professional nail technician.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-3">{post.image}</div>
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 flex-grow">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-pink-600 font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors text-lg font-semibold"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
