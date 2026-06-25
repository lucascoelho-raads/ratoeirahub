import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  Gauge,
  LayoutDashboard,
  Network,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/ShineBorder";
import { HeroNativeAds } from "./components/HeroNativeAds";

export const metadata = {
  title: "Native Ads com Ratoeira Hub | Taboola e NewsBreak",
  description:
    "Rastreie e atribua visitas, leads e vendas da Taboola e NewsBreak com precisão. Escale anúncios nativos com dados limpos e sem buracos no funil.",
};

const networks = [
  { name: "Taboola", color: "#0033A0" },
  { name: "NewsBreak", color: "#FB0000" },
];

const taboolaCards = [
  {
    icon: Network,
    title: "Rastreamento completo da Taboola",
    description:
      "Anúncios nativos da Taboola levam o usuário a ler conteúdo antes de converter — e muitas ferramentas perdem essa jornada no meio do caminho. A Ratoeira rastreia cada etapa: do clique no widget até a venda final, mesmo quando o usuário volta depois ou muda de dispositivo. Você enxerga o funil real, sem buracos.",
    image: "/serveraside.png",
  },
  {
    icon: Target,
    title: "Atribuição por widget e criativo",
    description:
      "A Taboola mostra cliques e impressões, mas não conta quais campanhas realmente geraram receita. A Ratoeira cruza os dados de tráfego com leads e vendas, atribuindo cada conversão ao widget, título e imagem corretos. Você descobre o que lucra — e o que só consome verba.",
    image: "/dashboard.png",
  },
  {
    icon: Gauge,
    title: "Dados mais rápidos que o dashboard da rede",
    description:
      "O painel da Taboola demora a consolidar conversões e, enquanto isso, você continua otimizando no escuro. A Ratoeira mostra resultados integrados mais rápido, para que você possa ajustar orçamentos, pausar campanhas ruins e dobrar a aposta no que está dando lucro.",
    image: "/dash.png",
  },
];

const newsbreakCards = [
  {
    icon: Network,
    title: "Rastreamento completo do NewsBreak",
    description:
      "O NewsBreak entrega volume, mas a jornada do usuário entre o feed de notícias e a conversão costuma se perder. A Ratoeira rastreia cada clique do feed até a venda, preservando campanha, criativo e dispositivo — mesmo quando o comprador retorna horas depois.",
    image: "/dashboard_resumo.png",
  },
  {
    icon: Eye,
    title: "Criativos que realmente convertem",
    description:
      "No NewsBreak, a manchete e a thumbnail fazem toda a diferença. A Ratoeira atribui cada venda ao criativo exato que a originou, para você escalar os anúncios que geram receita e pausar os que só trazem clique barato.",
    image: "/dashboard.png",
  },
  {
    icon: LayoutDashboard,
    title: "NewsBreak junto com os outros canais",
    description:
      "Pare de alternar entre painéis. A Ratoeira consolida visitas, leads e vendas do NewsBreak, Taboola, Google Ads e Meta Ads em um único dashboard. Você vê o funil completo por campanha, por rede e por criativo.",
    image: "/dashboard_resumo.png",
  },
];

const steps = [
  {
    number: "01",
    title: "Conecte Taboola e NewsBreak em minutos",
    description:
      "Integre as duas redes com a Ratoeira em poucos cliques. Sem código complexo, sem depender de planilhas e sem perder tempo entre APIs diferentes.",
  },
  {
    number: "02",
    title: "Rastreie cada clique até a venda",
    description:
      "A Ratoeira captura e preserva os parâmetros de campanha, widget e criativo de cada visita. Mesmo com jornadas longas ou troca de dispositivo, a atribuição chega intacta.",
  },
  {
    number: "03",
    title: "Otimize com conversão real — não com estimativa",
    description:
      "Com o funil completo visível, você escala os criativos e campanhas que geram receita e corta o que só gasta. Decisões baseadas em dado, não em achismo.",
  },
];

export default function NativeAdsTrafficSourcePage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroNativeAds />

      <section className="py-10 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Redes suportadas
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {networks.map((network) => (
                <span
                  key={network.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: network.color }}
                  />
                  {network.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#050505]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-20 max-w-5xl 2xl:max-w-[80rem] 4xl:max-w-[100rem] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight hyphens-none">
              <span className="block sm:inline"><span className="text-brand-primary">Native Ads</span>:</span>{" "}
              <span className="block sm:inline">atribuição robusta.</span>{" "}
              <span className="block sm:inline">Como qualquer canal.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 px-4 sm:px-0">
              Quando você não sabe qual anúncio nativo gerou a venda, acaba
              financiando campanhas que só parecem boas. A Ratoeira traz
              clareza total do clique à conversão, para você escalar com
              segurança na Taboola e no NewsBreak.
            </p>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-primary tracking-tight hyphens-none">
                <span className="whitespace-nowrap">Taboola</span>
              </h3>
              <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Rastreie cada widget, campanha e criativo da Taboola com precisão.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {taboolaCards.map((feature, index) => {
                const isDark = index % 2 === 0;
                return (
                  <div
                    key={feature.title}
                    className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
                  >
                    <div
                      className={
                        index % 2 === 1
                          ? "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2"
                          : "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"
                      }
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}
                      >
                        {feature.title === "Rastreamento completo da Taboola" ? (
                          <>Rastreamento completo da <span className="whitespace-nowrap">Taboola</span></>
                        ) : feature.title === "Atribuição por widget e criativo" ? (
                          feature.title
                        ) : feature.title === "Dados mais rápidos que o dashboard da rede" ? (
                          feature.title
                        ) : feature.title === "Rastreamento completo do NewsBreak" ? (
                          <>Rastreamento completo do <span className="whitespace-nowrap">NewsBreak</span></>
                        ) : feature.title === "Criativos que realmente convertem" ? (
                          feature.title
                        ) : (
                          <><span className="whitespace-nowrap">NewsBreak</span> junto com os outros canais</>
                        )}
                      </h3>
                      <p
                        className={`text-base sm:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}
                      >
                        {feature.description}
                      </p>
                    </div>

                    <div
                      className={
                        index % 2 === 1
                          ? "w-full lg:order-1"
                          : "w-full lg:order-2"
                      }
                    >
                      <div
                        className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                        <div className="relative z-10 p-6 sm:p-8">
                          <div
                            className={`relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border ${isDark ? "border-white/10" : "border-black/10"}`}
                          >
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className="object-cover object-center"
                            />
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-primary tracking-tight hyphens-none">
                <span className="whitespace-nowrap">NewsBreak</span>
              </h3>
              <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Atribua receita a cada campanha e criativo do NewsBreak.
              </p>
            </div>

            <div className="space-y-16 md:space-y-24">
              {newsbreakCards.map((feature, index) => {
                const isDark = index % 2 === 0;
                return (
                  <div
                    key={feature.title}
                    className={`grid gap-10 lg:grid-cols-2 lg:items-center rounded-3xl p-6 sm:p-8 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
                  >
                    <div
                      className={
                        index % 2 === 1
                          ? "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-2"
                          : "space-y-6 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] lg:order-1"
                      }
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}
                      >
                        {feature.title === "Rastreamento completo da Taboola" ? (
                          <>Rastreamento completo da <span className="whitespace-nowrap">Taboola</span></>
                        ) : feature.title === "Atribuição por widget e criativo" ? (
                          feature.title
                        ) : feature.title === "Dados mais rápidos que o dashboard da rede" ? (
                          feature.title
                        ) : feature.title === "Rastreamento completo do NewsBreak" ? (
                          <>Rastreamento completo do <span className="whitespace-nowrap">NewsBreak</span></>
                        ) : feature.title === "Criativos que realmente convertem" ? (
                          feature.title
                        ) : (
                          <><span className="whitespace-nowrap">NewsBreak</span> junto com os outros canais</>
                        )}
                      </h3>
                      <p
                        className={`text-base sm:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}
                      >
                        {feature.description}
                      </p>
                    </div>

                    <div
                      className={
                        index % 2 === 1
                          ? "w-full lg:order-1"
                          : "w-full lg:order-2"
                      }
                    >
                      <div
                        className={`relative overflow-hidden rounded-3xl border ${isDark ? "border-white/10 bg-black/35" : "border-black/10 bg-gray-50"}`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.18),rgba(0,0,0,0))]" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_70%_55%,rgba(255,126,74,0.10),rgba(0,0,0,0))]" />
                        <div className="relative z-10 p-6 sm:p-8">
                          <div
                            className={`relative h-[clamp(240px,28vh,420px)] overflow-hidden rounded-2xl border ${isDark ? "border-white/10" : "border-black/10"}`}
                          >
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 50vw, 100vw"
                              className="object-cover object-center"
                            />
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-6 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="text-center mb-16 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Da ativação ao primeiro dado real em minutos
            </h2>
            <p className="text-xl text-gray-300">
              Um fluxo simples para transformar cliques em dados acionáveis e
              decisões com confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <ShineBorder
                key={step.number}
                borderRadius={24}
                borderWidth={2}
                duration={8}
                color={["#FFB800", "#FF7E4A", "#FFB800", "#FF7E4A"]}
                className="w-full"
              >
                <div className="h-full rounded-3xl border border-white/10 bg-[#111111] p-8">
                  <div className="text-xs font-black uppercase tracking-widest text-brand-primary">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-white hyphens-none">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ShineBorder>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] px-4 sm:px-6 lg:px-8 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36">
          <div className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight hyphens-none">
                Pronto para escalar{" "}
                <span className="text-brand-primary whitespace-nowrap">Taboola</span> e{" "}
                <span className="text-brand-primary whitespace-nowrap">NewsBreak</span>
                <br />
                com dados limpos?
              </h3>
              <p className="mt-3 text-gray-300 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem]">
                Veja os planos e escolha a melhor configuração para seu volume
                de tráfego.
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-8 text-base whitespace-nowrap">
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
