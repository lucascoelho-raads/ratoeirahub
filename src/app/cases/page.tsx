import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CasesSocialProof from "./components/CasesSocialProof";

export const metadata = {
  title: "Cases | Ratoeira Pages",
  description: "Veja como os maiores anunciantes do Google Ads e Meta Ads escalam suas operações com a Ratoeira Pages e o tracking server-side ~100%.",
};

export default function CasesPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Provas Sociais e Vídeos/Prints */}
      <CasesSocialProof />

      <Footer />
    </main>
  );
}
