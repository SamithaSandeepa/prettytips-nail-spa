import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
// import Testimonials from "@/components/sections/Testimonials"; // hidden for initial launch
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      {/* <Testimonials /> */}
      <CTA />
    </main>
  );
}
