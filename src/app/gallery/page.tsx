"use client";

import { useState } from "react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work", count: 24 },
    { id: "gel", name: "Gel Manicures", count: 8 },
    { id: "art", name: "Nail Art", count: 6 },
    { id: "extensions", name: "Extensions", count: 5 },
    { id: "pedicures", name: "Pedicures", count: 3 },
    { id: "french", name: "French Tips", count: 2 },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "gel",
      title: "Elegant Rose Gold Gel",
      description:
        "Shimmering rose gold gel manicure with subtle glitter accent",
      emoji: "✨",
    },
    {
      id: 2,
      category: "art",
      title: "Tropical Floral Design",
      description: "Hand-painted tropical flowers with palm leaves",
      emoji: "🌺",
    },
    {
      id: 3,
      category: "extensions",
      title: "Stiletto Extensions",
      description: "Long stiletto extensions with ombre pink to white",
      emoji: "💎",
    },
    {
      id: 4,
      category: "gel",
      title: "Classic Pink Ombre",
      description: "Soft pink to white ombre gradient",
      emoji: "🩷",
    },
    {
      id: 5,
      category: "art",
      title: "Geometric Patterns",
      description: "Modern geometric design in black and gold",
      emoji: "🔷",
    },
    {
      id: 6,
      category: "pedicures",
      title: "Luxury Spa Pedicure",
      description: "Classic red pedicure with perfect finish",
      emoji: "🦶",
    },
    {
      id: 7,
      category: "french",
      title: "Modern French Tips",
      description: "Contemporary twist on classic French manicure",
      emoji: "🤍",
    },
    {
      id: 8,
      category: "art",
      title: "Marble Effect Nails",
      description: "Sophisticated marble pattern in gray and white",
      emoji: "🎨",
    },
    {
      id: 9,
      category: "extensions",
      title: "Coffin Shape Extensions",
      description: "Trendy coffin shape with matte finish",
      emoji: "⚡",
    },
    {
      id: 10,
      category: "gel",
      title: "Sunset Gradient",
      description: "Beautiful sunset colors blended perfectly",
      emoji: "🌅",
    },
    {
      id: 11,
      category: "art",
      title: "Butterfly Design",
      description: "Delicate butterfly nail art with crystals",
      emoji: "🦋",
    },
    {
      id: 12,
      category: "extensions",
      title: "Almond Shape Nude",
      description: "Natural almond shape with nude gel polish",
      emoji: "🌰",
    },
    {
      id: 13,
      category: "gel",
      title: "Glitter Accent Nails",
      description: "Classic gel with stunning glitter accent",
      emoji: "✨",
    },
    {
      id: 14,
      category: "art",
      title: "Abstract Art Design",
      description: "Unique abstract pattern in multiple colors",
      emoji: "🎭",
    },
    {
      id: 15,
      category: "pedicures",
      title: "French Pedicure",
      description: "Classic French tips for toes",
      emoji: "👣",
    },
    {
      id: 16,
      category: "gel",
      title: "Deep Purple Gel",
      description: "Rich purple gel with glossy finish",
      emoji: "💜",
    },
    {
      id: 17,
      category: "art",
      title: "Seasonal Holiday Design",
      description: "Festive holiday-themed nail art",
      emoji: "🎄",
    },
    {
      id: 18,
      category: "extensions",
      title: "Square Tip Extensions",
      description: "Clean square tips with gel overlay",
      emoji: "⬜",
    },
    {
      id: 19,
      category: "french",
      title: "Colored French Tips",
      description: "French tips with colored tips instead of white",
      emoji: "🌈",
    },
    {
      id: 20,
      category: "gel",
      title: "Chrome Finish Gel",
      description: "Mirror chrome finish gel manicure",
      emoji: "🪞",
    },
    {
      id: 21,
      category: "art",
      title: "Minimalist Line Art",
      description: "Simple but elegant line art design",
      emoji: "📏",
    },
    {
      id: 22,
      category: "pedicures",
      title: "Ombre Pedicure",
      description: "Gradient ombre effect on toenails",
      emoji: "🌊",
    },
    {
      id: 23,
      category: "extensions",
      title: "Natural Length Extensions",
      description: "Subtle length enhancement with natural look",
      emoji: "🌿",
    },
    {
      id: 24,
      category: "gel",
      title: "Matte Black Gel",
      description: "Bold matte black finish with accent nail",
      emoji: "🖤",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-pink-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of beautiful nail designs and see the
              artistry that goes into every manicure and pedicure at Pretty
              Tips.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square flex items-center justify-center p-8">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Work in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Every nail tells a story of artistry and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
              <div className="text-gray-600">Nail Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">Love What You See?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and let&apos;s create something
            beautiful together. Bring your inspiration or let us design
            something unique just for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="inline-block bg-white text-pink-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Your Appointment
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-pink-600 transition-colors"
            >
              Ask About Custom Designs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
