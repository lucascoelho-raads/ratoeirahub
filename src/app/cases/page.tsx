import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CasesSocialProof from "./components/CasesSocialProof";
import MentorsRecommend from "./components/MentorsRecommend";

export const metadata = {
  title: "Cases | Ratoeira Hub",
  description: "Veja como os maiores players do mercado escalam suas operações com o Ratoeira Hub.",
};

export default function CasesPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      {/* 1. Provas Sociais e Vídeos/Prints */}
      <CasesSocialProof />
      
      {/* 2. Mentores Indicam */}
      <MentorsRecommend />

      <Footer />
    </main>
  );
}
