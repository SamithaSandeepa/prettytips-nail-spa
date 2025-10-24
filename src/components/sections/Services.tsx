import Link from "next/link";
import { WHATSAPP } from "@/lib/constants";

export default function Services() {
  const services = [
    {
      title: "Normal Color (Full Set)",
      description: "Complete nail set with normal color polish.",
      price: "Rs.900.00",
      duration: "90 min",
      image: "💅",
    },
    {
      title: "Gel Full Set",
      description: "Professional gel full set with long-lasting shine.",
      price: "Rs.4100.00",
      duration: "120 min",
      image: "✨",
    },
    {
      title: "Gel-X Full Set",
      description: "Modern Gel-X extension system for natural look.",
      price: "Rs.3000.00",
      duration: "120 min",
      image: "💎",
    },
    {
      title: "Pedicure",
      description: "Relaxing foot treatment and care.",
      price: "Rs.1800.00",
      duration: "60 min",
      image: "🦶",
    },
    {
      title: "Manicure",
      description: "Professional hand care and nail shaping.",
      price: "Rs.1650.00",
      duration: "45 min",
      image: "🌸",
    },
    {
      title: "3D Nail Art (Add-on)",
      description: "Intricate 3D designs for unique nails.",
      price: "Rs.650.00",
      duration: "30 min",
      image: "🎨",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span style={{ color: "#D56497" }}>Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of professional nail care services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">{service.image}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                {/* <span className="text-brand-pink font-bold text-lg">
                  {service.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {service.duration}
                </span> */}
              </div>
              <a
                href={WHATSAPP.buildServiceMessageLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-pink hover:bg-brand-pink-dark text-white text-center py-3 rounded-full transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white px-8 py-3 rounded-full transition-colors text-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
