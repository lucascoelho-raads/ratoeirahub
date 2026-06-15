import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CasesSocialProof from "./components/CasesSocialProof";

export const metadata = {
  title: "Cases | Ratoeira Hub",
  description: "Veja como os maiores players do mercado escalam suas operações com o Ratoeira Hub.",
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
