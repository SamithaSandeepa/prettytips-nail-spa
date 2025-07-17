import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </main>
  );
}
