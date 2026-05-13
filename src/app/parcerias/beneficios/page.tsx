import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBenefits from "./components/HeroBenefits";
import DetailedBenefits from "./components/DetailedBenefits";
import CommissionStructure from "./components/CommissionStructure";
import CTAPartnerships from "../components/CTAPartnerships";

export const metadata = {
  title: "Benefícios do Programa | Ratoeira Hub",
  description: "Conheça todas as vantagens, comissões e premiações de ser um parceiro Ratoeira Hub.",
};

export default function BeneficiosParceriaPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <HeroBenefits />
      <DetailedBenefits />
      <CommissionStructure />
      
      {/* Reutilizando o CTA de Parcerias */}
      <CTAPartnerships />

      <Footer />
    </main>
  );
}