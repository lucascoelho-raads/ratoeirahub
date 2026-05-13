import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroPartnerships from "./components/HeroPartnerships";
import BenefitsPartnerships from "./components/BenefitsPartnerships";
import CTAPartnerships from "./components/CTAPartnerships";

export const metadata = {
  title: "Programa de Parceiros | Ratoeira Hub",
  description: "Junte-se ao programa de parcerias do Ratoeira Hub e garanta comissões recorrentes enquanto ajuda seus clientes a escalarem.",
};

export default function ParceriasPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      {/* 1. Hero da Página de Parcerias */}
      <HeroPartnerships />
      
      {/* 2. Benefícios do Programa */}
      <BenefitsPartnerships />
      
      {/* 3. Call to Action / Formulário */}
      <CTAPartnerships />

      <Footer />
    </main>
  );
}