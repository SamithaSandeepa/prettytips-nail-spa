import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <div className="text-8xl">💅</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-40"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-pink-600">Sandali</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Pretty Tips by Sandali, where passion meets expertise
              in the art of nail care. With over 8 years of experience in the
              beauty industry, Sandali brings creativity, precision, and a
              genuine love for making clients feel beautiful.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to provide exceptional nail care services in a
              clean, relaxing environment where every client feels pampered and
              valued. We use only the highest quality products and maintain the
              strictest hygiene standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Certifications & Training
              </h3>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">Licensed Nail Technician</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">
                  Gel Application Specialist
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">
                  Nail Art Design Certificate
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-600">
                  Hygiene & Safety Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
