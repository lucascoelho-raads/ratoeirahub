import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Benefits from "@/components/sections/Benefits";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ProblemSolution />
      <Benefits />
      <Metrics />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
