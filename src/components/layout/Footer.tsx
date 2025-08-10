import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CONTACT_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://prittytips.s3.ap-southeast-1.amazonaws.com/Logo/White+Pink+Simple+Nail+Art+Studio+Logo.png"
                alt="Pretty Tips by Sandali Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <div className="text-2xl font-bold">
                  <span
                    style={{
                      color: "#D56497",
                      fontFamily: "var(--font-dancing-script)",
                    }}
                  >
                    Pretty Tips
                  </span>
                </div>
                <span className="text-lg text-gray-300">by Sandali</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional nail spa services with a touch of elegance. Where
              beauty meets perfection in a relaxing environment.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${CONTACT_INFO.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={`https://facebook.com/${CONTACT_INFO.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={CONTACT_INFO.social.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors"
              >
                {/* Simple TikTok icon using text since lucide-react doesn't ship TikTok */}
                <span className="text-xl leading-none">🎵</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-pink">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.filter(item => !item.isButton).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#D56497" }}
            >
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5" style={{ color: "#D56497" }} />
                <div className="text-gray-300">
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
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" style={{ color: "#D56497" }} />
                <span className="text-gray-300">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" style={{ color: "#D56497" }} />
                <span className="text-gray-300">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Instagram className="h-5 w-5 mt-0.5" style={{ color: "#D56497" }} />
                <div className="text-gray-300">
                  <p>Instagram: {CONTACT_INFO.social.instagram}</p>
                  <p>Facebook: {CONTACT_INFO.social.facebook}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Pretty Tips by Sandali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
