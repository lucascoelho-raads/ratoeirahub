"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, ChevronLeft, ChevronRight, Ghost, LineChart, Server, Target, Zap } from "lucide-react";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import Image from "next/image";
import { useState } from "react";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

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
    const isAntiFraude = feature.title === "Bloqueio Anti-Fraude";
    const isEconomizometro = feature.title === "Recuperação de Vendas Invisíveis";
    const isDashboard = feature.title === "Dashboard em Tempo Real";

    const imageSrc =
      feature.title === "Tracking Server-Side"
        ? null
        : feature.title === "Bloqueio Anti-Fraude"
          ? "/ip_bloqueado.png"
          : feature.title === "Recuperação de Vendas Invisíveis"
            ? "/economizometro.png"
            : feature.title === "Dashboard em Tempo Real"
              ? "/dash.png"
              : null;

    const imageClassName =
      isAntiFraude || isEconomizometro || isDashboard ? "object-cover object-top" : "object-contain object-center";

    return { ...feature, imageSrc, imageClassName } as const;
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const isReversed = activeIndex % 2 === 1;

  function goPrev() {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }

  return (
    <section id="como-funciona" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            O fim do <span className="text-brand-primary">achismo</span> no tráfego pago.
          </h2>
          <p className="text-gray-400 text-lg">
            A Ratoeira Ads atua em 6 frentes para garantir que você saiba exatamente qual anúncio gerou cada centavo de
            resultado — no Google Ads e no Meta Ads.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={isReversed ? "w-full lg:order-2" : "w-full lg:order-1"}>
                <BorderRotate
                  animationMode="stop-rotate-on-hover"
                  animationSpeed={3}
                  gradientColors={{ primary: "#FFB800", secondary: "#FF7E4A", accent: "#E6A600" }}
                  backgroundColor="#0B0B0B"
                  borderWidth={2}
                  borderRadius={24}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/10">
                      <activeSlide.icon className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                        <BlurTextEffect key={activeSlide.title}>{activeSlide.title}</BlurTextEffect>
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
                        <BlurTextEffect key={`${activeSlide.title}-desc`}>{activeSlide.description}</BlurTextEffect>
                      </p>
                    </div>
                  </div>
                </BorderRotate>
              </div>

              <div className={isReversed ? "w-full lg:order-1" : "w-full lg:order-2"}>
                <BorderRotate
                  animationMode="stop-rotate-on-hover"
                  animationSpeed={3}
                  gradientColors={{ primary: "#FFB800", secondary: "#FF7E4A", accent: "#E6A600" }}
                  backgroundColor="#111111"
                  borderWidth={2}
                  borderRadius={24}
                  className="relative h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] 2xl:h-[720px] overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_40%,rgba(255,184,0,0.12)_0%,rgba(0,0,0,0)_70%)]" />

                  {activeSlide.title === "Tracking Server-Side" ? (
                    <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-8">
                      <div className="w-full max-w-3xl">
                        <div className="grid grid-cols-2 gap-4 sm:gap-8">
                          <div>
                            <div className="relative h-44 rounded-2xl bg-white/10 overflow-hidden">
                              <div className="absolute inset-x-0 bottom-0 h-[72%] bg-white/25" />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-white/70">Pixel padrão (60–75%)</p>
                          </div>
                          <div>
                            <div className="relative h-44 rounded-2xl bg-brand-primary/15 overflow-hidden">
                              <div className="absolute inset-x-0 bottom-0 h-[98%] bg-brand-primary/45" />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-white/70">Ratoeira Ads (~100%)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeSlide.imageSrc ? (
                    <Image
                      src={activeSlide.imageSrc}
                      alt={activeSlide.title}
                      fill
                      sizes="(min-width: 1024px) 900px, 100vw"
                      className={`relative z-10 ${activeSlide.imageClassName}`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/35">
                        <activeSlide.icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="font-bold uppercase tracking-wider text-sm">Espaço para Imagem/Mockup</p>
                      </div>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                </BorderRotate>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "w-8 bg-brand-primary" : "w-2.5 bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`Ir para ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:bg-white/[0.06]"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
