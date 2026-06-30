import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
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
import { MotionImageCard } from "./components/MotionImageCard";

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
    title: "Do widget até a venda",
    description:
      "A jornada do usuário no native é longa. A Ratoeira rastreia cada etapa — do clique no widget até a conversão — mesmo quando ele volta depois ou troca de dispositivo. Você enxerga o funil real, sem buracos.",
    image: "/serveraside.png",
  },
  {
    icon: Target,
    title: "Saiba qual criativo lucra",
    description:
      "A Taboola mostra cliques, mas não receita. A Ratoeira cruza tráfego, leads e vendas, atribuindo cada conversão ao widget, título e imagem certos. Descubra o que lucra — e o que só consome verba.",
    image: "/dashboard.png",
  },
  {
    icon: Gauge,
    title: "Otimize antes do dashboard da rede",
    description:
      "O painel da Taboola demora a consolidar conversões. A Ratoeira entrega dados integrados mais rápido, para você ajustar orçamentos, pausar o ruim e dobrar a aposta no que dá lucro.",
    image: "/dash.png",
  },
];

const newsbreakCards = [
  {
    icon: Network,
    title: "Rastreie o feed até a venda",
    description:
      "O NewsBreak entrega volume, mas a jornada entre o feed e a conversão costuma se perder. A Ratoeira preserva campanha, criativo e dispositivo — mesmo quando o comprador retorna horas depois.",
    image: "/dashboard_resumo.png",
  },
  {
    icon: Eye,
    title: "Manchetes que realmente convertem",
    description:
      "No NewsBreak, a manchete e a thumbnail fazem toda a diferença. A Ratoeira atribui cada venda ao criativo exato, para você escalar o que gera receita e pausar o que só traz clique barato.",
    image: "/dashboard.png",
  },
  {
    icon: LayoutDashboard,
    title: "Tudo no mesmo painel",
    description:
      "Pare de alternar entre dashboards. A Ratoeira consolida NewsBreak, Taboola, Google Ads e Meta Ads em um só lugar. Você vê o funil completo por rede, campanha e criativo.",
    image: "/dashboard_resumo.png",
  },
];

const steps = [
  {
    number: "01",
    title: "Conecte as redes em minutos",
    description:
      "Integre Taboola e NewsBreak sem código complexo, planilhas ou APIs diferentes. Em poucos cliques, tudo pronto para rastrear.",
  },
  {
    number: "02",
    title: "Rastreie cada clique",
    description:
      "Capture campanha, widget e criativo de cada visita. Mesmo com jornadas longas ou troca de dispositivo, a atribuição chega intacta.",
  },
  {
    number: "03",
    title: "Escale com conversão real",
    description:
      "Veja o funil completo e invista só no que gera lucro. Decisões baseadas em dado real — não em estimativas.",
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
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none">
              <span className="block sm:inline"><span className="text-brand-primary">Native Ads</span>:</span>{" "}
              <span className="block sm:inline">pare de adivinhar</span>{" "}
              <span className="block sm:inline">o que vende.</span>
            </h2>
            <p className="text-body-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0 hyphens-none">
              Se você não sabe qual widget ou manchete gerou a conversão, está
              financiando campanha errada. A Ratoeira traz clareza total do
              clique à venda na Taboola e no NewsBreak.
            </p>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-h2 font-black text-brand-primary tracking-tight leading-tight hyphens-none">
                <span className="whitespace-nowrap">Taboola</span>
              </h3>
              <p className="mt-3 text-body-lg text-gray-300 max-w-2xl mx-auto hyphens-none">
                Rastreie cada widget, campanha e criativo com precisão.
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
                        className={`text-h2 font-black leading-tight tracking-tight hyphens-none ${isDark ? "text-white" : "text-[#111111]"}`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-body leading-relaxed hyphens-none ${isDark ? "text-gray-300" : "text-[#4b5563]"}`}
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
                      <MotionImageCard
                        src={feature.image}
                        alt={feature.title}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-h2 font-black text-brand-primary tracking-tight leading-tight hyphens-none">
                <span className="whitespace-nowrap">NewsBreak</span>
              </h3>
              <p className="mt-3 text-body-lg text-gray-300 max-w-2xl mx-auto hyphens-none">
                Atribua receita a cada campanha e criativo.
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
                        {feature.title}
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
                      <MotionImageCard
                        src={feature.image}
                        alt={feature.title}
                      />
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
            <h2 className="text-h1 font-black text-white mb-6 tracking-tight leading-tight hyphens-none">
              Do clique ao dado real em minutos
            </h2>
            <p className="text-body-lg text-gray-300 max-w-2xl mx-auto hyphens-none">
              Fluxo simples. Configuração rápida. Decisões sem achismo.
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
                  <h3 className="mt-4 text-h2 font-black text-white hyphens-none">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body text-gray-300 leading-relaxed hyphens-none">
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
              <h3 className="text-h2 font-black text-white tracking-tight leading-tight hyphens-none">
                Pronto para escalar{" "}
                <span className="text-brand-primary whitespace-nowrap">Taboola</span> e{" "}
                <span className="text-brand-primary whitespace-nowrap">NewsBreak</span>
                <br />
                com dados limpos?
              </h3>
              <p className="mt-3 text-body-lg text-gray-300 max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] hyphens-none">
                Escolha o plano ideal para o seu volume de tráfego e comece a
                rastrear com precisão.
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
