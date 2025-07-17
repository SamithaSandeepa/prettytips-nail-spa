import Link from "next/link";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Manicure Services",
      services: [
        {
          name: "Classic Manicure",
          description:
            "Traditional nail care with cuticle care, nail shaping, and polish application.",
          price: "$25",
          duration: "45 min",
          includes: [
            "Nail shaping",
            "Cuticle care",
            "Hand massage",
            "Polish application",
          ],
        },
        {
          name: "Gel Manicure",
          description:
            "Long-lasting gel polish that maintains shine for up to 3 weeks.",
          price: "$35",
          duration: "60 min",
          includes: [
            "Classic manicure",
            "Gel base coat",
            "Gel color",
            "Gel top coat",
            "UV curing",
          ],
        },
        {
          name: "French Manicure",
          description:
            "Elegant classic French tips with natural or colored base.",
          price: "$30",
          duration: "50 min",
          includes: [
            "Nail prep",
            "French tip application",
            "Base color",
            "Top coat",
          ],
        },
      ],
    },
    {
      title: "Pedicure Services",
      services: [
        {
          name: "Classic Pedicure",
          description: "Relaxing foot treatment with exfoliation and massage.",
          price: "$40",
          duration: "60 min",
          includes: [
            "Foot soak",
            "Nail trimming",
            "Callus removal",
            "Foot massage",
            "Polish",
          ],
        },
        {
          name: "Spa Pedicure",
          description:
            "Luxurious treatment with extended massage and premium products.",
          price: "$55",
          duration: "75 min",
          includes: [
            "Everything in classic",
            "Extended massage",
            "Paraffin wax",
            "Hot towels",
          ],
        },
        {
          name: "Gel Pedicure",
          description: "Long-lasting gel polish for your toes.",
          price: "$50",
          duration: "70 min",
          includes: ["Classic pedicure", "Gel polish application", "UV curing"],
        },
      ],
    },
    {
      title: "Nail Enhancements",
      services: [
        {
          name: "Gel Extensions",
          description: "Professional nail extensions for length and strength.",
          price: "$55",
          duration: "90 min",
          includes: [
            "Nail prep",
            "Extension application",
            "Shaping",
            "Gel polish",
            "Aftercare",
          ],
        },
        {
          name: "Nail Repair",
          description: "Fix broken or damaged nails.",
          price: "$15",
          duration: "30 min",
          includes: [
            "Assessment",
            "Repair work",
            "Blending",
            "Polish touch-up",
          ],
        },
        {
          name: "Nail Art",
          description: "Custom designs and artistic decorations.",
          price: "From $15",
          duration: "30-60 min",
          includes: [
            "Design consultation",
            "Custom artwork",
            "Premium materials",
            "Protective coating",
          ],
        },
      ],
    },
  ];

  const addOnServices = [
    {
      name: "Paraffin Wax Treatment",
      price: "$10",
      description: "Moisturizing paraffin dip",
    },
    {
      name: "Callus Treatment",
      price: "$15",
      description: "Extra callus removal and softening",
    },
    {
      name: "French Tips",
      price: "$5",
      description: "Add elegant French tips to any service",
    },
    {
      name: "Nail Art (per nail)",
      price: "$3-8",
      description: "Simple to complex designs",
    },
    {
      name: "Gel Removal",
      price: "$10",
      description: "Safe gel polish removal",
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
              Comprehensive nail care services designed to pamper, beautify, and
              maintain the health of your hands and feet.
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

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1">
                      {service.includes.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-pink rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/booking"
                    className="block w-full bg-brand-pink text-white text-center py-3 rounded-full hover:bg-brand-pink-dark transition-colors"
                  >
                    Book Now
                  </Link>
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
                  <span className="text-brand-pink font-bold">
                    {addon.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
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
              All prices are starting prices and may vary based on nail length,
              condition, and design complexity.
            </p>
            <p className="text-sm text-gray-500">
              Prices subject to change. Please call for current pricing and
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
            Choose your perfect service and book your appointment today!
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-brand-pink px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
