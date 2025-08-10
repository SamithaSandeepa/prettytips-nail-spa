import Link from "next/link";
import { WHATSAPP } from "@/lib/constants";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Full Set",
      services: [
        {
          name: "Normal Color",
          description: "Complete nail set with normal color polish.",
          price: "Rs.900.00",
          duration: "90 min",
          includes: ["Nail prep", "Shaping", "Polish application"],
        },
        {
          name: "Gel Full Set",
          description: "Professional gel full set with long-lasting finish.",
          price: "Rs.4100.00",
          duration: "120 min",
          includes: ["Nail prep", "Gel application", "Top coat"],
        },
        {
          name: "Gel-X Full Set",
          description: "Modern Gel-X extension system for natural-looking nails.",
          price: "Rs.3000.00",
          duration: "120 min",
          includes: ["Extension application", "Shaping", "Polish"],
        },
        {
          name: "Gel Color",
          description: "Gel color application.",
          price: "Rs.1000.00",
          duration: "60 min",
          includes: ["Gel polish", "Top coat"],
        },
        {
          name: "Soak-Off",
          description: "Safe removal of gel or extensions.",
          price: "Rs.1200.00",
          duration: "45 min",
          includes: ["Removal", "Nail care"],
        },
        {
          name: "Refill",
          description: "Maintenance and refill for extensions.",
          price: "Rs.2000.00",
          duration: "90 min",
          includes: ["Fill", "Shaping", "Polish"],
        },
      ],
    },
    {
      title: "Add-ons",
      services: [
        {
          name: "Charms",
          description: "Decorative nail charms.",
          price: "Rs.500.00",
          duration: "15 min",
          includes: [],
        },
        {
          name: "Glitter",
          description: "Sparkling glitter finish.",
          price: "Rs.550.00",
          duration: "15 min",
          includes: [],
        },
        {
          name: "Chrome",
          description: "Mirror-like chrome finish.",
          price: "Rs.450.00",
          duration: "20 min",
          includes: [],
        },
        {
          name: "3D Nail Art",
          description: "Intricate 3D designs.",
          price: "Rs.650.00",
          duration: "30 min",
          includes: [],
        },
      ],
    },
    {
      title: "Pedi & Mani",
      services: [
        {
          name: "Pedicure",
          description: "Complete foot care.",
          price: "Rs.1800.00",
          duration: "60 min",
          includes: [
            "Soak",
            "Cuticle care",
            "Massage",
            "Polish",
          ],
        },
        {
          name: "Pedicure with Gel Color",
          description: "Pedicure with gel color.",
          price: "Rs.2800.00",
          duration: "75 min",
          includes: ["Pedicure", "Gel polish"],
        },
        {
          name: "Pedicure with French Art",
          description: "Classic French design.",
          price: "Rs.3250.00",
          duration: "90 min",
          includes: ["Pedicure", "French art"],
        },
        {
          name: "Manicure",
          description: "Professional hand care.",
          price: "Rs.1650.00",
          duration: "45 min",
          includes: ["Shaping", "Cuticle care", "Polish"],
        },
        {
          name: "Manicure with Gel Color",
          description: "Manicure with gel color.",
          price: "Rs.2650.00",
          duration: "60 min",
          includes: ["Manicure", "Gel polish"],
        },
        {
          name: "Manicure with French Art",
          description: "Manicure with French art.",
          price: "Rs.3100.00",
          duration: "75 min",
          includes: ["Manicure", "French art"],
        },
      ],
    },
  ];

  const addOnServices = [
    {
      name: "Charms",
      price: "Rs.500.00",
      description: "Decorative nail charms",
    },
    {
      name: "Glitter",
      price: "Rs.550.00",
      description: "Sparkling glitter finish",
    },
    {
      name: "Chrome",
      price: "Rs.450.00",
      description: "Mirror-like chrome finish",
    },
    {
      name: "3D Nail Art",
      price: "Rs.650.00",
      description: "Intricate 3D designs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-brand-light">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-brand-pink">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official price list for Pretty Tips by Sandali
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${
            categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container-padding">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.name}
                    </h3>
                    <span className="text-2xl font-bold text-brand-pink">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-500">
                      Duration: {service.duration}
                    </span>
                  </div>

                  {service.includes && service.includes.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Includes:
                      </h4>
                      <ul className="space-y-1">
                        {service.includes.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-brand-pink rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href={WHATSAPP.buildServiceMessageLink(`${category.title} - ${service.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-brand-pink text-white text-center py-3 rounded-full hover:bg-brand-pink-dark transition-colors"
                  >
                    Book on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Add-On Services */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your experience with these additional treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-800">{addon.name}</h3>
                  <span className="text-brand-pink font-bold">{addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <a
                  href={WHATSAPP.buildServiceMessageLink(`Add-on: ${addon.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-pink text-white text-center py-2 rounded-full hover:bg-brand-pink-dark transition-colors text-sm"
                >
                  Add via WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-gray-100">
        <div className="container-padding">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pricing Information
            </h3>
            <p className="text-gray-600 mb-4">
              All prices are per flyer and may vary based on nail length,
              condition, and design complexity.
            </p>
            <p className="text-sm text-gray-500">
              Prices subject to change. Please WhatsApp us for current pricing and
              availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-pink text-white">
        <div className="container-padding text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8">
            Choose your perfect service and message us on WhatsApp to book.
          </p>
          <a
            href={WHATSAPP.buildMessageLink("Hello, I'd like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-pink px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
