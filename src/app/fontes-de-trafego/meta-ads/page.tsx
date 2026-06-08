import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clapperboard, Gauge, LayoutDashboard, Network, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMetaAds } from "./components/HeroMetaAds";

export const metadata = {
  title: "Meta Ads | Fonte de Tráfego | Ratoeira Hub",
  description:
    "Otimize criativos e escale no Facebook e Instagram com dados limpos, proteção contra fraude e visão total de performance.",
};

const pillars = [
  {
    title: "Envio duplo: browser + CAPI com deduplicação",
    description:
      "O pixel no navegador perde entre 25% e 40% das conversões por bloqueadores de anúncio, restrições de iOS e falhas de conexão. A Ratoeira envia cada evento pelos dois caminhos ao mesmo tempo — via browser e via API de Conversões (CAPI) — com deduplicação automática para que nenhuma venda seja contada duas vezes. O resultado: ~100% de cobertura, sem ruído, sem gap.",
    icon: TrendingUp,
    image: "/serveraside.png",
  },
  {
    title: "Enriquecimento de dados — Pixel Quality Score mais alto",
    description:
      "Além de enviar o evento de conversão, a Ratoeira enriquece o dado enviado ao Meta com informações do comprador — email, telefone e outros identificadores com hash seguro. O Meta cruza esses dados com os perfis reais da plataforma, eleva seu Pixel Quality Score e passa a encontrar pessoas com perfil verdadeiro de compra — não só de clique. CPL cai. ROAS sobe. O algoritmo finalmente trabalha com dado verdadeiro.",
    icon: Sparkles,
    image: "/dashboard_resumo.png",
  },
  {
    title: "Saiba exatamente qual criativo gerou cada venda",
    description:
      "Com rastreamento ~100% e envio enriquecido via CAPI, você para de depender de \"conversões estimadas\" e começa a ver conversões reais — atribuídas ao conjunto de anúncios, ao criativo e ao público que as gerou. Chega de escalar criativo por achismo. Você escala o que converte com dado real e pausa o que drena antes de queimar mais verba.",
    icon: Clapperboard,
    image: "/dashboard.png",
  },
  {
    title: "Visitas, leads e vendas. Tudo visível numa tela.",
    description:
      "Enquanto outras ferramentas mostram só de onde vieram os cliques, a Ratoeira mostra de onde vieram as vendas — com visitas, leads e conversões integradas num único dashboard. Você enxerga o funil completo: quantos entraram, quantos viraram lead e quantos compraram — por campanha, por criativo, por público. Mais dado real no pixel significa públicos melhores, criativos mais inteligentes e um custo por aquisição que cai enquanto o lucro sobe.",
    icon: Network,
    image: "/dashboard_resumo.png",
  },
  {
    title: "Dados mais rápidos que o Ads Manager.",
    description:
      "O Meta Ads Manager demora para consolidar conversões — e nesse intervalo o algoritmo pode continuar otimizando para o público errado. A Ratoeira mostra seus dados integrados — visitas, leads e vendas — mais rápido do que o próprio painel do Meta. Você vê o que está funcionando e toma a decisão certa antes que o algoritmo tome a errada. Para quem escala no Meta, velocidade de leitura é vantagem competitiva.",
    icon: Gauge,
    image: "/dash.png",
  },
  {
    title: "Meta Ads e Google Ads. Um único dashboard.",
    description:
      "Gerencie suas campanhas no Meta e no Google sem alternar entre ferramentas. Investimento, conversões, leads e ROI de cada canal — consolidados numa tela. Sem exportar relatório, sem montar planilha, sem perder tempo consolidando dado. Você vê o que está funcionando em cada canal e age antes de desperdiçar mais verba.",
    icon: LayoutDashboard,
    image: "/dashboard.png",
  },
];

export default function MetaAdsTrafficSourcePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroMetaAds />

      <section className="py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white text-balance">
              O Meta Ads só otimiza tão bem quanto o dado que recebe.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] text-balance">
              Quando o pixel perde conversões, o algoritmo aprende errado — e vai buscar o público errado. A Ratoeira garante
              que cada venda real chegue ao Meta com qualidade máxima, do clique ao pagamento.
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((p, index) => {
              const Icon = p.icon;
              const isReversed = index % 2 === 1;
              const isDark = index % 2 === 0;

              return (
                <div key={p.title} className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
                  <div className={isReversed ? "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2" : "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"}>
                    <div className="flex items-center gap-3">
                      <span className={`flex w-12 h-12 items-center justify-center rounded-2xl bg-brand-primary/10 border ${isDark ? "border-white/10 text-brand-primary" : "border-black/10 text-brand-primary"}`}>
                        <Icon className="w-6 h-6" />
                      </span>
                      <div className={`text-xl font-black tracking-tight ${isDark ? "text-white" : "text-[#111111]"}`}>{p.title}</div>
                    </div>
                    <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}>{p.description}</p>
                  </div>

                  <div className={isReversed ? "w-full lg:order-1" : "w-full lg:order-2"}>
                    <div className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                      <div className="relative z-10 p-6 sm:p-8">
                        <div className={`relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border ${isDark ? "border-white/10" : "border-black/10"}`}>
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Pronto para escalar{" "}
                <span className="text-brand-primary">Meta Ads</span>{" "}
                com dados limpos?
              </h3>
              <p className="mt-3 text-gray-300 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem]">
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
