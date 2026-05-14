import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroPages from "./components/HeroPages";
import FeaturesPages from "./components/FeaturesPages";
import CTAPages from "./components/CTAPages";

export const metadata = {
  title: "Ratoeira Pages | Templates e Construtor Visual",
  description: "Templates e construtor visual integrados ao tracking. Crie páginas de alta conversão sem complicação.",
};

export default function RatoeiraPagesPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroPages />
      <FeaturesPages />
      <CTAPages />
      <Footer />
    </main>
  );
}