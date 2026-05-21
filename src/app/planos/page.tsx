import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "./components/PricingHero";
import PricingTabs from "./components/PricingTabs";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Planos | Ratoeira Hub",
  description: "Escolha o plano ideal para a sua operação. Tracking server-side, páginas de alta conversão ou o ecossistema completo.",
};

export default function PlanosPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <PricingHero />
      
      <PricingTabs />

      <Contact />

      <Footer />
    </main>
  );
}
