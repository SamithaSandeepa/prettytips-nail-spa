import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Classic Manicure",
      description:
        "Traditional nail care with cuticle care, shaping, and polish application.",
      price: "From $25",
      duration: "45 min",
      image: "💅",
    },
    {
      title: "Gel Manicure",
      description:
        "Long-lasting gel polish that maintains shine for up to 3 weeks.",
      price: "From $35",
      duration: "60 min",
      image: "✨",
    },
    {
      title: "Pedicure",
      description:
        "Relaxing foot treatment with exfoliation, massage, and polish.",
      price: "From $40",
      duration: "60 min",
      image: "🦶",
    },
    {
      title: "Nail Art",
      description:
        "Custom designs and artistic nail decorations for special occasions.",
      price: "From $15",
      duration: "30 min",
      image: "🎨",
    },
    {
      title: "Gel Extensions",
      description: "Professional nail extensions for length and strength.",
      price: "From $55",
      duration: "90 min",
      image: "💎",
    },
    {
      title: "Spa Package",
      description: "Complete hand and foot treatment with luxury care.",
      price: "From $80",
      duration: "120 min",
      image: "🌸",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-pink-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional nail care services,
            designed to pamper and beautify your hands and feet.
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
                <span className="text-pink-600 font-bold text-lg">
                  {service.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {service.duration}
                </span>
              </div>
              <Link
                href="/booking"
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-transparent border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-600 hover:text-white transition-colors text-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
