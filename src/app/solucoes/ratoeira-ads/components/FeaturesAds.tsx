"use client";

import { Bot, Ghost, LineChart, Server, Target, Zap } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { GradientText } from "@/components/ui/gradient-text";
import Image from "next/image";

const features = [
  {
    icon: Server,
    title: "Tracking Server-Side",
    description:
      "Seus dados não dependem mais de cookies ou do pixel nativo. Enviamos as conversões direto para as APIs do Google e do Meta com envio enriquecido via browser e API — chegando a ~100% de rastreamento. O que o pixel padrão perde entre 25% e 40% das vezes, a Ratoeira registra.",
  },
  {
    icon: Bot,
    title: "Bloqueio Automático de IP",
    description:
      "Exclusivo para Google Ads. Você define o limite de cliques aceitos por IP — a Ratoeira bloqueia automaticamente quem ultrapassa. Concorrentes que clicam nos seus anúncios, tráfego inválido e bots são eliminados antes de consumir seu orçamento. Na maioria dos casos, o que você economiza já paga o plano inteiro.",
  },
  {
    icon: Ghost,
    title: "Pixel de Qualidade Máxima",
    description:
      "Para Meta Ads. Enviamos suas conversões com deduplicação e dados enriquecidos — via browser e API ao mesmo tempo. Isso eleva o Pixel Quality Score do Meta, que passa a encontrar pessoas com perfil real de compra, não só de clique. CPL cai. ROAS sobe. O algoritmo finalmente trabalha com dado verdadeiro.",
  },
  {
    icon: Target,
    title: "Recuperação de Conversões Invisíveis",
    description:
      "Anunciantes que migram do pixel padrão para o tracking server-side da Ratoeira recuperam em média 25% a 40% de conversões que estavam sumindo. Cada venda recuperada é lucro que você já tinha gerado — sem saber. Com mais conversões subindo para o Google e para o Meta, o algoritmo otimiza mais rápido e sua campanha escala com mais segurança.",
  },
  {
    icon: Zap,
    title: "Dados em Tempo Real",
    description:
      "O Meta Ads demora para consolidar conversões e muitas vezes otimiza para o público errado antes de corrigir. A Ratoeira mostra seus dados integrados — visitas, leads e vendas — mais rápido do que o próprio Ads Manager. Você toma a decisão certa antes que o algoritmo tome a errada.",
  },
  {
    icon: LineChart,
    title: "Funil Completo Visível",
    description:
      "Enquanto outras ferramentas mostram apenas de onde vieram os cliques, a Ratoeira mostra de onde vieram as vendas — com visitas, leads e conversões integradas num só lugar. Mais dados reais no pixel significa públicos melhores, criativos mais inteligentes e um custo por aquisição que cai enquanto o lucro sobe.",
  },
];

export default function FeaturesAds() {
  const slides = features.map((feature) => {
    const imageSrc =
      feature.title === "Tracking Server-Side"
        ? null
        : feature.title === "Bloqueio Automático de IP"
          ? "/ip_bloqueado.png"
          : feature.title === "Recuperação de Conversões Invisíveis"
            ? "/economizometro.png"
            : feature.title === "Dados em Tempo Real"
              ? "/dash.png"
              : null;

    const imageClassName = imageSrc ? "object-cover object-top" : null;

    return { ...feature, imageSrc, imageClassName } as const;
  });

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 text-center md:text-left">
            O fim do <span className="text-brand-primary">achismo</span> no tráfego pago.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto text-center md:text-left">
            A Ratoeira Ads atua em 6 frentes para garantir que você saiba exatamente qual anúncio gerou cada centavo de
            resultado — no Google Ads e no Meta Ads.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {slides.map((slide, index) => {
            const isReversed = index % 2 === 1;
            const Icon = slide.icon;

            return (
              <div
                key={slide.title}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 lg:gap-24 rounded-3xl p-6 sm:p-8 ${index % 2 === 0 ? "bg-white" : "bg-[#0a0a0a]"}`}
              >
                <div className="flex-1 space-y-6 w-full text-center md:text-left">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/15 to-orange-500/15 flex items-center justify-center border ${index % 2 === 0 ? "border-black/10" : "border-white/10"}`}>
                    <Icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                    <GradientText className="font-black">
                      {slide.title}
                    </GradientText>
                  </h3>
                  <p className={`text-base sm:text-xl leading-relaxed ${index % 2 === 0 ? "text-[#4b5563]" : "text-gray-400"}`}>
                    <BlurTextEffect key={`${slide.title}-desc`}>{slide.description}</BlurTextEffect>
                  </p>
                </div>

                <div className="flex-1 w-full">
                  <div className={`relative aspect-video rounded-2xl border overflow-hidden ${index % 2 === 0 ? "border-gray-200 bg-gray-50" : "border-white/10 bg-[#111111]"}`}>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />

                    {slide.title === "Tracking Server-Side" ? (
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <div className="w-full max-w-2xl">
                          <div className="grid grid-cols-2 gap-4 sm:gap-8">
                            <div>
                              <div className="relative h-36 sm:h-44 rounded-2xl bg-white/10 overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-[72%] bg-white/25" />
                              </div>
                              <p className="mt-3 text-sm font-semibold text-white/70">Pixel padrão (60–75%)</p>
                            </div>
                            <div>
                              <div className="relative h-36 sm:h-44 rounded-2xl bg-brand-primary/15 overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-[98%] bg-brand-primary/45" />
                              </div>
                              <p className="mt-3 text-sm font-semibold text-white/70">Ratoeira Ads (~100%)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : slide.imageSrc ? (
                      <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        fill
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className={slide.imageClassName ?? undefined}
                        priority={index === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/35">
                          <Icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="font-bold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                        </div>
                      </div>
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
  );
}
