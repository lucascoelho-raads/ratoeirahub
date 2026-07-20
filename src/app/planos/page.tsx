import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "./components/PricingHero";
import PricingTabs from "./components/PricingTabs";

export const metadata = {
  title: "Planos | Ratoeira Pages",
  description: "Escolha o plano ideal para a sua operação. Tracking server-side para Google Ads e Meta Ads, páginas de alta conversão ou o ecossistema completo da Ratoeira Pages.",
};

export default function PlanosPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <PricingHero />

      <PricingTabs />

      <Footer />
    </main>
  );
}
