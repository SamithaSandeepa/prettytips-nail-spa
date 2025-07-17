"use client";

import { useState } from "react";
import Link from "next/link";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "gel", name: "Gel Manicures" },
    { id: "art", name: "Nail Art" },
    { id: "extensions", name: "Extensions" },
    { id: "pedicures", name: "Pedicures" },
  ];

  const galleryItems = [
    { id: 1, category: "gel", title: "Elegant Gel Manicure", emoji: "✨" },
    { id: 2, category: "art", title: "Floral Nail Art", emoji: "🌸" },
    {
      id: 3,
      category: "extensions",
      title: "Glamorous Extensions",
      emoji: "💎",
    },
    { id: 4, category: "gel", title: "Pink Ombre", emoji: "🩷" },
    { id: 5, category: "art", title: "Geometric Design", emoji: "🔷" },
    { id: 6, category: "pedicures", title: "Luxury Pedicure", emoji: "🦶" },
    { id: 7, category: "gel", title: "French Tips", emoji: "🤍" },
    { id: 8, category: "art", title: "Marble Effect", emoji: "🎨" },
    { id: 9, category: "extensions", title: "Stiletto Nails", emoji: "⚡" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-pink-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of beautiful nail designs and see the artistry
            that goes into every manicure and pedicure.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-pink-600 text-white"
                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square flex items-center justify-center p-8">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Love what you see? Book your appointment and let&apos;s create
            something beautiful together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-block bg-transparent border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
            >
              View Full Gallery
            </Link>
            <Link
              href="/booking"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
