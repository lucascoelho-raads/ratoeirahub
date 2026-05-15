import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMetaAds } from "./components/HeroMetaAds";

export const metadata = {
  title: "Meta Ads | Fonte de Tráfego | Ratoeira Hub",
  description:
    "Otimize criativos e escale no Facebook e Instagram com dados limpos, proteção contra fraude e visão total de performance.",
};

const pillars = [
  {
    title: "Atribuição mais confiável para escalar",
    description:
      "Tome decisões com base em sinais mais consistentes e reduza a perda de conversões por bloqueios e limitações comuns.",
    icon: TrendingUp,
  },
  {
    title: "Proteção contra tráfego inválido",
    description:
      "Diminua desperdício com bots e cliques suspeitos e mantenha estabilidade na performance dos conjuntos.",
    icon: ShieldCheck,
  },
  {
    title: "Criativos com leitura operacional",
    description:
      "Enxergue o que realmente move seu ROI e ajuste seus criativos com mais velocidade e clareza.",
    icon: Sparkles,
  },
];

export default function MetaAdsTrafficSourcePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroMetaAds />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              O que muda quando a fonte é o{" "}
              <span className="text-brand-primary">Meta Ads</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl">
              Em Meta, o jogo é criativo + sinal. Quando seu dado é consistente, você consegue iterar rápido, escalar e proteger o ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-[28px] border border-white/10 bg-[#0A0A0A] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-primary">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="text-sm font-bold text-white">{p.title}</div>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Pronto para escalar{" "}
                <span className="text-brand-primary">Meta Ads</span>{" "}
                com dados limpos?
              </h3>
              <p className="mt-3 text-gray-300 max-w-2xl">
                Veja os planos e escolha a melhor configuração para seu volume de tráfego.
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/planos">
                Ver Planos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
