// app/booking/BookingForm.tsx

"use client";

import { useState } from "react";
import { WHATSAPP } from "@/lib/constants";

export default function BookingForm({
  services,
}: {
  services: readonly string[]; // <-- change here
}) {
  const [service, setService] = useState("");

  const handleWhatsApp = () => {
    window.open(
      WHATSAPP.buildServiceMessageLink(service || undefined),
      "_blank"
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Service (optional)
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent text-black"
          aria-label="Select service"
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
        You will be redirected to our WhatsApp Business chat with a pre-filled
        message.
      </p>
    </div>
  );
}
