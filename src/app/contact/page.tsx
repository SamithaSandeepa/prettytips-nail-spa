// app/contact/page.tsx
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT_INFO, WHATSAPP } from "@/lib/constants";
import { PiTiktokLogoBold } from "react-icons/pi";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prettytips.lk";
const PAGE_URL = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Pretty Tips | WhatsApp, Email & Location",
  description:
    "Reach Pretty Tips by WhatsApp or email, and find our salon location in Wennappuwa, Sri Lanka.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Contact Pretty Tips",
    description:
      "WhatsApp, email, and salon location for Pretty Tips in Wennappuwa, Sri Lanka.",
    images: [
      {
        url: "https://prittytips.s3.ap-southeast-1.amazonaws.com/Logo/White+Pink+Simple+Nail+Art+Studio+Logo.png",
        width: 1200,
        height: 630,
        alt: "Pretty Tips Nail Art Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pretty Tips",
    description:
      "WhatsApp, email, and salon location for Pretty Tips in Wennappuwa, Sri Lanka.",
    images: [
      "https://prittytips.s3.ap-southeast-1.amazonaws.com/Logo/White+Pink+Simple+Nail+Art+Studio+Logo.png",
    ],
  },
};

export default function ContactPage() {
  const { phone, email, address, social } = CONTACT_INFO;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon", // or "BeautySalon"
    name: "Pretty Tips",
    url: PAGE_URL,
    telephone: phone ? `+94${phone.replace(/\D/g, "").slice(-9)}` : undefined,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street || "Kadawatha Road",
      addressLocality: "Wennappuwa",
      addressRegion: address.state || "North Western Province",
      postalCode: address.zip || "",
      addressCountry: "LK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: address.lat,
      longitude: address.lng,
    },
    sameAs: [
      `https://instagram.com/${social.instagram}`,
      `https://facebook.com/${social.facebook}`,
      social.tiktokUrl,
    ],
    // Add openingHoursSpecification when you have it.
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br bg-gradient-brand-light">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Contact <span className="text-brand-pink">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach us via WhatsApp or email. We usually respond quickly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP.buildMessageLink(
                  "Hello, I'd like to book an appointment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-pink text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-pink-dark transition-colors"
                aria-label="Message Pretty Tips on WhatsApp"
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-block border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-semibold hover:bg-brand-pink hover:text-white transition-colors"
                aria-label="Email Pretty Tips"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            itemScope
            itemType="https://schema.org/Organization"
          >
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div
                  className="bg-brand-pink-light p-3 rounded-full"
                  aria-hidden
                >
                  <Phone className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800 mb-1">
                    Phone / WhatsApp
                  </h2>
                  <p className="text-gray-700">
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:underline"
                      itemProp="telephone"
                    >
                      {phone}
                    </a>
                  </p>
                  <a
                    href={WHATSAPP.buildMessageLink(
                      "Hello, I'd like to book an appointment."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-pink font-medium hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div
                  className="bg-brand-pink-light p-3 rounded-full"
                  aria-hidden
                >
                  <Mail className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800 mb-1">Email</h2>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-700 hover:underline"
                    itemProp="email"
                  >
                    {email}
                  </a>
                  <p className="text-sm text-gray-500">For general inquiries</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div
                  className="bg-brand-pink-light p-3 rounded-full"
                  aria-hidden
                >
                  <MapPin className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800 mb-1">Location</h2>
                  <address
                    className="not-italic text-gray-700"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">{address.full}</span>
                  </address>
                  <p className="text-sm text-gray-500">
                    Contact us for directions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-12 bg-gradient-brand-light rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Follow Us
            </h2>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`https://instagram.com/${social.instagram}`}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
                aria-label="Pretty Tips on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden />
                <span>@{social.instagram}</span>
              </a>
              <a
                href={`https://facebook.com/${social.facebook}`}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
                aria-label="Pretty Tips on Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden />
                <span>{social.facebook}</span>
              </a>
              <a
                href={social.tiktokUrl}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
                aria-label="Pretty Tips on TikTok"
              >
                <PiTiktokLogoBold className="h-6 w-6" aria-hidden />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-padding">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">{address.full}</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a
                href={`https://maps.apple.com/?q=${encodeURIComponent(
                  address.full
                )}&ll=${address.lat},${address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-brand-pink hover:underline"
              >
                Open in Apple Maps
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  address.full
                )}&query_place_id=`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-brand-pink hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <iframe
              title="Pretty Tips Location Map"
              src={`https://www.google.com/maps?q=${address.lat},${address.lng}&z=15&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
    </div>
  );
}
