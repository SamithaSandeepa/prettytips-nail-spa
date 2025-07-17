export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-pink-600">Sandali</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate nail artist dedicated to creating beautiful, healthy
              nails in a relaxing and welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                My Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My journey in the beauty industry began over 8 years ago with a
                simple passion: helping people feel confident and beautiful.
                What started as a hobby quickly became my calling when I
                realized the joy and confidence that beautiful nails could bring
                to my clients.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After completing my certification as a licensed nail technician,
                I spent years perfecting my craft, learning the latest
                techniques, and building relationships with clients who have
                become like family to me.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Pretty Tips by Sandali is more than just a nail salon –
                it&apos;s a place where artistry meets relaxation, where every
                client leaves feeling pampered and beautiful.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-9xl">👩‍🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              My Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every client deserves personalized attention, quality service, and
              a relaxing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quality First
              </h3>
              <p className="text-gray-600">
                I use only premium products and maintain the highest standards
                of cleanliness and hygiene for every service.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Artistic Excellence
              </h3>
              <p className="text-gray-600">
                Every nail design is a work of art, carefully crafted to reflect
                your personal style and preferences.
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Relaxing Experience
              </h3>
              <p className="text-gray-600">
                Your appointment is your time to unwind and be pampered in a
                peaceful, stress-free environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Credentials & Training
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Professional Licenses
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>
                      Licensed Nail Technician - State Board Certified
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>Hygiene & Safety Certification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>Business License & Insurance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Specialized Training
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>Gel Application & Extensions Specialist</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>Advanced Nail Art & Design Certificate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>Customer Service Excellence Training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
