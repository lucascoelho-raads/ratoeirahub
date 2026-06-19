import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Gauge,
  LayoutDashboard,
  Network,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroNativeAds } from "./components/HeroNativeAds";

export const metadata = {
  title: "Native Ads | Fonte de Tráfego | Ratoeira Hub",
  description:
    "Unifique o rastreamento de Taboola, Outbrain e outras redes nativas. Atribua visitas, leads e vendas aos anúncios certos e escale com dados limpos.",
};

const pillars = [
  {
    title: "Rastreamento completo em anúncios nativos",
    description:
      "Anúncios nativos levam o usuário a ler conteúdo antes de converter — e muitas ferramentas perdem essa jornada no meio do caminho. A Ratoeira rastreia cada etapa: do clique no widget da Taboola ou Outbrain até a venda final, mesmo quando o usuário sai do site do publisher, volta depois ou muda de dispositivo. Você enxerga o funil real, sem buracos.",
    icon: Network,
    image: "/serveraside.png",
  },
  {
    title: "Atribuição que separa o que vende do que só gasta",
    description:
      "Redes nativas mostram cliques e impressões, mas não contam quais campanhas realmente geraram receita. A Ratoeira cruza os dados de tráfego com leads e vendas, atribuindo cada conversão ao anúncio, campanha e rede corretos. Você descobre quais widgets, títulos e imagens estão lucrando — e quais estão apenas consumindo verba.",
    icon: Target,
    image: "/dashboard_resumo.png",
  },
  {
    title: "Veja qual criativo e qual título geram cada venda",
    description:
      "Native Ads vive de teste de criativo: manchete, imagem thumbnail e formato de widget. Com o rastreamento da Ratoeira, cada venda é atribuída ao criativo exato que a originou. Você escala os anúncios que convertem, pausa os que só geram clique barato e toma decisões baseadas em receita — não em CTR ilusório.",
    icon: Eye,
    image: "/dashboard.png",
  },
  {
    title: "Visitas, leads e vendas em uma única tela",
    description:
      "Pare de alternar entre o painel da Taboola, da Outbrain e da sua loja. A Ratoeira consolida visitas, leads e vendas de todas as redes nativas em um único dashboard. Você vê o funil completo por campanha, por rede e por criativo — e entende de verdade onde seu dinheiro está sendo bem investido.",
    icon: LayoutDashboard,
    image: "/dashboard_resumo.png",
  },
  {
    title: "Dados mais rápidos que os dashboards das redes",
    description:
      "Painéis de Native Ads demoram a consolidar conversões e, enquanto isso, você continua otimizando no escuro. A Ratoeira mostra resultados integrados mais rápido, para que você possa ajustar orçamentos, pausar campanhas ruins e dobrar a aposta no que está dando lucro antes que o dia queime mais budget.",
    icon: Gauge,
    image: "/dash.png",
  },
  {
    title: "Native Ads, Google Ads e Meta Ads. Tudo junto.",
    description:
      "Sua operação não vive só de Native Ads. A Ratoeira reúne Google Ads, Meta Ads e redes nativas em um único painel de performance. Compare canais, identifica sinergias e aloca verba para onde o ROI é maior — sem planilhas, sem exportações manuais e sem adivinhação.",
    icon: BarChart3,
    image: "/dashboard.png",
  },
];

export default function NativeAdsTrafficSourcePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroNativeAds />

      <section className="py-20">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white ">
              Native Ads precisam de atribuição tão robusta quanto qualquer outro canal.
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] ">
              Quando você não sabe qual anúncio nativo gerou a venda, acaba financiando campanhas que só parecem boas. A
              Ratoeira traz clareza total do clique à conversão, para você escalar com segurança.
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((p, index) => {
              const Icon = p.icon;
              const isReversed = index % 2 === 1;
              const isDark = index % 2 === 0;

              return (
                <div
                  key={p.title}
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
                >
                  <div
                    className={
                      isReversed
                        ? "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2"
                        : "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex w-12 h-12 items-center justify-center rounded-2xl bg-brand-primary/10 border ${
                          isDark ? "border-white/10 text-brand-primary" : "border-black/10 text-brand-primary"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <div
                        className={`text-xl font-black tracking-tight ${
                          isDark ? "text-white" : "text-[#111111]"
                        }`}
                      >
                        {p.title}
                      </div>
                    </div>
                    <p
                      className={`text-base sm:text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-[#4b5563]"
                      }`}
                    >
                      {p.description}
                    </p>
                  </div>

                  <div className={isReversed ? "w-full lg:order-1" : "w-full lg:order-2"}>
                    <div
                      className={`relative overflow-hidden rounded-3xl border ${
                        isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                      <div className="relative z-10 p-6 sm:p-8">
                        <div
                          className={`relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border ${
                            isDark ? "border-white/10" : "border-black/10"
                          }`}
                        >
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
                <span className="text-brand-primary">Native Ads</span>{" "}
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
