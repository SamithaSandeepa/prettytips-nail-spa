"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      review:
        "Sandali is absolutely amazing! Her attention to detail is incredible, and my nails always look perfect. The spa is so clean and relaxing.",
      rating: 5,
      service: "Gel Manicure",
    },
    {
      name: "Emily Chen",
      review:
        "I've been coming here for over a year and I'm never disappointed. The nail art designs are stunning and last for weeks!",
      rating: 5,
      service: "Nail Art",
    },
    {
      name: "Maria Rodriguez",
      review:
        "Best pedicure I've ever had! Sandali is so professional and the atmosphere is perfect for relaxation. Highly recommend!",
      rating: 5,
      service: "Spa Pedicure",
    },
    {
      name: "Jessica Park",
      review:
        "The gel extensions look so natural and beautiful. Sandali really knows her craft. I get compliments on my nails everywhere I go!",
      rating: 5,
      service: "Gel Extensions",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-pink-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            clients about their experience at Pretty Tips.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
              &quot;{testimonials[currentTestimonial].review}&quot;
            </blockquote>

            <div className="border-t pt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-pink-600 font-medium">
                {testimonials[currentTestimonial].service}
              </p>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-pink-600" : "bg-pink-200"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Return Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
