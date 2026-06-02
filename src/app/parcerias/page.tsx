import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ExpandableCardDemo } from "./components/ExpandableCardDemo";
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
      
      <HeroGeometric
        badge="Vantagens Exclusivas"
        title1="Mais do que comissões."
        title2="Um Ecossistema de Vantagens."
        subtitle="Todo assinante da Ratoeira pode ser parceiro. Indique, ganhe recorrente e acesse vantagens exclusivas — enquanto sua operação cresce junto."
      />
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl 2xl:max-w-[92%] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <ExpandableCardDemo />
        </div>
      </section>
      <CommissionStructure />
      
      <CTAPartnerships />

      <Footer />
    </main>
  );
}
