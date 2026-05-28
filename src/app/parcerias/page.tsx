import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBenefits from "./components/HeroBenefits";
import DetailedBenefits from "./components/DetailedBenefits";
import CommissionStructure from "./components/CommissionStructure";
import CTAPartnerships from "./components/CTAPartnerships";

export const metadata = {
  title: "Parcerias | Ratoeira Hub",
  description: "Conheça todas as vantagens, comissões e premiações de ser um parceiro Ratoeira Hub.",
};

export default function ParceriasPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <HeroBenefits />
      <DetailedBenefits />
      <CommissionStructure />
      
      <CTAPartnerships />

      <Footer />
    </main>
  );
}
