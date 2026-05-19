import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseClientView from "./CaseClientView";

// Dados mockados dos cases baseados na CasesList
const casesData: Record<
  string,
  {
    name: string;
    role: string;
    photo: string;
    results: string[];
    challenge: string;
    solution: string;
    testimonial: string;
  }
> = {
  "operacao-alpha": {
    name: "Operação Alpha",
    role: "Infoprodutores",
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    results: ["+110% ROI", "-40% Fraudes", "R$ 50k salvos/mês"],
    challenge: "A Operação Alpha sofria com uma alta taxa de cliques inválidos e bots que consumiam rapidamente o orçamento diário no Google Ads. Além disso, a perda de dados de conversão pelo pixel padrão dificultava a otimização das campanhas, fazendo com que o CPA estivesse muito acima do aceitável.",
    solution: "Ao integrar o Ratoeira Ads, a empresa passou a utilizar o tracking server-side, garantindo precisão quase absoluta nos eventos de conversão. O bloqueio dinâmico de IPs fraudulentos também foi ativado, protegendo o orçamento e focando apenas em usuários reais.",
    testimonial: "O Ratoeira Hub não apenas salvou nosso caixa, mas nos deu a confiança necessária para triplicar nosso investimento em tráfego pago sem medo de perder dinheiro com bots.",
  },
  "agencia-vortex": {
    name: "Agência Vortex",
    role: "Gestão de Tráfego",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    results: ["3x Mais Rápido", "+25% Conversão", "15 Clientes Migrados"],
    challenge: "Gerenciar landing pages para múltiplos clientes era um pesadelo logístico. As páginas desenvolvidas em plataformas tradicionais demoravam para carregar, e o setup de rastreamento avançado tomava dias da equipe técnica para cada novo lançamento.",
    solution: "A Agência Vortex migrou todas as suas operações para o Ratoeira Pages. Com templates focados em conversão e rastreamento nativo já embutido em cada nova página, a equipe reduziu o tempo de deploy de dias para apenas algumas horas.",
    testimonial: "Nossa operação ficou muito mais enxuta e rápida. Nossos clientes sentiram o impacto na taxa de conversão quase imediatamente devido à velocidade das Flash Pages.",
  },
  "metodo-escala": {
    name: "Método Escala",
    role: "Anunciante Top Player",
    photo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    results: ["~100% Tracking", "Setup em 1 Clique", "Múltiplos 7 Dígitos"],
    challenge: "A dependência de múltiplas ferramentas desconexas causava divergências constantes nos relatórios. O anunciante não sabia exatamente qual anúncio gerava vendas reais, o que impedia uma escala agressiva e segura das ofertas no Meta e no Google.",
    solution: "A adoção do Ratoeira Hub unificou a criação de páginas e o tracking server-side. Com um dashboard único exibindo o ROI real cruzado com as vendas aprovadas, o Método Escala passou a escalar com dados 100% precisos e confiáveis.",
    testimonial: "Parei de operar às cegas. Hoje, cada centavo investido é rastreado, validado e otimizado para gerar lucro de verdade. Foi a melhor decisão que já tomei para a minha operação.",
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
