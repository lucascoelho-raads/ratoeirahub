import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseClientView from "./CaseClientView";

// Apenas dados estáticos (URLs de imagens externas). Textos são resolvidos
// via i18n no componente cliente (CaseClientView) para suportar PT/EN/ES.
const casesData: Record<
  string,
  {
    id: string;
    photo: string;
  }
> = {
  "operacao-alpha": {
    id: "operacao-alpha",
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  "agencia-vortex": {
    id: "agencia-vortex",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  "metodo-escala": {
    id: "metodo-escala",
    photo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
};

export async function generateStaticParams() {
  return Object.keys(casesData).map((id) => ({ id }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const caseData = casesData[resolvedParams.id];

  if (!caseData) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-[#050505] text-white">
      <Navbar />
      <CaseClientView caseData={caseData} />
      <Footer />
    </main>
  );
}
