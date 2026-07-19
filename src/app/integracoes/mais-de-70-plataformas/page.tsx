import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mais70Hero from "./Mais70Hero";
import Mais70ChainCarousel from "./Mais70ChainCarousel";

export const metadata = {
  title: "Mais de 70 Plataformas | Ratoeira Pages",
  description: "Mais de 70 integrações prontas para conectar Google Ads, Meta Ads, gateways de pagamento e CRM — com tracking server-side e otimização em tempo real.",
};

export default function MaisDe70PlataformasPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      <Mais70Hero />

      <Mais70ChainCarousel />

      <Footer />
    </main>
  );
}
