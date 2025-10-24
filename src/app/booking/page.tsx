// app/booking/page.tsx
import type { Metadata } from "next";
import BookingForm from "@/components/booking/BookingForm";
import { SERVICE_NAMES } from "@/lib/services"; // 👈 move the array here

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prettytips.lk";
const PAGE_URL = `${BASE_URL}/booking`;

export const metadata: Metadata = {
  title: "Book an Appointment | Pretty Tips",
  description:
    "Book your nail appointment at Pretty Tips via WhatsApp. Choose a service and message us to confirm your time.",
  alternates: { canonical: "/booking" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Book an Appointment | Pretty Tips",
    description: "Book your nail appointment at Pretty Tips via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment | Pretty Tips",
    description: "Book your nail appointment at Pretty Tips via WhatsApp.",
  },
};

export default function BookingPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Booking - Pretty Tips",
    url: PAGE_URL,
    hasPart: SERVICE_NAMES.map((name) => ({
      "@type": "Service",
      name,
      provider: { "@type": "NailSalon", name: "Pretty Tips" },
    })),
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-brand-light">
        <div className="container-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Book Your <span className="text-brand-pink">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For now, bookings are handled via WhatsApp. Select a service
            (optional) and message us.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <BookingForm services={SERVICE_NAMES} />
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </div>
  );
}
