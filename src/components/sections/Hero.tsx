import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-brand-light">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile Image */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: 'url("/mobilehero.png")', // Mobile image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Desktop Image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: 'url("/image.png")', // Desktop image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Overlay with bottom gradient fade to white */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.8) 90%, rgba(255,255,255,1) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="container-padding relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h1
            className="mb-6 font-serif text-5xl font-bold text-brand-pink md:text-7xl lg:text-8xl"
            style={{
              textShadow:
                "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Pretty Tips
            <span
              className="mt-2 block text-3xl md:text-4xl lg:text-5xl"
              style={{
                color: "#D56497",
                textShadow:
                  "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              by Sandali
            </span>
          </h1>

          <p
            className="mb-8 text-xl text-gray-700 md:text-2xl lg:text-3xl"
            style={{
              textShadow:
                "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 3px rgba(255,255,255,0.8)",
            }}
          >
            Professional nail spa services with a touch of elegance.
            <br />
            Where beauty meets perfection.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-block text-white px-8 py-4 text-lg rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 bg-brand-pink hover:bg-brand-pink-dark"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 px-8 py-4 text-lg rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-brand-pink">
          <div className="mt-2 h-3 w-1 rounded-full animate-bounce bg-brand-pink" />
        </div>
      </div>
    </section>
  );
}
