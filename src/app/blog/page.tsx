"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "trends", name: "Trends" },
    { id: "tutorials", name: "Tutorials" },
    { id: "care", name: "Nail Care" },
    { id: "business", name: "Behind the Scenes" },
  ];

  const blogPosts = [
    {
      id: "spring-2025-nail-trends",
      title: "Spring 2025 Nail Color Trends You Need to Try",
      excerpt:
        "Discover the hottest nail colors and designs that are taking over this spring season.",
      category: "trends",
      date: "March 15, 2025",
      author: "Sandali",
      readTime: "5 min read",
      image: "🌸",
      featured: true,
    },
    {
      id: "manicure-last-longer",
      title: "7 Pro Tips to Make Your Manicure Last 2+ Weeks",
      excerpt:
        "Learn the secrets that nail technicians use to extend the life of your manicure.",
      category: "care",
      date: "March 10, 2025",
      author: "Sandali",
      readTime: "8 min read",
      image: "💅",
      featured: false,
    },
    {
      id: "nail-art-basics",
      title: "Nail Art for Beginners: Simple Designs You Can Do at Home",
      excerpt:
        "Start your nail art journey with these easy-to-follow designs and techniques.",
      category: "tutorials",
      date: "March 5, 2025",
      author: "Sandali",
      readTime: "10 min read",
      image: "🎨",
      featured: false,
    },
    {
      id: "nail-health-guide",
      title: "The Complete Guide to Healthy Nails: What You Need to Know",
      excerpt:
        "Everything about maintaining strong, healthy nails from cuticle care to nutrition.",
      category: "care",
      date: "February 28, 2025",
      author: "Sandali",
      readTime: "12 min read",
      image: "🌿",
      featured: false,
    },
    {
      id: "day-in-life-nail-tech",
      title: "A Day in the Life of a Nail Technician",
      excerpt:
        "Ever wondered what goes on behind the scenes at Pretty Tips? Take a peek!",
      category: "business",
      date: "February 20, 2025",
      author: "Sandali",
      readTime: "6 min read",
      image: "👩‍💼",
      featured: false,
    },
    {
      id: "gel-vs-regular-polish",
      title: "Gel Polish vs Regular Polish: Which is Right for You?",
      excerpt:
        "Compare the pros and cons of gel and regular polish to make the best choice.",
      category: "care",
      date: "February 15, 2025",
      author: "Sandali",
      readTime: "7 min read",
      image: "✨",
      featured: false,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-brand-light">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nail <span className="text-brand-pink">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tips, trends, tutorials, and behind-the-scenes stories from Pretty
              Tips. Your ultimate guide to beautiful, healthy nails.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="container-padding">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Featured Post
            </h2>
            <div className="max-w-4xl mx-auto">
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="bg-gradient-brand-light rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8 md:p-12">
                    <div className="text-center mb-8">
                      <div className="text-8xl mb-4">{featuredPost.image}</div>
                      <span className="bg-brand-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-brand-pink text-white shadow-lg"
                    : "bg-white text-brand-pink hover:bg-brand-pink-light border border-brand-pink"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "all"
              ? regularPosts
              : filteredPosts.filter((post) => !post.featured)
            ).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-3">{post.image}</div>
                      <span className="bg-brand-pink-light text-brand-pink px-3 py-1 rounded-full text-xs font-semibold">
                        {
                          categories.find((cat) => cat.id === post.category)
                            ?.name
                        }
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest nail trends, tips, and
              exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-brand-pink px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
