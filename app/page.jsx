import About from "@/components/About";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <HeroSection />
      <About />
    </section>
  );
}
