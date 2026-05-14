import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGoogleAds } from "./components/HeroGoogleAds";

export const metadata = {
  title: "Google Ads com Ratoeira Hub | Tracking e Otimização Avançada",
  description: "Escale suas campanhas de pesquisa e YouTube com dados 100% limpos e integração server-side nativa.",
};

export default function GoogleAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroGoogleAds />
      <Footer />
    </main>
  );
}

