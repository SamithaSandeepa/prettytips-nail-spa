import Link from "next/link";
import { CONTACT_INFO, WHATSAPP } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-brand text-white">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Pamper Yourself?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Book your appointment today and experience the difference of professional nail care in a relaxing, luxurious environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={WHATSAPP.buildMessageLink("Hello, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-pink px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Book on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-brand-pink transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">{CONTACT_INFO.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <p className="opacity-90">Instagram: {CONTACT_INFO.social.instagram}</p>
              <p className="opacity-90">Facebook: {CONTACT_INFO.social.facebook}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <a href={CONTACT_INFO.address.mapUrl} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:underline">
                {CONTACT_INFO.address.full}
              </a>
            </div>
          </div>

          {/* Info banner */}
          <div className="mt-16 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">✨ Message us to book ✨</h3>
            <p className="text-lg mb-4">Call {CONTACT_INFO.phone} or contact us on WhatsApp to book your appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
