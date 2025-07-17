"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-padding relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-serif text-5xl font-bold text-gray-800 md:text-7xl lg:text-8xl">
            Pretty Tips
            <span
              className="mt-2 block text-3xl md:text-4xl lg:text-5xl"
              style={{ color: "#D56497" }}
            >
              by Sandali
            </span>
          </h1>

          <p className="mb-8 text-xl text-gray-600 md:text-2xl lg:text-3xl">
            Professional nail spa services with a touch of elegance.
            <br />
            Where beauty meets perfection.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-block text-white px-8 py-4 text-lg rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 bg-brand-pink hover:bg-brand-pink-dark"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 px-8 py-4 text-lg rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
            >
              View Services
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F3D4E5" }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "#D56497" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Professional Service
              </h3>
              <p className="text-sm text-gray-600">
                Expert nail technician with years of experience
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F3D4E5" }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "#D56497" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Premium Products
              </h3>
              <p className="text-sm text-gray-600">
                High-quality brands and sanitized tools
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F3D4E5" }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: "#D56497" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Relaxing Environment
              </h3>
              <p className="text-sm text-gray-600">
                Clean, comfortable, and welcoming space
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div
          className="flex h-10 w-6 justify-center rounded-full border-2"
          style={{ borderColor: "#D56497" }}
        >
          <div
            className="mt-2 h-3 w-1 rounded-full animate-bounce"
            style={{ backgroundColor: "#D56497" }}
          />
        </div>
      </div>
    </section>
  );
}
