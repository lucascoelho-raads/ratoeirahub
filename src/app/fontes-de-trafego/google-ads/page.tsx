import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroGoogleAds } from "./components/HeroGoogleAds";
import Image from "next/image";
import { LineChart, MousePointerClick, ShieldCheck, Target, Timer, Waypoints } from "lucide-react";

export const metadata = {
  title: "Google Ads com Ratoeira Hub | Tracking e Otimização Avançada",
  description: "Escale suas campanhas de pesquisa e YouTube com dados 100% limpos e integração server-side nativa.",
};

export default function GoogleAdsPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />
      <HeroGoogleAds />

      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Performance real no <span className="text-brand-primary">Google Ads</span>.
            </h2>
            <p className="text-xl text-gray-300">
              Recupere sinais, elimine ruído e otimize com base no que realmente acontece do clique ao pagamento.
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                icon: Timer,
                title: "Conversões Server-Side (API do Google)",
                description:
                  "Envie conversões de forma consistente e confiável para o Google Ads, reduzindo perdas por bloqueadores e restrições do navegador.",
                image: "/serveraside.png",
              },
              {
                icon: Target,
                title: "GCLID e UTMs 100% preservados",
                description:
                  "Capture e mantenha os identificadores essenciais para atribuição correta, sem depender de cookies frágeis.",
                image: "/dashboard.png",
              },
              {
                icon: ShieldCheck,
                title: "Proteção contra cliques inválidos",
                description:
                  "Bloqueie tráfego suspeito e reduza desperdício antes que ele vire custo, mantendo o orçamento onde importa.",
                image: "/googleadshero.png",
              },
              {
                icon: MousePointerClick,
                title: "Atribuição detalhada do clique",
                description:
                  "Enxergue a jornada completa e identifique quais campanhas, anúncios e termos estão gerando lucro de verdade.",
                image: "/dashboard.png",
              },
              {
                icon: LineChart,
                title: "Dashboard unificado de performance",
                description:
                  "Compare investimento, conversões e ROI em uma visão única, com métricas claras para decisões rápidas.",
                image: "/dashboard.png",
              },
              {
                icon: Waypoints,
                title: "Integração com o ecossistema Ratoeira",
                description:
                  "Conecte Ads + Pages e use a visão do Hub para escalar com menos fricção e mais previsibilidade.",
                image: "/googleadshero.png",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="flex flex-col items-center gap-12"
              >
                <div
                  className="space-y-6 max-w-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{feature.description}</p>
                </div>

                <div
                  className="w-full"
                >
                  <div
                    className="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px]"
                  >
                    <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] opacity-60" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(min-width: 768px) 100vw, 100vw"
                      className={`relative z-10 ${feature.image === "/serveraside.png" ? "object-contain object-center" : "object-cover object-top"}`}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 ring-1 ring-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Como funciona na prática
            </h2>
            <p className="text-xl text-gray-300">
              Um fluxo simples para transformar cliques em dados acionáveis e decisões com confiança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Conecte em minutos",
                description:
                  "Ative a coleta e sincronização de eventos com o Google Ads sem depender de configurações frágeis no navegador.",
              },
              {
                number: "02",
                title: "Enriqueça o clique",
                description:
                  "Preserve GCLID e UTMs para manter a atribuição correta e eliminar o ruído que atrapalha a otimização.",
              },
              {
                number: "03",
                title: "Otimize com dados limpos",
                description:
                  "Acompanhe performance no dashboard e ajuste campanhas com base em conversões reais e sinais completos.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8"
              >
                <div className="text-xs font-black uppercase tracking-widest text-brand-primary">
                  {step.number}
                </div>
                <h3 className="mt-4 text-2xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
