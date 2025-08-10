"use client";

import { useState } from "react";
import { WHATSAPP } from "@/lib/constants";

export default function BookingPage() {
  const [service, setService] = useState("");

  const services = [
    "Normal Color (Full Set) - Rs.900.00",
    "Gel Full Set - Rs.4100.00",
    "Gel-X Full Set - Rs.3000.00",
    "Gel Color - Rs.1000.00",
    "Soak-Off - Rs.1200.00",
    "Refill - Rs.2000.00",
    "Pedicure - Rs.1800.00",
    "Pedicure with Gel Color - Rs.2800.00",
    "Pedicure with French Art - Rs.3250.00",
    "Manicure - Rs.1650.00",
    "Manicure with Gel Color - Rs.2650.00",
    "Manicure with French Art - Rs.3100.00",
  ];

  const handleWhatsApp = () => {
    window.open(
      WHATSAPP.buildServiceMessageLink(service || undefined),
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-brand-light">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Book Your <span className="text-brand-pink">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For now, bookings are handled via WhatsApp. Select a service
              (optional) and message us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service (optional)
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                >
                  <option value="">Choose a service</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-brand-pink text-white py-4 rounded-full text-lg font-semibold hover:bg-brand-pink-dark transition-colors"
              >
                Continue on WhatsApp
              </button>

              <p className="text-center text-sm text-gray-500">
                You will be redirected to our WhatsApp Business chat with a
                pre-filled message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
