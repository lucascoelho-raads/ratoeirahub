import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAds from "./components/HeroAds";
import FeaturesAds from "./components/FeaturesAds";
import CTAAds from "./components/CTAAds";

export const metadata = {
  title: "Ratoeira Ads | Recupere Conversões e Bloqueie Fraudes",
  description: "A tecnologia de tracking mais avançada do mercado para quem não tem margem para perder dinheiro com cliques falsos e dados imprecisos.",
};

export default function RatoeiraAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroAds />
      <FeaturesAds />
      <CTAAds />
      <Footer />
    </main>
  );
}
