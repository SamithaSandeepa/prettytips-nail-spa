import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-brand text-white">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Pamper Yourself?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Book your appointment today and experience the difference of
            professional nail care in a relaxing, luxurious environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/booking"
              className="inline-block bg-white text-brand-pink px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-brand-pink transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">123 Beauty Lane, City, State</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="opacity-90">Mon-Sat: 9AM-7PM</p>
            </div>
          </div>

          {/* Special Offer */}
          <div className="mt-16 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              ✨ New Client Special ✨
            </h3>
            <p className="text-lg mb-4">
              Get 20% off your first service when you book online!
            </p>
            <p className="text-sm opacity-80">
              *Valid for new clients only. Cannot be combined with other offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
