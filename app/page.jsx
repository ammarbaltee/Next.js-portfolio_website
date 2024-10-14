import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Cta from "@/components/Cta";
import Work from "@/components/Work";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Cta />
      
    </section>
  );
}
