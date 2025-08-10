"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="py-2 text-white" style={{ backgroundColor: "#D56497" }}>
        <div className="container-padding">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <a
                  href={CONTACT_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {CONTACT_INFO.address.full}
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Book your appointment today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container-padding">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-extrabold">
                <span
                  className="text-3xl"
                  style={{
                    color: "#D56497",
                    fontFamily: "var(--font-dancing-script)",
                  }}
                >
                  Pretty tips
                </span>
                <span className="ml-2 text-lg text-gray-600">by Sandali</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    item.isButton
                      ? "bg-brand-pink hover:bg-brand-pink-dark text-white px-6 py-2 rounded-full transition-colors"
                      : "text-gray-700 hover:text-brand-pink transition-colors font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-pink hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    item.isButton
                      ? "block bg-brand-pink text-white px-3 py-2 rounded-md text-center font-medium"
                      : "block px-3 py-2 rounded-md text-gray-700 hover:text-brand-pink hover:bg-gray-50 font-medium"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
