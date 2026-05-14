import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Gauge, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-brand-primary/5 rounded-full blur-[140px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
              Fonte de tráfego
              <span className="h-1 w-1 rounded-full bg-brand-primary" />
              Meta Ads
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Escale{" "}
              <span className="text-brand-primary">Meta Ads</span>{" "}
              com visão total.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
              Mais clareza no que converte em Facebook e Instagram, com proteção em tempo real e uma operação guiada por dados.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/planos">
                  Ver Planos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/solucoes/ratoeira-ads#como-funciona">Como funciona</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/15 via-transparent to-transparent rounded-[32px] blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-primary">
                    <Megaphone className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">Campanhas</div>
                    <div className="text-xs text-gray-500">Facebook & Instagram</div>
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Sinais</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Criativos</div>
                  <div className="mt-2 text-2xl font-black text-white">+ leitura</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Desperdício</div>
                  <div className="mt-2 text-2xl font-black text-white">- fraude</div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-primary">
                    <Gauge className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">Performance</div>
                    <div className="text-xs text-gray-500">Operação mais estável</div>
                  </div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Tempo real</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

