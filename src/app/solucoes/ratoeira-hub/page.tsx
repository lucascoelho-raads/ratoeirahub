import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Link2, Radar, LayoutTemplate, Server, LineChart, ShieldCheck } from "lucide-react";
import { BeamsBackground } from "@/components/ui/ethereal-beams-hero";
import { GradientText } from "@/components/ui/gradient-text";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";

export const metadata = {
  title: "Ratoeira Hub | Ads + Pages em um único dashboard",
  description:
    "Integre Ratoeira Ads e Ratoeira Pages em um único fluxo: dados consistentes, operação simples e visão total para escalar.",
};

const features = [
  {
    title: "Integração nativa via API",
    description:
      "Quando Ads e Pages operam no mesmo ecossistema, o dado da página alimenta o tracking em tempo real — sem delay, sem gap, sem configuração manual. A taxa de rastreamento sobe além do que cada produto entrega separado. É a integração que faz o algoritmo trabalhar com informação completa.",
    icon: Link2,
  },
  {
    title: "Um dashboard. Toda a operação.",
    description:
      "Campanhas do Google Ads e Meta Ads, performance das páginas, conversões rastreadas e bloqueios ativos — tudo numa tela. Sem alternar entre ferramentas, sem perder tempo consolidando planilha. Você vê o que está funcionando e age antes da concorrência.",
    icon: Radar,
  },
  {
    title: "Páginas que carregam em menos de 1 segundo",
    description:
      "Velocidade de carregamento abaixo de 1 segundo, hospedagem inclusa e domínios conectados no mesmo ecossistema. Cada página já nasce rastreada — sem script avulso, sem perda de dado entre o clique e a conversão. Cria, publica e escala o que converte.",
    icon: LayoutTemplate,
  },
  {
    title: "Precisão de ~100% — porque os dois lados estão conectados",
    description:
      "Com Ads e Pages integrados via API, a precisão do tracking sobe além do que cada produto entrega separado. O dado da página confirma o dado da campanha — e vice-versa. O resultado: quase nenhuma conversão fica de fora, e o algoritmo recebe o sinal mais limpo possível para otimizar.",
    icon: Server,
  },
  {
    title: "Mais fraude bloqueada. Mais verba protegida. (Google Ads)",
    description:
      "Exclusivo para Google Ads. Com Pages e Ads integrados, o sistema identifica padrões de tráfego inválido com mais precisão — e bloqueia automaticamente mais IPs do que cada produto faria sozinho. Menos clique fraudulento, mais orçamento chegando em quem tem chance real de comprar.",
    icon: ShieldCheck,
  },
  {
    title: "Crie, rastreie e escale — sem sair da plataforma",
    description:
      "Criar uma página, ativar o tracking, subir a campanha e acompanhar o resultado em tempo real — tudo dentro do Hub, sem trocar de ferramenta. Menos tempo operacional, mais tempo tomando a decisão que escala. Para quem opera no digital, velocidade de iteração é vantagem competitiva.",
    icon: LineChart,
  },
];

export default function RatoeiraHubPage() {
  return (
    <main className="flex flex-col flex-1 bg-[#050505] text-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[#050505]">
        <BeamsBackground
          className="min-h-screen"
          beamsProps={{
            beamWidth: 3,
            beamHeight: 20,
            beamNumber: 15,
            lightColor: "#FFB800",
            speed: 1.5,
            noiseIntensity: 2,
            scale: 0.15,
            rotation: 0,
          }}
        >
          <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-[clamp(7rem,16vh,12rem)] pb-[clamp(4.5rem,10vh,8.5rem)]">
            <div className="max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] text-center">
              <h1 className="text-[clamp(1.25rem,4.2vw,6rem)] 3xl:text-[clamp(4.5rem,3.2vw,6.5rem)] font-black text-white tracking-tight leading-[1.04] mb-8 ">
                Quando Ads e Pages trabalham juntos, sua operação chega onde nenhuma ferramenta sozinha chega.
              </h1>

              <p className="text-base sm:text-[clamp(1.05rem,1.25vw,1.35rem)] 3xl:text-[clamp(1.5rem,1.2vw,2.25rem)] text-neutral-400 mb-12 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 4xl:max-w-6xl mx-auto px-4 sm:px-0 ">
                Rastreamento ~100%. Páginas que carregam em menos de 1 segundo. Bloqueio automático de fraude. Tudo integrado
                via API — e funcionando melhor do que a soma das partes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/planos#pricing-cards"
                  className="inline-flex items-center gap-2 px-8 py-4 2xl:px-10 2xl:py-5 rounded-button bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold hover:from-yellow-400 hover:to-orange-400 transition-colors"
                >
                  Começar grátis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <p className="mt-4 text-sm text-neutral-400">Plano gratuito disponível. Sem cartão.</p>

              <div className="mx-auto mt-12 w-full max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem]">
                <div className="relative mx-auto h-[clamp(14rem,30vw,28rem)] w-full max-w-5xl xl:max-w-6xl 2xl:max-w-[85rem] 3xl:max-w-[92rem] 4xl:max-w-[100rem] rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-black/60 overflow-hidden">
                  <Image
                    src="/dashboard.png"
                    alt="Dashboard unificado"
                    fill
                    priority
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </BeamsBackground>
      </section>

      <section id="como-funciona" className="py-16 md:py-24 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl 2xl:max-w-[90rem] 4xl:max-w-[120rem] 5xl:max-w-[140rem] 6xl:max-w-[160rem] mx-auto px-4 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl 3xl:text-7xl font-black text-white mb-6 ">
              Integrado é diferente de{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                conectado
              </span>
              .
            </h2>
            <p className="text-base sm:text-xl 3xl:text-3xl text-gray-400 max-w-2xl lg:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-0 ">
              A maioria das ferramentas se conecta. O Ratoeira Hub se integra — via API, em tempo real, sem gap entre o
              clique na página e o dado na campanha.
            </p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 lg:gap-24 rounded-3xl border p-8 md:p-12 ${index % 2 === 1 ? "bg-white border-black/10" : "bg-[#111111] border-white/10"}`}
                >
                  <div className="flex-1 space-y-6 text-center md:text-left">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/15 to-orange-500/15 flex items-center justify-center mb-6 border ${index % 2 === 1 ? "border-black/10" : "border-white/10"}`}>
                      <Icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-6xl font-black leading-tight">
                      <GradientText variant="orange" className="font-black">
                        {feature.title}
                      </GradientText>
                    </h3>
                    <p className={`text-base sm:text-xl 3xl:text-3xl leading-relaxed ${index % 2 === 1 ? "text-[#4b5563]" : "text-gray-400"}`}>
                      <BlurTextEffect key={`${feature.title}-desc`}>{feature.description}</BlurTextEffect>
                    </p>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-[#111111] overflow-hidden group">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />

                      {feature.title === "Integração nativa via API" ? (
                        <div className="absolute inset-0">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_50%,rgba(255,184,0,0.16)_0%,rgba(17,17,17,0)_70%)]" />

                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <div className="w-full max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem]">
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-sm font-black">
                                    P
                                  </span>
                                  <span className="text-sm font-semibold text-gray-400/80">Página</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-sm font-black">
                                    A
                                  </span>
                                  <span className="text-sm font-semibold text-gray-400/80">Ads</span>
                                </div>
                              </div>

                              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 items-center gap-3">
                                <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                                  <p className="text-[11px] font-semibold text-gray-400/60">Página</p>
                                  <p className="mt-1 text-xs font-bold text-white">Click</p>
                                </div>

                                <div className="relative h-10">
                                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent" />
                                  <div className="absolute inset-0">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.7)] animate-pulse" />
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.7)] animate-pulse" />
                                  </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-right">
                                  <p className="text-[11px] font-semibold text-gray-400/60">Ads</p>
                                  <p className="mt-1 text-xs font-bold text-white">Conversão</p>
                                </div>
                              </div>

                              <div className="mt-7 flex items-center justify-center">
                                <div className="relative h-20 w-20">
                                  <div className="absolute inset-0 rounded-full border border-yellow-500/25" />
                                  <div className="absolute inset-2 rounded-full border border-orange-500/20" />
                                  <div className="absolute inset-4 rounded-full border border-white/10" />
                                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.7)]" />
                                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.7)]" />
                                </div>
                              </div>

                              <p className="mt-5 text-center text-[11px] font-semibold text-gray-400/60">
                                Integração via API · loop fechado
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : feature.title === "Páginas que carregam em menos de 1 segundo" ? (
                        <div className="absolute inset-0">
                          <Image
                            src="/imagem pages/flashpages.png"
                            alt="Página publicada"
                            fill
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-contain opacity-80"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/65 via-black/40 to-black/10" />

                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md p-5">
                              <p className="text-xs font-semibold tracking-wide text-gray-400/70">
                                Velocidade de carregamento
                              </p>
                              <div className="mt-4 flex items-end justify-between">
                                <p className="text-2xl sm:text-4xl font-black text-white leading-none">
                                  0.8<span className="text-base font-bold text-gray-400/70 ml-1">s</span>
                                </p>
                                <span className="rounded-full bg-brand-primary/15 border border-brand-primary/25 px-3 py-1 text-xs font-bold text-brand-primary">
                                  abaixo de 1s
                                </span>
                              </div>
                              <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : feature.title === "Precisão de ~100% — porque os dois lados estão conectados" ? (
                        <div className="absolute inset-0">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/12 via-orange-500/10 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_40%,rgba(255,184,0,0.14)_0%,rgba(17,17,17,0)_70%)]" />

                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <div className="w-full max-w-xl 2xl:max-w-[40rem] 4xl:max-w-[60rem] rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md p-5">
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                <div>
                                  <p className="text-[11px] font-semibold text-gray-400/60">Ads (isolado)</p>
                                  <div className="mt-2 relative h-28 rounded-xl bg-white/10 overflow-hidden">
                                    <div className="absolute inset-x-0 bottom-0 h-[95%] bg-white/25" />
                                  </div>
                                  <p className="mt-2 text-xs font-bold text-gray-400/80">~95%</p>
                                </div>
                                <div>
                                  <p className="text-[11px] font-semibold text-gray-400/60">Pages (isolado)</p>
                                  <div className="mt-2 relative h-28 rounded-xl bg-white/10 overflow-hidden">
                                    <div className="absolute inset-x-0 bottom-0 h-[93%] bg-white/20" />
                                  </div>
                                  <p className="mt-2 text-xs font-bold text-gray-400/80">~93%</p>
                                </div>
                                <div>
                                  <p className="text-[11px] font-semibold text-gray-400/60">Hub (integrado)</p>
                                  <div className="mt-2 relative h-28 rounded-xl bg-brand-primary/15 overflow-hidden border border-brand-primary/20">
                                    <div className="absolute inset-x-0 bottom-0 h-[100%] bg-gradient-to-t from-yellow-500/55 to-orange-500/40" />
                                  </div>
                                  <p className="mt-2 text-xs font-black text-brand-primary">~100%</p>
                                </div>
                              </div>

                              <p className="mt-4 text-center text-[11px] font-semibold text-gray-400/60">
                                Taxa de rastreamento: isolado vs integrado
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : feature.title === "Mais fraude bloqueada. Mais verba protegida. (Google Ads)" ? (
                        <div className="absolute inset-0">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_50%,rgba(255,184,0,0.12)_0%,rgba(17,17,17,0)_70%)]" />

                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <div className="w-full max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md overflow-hidden">
                              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                                <p className="text-sm font-black text-white">Bloqueios de IP</p>
                                <span className="rounded-full bg-brand-primary/15 border border-brand-primary/25 px-3 py-1 text-xs font-bold text-brand-primary">
                                  Auto-block
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                                <div className="p-5 border-r border-white/10">
                                  <p className="text-[11px] font-semibold text-gray-400/60">Uso isolado (Ads)</p>
                                  <p className="mt-2 text-2xl font-black text-white">
                                    12<span className="text-xs font-bold text-gray-400/60 ml-1">IPs</span>
                                  </p>
                                  <div className="mt-4 space-y-2">
                                    {["189.34.12.90", "201.88.3.21", "45.178.9.10", "177.22.90.14"].map((ip) => (
                                      <div
                                        key={ip}
                                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                                      >
                                        <span className="text-xs font-semibold text-gray-400/70">{ip}</span>
                                        <span className="text-[11px] font-bold text-gray-400/50">bloqueado</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="p-5">
                                  <p className="text-[11px] font-semibold text-gray-400/60">Com Hub ativo</p>
                                  <p className="mt-2 text-2xl font-black text-brand-primary">
                                    28<span className="text-xs font-bold text-brand-primary/80 ml-1">IPs</span>
                                  </p>
                                  <div className="mt-4 space-y-2">
                                    {["189.34.12.90", "201.88.3.21", "45.178.9.10", "177.22.90.14", "143.12.88.70", "62.33.91.18"].map(
                                      (ip) => (
                                        <div
                                          key={ip}
                                          className="flex items-center justify-between rounded-lg border border-brand-primary/20 bg-brand-primary/10 px-3 py-2"
                                        >
                                          <span className="text-xs font-semibold text-gray-400/80">{ip}</span>
                                          <span className="text-[11px] font-black text-brand-primary">bloqueado</span>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : feature.title === "Crie, rastreie e escale — sem sair da plataforma" ? (
                        <div className="absolute inset-0">
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-500/12 via-orange-500/10 to-transparent" />
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(17,17,17,0)_70%)]" />

                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <div className="w-full max-w-2xl 2xl:max-w-[50rem] 4xl:max-w-[70rem] rounded-2xl border border-white/10 bg-black/55 backdrop-blur-md p-5">
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                  { step: "1", label: "Criar página", badge: "Pages" },
                                  { step: "2", label: "Tracking ativo", badge: "API" },
                                  { step: "3", label: "Campanha no ar", badge: "Ads" },
                                  { step: "4", label: "Resultado em tempo real", badge: "Dashboard" },
                                ].map((item) => (
                                  <div
                                    key={item.step}
                                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/35 border border-white/10 text-sm font-black text-white">
                                        {item.step}
                                      </span>
                                      <span className="rounded-full bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 text-[11px] font-bold text-brand-primary">
                                        {item.badge}
                                      </span>
                                    </div>
                                    <p className="mt-3 text-sm font-bold text-gray-400/85 leading-snug">{item.label}</p>
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/60 to-orange-500/0" />
                                  </div>
                                ))}
                              </div>

                              <div className="mt-5 hidden sm:block">
                                <div className="relative h-10">
                                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
                                  <div className="absolute left-6 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.7)] animate-pulse" />
                                  <div className="absolute right-6 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.7)] animate-pulse" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Image
                            src="/dashboard.png"
                            alt="Dashboard"
                            fill
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-contain"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                        </>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] flex items-center justify-center min-h-[auto] md:min-h-[clamp(600px,70vh,900px)] py-16 md:py-24">
        <div className="max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] mx-auto px-4 2xl:px-12 4xl:px-20 5xl:px-28 6xl:px-36 relative z-20 text-center w-full">
          <h2 className="text-[clamp(1.75rem,6vw,4.5rem)] 3xl:text-[clamp(3.5rem,3.2vw,5.5rem)] font-black text-white mb-6 tracking-tight px-4">
            O <GradientText variant="orange" className="font-black">ecossistema completo</GradientText> do tráfego pago. Em um lugar.
          </h2>
          <p className="text-base sm:text-[clamp(1.1rem,1.25vw,1.5rem)] 3xl:text-[clamp(1.6rem,1.2vw,2.5rem)] text-gray-400 max-w-3xl 2xl:max-w-[60rem] 4xl:max-w-[80rem] mx-auto mb-10 leading-relaxed px-4">
            Ads + Pages integrados via API. Rastreamento ~100%. Páginas abaixo de 1 segundo. Bloqueio automático de fraude.
            Tudo que você precisa para escalar com dado real.
          </p>

          <div className="relative mx-auto mb-10 w-full max-w-6xl 2xl:max-w-[90rem] 4xl:max-w-[110rem] 5xl:max-w-[130rem] 6xl:max-w-[150rem] pointer-events-none">
            <div
              className="absolute -left-6 top-1/2 hidden lg:block"
              style={{ transform: "translateY(calc(-50% + 48px))" }}
            >
              <div className="relative flex h-[252px] w-[252px] items-center justify-center">
                <Image
                  src="/logoraads.png"
                  alt="Logo Ratoeira Ads"
                  width={252}
                  height={252}
                  className="relative z-10 drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>

            <div
              className="absolute -right-10 top-1/2 hidden lg:block"
              style={{ transform: "translateY(calc(-50% + 48px))" }}
            >
              <Image
                src="/logopages.png"
                alt="Logo Ratoeira Pages"
                width={252}
                height={252}
                className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
              />
            </div>

            <div className="relative mx-auto w-full max-w-[620px] overflow-visible translate-y-12">
              <div className="relative h-[252px] w-full overflow-visible">
                <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-[252px] w-[calc(100%+520px)] max-w-none overflow-visible"
                    viewBox="0 0 1000 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <style>{`
                      @keyframes energyL {
                        from { stroke-dashoffset: 0; }
                        to { stroke-dashoffset: -260; }
                      }

                      @keyframes energyR {
                        from { stroke-dashoffset: 0; }
                        to { stroke-dashoffset: 260; }
                      }

                      @keyframes centerPulse {
                        0%, 100% { opacity: 0.55; transform: scale(0.98); }
                        50% { opacity: 0.95; transform: scale(1.04); }
                      }
                    `}</style>

                    <defs>
                      <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="2.2" />
                      </filter>

                      <filter id="blur-strong" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="7.5" />
                      </filter>

                      <filter id="mask-feather" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="14" />
                      </filter>

                      <linearGradient
                        id="line-gradient"
                        x1="0"
                        y1="0"
                        x2="1000"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#facc15" />
                        <stop offset="1" stopColor="#f97316" />
                      </linearGradient>

                      <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fde047" stopOpacity="0.68" />
                        <stop offset="40%" stopColor="#facc15" stopOpacity="0.34" />
                        <stop offset="75%" stopColor="#f97316" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                      </radialGradient>

                      <mask id="energy-left" maskUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="500" height="200" fill="white" />
                        <rect x="500" y="0" width="500" height="200" fill="black" />

                        <ellipse
                          cx="145"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />

                        <ellipse
                          cx="500"
                          cy="100"
                          rx="118"
                          ry="88"
                          fill="black"
                          filter="url(#mask-feather)"
                        />

                        <ellipse
                          cx="855"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />
                      </mask>

                      <mask id="energy-right" maskUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="500" height="200" fill="black" />
                        <rect x="500" y="0" width="500" height="200" fill="white" />

                        <ellipse
                          cx="145"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />

                        <ellipse
                          cx="500"
                          cy="100"
                          rx="118"
                          ry="88"
                          fill="black"
                          filter="url(#mask-feather)"
                        />

                        <ellipse
                          cx="855"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />
                      </mask>

                      <mask id="all-energy-cutouts" maskUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="1000" height="200" fill="white" />

                        <ellipse
                          cx="145"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />
                        <ellipse
                          cx="500"
                          cy="100"
                          rx="118"
                          ry="88"
                          fill="black"
                          filter="url(#mask-feather)"
                        />
                        <ellipse
                          cx="855"
                          cy="100"
                          rx="118"
                          ry="92"
                          fill="black"
                          filter="url(#mask-feather)"
                        />
                      </mask>
                    </defs>

                    <g
                      style={{ transformOrigin: "500px 100px", animation: "centerPulse 2.6s ease-in-out infinite" }}
                    >
                      <ellipse
                        cx="500"
                        cy="100"
                        rx="132"
                        ry="62"
                        fill="url(#center-glow)"
                        filter="url(#blur-strong)"
                        opacity="0.9"
                      />
                    </g>

                    <g filter="url(#blur)" opacity="0.55" mask="url(#energy-left)">
                      <path
                        d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95"
                        stroke="#fde047"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="18 52"
                        style={{ animation: "energyL 1.5s linear infinite" }}
                      />
                      <path
                        d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100"
                        stroke="#fde047"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="16 56"
                        style={{ animation: "energyL 1.7s linear infinite" }}
                      />
                      <path
                        d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105"
                        stroke="url(#line-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="20 60"
                        style={{ animation: "energyL 1.9s linear infinite" }}
                      />
                      <path
                        d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110"
                        stroke="#fb923c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="18 54"
                        style={{ animation: "energyL 1.6s linear infinite" }}
                      />
                      <path
                        d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115"
                        stroke="#fb923c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="16 58"
                        style={{ animation: "energyL 1.8s linear infinite" }}
                      />
                    </g>

                    <g filter="url(#blur)" opacity="0.55" mask="url(#energy-right)">
                      <path
                        d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95"
                        stroke="#fde047"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="18 52"
                        style={{ animation: "energyR 1.5s linear infinite" }}
                      />
                      <path
                        d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100"
                        stroke="#fde047"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="16 56"
                        style={{ animation: "energyR 1.7s linear infinite" }}
                      />
                      <path
                        d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105"
                        stroke="url(#line-gradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="20 60"
                        style={{ animation: "energyR 1.9s linear infinite" }}
                      />
                      <path
                        d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110"
                        stroke="#fb923c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="18 54"
                        style={{ animation: "energyR 1.6s linear infinite" }}
                      />
                      <path
                        d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115"
                        stroke="#fb923c"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="16 58"
                        style={{ animation: "energyR 1.8s linear infinite" }}
                      />
                    </g>

                    <g opacity="0.95" mask="url(#energy-left)">
                      <path
                        d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95"
                        stroke="#fde047"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="14 44"
                        style={{ animation: "energyL 1.5s linear infinite" }}
                      />
                      <path
                        d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100"
                        stroke="#fde047"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="12 48"
                        style={{ animation: "energyL 1.7s linear infinite" }}
                      />
                      <path
                        d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105"
                        stroke="url(#line-gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="16 52"
                        style={{ animation: "energyL 1.9s linear infinite" }}
                      />
                      <path
                        d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110"
                        stroke="#fb923c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="14 46"
                        style={{ animation: "energyL 1.6s linear infinite" }}
                      />
                      <path
                        d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115"
                        stroke="#fb923c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="12 50"
                        style={{ animation: "energyL 1.8s linear infinite" }}
                      />
                    </g>

                    <g opacity="0.95" mask="url(#energy-right)">
                      <path
                        d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95"
                        stroke="#fde047"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="14 44"
                        style={{ animation: "energyR 1.5s linear infinite" }}
                      />
                      <path
                        d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100"
                        stroke="#fde047"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="12 48"
                        style={{ animation: "energyR 1.7s linear infinite" }}
                      />
                      <path
                        d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105"
                        stroke="url(#line-gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="16 52"
                        style={{ animation: "energyR 1.9s linear infinite" }}
                      />
                      <path
                        d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110"
                        stroke="#fb923c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="14 46"
                        style={{ animation: "energyR 1.6s linear infinite" }}
                      />
                      <path
                        d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115"
                        stroke="#fb923c"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="12 50"
                        style={{ animation: "energyR 1.8s linear infinite" }}
                      />
                    </g>

                    <g filter="url(#blur)" opacity="0.34" mask="url(#all-energy-cutouts)">
                      <path
                        d="M0 95 C 260 95 340 55 500 55 C 660 55 740 95 1000 95"
                        stroke="#facc15"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 100 C 260 100 340 80 500 80 C 660 80 740 100 1000 100"
                        stroke="#facc15"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 105 C 250 105 350 110 500 110 C 650 110 750 105 1000 105"
                        stroke="url(#line-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 110 C 260 110 340 140 500 140 C 660 140 740 110 1000 110"
                        stroke="#f97316"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 115 C 260 115 340 165 500 165 C 660 165 740 115 1000 115"
                        stroke="#f97316"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>

                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/logo_ads_pages2.png"
                    alt="Ads + Pages"
                    width={252}
                    height={252}
                    className="drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                  />
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/planos"
            className="relative z-30 inline-flex items-center gap-2 px-10 py-5 mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-button hover:from-yellow-400 hover:to-orange-400 transition-all text-xl shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95"
          >
            Ver planos e começar grátis
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
