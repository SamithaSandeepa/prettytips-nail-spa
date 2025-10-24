"use client";

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT_INFO, WHATSAPP } from "@/lib/constants";
import { PiTiktokLogoBold } from "react-icons/pi";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-block border-2 border-brand-pink text-brand-pink px-8 py-4 rounded-full font-semibold hover:bg-brand-pink hover:text-white transition-colors"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-pink-light p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Phone / WhatsApp
                  </h4>
                  <p className="text-gray-700">{CONTACT_INFO.phone}</p>
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

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-pink-light p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-700 hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-sm text-gray-500">For general inquiries</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-pink-light p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                  <p className="text-gray-700">{CONTACT_INFO.address.full}</p>
                  <p className="text-sm text-gray-500">
                    Contact us for directions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-12 bg-gradient-brand-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Follow Us
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`https://instagram.com/${CONTACT_INFO.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
              >
                <Instagram className="h-6 w-6" />
                <span>@{CONTACT_INFO.social.instagram}</span>
              </a>
              <a
                href={`https://facebook.com/${CONTACT_INFO.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
              >
                <Facebook className="h-6 w-6" />
                <span>{CONTACT_INFO.social.facebook}</span>
              </a>
              <a
                href={CONTACT_INFO.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink hover:underline"
              >
                <PiTiktokLogoBold className="h-6 w-6" />
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
            <p className="text-xl text-gray-600">{CONTACT_INFO.address.full}</p>
            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent(
                CONTACT_INFO.address.full
              )}&ll=${CONTACT_INFO.address.lat},${CONTACT_INFO.address.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-brand-pink hover:underline"
            >
              Open in Apple Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <iframe
              title="Pretty Tips Location"
              src={`https://www.google.com/maps?q=${CONTACT_INFO.address.lat},${CONTACT_INFO.address.lng}&z=15&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
